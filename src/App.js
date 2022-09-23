import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AcercaDe from './pages/AcercaDe';
import ListaCasas from './pages/ListaCasas';
import VerMapa from './pages/VerMapa';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element = {<VerMapa/>} />
          <Route path='/listas' exact element = {<ListaCasas/>} />
          <Route path='/acerca' exact element = {<AcercaDe/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
