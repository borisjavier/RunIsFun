var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = 'http://127.0.0.1:5000/lucky-gambler/us-central1'

var raw = JSON.stringify({
    "ownerAddress": "12Eb6rXYANp3EQq3R99QY3BdTgHUSXGjbx"
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch(`${url}/us-central1/api/balance`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));