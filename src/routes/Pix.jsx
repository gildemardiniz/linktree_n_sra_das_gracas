import { enqueueSnackbar } from 'notistack';
import qrcode from '../assets/91a345c9-c555-4ab0-b806-1eff4f04a3c9.jpg';
import { useState } from 'react';
import copy from 'copy-to-clipboard';

export const Pix = () => {



    const snackbar = (msg, variant) => {
        enqueueSnackbar(msg, {
            variant: variant,
        })
    }


    const copyToClipboard = async () => {
       copy('nsdasgracasjturu@gmail.com');
       snackbar(`Chave copiada com sucesso!`, "success");
    };

    return (
        <div>
            <div className="d-flex justify-content-center ">
                <img
                    src={qrcode}
                    className=" m-3 w-25 d-none d-md-block"
                    alt="..."
                />
                <img
                    src={qrcode}
                    className=" m-3 w-50 d-block d-md-none"
                    alt="..."
                />
            </div>
            <h6 className="d-flex justify-content-center  text-center ">Antonio da Silva Costa</h6>
            <h6 className="d-flex justify-content-center  text-center ">Banco do Brasil S.A</h6>
            <h6 className="d-flex justify-content-center  text-center ">Chave: nsdasgracasjturu@gmail.com</h6>
            <div className="d-flex justify-content-center">
                <button onClick={() => { copyToClipboard() }} type="button" className="btn btn-light m-2 col-6 col-md-6 p-2 rounded-pill border-2 color-borda">
                    Copiar chave
                </button>
            </div>
        </div>


    )
}