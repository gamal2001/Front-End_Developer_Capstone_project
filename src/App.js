import './App.css';
import Layout from './components/Layout';
import Home  from './components/Home';
import Reservation from './components/Reservation';
import UnderConstructions from './components/UnderConstruction';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Home/>} path="/"/>
          <Route element={<Reservation />} path="/reservation"/>
          <Route element={<UnderConstructions />} path="/under-construction"/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
