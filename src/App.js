import './Constantes.css'
import perfil from './assets/perfil.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

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
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-light m-2 col-12 col-md-6 p-3 rounded-pill border-2 color-borda">
            <a className='text-reset text-color-azul text-decoration-none' href='https://www.instagram.com/nsadasgracas_jardimturu'>Instagram</a>
          </button>
        </div>

        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-light m-2 col-12 col-md-6 p-3 rounded-pill border-2 color-borda">
            <a className='text-reset text-color-azul text-decoration-none' href='https://wa.me/559885799266'>Whatsapp</a>
          </button>
        </div>

        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-light m-2 col-12 col-md-6 p-3 rounded-pill border-2 color-borda">
            <a className='text-reset text-color-azul text-decoration-none' href='https://maps.app.goo.gl/YYVyAAGKoRDzQfc98'>Localização</a>
          </button>
        </div>
        <footer className='mt-5 mb-4'>
          <h6 className="d-flex justify-content-center m-3 text-center ">Paróquia de Santo Antônio - Parque Vitória</h6>
          <div className="d-flex justify-content-center">
            <a className='text-reset text-color-azul text-decoration-none' href='https://www.instagram.com/paroquia_santoantoniopv'><InstagramIcon className='mx-1 color-azul' /></a>
            <a className='text-reset text-color-azul text-decoration-none' href='https://maps.app.goo.gl/9oyHksR1tHbYLzmW9'><FmdGoodIcon className='mx-1 color-azul' /></a>
          </div>

        </footer>


      </div>
    </div >
  );
}

export default App;
