import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, Outlet } from "react-router-dom";
import './Constantes.css';
import perfil from './assets/perfil.jpg';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="d-flex justify-content-center ">
          <img
            src={perfil}
            className="rounded-circle m-3 w-25 d-none d-md-block"
            alt="..."
          />
          <img
            src={perfil}
            className="rounded-circle m-3 w-50 d-block d-md-none"
            alt="..."
          />
        </div>
        <h4 className="d-flex justify-content-center mt-3 text-center">Comunidade</h4>
        <h4 className="d-flex justify-content-center mb-3 text-center">Nossa Senhora das Graças</h4>
        <Outlet />
        <footer className='mt-5 mb-4'>
          <h6 className="d-flex justify-content-center m-3 text-center ">Paróquia de Santo Antônio - Parque Vitória</h6>
          <div className="d-flex justify-content-center">
            <a className='text-reset text-color-azul text-decoration-none' href='https://www.instagram.com/paroquia_santoantoniopv'><InstagramIcon className='mx-1 color-azul' /></a>
            <a className='text-reset text-color-azul text-decoration-none' href='https://maps.app.goo.gl/9oyHksR1tHbYLzmW9'><FmdGoodIcon className='mx-1 color-azul' /></a>
          </div>

          <div className="col-12 my-3 text-center mt-4">
            <h6>Copyright &copy; {new Date().getFullYear()}. Todos os direitos reservados | Desenvolvido por
              <Link className='text-decoration-none text-color-roxo' to='https://dinizdev.vercel.app/'> _dinizDev</Link>
            </h6>
          </div>

        </footer>


      </div>
    </div >
  );
}

export default App;
