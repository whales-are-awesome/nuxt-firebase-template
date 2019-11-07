import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {

}

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
const storage = firebase.storage()


export {db, storage}