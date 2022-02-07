import React from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css';

const Main: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className="main">
            <h1 className='title'>
                O que deseja fazer?
            </h1>

            <div className="formContainer" >
                <div className="button" onClick={() => navigate("/generate")}>
                    <p className="buttonText">Gerar chave pública</p>
                </div>

                <div className="button" onClick={() => navigate("/encrypt")}>
                    <p className="buttonText">Encriptar texto</p>
                </div>

                <div className="button" onClick={() => navigate("/decrypt")}>
                    <p className="buttonText">Desencriptar texto</p>
                </div>
            </div>
        </div>
    );
}

export default Main;
