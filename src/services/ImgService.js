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

const ImgService = {
  getAllImagenes: new Promise((res, rej) => {
    if(imagenes.length > 0){
      res(imagenes)
    }else{
      rej("No se encuentran las imagenes")
    }
  })
}

export { ImgService };