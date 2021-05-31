import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar'
import Buttons from './components/buttonGroup'
import Fila1 from './components/fila1.js'
import Fila2 from './components/fila2.js'
import Fila3 from './components/fila3.js'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Buttons/>
      <Fila1/>
      <Fila2/>
      <Fila3/>
    </div>
  );
}

export default App;
