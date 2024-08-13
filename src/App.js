
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./views/login/Login";
import RecuperacaoSenha from './views/login/RecuperacaoSenha';
import ConfirmarEmail from './views/login/ConfirmarEmail';
import NovaSenha from './views/login/NovaSenha';
import SenhaAtualizada from './views/login/SenhaAtualizada'

import CadastroInicial from './views/cadastro/CadastroInicial';
import ConfirmarCadastro from './views/cadastro/ConfirmarCadastro';
import Home from './views/Admin/Home';

import ListClientes from './views/Admin/ListClientes';
import ListRestaurantes from './views/Admin/ListRestaurantes';
import Cadastro from './views/cadastro/cadastro';
import RestauranteDetalhes from './views/Admin/RestauranteDetalhes';





function App() {
  return (    
    <Router>
      <Routes>

        {/*rotas login*/}
        <Route path='/' element={<Login />} />
        <Route path='/recuperacao-senha' element={<RecuperacaoSenha />} />
        <Route path='/confirmar-email' element={<ConfirmarEmail />} />
        <Route path='/nova-senha' element={<NovaSenha />} />
        <Route path='/senha-atualizada' element={<SenhaAtualizada />} />
       
       {/*rotas cadastro*/}
       <Route path='/cadastro-inicial' element={<CadastroInicial />} />
       <Route path='/cadastro' element={< Cadastro/>} />
       <Route path='/confirmar-cadastro' element={< ConfirmarCadastro/>} />
       

       {/*rotas admin*/}
       <Route path='/home' element={< Home/>} />
       <Route path='/list-restaurantes' element={< ListRestaurantes/>} />
       <Route path='/list-clientes' element={< ListClientes/>} />
       <Route path="/restaurante-detalhes/:id" element={< RestauranteDetalhes/>} />

      </Routes>
    </Router>

  );
}

export default App;
