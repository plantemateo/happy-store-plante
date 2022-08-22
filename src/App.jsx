import './App.css';
import Cards from './components/Cards';
import Carousel from './components/fragments/Carousel';
import Footer from './components/fragments/Footer';
import NavBar from './components/NavBar';

function App() {
  const dataCard = {
    card1: {
      tittle: 'Iphone 13 Pro Max',
      header: 'USD 1100'
    },
    card2: {
      tittle: 'Samsung A32',
      header: 'ARS 75.999'
    },
    card3: {
      tittle: 'Samsung S22 Ultra',
      header: 'ARS 331.999'
    },
    card4: {
      tittle: 'Iphone 13',
      header: 'USD 850'
    }
  }

  return (
    <>
      <NavBar></NavBar>
      <Carousel></Carousel>
      <Cards dataCards={dataCard}></Cards>
      <Footer></Footer>
    </>
  )
}

export default App;
