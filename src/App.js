
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ConfirmarEmail from './views/login/ConfirmarEmail';
import Login from "./views/login/Login";
import NovaSenha from './views/login/NovaSenha';
import RecuperacaoSenha from './views/login/RecuperacaoSenha';
import SenhaAtualizada from './views/login/SenhaAtualizada';

import CadastroInicial from './views/cadastro/CadastroInicial';
import ConfirmarCadastro from './views/cadastro/ConfirmarCadastro';
import Cadastro from './views/cadastro/cadastro';
import NovaCategoria from './views/cardapio/novaCategoria';
import NovoItem from './views/cardapio/novoItem';
import HomeParceiros from './views/home/HomeParceiros';

import Cardapio from "./views/cardapio/cardapio";
import ListClientes from './views/Admin/ListClientes';
import ListRestaurantes from './views/Admin/ListRestaurantes';
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


       {/*rotas admin*/}
        <Route path='list-clientes' element={<ListClientes/>}/> 
        <Route path='list-restaurantes' element={<ListRestaurantes/>}/> 
        <Route path="restaurante-detalhes/:id" element={< RestauranteDetalhes/>} />


      </Routes>
    </Router>

  );
}

export default App;
