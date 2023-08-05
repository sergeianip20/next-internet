import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

const dbRef = ref(getDatabase());
get(child(dbRef, `posts`)).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
}).catch((error) => {
    console.error(error);
});


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://saitvali-b3b4d-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
