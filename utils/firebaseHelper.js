// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDukszB80_iWvXiz018d04NrnGRVJG0bqw",
        authDomain: "whatsapp-67908.firebaseapp.com",
        projectId: "whatsapp-67908",
        storageBucket: "whatsapp-67908.appspot.com",
        messagingSenderId: "718425206441",
        appId: "1:718425206441:web:da5f9ae3e273da134003b8",
        measurementId: "G-YXL1Y03SCS"
      };
    
    // Initialize Firebase
    return initializeApp(firebaseConfig);
}