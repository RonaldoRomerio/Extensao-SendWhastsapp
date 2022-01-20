import React, {useState, useEffect} from 'react';
import Titulo from '../../components/Titulo'
import { FiMessageCircle} from "react-icons/fi";
import './style.css'

export default function PgCfgMensagem() {
  const [mensagem, setMensagem] = useState('');
  const[descricaoBotao, setDescricaoBotao] = useState('Salvar Mensagem Padrão');
  useEffect(() =>{
    function carregarStorage(){
      const storageMensagem = localStorage.getItem('mensagemPadrao');
      if(storageMensagem && storageMensagem.length > 0){
        setMensagem(storageMensagem);
      }
    }
    carregarStorage();
  }, [])
  function salvarMensagem(){
    if(mensagem && mensagem.length > 0){
      localStorage.setItem('mensagemPadrao', mensagem);
      alteraDescricao("Mensagem Salva Com Sucesso")
    }
  }
  function alteraDescricao(mensagem){
    setDescricaoBotao(mensagem);
    setTimeout(() => {setDescricaoBotao("Salvar mensagem padrão")}, 2000);
}
    return (
        <div className='container'>
          <Titulo>
            <p><FiMessageCircle size={19} color='rgba(2, 211, 0, 1)'/> Configurar Mensagem</p>
          </Titulo>
          <div className='cfgMensagem'>
            <textarea placeholder='Mensagem padrão' value={mensagem} onChange={(e)=>setMensagem(e.target.value)}/>
            <br/>
            <button onClick={()=>salvarMensagem()}>{descricaoBotao}</button>
          </div>
        </div>
    );
}