
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Companies from './components/companies/companies';


function App() {
  return (
    <>
    <div className='App'>
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
        
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
