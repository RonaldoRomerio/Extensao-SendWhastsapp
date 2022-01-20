import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { FiSettings, FiMessageCircle, FiUsers, FiInfo, FiKey} from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
export default function menu() {
    return (
        <div className="buttons">
            <Link to='/'><AiOutlineSend size={14} color='rgba(2, 211, 0, 1)'/></Link>
            <Link to="/AddContatos"><FiUsers size={14} color='rgba(2, 211, 0, 1)'/></Link>
            <Link to='/ConfigMensagem'><FiMessageCircle size={14} color='rgba(2, 211, 0, 1)'/></Link>
            <Link to='/Ajustes'><FiSettings size={14} color='rgba(2, 211, 0, 1)'/></Link>
            <Link to='/instrucoes'><FiInfo size={14} color='rgba(2, 211, 0, 1)'/></Link>
        </div>
    );
}