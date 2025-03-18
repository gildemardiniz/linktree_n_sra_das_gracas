import { Link } from "react-router-dom"

export const Links = () => {

    return (

        <div>
            <Link to='https://maps.app.goo.gl/YYVyAAGKoRDzQfc98' className="text-decoration-none">
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-light m-2 col-12 col-md-6 p-3 rounded-pill border-2 color-borda">
                        Localização
                    </button>
                </div>
            </Link>
            <Link to='/pix' className="text-decoration-none">
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-light m-2 col-12 col-md-6 p-3 rounded-pill border-2 color-borda">
                        Dizimo & doações
                    </button>
                </div>
            </Link>
            <Link to='https://wa.me/559887506183' className="text-decoration-none">
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-light m-2 col-12 col-md-6 p-3 rounded-pill border-2 color-borda">
                        Whatsapp
                    </button>
                </div>
            </Link>
            <Link to='https://chat.whatsapp.com/GRTXz4kXtSN1NVjPiEgGOm' className="text-decoration-none">
                <div className="d-flex justify-content-center">
                    <button className="btn btn-light m-2 col-12 col-md-6 p-3 rounded-pill border-2 color-borda ">
                        Entre no Grupo
                    </button>
                </div>
            </Link>
            <Link to='https://www.instagram.com/nsadasgracas_jardimturu' className="text-decoration-none">
                <div className="d-flex justify-content-center">
                    <button className="btn btn-light m-2 col-12 col-md-6 p-3 rounded-pill border-2 color-borda">
                        Instagram
                    </button>
                </div>
            </Link>
        </div >

    )

}