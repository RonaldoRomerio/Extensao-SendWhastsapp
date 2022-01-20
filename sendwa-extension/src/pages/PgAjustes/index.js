import React, {useState, useEffect} from 'react';
import Titulo from '../../components/Titulo'
import {FiSettings} from "react-icons/fi";

export default function PgAjustes() {
    const [ajustes, setAjustes] = useState({
        "tempoEnvioMensagem":6,
        "abrirNavegador":true
    });
    const[descricaoBotao, setDescricaoBotao] = useState('Salvar ajustes');
    useEffect(() =>{
        function carregarStorage(){
            const storageAjustes = localStorage.getItem('Ajustes');
            if(storageAjustes && storageAjustes.length > 0){
                setAjustes(JSON.parse(storageAjustes))
            }
        }
        carregarStorage();
    }, [])
    function salvarAjustes(){
        localStorage.setItem('Ajustes', JSON.stringify(ajustes));
        alteraDescricao("Ajuste Salvo com Sucesso")
    }
    function alteraDescricao(mensagem){
        setDescricaoBotao(mensagem);
        setTimeout(() => {setDescricaoBotao("Salvar ajustes")}, 2000);
    }
    return (
        <div className='container'>
            <Titulo>
                <p><FiSettings size={19} color='rgba(2, 211, 0, 1)'/> Ajustes</p>
            </Titulo>
            <div className='ajustes'>
                <p>Definir tempo de envio de Mensagem 
                    <input type="number" value={ajustes.tempoEnvioMensagem} 
                        onChange={(e) => setAjustes(prevState => ({ ...prevState, tempoEnvioMensagem: e.target.value}))}/> Seg. 
                </p>
                <p>Abrir o navegador durante o envio 
                    <input type="checkbox" checked={ajustes.abrirNavegador} 
                        onChange={(e) => setAjustes(prevState => ({ ...prevState, abrirNavegador: e.target.checked}))}/>
                </p>
                <button onClick={() => salvarAjustes()}>{descricaoBotao}</button>
            </div>
        </div>
    );
}