import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import './decrypt.css';

const Decrypt: React.FC = () => {
    const [p, setP] = useState<number>();
    const [q, setQ] = useState<number>();
    const [e, setE] = useState<number>();
    const [text, setText] = useState<string>();
    const [decryptedText, setDecryptedText] = useState<string>("");
    const [title, setTitle] = useState<string>("Insira os dados para desencriptar o texto");

    const navigate = useNavigate();

    async function handleSubmit() {
        api.post("/decrypt", {p, q, e, text}).then((response) => {
            if (response.data.message) {
                alert(response.data.message)
                return;
            }
            console.log(response.data);
            setTitle("Mensagem descriptografada com sucesso!")
            setDecryptedText(response.data.decryptedText)
        })
    }


    return (
        <div className="main">
            <h2 className='title'>
                {title}
            </h2>
            <h4>
                {decryptedText}
            </h4>

            <div className="formContainer">
                <p className='label'>O primeiro número primo 'p'</p>
                <div className="input">
                    <input value={p} type="number" className="inputText" placeholder="17" onChange={e => setP(parseInt(e.target.value))}></input>
                </div>

                <p className='label'>O segundo número primo 'q'</p>
                <div className="input">
                    <input value={q} type="number" className="inputText" placeholder="41" onChange={e => setQ(parseInt(e.target.value))}></input>

                </div>

                <p className="label">O expoente 'e'</p>
                <div className="input">
                    <input value={e} type="number" className="inputText" placeholder="13" onChange={e => setE(parseInt(e.target.value))}></input>

                </div>

                <p className="label">Texto a ser descriptografado (separar com espaços)</p>
                <div className="input">
                    <input value={text} type="text" className="inputText" placeholder="611 194 310 639 190 194 639 194 525 96 190 421" onChange={e => setText(e.target.value)}></input>
                </div>

                <div className="button" onClick={() => handleSubmit()}>
                    <p className="buttonText">Descriptografar</p>
                </div>

                <div className="button" onClick={() => navigate("/")}>
                    <p className="buttonText">Voltar</p>
                </div>
            </div>
        </div>
    );
}

export default Decrypt;
