import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import Club from './components/pages/club/Club';
import Chiefs from './components/pages/club/Chiefs';
import Activities from './components/pages/club/Activities';

function App() {
  return (    
      <div className="App">       
        <HashRouter basename="/">
          <Header></Header>          
          <div className='main-content color-gray-background'>
            <Routes>
              <Route path ='/' element={<Home></Home>}/>
              <Route path='kontakt' element={<Contact></Contact>}/>
              <Route path='verein' element={<Club></Club>}/>
              <Route path='verein/vorstandschaft' element={<Chiefs></Chiefs>}/>
              <Route path='verein/aktivitaeten' element={<Activities></Activities>}/>
            </Routes>                   
          </div>
          <footer>
            <Footer className='main-footer'></Footer>
          </footer>
        </HashRouter>              
    </div>
  );
}

export default App;
