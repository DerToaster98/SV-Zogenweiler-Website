import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App color-gray-background">
      <HashRouter basename="/">
        <Header></Header>
        <body>
          <Routes>
            <Route path ='/' element={<Home></Home>}/>
            <Route path='/kontakt' element={<Contact></Contact>}/>
          </Routes>
        </body>
        <Footer></Footer>
      </HashRouter>
    </div>
  );
}

export default App;
