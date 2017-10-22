import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBAIgUtbMqB85nG9uYy1rfvWzvOUNIiDAU",
    authDomain: "todo-app-e4698.firebaseapp.com",
    databaseURL: "https://todo-app-e4698.firebaseio.com",
    projectId: "todo-app-e4698",
    storageBucket: "todo-app-e4698.appspot.com",
    messagingSenderId: "574893579236"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref()

firebaseRef.set({
    app: {
        name: 'todo app',
        version: 1.0
    },
    isRunning: true,
    user: {
        name: 'Sam',
        age: 29
    }
}).then(() => {
    console.log('updated FB DB')
})

// firebaseRef.once('value').then((snapshot) => {
//     console.log('Got entire database', snapshot.val())
// }, (e) => {
//     console.log('updated to fetch ', e)
// })

firebaseRef.child('user').on('value', (snapshot) => {
    console.log('User ref changed: ', snapshot.val())
})

firebaseRef.child('user').update({
    name: 'new name'
})
firebaseRef.child('app').update({
    name: 'new app name'
})