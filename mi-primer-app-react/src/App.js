import logo from './logo.svg';
import './App.css';
import Titulo from './Componentes/Titulo/Titulo';
import Lista from './Componentes/Lista/Lista';
import Subtitulo from './Componentes/Subtitulo/Subtitulo';
function App() {
  return (
    <div className='elementos'>
     <Titulo/>
     <Subtitulo/>
     <Lista/>
    </div>
  );
}

export default App;
