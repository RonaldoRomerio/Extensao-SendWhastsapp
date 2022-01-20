import React, {useState, useEffect} from 'react';
import {FiUserPlus } from "react-icons/fi";
import {AiFillDelete } from "react-icons/ai";
import Titulo from '../../components/Titulo'
import './style.css'

export default function PgAddContatos() {
    const [contatos, setContatos] = useState([]);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    function addContato(e){
        e.preventDefault();
        let novoContato = {'nmContato':nome, 'nrTelefone':telefone};
        setContatos([...contatos, novoContato]);
        setNome(''); setTelefone('')
    }
    function delContato(index){
        if(contatos.length > 1){
            setContatos(contatos.slice(index))
        }
        else{setContatos([])}
    }
    useEffect(()=>{
        function carregarStorage(){
            const storageListContato = localStorage.getItem('listaContatos');
            if(storageListContato && storageListContato.length > 0){
                setContatos(JSON.parse(storageListContato))
            }
        }
        carregarStorage();
    },[])
    useEffect(()=>{
        if(contatos && contatos.length > 0){
            localStorage.setItem('listaContatos', JSON.stringify(contatos));
        }
    },[contatos])
    return (
        <div className='container'>
            <Titulo>
            <p><FiUserPlus size={19} color='rgba(2, 211, 0, 1)'/> Adicionar Contatos</p>
            </Titulo>
            <form onSubmit={(e) => addContato(e)} className='addContato'>
                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required/>
                <input type="text" placeholder="81999999999" value={telefone} onChange={(e) => setTelefone(e.target.value)} 
                    maxLength={11} required/>
                <button type='submit'><FiUserPlus size={16} color='rgba(2, 211, 0, 1)'/></button>
            </form>
            <div className='divisao'/>
            <div className='listContatos'>
            {(contatos != null && contatos.length > 0 ?
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                {contatos.map((contato, index) =>
                    (<tr key={index}>
                        <th>{contato.nmContato}</th>
                        <th>{contato.nrTelefone}</th>
                        <th onClick={() => delContato(index)}><button><AiFillDelete size={20} color='rgba(2, 211, 0, 1)'/></button></th>
                    </tr>)
                )}
                </tbody>
            </table>
                :
                <p>Nenhum contato adicionado</p>
            )}
            </div>
        </div>
    );
}