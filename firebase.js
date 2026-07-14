/*=====================================
  Dream Flower Decoration - firebase.js
======================================*/

// Firebase Configuration
// यहाँ अपनी Firebase Project की जानकारी डालें

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};


// Initialize Firebase

if (typeof firebase !== "undefined") {

    firebase.initializeApp(firebaseConfig);

    const database = firebase.database();

    console.log("Firebase Connected Successfully");

}


// Booking Data Save Function

function saveBooking(data) {

    if (typeof database !== "undefined") {

        database.ref("bookings").push(data)
        .then(() => {

            alert("Booking Saved Successfully!");

        })
        .catch(error => {

            console.log(error);

        });

    }

}


// Contact Message Save Function

function saveContact(data) {

    if (typeof database !== "undefined") {

        database.ref("contacts").push(data)
        .then(() => {

            alert("Message Sent Successfully!");

        })
        .catch(error => {

            console.log(error);

        });

    }

}
