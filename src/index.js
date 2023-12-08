import {initializeApp} from 'firebase/app'
import { onSnapshot } from 'firebase/firestore';

import {
  getDocs, addDoc, getFirestore, collection
} from 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyCtcBsWwWZjhI2bd9_ywJ62XGz2ZtNQpj0",
    authDomain: "project-sap-3ec10.firebaseapp.com",
    databaseURL: "https://project-sap-3ec10-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-sap-3ec10",
    storageBucket: "project-sap-3ec10.appspot.com",
    messagingSenderId: "1008196345005",
    appId: "1:1008196345005:web:2a4de4c8e112d46042fa24",
    measurementId: "G-9W51KV5VL4"
  };


initializeApp(firebaseConfig)

 const db = getFirestore()

const colRef = collection(db, 'payment')

onSnapshot(colRef, (snapshot) => {
    let payment = []
    snapshot.docs.forEach((doc) => {
      payment.push({ ...doc.data(), id: doc.id})
    })
    console.log(payment)
  })


  const addForm = document.querySelector('.add');
addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addDoc(colRef, {
        unit: addForm.unit.value,
        bill: addForm.bill.value,
        date: addForm.date.value,
        amount: addForm.amount.value,
    })
    .then(() => {
        addForm.reset();
    });
});
