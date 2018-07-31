import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


//const prodConfig
/* const config = {
    apiKey: "AIzaSyAWhfVC62g1xsNbCWuqPYEZxEXcpG1hIzs",
    authDomain: "poppinn-mvp.firebaseapp.com",
    databaseURL: "https://poppinn-mvp.firebaseio.com",
    projectId: "poppinn-mvp",
    storageBucket: "",
    messagingSenderId: "398157458454"
}; */

const config = {
    apiKey: "AIzaSyAPW-WV4b1R-rAuhxZwQ2mPF6O8rvNi5yg",
    authDomain: "poppin-5efd1.firebaseapp.com",
    databaseURL: "https://poppin-5efd1.firebaseio.com",
    projectId: "poppin-5efd1",
    storageBucket: "poppin-5efd1.appspot.com",
    messagingSenderId: "358862291399"
};


/* const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig; */

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export{
    db,
    auth,
};