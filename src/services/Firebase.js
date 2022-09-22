import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, collection, doc ,getDocs, getDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import environments from "../environments";

const firebaseConfig = {
  apiKey: environments.API_KEY_FIREBASE,
  authDomain: environments.AUTH_DOMAIN_FIREBASE,
  projectId: environments.PROJECT_ID_FIREBASE,
  storageBucket: environments.STORAGE_BUCKET_FIREBASE,
  messagingSenderId: environments.MESSAGING_SENDER_ID_FIREBASE,
  appId: environments.APP_ID_FIREBASE,
  measurementId: environments.MEASUREMENT_ID_FIREBASE
};

const firebaseApp = initializeApp(firebaseConfig);
const firestoreDB = getFirestore();
const firebaseAnalytics = getAnalytics(firebaseApp);

async function cargarProductosToDB(){
    if((await getDocs(collection(firestoreDB, "productos"))).size === 0){
        const productos = await (await fetch('../../json/productos.json')).json();
        productos.forEach(async prod => {
            await addDoc(collection(firestoreDB, "productos"), {
                id: prod.id,
                tittle: prod.tittle,
                header: prod.header,
                precio: prod.precio,
                divisa: prod.divisa,
                stock: prod.stock,
                cantidad: prod.cantidad,
                img: prod.img,
                isVisible: prod.isVisible,
                categoria: prod.categoria,
                detalle: {
                  memory: prod.detalle.memory,
                  micro: prod.detalle.micro,
                  display: prod.detalle.display,
                  ram: prod.detalle.ram,
                  color: prod.detalle.color,
                  bateria: prod.detalle.bateria,
                  os: prod.detalle.os
                }
            })
        })
    }
}

const getProductById= async (id) => {
    return await getDoc(doc(firestoreDB, "productos", id))
}

const getAllProducts = async () => {
    return await getDocs(collection(firestoreDB, "productos"))
}

cargarProductosToDB();

export { firebaseApp, firebaseAnalytics, firestoreDB, getProductById, getAllProducts };