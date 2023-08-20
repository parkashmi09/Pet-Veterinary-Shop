import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAXUR5YCZr074xYQwOT-gXerbMARJ7-nrc",
    authDomain: "fir-auth-pet-ap.firebaseapp.com",
    projectId: "fir-auth-pet-ap",
    storageBucket: "fir-auth-pet-ap.appspot.com",
    messagingSenderId: "626631244830",
    appId: "1:626631244830:web:4a1897c97d7a8c2b78820f"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const storage = getStorage(app);

export { app, storage };
