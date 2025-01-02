import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import Club from './components/pages/club/Club';
import Chiefs from './components/pages/club/Chiefs';

function App() {
  return (    
      <div id="root" className="App color-gray-background">       
        <HashRouter basename="/">
          <Header></Header>          
          <div className='main-content'>
            <Routes>
              <Route path ='/' element={<Home></Home>}/>
              <Route path='kontakt' element={<Contact></Contact>}/>
              <Route path='verein' element={<Club></Club>}/>
              <Route path='verein/vorstandschaft' element={<Chiefs></Chiefs>}/>
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
