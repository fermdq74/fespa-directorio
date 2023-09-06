import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './components/NavBar'
import Empresas from './components/Empresas';


function App() {

  return (

    <div className='container'>
      <NavBar/>
      <Empresas/>
    </div>

  )
}


export default App
