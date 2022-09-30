import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AcercaDe from './pages/AcercaDe';
import ListaCasas from './pages/ListaCasas';
import VerMapa from './pages/VerMapa';
import HousesContex from './context/HousesContex';
import useGetApi from './hooks/useGetApi';
function App() {
  const houses = useGetApi();
  // console.log(houses);
  return (
    <HousesContex.Provider value={houses}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' exact element = {<VerMapa/>} />
              <Route path='/listas' exact element = {<ListaCasas/>} />
              <Route path='/acerca' exact element = {<AcercaDe/>} />
            </Routes>
          </BrowserRouter>
        </div>
    </HousesContex.Provider>
  );
}

export default App;
