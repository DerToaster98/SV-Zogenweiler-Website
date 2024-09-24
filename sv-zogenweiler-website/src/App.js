import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Header></Header>
        <Routes>
          <Route path ='/' element={<Home></Home>}/>            
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
