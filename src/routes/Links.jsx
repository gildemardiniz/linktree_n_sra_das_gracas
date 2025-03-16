import { Link } from "react-router-dom"

export const Links = () => {

    return (

        <div>
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
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-light m-2 col-12 col-md-6 p-3 rounded-pill border-2 color-borda">
                    <Link className='text-reset text-color-azul text-decoration-none' to="/pix">Dizimo & doações</Link>
                </button>
            </div>
        </div>

    )

}