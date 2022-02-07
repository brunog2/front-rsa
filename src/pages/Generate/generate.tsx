import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './generate.css';

const Generate: React.FC = () => {
    const [p, setP] = useState<number>();
    const [q, setQ] = useState<number>();
    const [e, setE] = useState<number>();
    const [generatedKey, setGeneratedKey] = useState<string>("");
    const [title, setTitle] = useState<string>("Insira os dados para gerar a chave pública");
    
    const navigate = useNavigate()

    async function handleSubmit() {
        
        api.post("/genKey", {p, q, e}).then((response) => {
            if (response.data.message) {
                alert(response.data.message)
                return;
            }
            setGeneratedKey("Chave pública (n, e): "+response.data.n+", "+response.data.e)
            setTitle("Chave gerada com sucesso!")
            console.log(response.data);
            
        }).catch(function(error){
            console.log(error);
       //Perform action based on error
        });
    }

    return (
        <div className="main">
            <h2 className='title'>
                {title}
            </h2>
            <h4>
                {generatedKey}
            </h4>

            <div className="formContainer">

                <p className='label'>Um número primo qualquer 'p'</p>
                <div className="input">
                    <input value={p} type="number" className="inputText" placeholder="17" onChange={e => setP(parseInt(e.target.value))}></input>
                </div>

                <p className='label'>Outro número primo qualquer 'q'</p>
                <div className="input">
                    <input value={q} type="number" className="inputText" placeholder="41" onChange={e => setQ(parseInt(e.target.value))}></input>
                </div>

                <p className='label'>Um expoente 'e' relativamente primo a (p − 1)*(q − 1)</p>
                <div className="input">
                    <input value={e} type="number" className="inputText" placeholder="13" onChange={e => setE(parseInt(e.target.value))}></input>
                </div>

                <div className="button" onClick={() => handleSubmit()}>
                    <p className="buttonText" >Gerar</p>
                </div>
                <div className="button" onClick={() => navigate("/")}>
                    <p className="buttonText">Voltar</p>
                </div>
            </div>
        </div>
    );
}

export default Generate;
