var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = 'http://127.0.0.1:5000/lucky-gambler/us-central1'


var raw = JSON.stringify({
    "ownerWif": "L1XAKaZEqDPafgF3WRaxZM1jDpc7Dd331UjohQ2T5X1WCiTFy9dK",
    "purseWif": "L2FLdLwbF3kyfAGhvMzV3y7mtxYtMAradjJqnSXHSKsqTofoKycT",
    "receiverAddress": "12LTSsBaPPipe2Kpa2KCuScycM6qnZBWti",
    "amount": 10
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch(`${url}/api/send`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));