const productos = [
    {
      id: 'card1',
      tittle: 'Iphone 13 Pro Max',
      header: 'USD 1100',
      stock: 2,
      cantidad: 0,
      img: 'iphone13Pro.jpeg',
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
      id: 'card6',
      tittle: 'Samsung Curved 32',
      header: 'ARS 98.655',
      stock: 3,
      cantidad: 0,
      img: 'monitorsmg.jpeg',
      isVisible: false,
      detalle: {
        memory: 'Incorporated',
        micro: 'Mediatek Helio G80 2GHz',
        ram: '4 GB',
        display: '32 Pulgadas',
        color: 'Black',
        bateria: 'Cable Corriente',
        os: 'Samsung SXT'
      }
    },
    {
      id: 'card7',
      tittle: 'Silla Gamer Cougar Armor',
      header: 'ARS 66.990',
      stock: 4,
      cantidad: 0,
      img: 'silla-gamer.webp',
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
      img: 'iphone13.jpeg',
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
    },
    {
      id: 'card5',
      tittle: 'HP Pavilion',
      header: 'ARS 180.000',
      stock: 7,
      cantidad: 0,
      img: 'hplaptop11.webp',
      isVisible: false,
      detalle: {
        memory: '512 GB',
        micro: 'Intel i5 11Th Generation',
        display: '14 Pulgadas',
        ram: '8 GB',
        color: 'White Silver',
        bateria: '32000 mAh',
        os: 'Windows 13'
      }
    },
    {
      id: 'card2',
      tittle: 'Samsung A32',
      header: 'ARS 75.999',
      stock: 3,
      cantidad: 0,
      img: 'samsungA32.jpeg',
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
      id: 'card8',
      tittle: 'Parlante JBL Partybox',
      header: 'ARS 104.999',
      stock: 9,
      cantidad: 0,
      img: 'jbl-parlante1.webp',
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
    },
    {
      id: 'card3',
      tittle: 'Samsung S22 Ultra',
      header: 'ARS 331.999',
      stock: 4,
      cantidad: 0,
      img: 'samsungS22.jpeg',
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
    }
];

const imagenes = [
  {
    id: 1, 
    name: "hplaptop11.webp"
  },
  {
    id: 2, 
    name: "hplaptop12.webp"
  },
  {
    id: 3, 
    name: "monitorsmg.jpeg"
  },
  {
    id: 4, 
    name: "monitorsmg2.jpeg"
  },
  {
    id: 5, 
    name: "silla-gamer2.webp"
  },
  {
    id: 6, 
    name: "jbl-parlante2.webp"
  }
];

const ProductosServices = {
  getAllProducts: new Promise((res, rej) => {
    if(productos.length > 0){
        res(productos);
    }else{
        rej("No se encuentran los productos");
    }
  }),
  getAllImagenes: new Promise((res, rej) => {
    if(imagenes.length > 0){
      res(imagenes)
    }else{
      rej("No se encuentran las imagenes")
    }
  })
}

export { ProductosServices };