// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCuytEDvaNciBhTm8P1kJ5V6ks27brjHKE',
	authDomain: 'register-c0941.firebaseapp.com',
	projectId: 'register-c0941',
	storageBucket: 'register-c0941.appspot.com',
	messagingSenderId: '958189993727',
	appId: '1:958189993727:web:aa2be006c87ae174a096ca',
	measurementId: 'G-6479RCBLTK',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
