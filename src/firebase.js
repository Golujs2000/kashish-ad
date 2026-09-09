import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Kashish Ad Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-GYpfXp_3GPTbb5OnbUHc32cnlqXX9Go",
  authDomain: "kashish-ad.firebaseapp.com",
  projectId: "kashish-ad",
  storageBucket: "kashish-ad.firebasestorage.app",
  messagingSenderId: "1070088776420",
  appId: "1:1070088776420:web:ce1822ff0e1ca73adcdaf1",
  measurementId: "G-B8CFEPBCFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics safely (supports environments where IndexedDB or window might not be present)
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics, firebaseConfig };
export default app;
