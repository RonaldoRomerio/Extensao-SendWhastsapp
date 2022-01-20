import React from 'react';
import {FiInfo} from "react-icons/fi";
import Titulo from '../../components/Titulo'

export default function PgInstrucoes() {
    return (
        <div className='container'>
            <Titulo>
                <p><FiInfo size={19} color='rgba(2, 211, 0, 1)'/> instruções</p>
            </Titulo>
            <div className='instrucoes'>
                <ul>
                    <li>Para inserir o nome do contato na mensagem utilize @NOME@</li>
                    <li>Para inserir o telefone do contato na mensagem utilize @TELEFONE@</li>
                    <li>Caso alguma mensagem não esteja sendo enviada, aumente o tempo de envio no menu ajustes</li>
                </ul>
            </div>
        </div>
    );
}