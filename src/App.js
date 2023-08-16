import './App.css';
import Header from './components/Header';
import SectionIcon from './components/SectionIcon'
import Main from './components/Main'
import Carrossel from './components/Carrosel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionIcon/>
      <Main/>
      <Carrossel/>
      <Footer/>
      
    </div>
  );
}

export default App;
