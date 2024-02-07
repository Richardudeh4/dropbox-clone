import {getApp, getApps, initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCQZ2OqTgMJzhx92JCOlQaNE71GncqzQtU",
    authDomain: "dropbox-clone-ab738.firebaseapp.com",
    projectId: "dropbox-clone-ab738",
    storageBucket: "dropbox-clone-ab738.appspot.com",
    messagingSenderId: "311393328737",
    appId: "1:311393328737:web:0863399bb074824c82d420"
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

const storage = getStorage(app);

export {db, storage};