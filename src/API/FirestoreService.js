import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default class FirestoreService {

    static addTransaction = async (transaction) => {
        try {
            const docRef = await addDoc(collection(db, "transactions"), transaction);
            console.log(`Transaction added to database with ID=${docRef}`);
    
        } catch(e) {
            console.log(e.name);
    
        }
    };

    static getTransactions = async () => {
        const querySnapshot = await getDocs(collection(db, "transactions"));
        return querySnapshot.docs.map(doc => doc.data());
    };
}