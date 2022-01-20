import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PgEnviarMensagem from '../pages/PgEnviarMensagem';
import PgAddContatos from '../pages/PgAddContatos';
import PgAjustes from '../pages/PgAjustes';
import PgCfgMensagem from '../pages/PgCfgMensagem';
import PgInstrucoes from '../pages/PgInstrucoes';
import Menu from '../components/Menu';


const Rotas = () => {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route exact path='/' element={<PgEnviarMensagem/>}/>
                <Route exact path='/AddContatos' element={<PgAddContatos/>}/>
                <Route exact path='/Ajustes' element={<PgAjustes/>}/>
                <Route exact path='/ConfigMensagem' element={<PgCfgMensagem/>}/>
                <Route exact path='/instrucoes' element={<PgInstrucoes/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;