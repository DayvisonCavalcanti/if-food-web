
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from "./views/login/Login";
import RecuperacaoSenha from './views/login/RecuperacaoSenha';
import ConfirmarEmail from './views/login/ConfirmarEmail';
import NovaSenha from './views/login/NovaSenha';
import SenhaAtualizada from './views/login/SenhaAtualizada'

import CadastroInicial from './views/cadastro/CadastroInicial';
import ConfirmarCadastro from './views/cadastro/ConfirmarCadastro';
import Cadastro from './views/cadastro/Cadastro';
import HomeParceiros from './views/home/HomeParceiros';
import NovoItem from './views/cardapio/novoItem'
import NovaCategoria from './views/cardapio/novaCategoria';

import Cardapio from "./views/cardapio/cardapio";


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
        <Route path='login' element={<Login />} />
        <Route path='/recuperacao-senha' element={<RecuperacaoSenha />} />
        <Route path='/confirmar-email' element={<ConfirmarEmail />} />
        <Route path='/nova-senha' element={<NovaSenha />} />
        <Route path='/senha-atualizada' element={<SenhaAtualizada />} />
       
       {/*rotas cadastro*/}
       <Route path='/cadastro-inicial' element={<CadastroInicial />} />
       <Route path='/cadastro' element={< Cadastro/>} />
       <Route path='/confirmar-cadastro' element={< ConfirmarCadastro/>} />

       {/*rotas home*/}
       <Route path='home-parceiros' element={< HomeParceiros/>} />

       {/*rotas cardapio*/}
       <Route path='novo-item' element={< NovoItem/>} />
       <Route path='nnnn' element={< NovaCategoria/>} />
      
       {/*rotas restaurante*/}
        <Route path='cardapio' element={<Cardapio/>}/> 
      </Routes>
    </Router>

  );
}

export default App;
