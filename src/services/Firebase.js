import { initializeApp } from "firebase/app";
import { setDoc, getFirestore, collection, doc ,getDocs, getDoc, deleteDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN_FIREBASE,
  projectId: process.env.REACT_APP_PROJECT_ID_FIREBASE,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET_FIREBASE,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID_FIREBASE,
  appId: process.env.REACT_APP_APP_ID_FIREBASE,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID_FIREBASE
};

const firebaseApp = initializeApp(firebaseConfig);
const firestoreDB = getFirestore();
const firebaseAnalytics = getAnalytics(firebaseApp);

async function cargarProductosToDB(){
    if((await getDocs(collection(firestoreDB, "productos"))).docs.length === 0){
        const productos = await (await fetch('../../json/productos.json')).json();
        productos.forEach(async prod => {
            await setDoc(doc(firestoreDB, "productos", prod.id), {
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
    }else{
        console.log(`${new Date().toLocaleDateString()} [TRACE] FIREBASE: YA HAY PRODUCTOS`);
    }
}

const getProductById = async (id) => {
    return await getDoc(doc(firestoreDB, "productos", id))
}

const getAllProducts = async () => {
    return await getDocs(collection(firestoreDB, "productos"))
}

const saveProduct = async (product) => {
    return await setDoc(doc(firestoreDB, "productos", product.id), product)
}

const addNewOrdenCarrito = async (newOrden) => {
    return await setDoc(doc(firestoreDB, "ordenes", newOrden.id), newOrden)
}

const getAllOrdenesCarrito = async () => {
    return await getDocs(collection(firestoreDB, "ordenes"))
}

const getOrdenCarritoById = async (id) => {
    return await getDoc(doc(firestoreDB, "ordenes", id))
}

const addNewCompra= async (newCompra) => {
    return await setDoc(doc(firestoreDB, "compras", newCompra.id), newCompra)
}

const getCompraById = async (id) => {
    return await getDoc(doc(firestoreDB, "compras", id))
}

const deleteLastCompra = async () => {
    if((await getDocs(collection(firestoreDB, "compras"))).docs.length > 0){
        return await deleteDoc(doc(firestoreDB, "compras", "compra1"))
    }else{
        console.log(`${new Date().toLocaleDateString()} [TRACE] FIREBASE: NO HAY COMPRAS`);
    }
}

cargarProductosToDB();
deleteLastCompra();

export { firebaseApp, firebaseAnalytics, firestoreDB, getProductById, getAllProducts, saveProduct, addNewOrdenCarrito, getOrdenCarritoById, getAllOrdenesCarrito, addNewCompra, getCompraById };