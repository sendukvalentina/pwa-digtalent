var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BJW0g5B0167IYNpuJLS1jiZ1KIutXuwYugOa5pb0SdlZqhPJZ9Hcg_PJyIUNOnlvHAQG80cv1OTAe-iAF9RfNHc",
    "privateKey": "pcOD36hSJyQRzeEeOwXxwedaNNVgPLuL4iMAOogm3bg"
};

webPush.setVapidDetails(
    'mailto: example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/fQ2qgKEAr-o:APA91bEjUyZA5yQv-P58LWvMU5CuFYiatewWB6IWz1cFC4AZGDJQ64Y7RvvSE7qvS3YR3vh0iqG-v5B6Ykw5jSiSfpC_HIBsGoOY14UnlaCtpSsDdDPWF1iGWHyP-bEu_YD_1GJTCXMc",
    "keys": {
        "p256dh": "BOkL67TH9mv3F5K5hQbDhGZfRFw+cNzljG3SwYbIaVeVhmR6w4KxoCFPVUjln084U/I6+B0L/gJS8aJD1xH+aEU=",
        "auth": "/MEc6qbEHvEbwaJqxLzYXA=="
    }
};

var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

var options = {
    gcmAPIKey: '547567246167',
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);