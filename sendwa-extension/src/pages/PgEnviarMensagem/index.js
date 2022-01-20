import React, {useState, useEffect} from 'react';
import Titulo from '../../components/Titulo'
import { AiOutlineSend} from "react-icons/ai";
import axios from "axios";
//var QRCode = require("qrcode.react");

export default function PgEnviarMensagem() {

    const [contatos, setContatos] = useState([]);
    const [Mensagem, setMensagem] = useState('');
    const [ajustes, setAjustes] = useState('');
    //const [qrcode, setQRCode] = useState(false);
    const [resultado, setResultado] = useState('');

    async function verificarParametros(){
        if(contatos.length > 0 && Mensagem.length > 0){
            await EnviarMensagem(contatos)
        }
    };
    async function EnviarMensagem(contatos){
        var mensagemAtual = Mensagem.replace("@NOME@", "{{nmContato}}").replace("@TELEFONE@", "{{nrTelefone}}")
        const res = await axios.post("http://localhost:5000/enviarMensagem", { contatos, mensagemAtual, ajustes });
        let retorno = JSON.parse(res.data)
        if(retorno.resultado === 'sucesso'){
            setResultado('Finalizado com sucesso')
        } else{
            setResultado(`finalzado com problemas ${retorno.resultado}`)
        }
        //setQRCode(res.data);
    }
    useEffect(()=>{
        function carregarStorage(){
            const storageListContato = localStorage.getItem('listaContatos');
            if(storageListContato && storageListContato.length > 0){
                setContatos(JSON.parse(storageListContato))
            }
            const storageMensagem = localStorage.getItem('mensagemPadrao');
            if(storageMensagem && storageMensagem.length > 0){
                setMensagem(storageMensagem)
            }
            const storageAjustes = localStorage.getItem('Ajustes');
            if(storageAjustes && storageAjustes.length > 0){
                setAjustes(JSON.parse(storageAjustes));
            }
        }
        carregarStorage();
    }, [])
    return (
        <div className='container'>
            <Titulo>
                <p><AiOutlineSend size={19} color='rgba(2, 211, 0, 1)'/> Enviar Mensagem</p>
            </Titulo>
            <div className='enviarMensagem'>
                <button onClick={()=>verificarParametros()}>Enviar mensagem padrão</button>
                <div className='divisao'/>
                <p>{resultado}</p>
                {/*qrcode && (
                    <div style={{ margin: "100px" }}>
                        <QRCode value={qrcode}/>
                    </div>
                )*/}
            </div>
        </div>
    );
}