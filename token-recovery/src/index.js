const Run = require('run-sdk')
const fetch = require('isomorphic-fetch')
const { PrivateKey } = require('@runonbitcoin/nimble')

Run.plugins.WhatsOnChain.prototype.spends = async (txid, vout) => {
    const res = await fetch(`https://api.whatsonchain.com/v1/bsv/main/tx/${txid}/${vout}/spent`,
        {
            headers: {
                'Apikey': 'mainnet_6c81a97a917bdab017bb02cd0d98f794'
            }
        }
    )
    if (res.status !== 200) {
        return null
    }
    const json = await res.json()
    return json.txid
}

const run = new Run({
    cache: new Run.plugins.LocalCache(),
    state: new Run.plugins.LocalState(),
    api: 'whatsonchain',
    owner: 'L5UpCrzQfXtjmNKax62qH6yJfczMpcdgCKeK9nHvW25QQoLdB8e2'
})

/**
 * L5dGUVnAKNf3FYwgzh3Lb8wkPGpqrDDyWUthcwJYUGuLxHMvtFuF
 * L5UpCrzQfXtjmNKax62qH6yJfczMpcdgCKeK9nHvW25QQoLdB8e2
 * L1XAKaZEqDPafgF3WRaxZM1jDpc7Dd331UjohQ2T5X1WCiTFy9dK
 */

run.trust('*')

async function main() {
    // const klass = await run.load('a5c5b72267ea32eab1ff4c7a87da1d2c8515ddb260d88c05eb84b2c16e393e48_o1')
    // const jig1 = await run.load('464fa4667a160613c6bf5f0b80118c51deed7dd53dab448b2f075f69bccfb9dd_o2')
    // const jig2 = await run.load('a792c04447a64589b938bcb690b099490f9c9765717575d9e244d76a13f4e96f_o1')
    // const jig3 = await run.load('a792c04447a64589b938bcb690b099490f9c9765717575d9e244d76a13f4e96f_o2')
    // const jig4 = await run.load('a792c04447a64589b938bcb690b099490f9c9765717575d9e244d76a13f4e96f_o2')

    // await jig1.sync()
    // await run.inventory.sync()

    // console.log(run.inventory.jigs)
    console.log(PrivateKey.fromString('L5dGUVnAKNf3FYwgzh3Lb8wkPGpqrDDyWUthcwJYUGuLxHMvtFuF').toAddress().toString())
    console.log(PrivateKey.fromString('L5UpCrzQfXtjmNKax62qH6yJfczMpcdgCKeK9nHvW25QQoLdB8e2').toAddress().toString())
    console.log(PrivateKey.fromString('L1XAKaZEqDPafgF3WRaxZM1jDpc7Dd331UjohQ2T5X1WCiTFy9dK').toAddress().toString())
}

main()