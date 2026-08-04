import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Headers from './componentes/Header';
import Footer from './componentes/Footer';

import Home from './paginas/Home';
import Contato from './paginas/Contato';
import Sobre from './paginas/Sobre';

function App() {
  return (
    <BrowserRouter>
    <Headers />
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
         <Route path='/' element={<Contato />}/>
          <Route path='/' element={<Sobre />}/>
      </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
