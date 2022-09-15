const productos = [
    {
      id: 'card1',
      tittle: 'Iphone 13 Pro Max',
      header: 'USD 1.166',
      precio: 1166,
      divisa: "USD",
      stock: 2,
      cantidad: 0,
      img: 'iphone13Pro.jpeg',
      isVisible: false,
      categoria: 'celulares',
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
      precio: 98.655,
      divisa: "ARS",
      stock: 3,
      cantidad: 0,
      img: 'monitorsmg.jpeg',
      isVisible: false,
      categoria: 'monitores',
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
      precio: 66.990,
      divisa: "ARS",
      stock: 4,
      cantidad: 0,
      img: 'silla-gamer.webp',
      isVisible: false,
      categoria: 'sillas-gamers',
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
      precio: 850,
      divisa: "USD",
      stock: 7,
      cantidad: 0,
      img: 'iphone13.jpeg',
      isVisible: false,
      categoria: 'celulares',
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
      precio: 180.000,
      divisa: "ARS",
      stock: 7,
      cantidad: 0,
      img: 'hplaptop11.webp',
      isVisible: false,
      categoria: 'notebooks',
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
      precio: 75.999,
      divisa: "ARS",
      stock: 3,
      cantidad: 0,
      img: 'samsungA32.jpeg',
      isVisible: false,
      categoria: 'celulares',
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
      precio: 104.999,
      divisa: "ARS",
      stock: 9,
      cantidad: 0,
      img: 'jbl-parlante1.webp',
      isVisible: false,
      categoria: 'parlantes',
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
      precio: 331.999,
      divisa: "ARS",
      stock: 4,
      cantidad: 0,
      img: 'samsungS22.jpeg',
      isVisible: false,
      categoria: 'celulares',
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
      id: 'card9',
      tittle: 'Macbook Pro',
      header: 'USD 1.850',
      precio: 1850,
      divisa: "USD",
      stock: 9,
      cantidad: 0,
      img: 'macpro.png',
      isVisible: false,
      categoria: 'notebooks',
      detalle: {
        memory: '512 GB',
        micro: 'M1 Max 16 Nucleos',
        ram: '16 GB',
        display: '16 Pulgadas',
        color: 'Silver',
        bateria: '1000 Ciclos',
        os: 'iOS 16'
      }
    },
    {
      id: 'card10',
      tittle: 'GO Pro',
      header: 'ARS 130.998',
      precio: 130.998,
      divisa: "ARS",
      stock: 13,
      cantidad: 0,
      img: 'gopro.jpg',
      isVisible: false,
      categoria: 'camaras',
      detalle: {
        memory: '24 GB',
        micro: 'SnapDragon 2200 a 2,2GHz',
        ram: '6 GB',
        display: '3,8 Pulgadas',
        color: 'Negro',
        bateria: '5000 mAh',
        os: '-'
      }
    },
    {
      id: 'card11',
      tittle: 'iPad Pro',
      header: 'USD 1100',
      precio: 1115,
      divisa: "USD",
      stock: 4,
      cantidad: 0,
      img: 'ipadpro.webp',
      isVisible: false,
      categoria: 'tablets',
      detalle: {
        memory: '512 GB',
        micro: 'M1 10 Nucleos',
        ram: '8 GB',
        display: '11 Pulgadas',
        color: 'Silver',
        bateria: '-',
        os: 'iPadOS 14.5'
      }
    },
    {
      id: 'card12',
      tittle: 'Samsung Smart Tv',
      header: 'ARS 163.555',
      precio: 163.555,
      divisa: "ARS",
      stock: 26,
      cantidad: 0,
      img: 'smarttv.jpg',
      isVisible: false,
      categoria: 'televisores',
      detalle: {
        memory: '12 GB',
        micro: 'Exynos 2200 a 2,8GHz',
        ram: '8 GB',
        display: '55 Pulgadas',
        color: 'Negro',
        bateria: '-',
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
  },
  {
    id: 7, 
    name: "smarttv.jpg"
  },
  {
    id: 8, 
    name: "ipadpro.webp"
  },
  {
    id: 9, 
    name: "gopro.jpg"
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