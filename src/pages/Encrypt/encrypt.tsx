import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import './encrypt.css';

const Encrypt: React.FC = () => {
    const [title, setTitle] = useState<string>("Insira os dados para encriptar o texto");
    const [n, setN] = useState<number>();
    const [e, setE] = useState<number>();
    const [text, setText] = useState<string>();
    const [encryptedText, setEncryptedText] = useState<string>("");

    const navigate = useNavigate();


    async function handleSubmit() {
        api.post("/crypt", {n, e, text}).then((response) => {
            if (response.data.message) {
                alert(response.data.message)
                return;
            }
            console.log(response.data);
            setTitle("Mensagem cripografada com sucesso!")
            setEncryptedText(response.data.encryptedText)
        })
    }

    return (
        <div className="main">
            <h2 className='title'>
                {title}
            </h2>
            <h4>
                {encryptedText}
            </h4>
            <div className="formContainer">
                <p className="label">O produto dos números primos 'p' e 'q'</p>
                <div className="input">
                    <input value={n} type="number" className="inputText" placeholder="697" onChange={e => setN(parseInt(e.target.value))}></input>
                </div>

                <p className="label">O expoente 'e'</p>
                <div className="input">
                    <input  value={e} type="number" className="inputText" placeholder="13" onChange={e => setE(parseInt(e.target.value))}></input>
                </div>

                <p className="label">Texto a ser encriptado</p>
                <div className="input">
                    <input value={text} type="text" className="inputText" placeholder="O céu é azul" onChange={e => setText(e.target.value)}></input>
                </div>

                <div className="button" onClick={() => handleSubmit()}>
                    <p className="buttonText">Criptografar</p>
                </div>

                <div className="button" onClick={() => navigate("/")}>
                    <p className="buttonText">Voltar</p>
                </div>
            </div>
        </div>
    );
}

export default Encrypt;
