import { 
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    updatedoc,
    deletedoc,
    querry,
    where,
    orderBy,
 } from "firebase/firestore";
import { db } from "./firebaseConfig";

// Creat a new order
const createOrder = async (order) => {
    try {
      const docRef = await addDoc(collection(db, "Orders"), order);
      console.log("Order created with ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

//Read all orders
export const getOrders = async () => {
    const querySnapshot = await getDocs(collection(db, "Orders"));
    const dataList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }) ) 
    console.log(dataList);
    return dataList;
}

export { getOrders }