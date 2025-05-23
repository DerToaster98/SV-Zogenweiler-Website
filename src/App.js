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
import Imprint from './components/pages/legal/Imprint';
import Privacy from './components/pages/legal/Privacy';
import Statute from './components/pages/club/Statute';
import Appointments from './components/pages/club/Appointments';
import ResultsPDF from './components/pages/ResultsPDF';
import RangeSupervision from './components/pages/club/RangeSupervision';
import ClubHouse from './components/pages/club/ClubHouse';

function App() {
  return (    
      <div className="App">               
          <Header></Header>          
          <div className='main-content color-gray-background'>
            <Routes>
              <Route path ='/' element={<Home></Home>}/>
              <Route path='kontakt' element={<Contact></Contact>}/>
              <Route path='verein' element={<Club></Club>}/>
              <Route path='verein/vorstandschaft' element={<Chiefs></Chiefs>}/>
              <Route path='verein/aktivitaeten' element={<Activities></Activities>}/>
              <Route path='verein/satzung' element={<Statute></Statute>}/>
              <Route path ='verein/termine' element={<Appointments></Appointments>}/>
              <Route path ='verein/schiessdienste' element={<RangeSupervision></RangeSupervision>}/>
              <Route path ='verein/schuetzenhaus' element={<ClubHouse></ClubHouse>}/>
              <Route path='impressum' element={<Imprint></Imprint>}/>
              <Route path='datenschutz' element={<Privacy></Privacy>}/>
              <Route path='ergebnisse' element={<ResultsPDF></ResultsPDF>}/>
            </Routes>                   
          </div>
          <footer>
            <Footer className='main-footer'></Footer>
          </footer>        
    </div>
  );
}

export default App;
