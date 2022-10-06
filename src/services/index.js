import { getFirestore, collection, getDocs, addDoc, doc, setDoc } from 'firebase/firestore';
import app from '../../api/firebase';
import { FIREBASE_DB_COLLECTION } from '../../res/strings/index';


const db = getFirestore(app);

export const sendMsg = async(payload) => {
    try{
        await addDoc(collection(db,FIREBASE_DB_COLLECTION), payload)
        return true
    }catch(e){
        console.log(e)
        return false
    }
}