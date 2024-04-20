// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, get, set, update, onValue, remove, push, snapshot, childSnapshot, onChildChanged } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_DB_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getDatabase();
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };



//Get all data once
// get(ref(db, 'Expenses')).then((snapshot) => {
//   if (snapshot.exists()) {

//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses);
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });


//Get data on change
// onValue(ref(db, 'Expenses'), (snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses)
// })


//Get child data on change
// onChildChanged(ref(db, 'Expenses'), (data) => {
//   console.log(data.key, data.val())
// })


// Add a list of expenses to firebase
// const firebaseExpenses = [
//   {
//     description: 'Water bill',
//     amount: 200,
//     createAt: 123456789,
//     note: 'Money spent on water'
//   },
//   {
//     description: 'Electricity bill',
//     amount: 100,
//     createAt: 123456788,
//     note: 'Money spent on electricity'
//   },
//   {
//     description: 'Rent',
//     amount: 500,
//     createAt: 123456787,
//     note: 'Money spent on rent'
//   }
// ]

// firebaseExpenses.map(expense => {
//   push(ref(db, 'Expenses'), expense)
// })


// Update an item
// update(ref(db), {
//   'Notes/-NvIuHyRdmrC0pUPi_X-/title' : 'Updated second note'
// })

// push(ref(db, 'Notes'), {
//   title: 'First Note',
//   body: 'This is my first note.'
// })

// push(ref(db, 'Notes'), {
//   title: 'Second Note',
//   body: 'This is my second note.'
// })


// Add one item to firebase
// set(ref(db), {
//     name: 'Cherie Sun',
//     age: 28,
//     isSingle: true,
//     job: {
//         title: 'software developer',
//         company: 'Liberata'
//     },
//     location: {
//         city: 'Cardiff',
//         coutry: 'United Kingdom'
//     }
// }).then(() => {
//     console.log('Data is added');
// }).catch((e) => {
//     console.log('This is failed due to: ', e)
// })

// update(ref(db), {
//     name: 'Chen Sun',
//     'job/title': 'Application support and software developer'
// }).then(() => {
//     console.log('Data is updated')
// })

// onValue(ref(db), (snapshot) => {
//     const data = snapshot.val();
//     console.log(data);
// });
 
// remove(ref(db)).then(() => {
//     console.log('Data removed');
// }).catch((e) => {
//     console.log('Failed to remove data due to: ', e);
// });