const productos = [
    {
      id: 'card1',
      tittle: 'Iphone 13 Pro Max',
      header: 'USD 1100',
      stock: 2,
      cantidad: 0,
      img: 'imgCard1',
      isVisible: false,
      detalle: {
        memory: '256 GB',
        micro: 'A15 Bionic',
        display: '7,7 Pulgadas',
        ram: '8 GB',
        color: 'White Silver',
        bateria: '5000 mAh',
        os: 'iOS 16'
      }
    },
    {
      id: 'card2',
      tittle: 'Samsung A32',
      header: 'ARS 75.999',
      stock: 3,
      cantidad: 0,
      img: 'imgCard2',
      isVisible: false,
      detalle: {
        memory: '64 GB',
        micro: 'Mediatek Helio G80 2GHz',
        ram: '4 GB',
        display: '5,4 Pulgadas',
        color: 'Celeste',
        bateria: '5000 mAh',
        os: 'Android 11'
      }
    },
    {
      id: 'card3',
      tittle: 'Samsung S22 Ultra',
      header: 'ARS 331.999',
      stock: 4,
      cantidad: 0,
      img: 'imgCard3',
      isVisible: false,
      detalle: {
        memory: '512 GB',
        micro: 'Exynos 2200 a 2,8GHz',
        ram: '8 GB',
        display: '6,8 Pulgadas',
        color: 'Celeste',
        bateria: '5000 mAh',
        os: 'Android 12'
      }
    },
    {
      id: 'card4',
      tittle: 'Iphone 13',
      header: 'USD 850',
      stock: 7,
      cantidad: 0,
      img: 'imgCard4',
      isVisible: false,
      detalle: {
        memory: '128 GB',
        micro: 'A15 Bionic',
        ram: '6 GB',
        display: '6,8',
        color: 'White Pink',
        bateria: '4000 mAh',
        os: 'iOS 16'
      }
    }
  ];

const getAllProducts = new Promise((res, rej) => {
    if(productos.length > 0){
        res(productos);
    }else{
        rej("No se encuentran los productos");
    }
});

export { getAllProducts };