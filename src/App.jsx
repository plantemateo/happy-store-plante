import './App.css';
import Cards from './components/Cards';
import NavBar from './components/NavBar';

function App() {
  const dataCards1 = {
    card1: {
      tittle: 'Iphone 13 Pro',
      header: 'Apple A15 Bionic',
      text: 'GPU de 5 Nucleos'
    },
    card2: {
      tittle: 'Iphone 13 Pro Max',
      header: 'Apple A15 Bionic',
      text: 'GPU de 6 Nucleos'
    }
  };

  const dataCards2 = {
    card1: {
      tittle: 'Samsung Galaxy S22',
      header: 'Samsung Exynos 2200',
      text: 'GPU de 8 Nucleos'
    },
    card2: {
      tittle: 'Samsung Galaxy S22 Ultra',
      header: 'Samsung Exynos 2200',
      text: 'GPU de  Nucleos'
    }
  };

  return (
    <>
      <NavBar></NavBar>
      <Cards dataCard={dataCards1}></Cards>
      <Cards dataCard={dataCards2}></Cards>
    </>
  )
}

export default App;
