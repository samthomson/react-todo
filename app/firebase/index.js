import firebase from 'firebase'

try{
    var config = {
        apiKey: "AIzaSyBAIgUtbMqB85nG9uYy1rfvWzvOUNIiDAU",
        authDomain: "todo-app-e4698.firebaseapp.com",
        databaseURL: "https://todo-app-e4698.firebaseio.com",
        projectId: "todo-app-e4698",
        storageBucket: "todo-app-e4698.appspot.com",
        messagingSenderId: "574893579236"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref()
export default firebase
