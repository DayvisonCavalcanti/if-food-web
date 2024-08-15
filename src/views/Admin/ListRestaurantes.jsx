import React, { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ListRestaurantes = () => {
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [categoriasEnum, setCategoriaEnum] = useState('');
  const [restaurantes, setRestaurantes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/restaurante')
      .then(response => {
        setRestaurantes(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  const handleNomeFantasiaChange = (e) => {
    setNomeFantasia(e.target.value);
  };

  const handleCnpjChange = (e) => {
    setCnpj(e.target.value);
  };

  const handleCategoriaEnumChange = (e) => {
    setCategoriaEnum(e.target.value);
  };

  const filteredRestaurantes = restaurantes.filter(restaurante =>
    restaurante.nomeFantasia.includes(nomeFantasia) &&
    restaurante.cnpj.includes(cnpj) &&
    restaurante.categoriasEnum.includes(categoriasEnum)
  );

  const handleDetailsClick = (id) => {
    navigate(`/restaurante-detalhes/${id}`);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to top, #1F2026, black, #37383F)',
      padding: '20px'
    }}>
      <h1 style={{ paddingTop:"90px", paddingLeft: "5em", paddingBottom: "2em", fontSize: "2em", color: "#BA913F" }}>Restaurantes</h1>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '5px', 
          width: '90%', 
          marginBottom: '5px'
        }}>
          <Icon name='search' style={{ marginRight: '10px', color: "#1C4F2A", fontSize: "2em" }} />
          <div style={{ display: 'flex', alignItems: 'center', width: '30%' }}>
            <input
              type="text"
              placeholder="Buscar por Nome"
              value={nomeFantasia}
              onChange={handleNomeFantasiaChange}
              style={{ 
                paddingLeft: '10px', 
                width: '100%', 
                backgroundColor: "#E3E3E3", 
                borderRadius:"5px", 
                padding: '10px'
              }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', width: '20%' }}>
            <input
              type="text"
              placeholder="Buscar por CNPJ"
              value={cnpj}
              onChange={handleCnpjChange}
              style={{ 
                paddingLeft: '10px', 
                width: '100%', 
                backgroundColor: "#E3E3E3", 
                borderRadius:"5px", 
                padding: '10px'
              }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', width: '30%' }}>
            <input
              type="text"
              placeholder="Buscar por Categoria"
              value={categoriasEnum}
              onChange={handleCategoriaEnumChange}
              style={{ 
                paddingLeft: '10px', 
                width: '100%', 
                backgroundColor: "#E3E3E3", 
                borderRadius:"5px", 
                padding: '10px'
              }}
            />
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          padding: '10px',  
          width: '91%', 
          overflowX: 'auto',
        }}>
          <table style={{ backgroundColor: 'white', width: '100%', borderRadius: '10px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px', color: "#1C4F2A" }}>Nome Fantasia</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', color: "#1C4F2A" }}>CNPJ</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', color: "#1C4F2A" }}>Categoria</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', color: "#1C4F2A" }}>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              {filteredRestaurantes.map((restaurante) => (
                <tr key={restaurante.id}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{restaurante.nomeFantasia}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{restaurante.cnpj}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{restaurante.categoriasEnum}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                    <Icon name='plus' style={{ cursor: 'pointer', color: "#BA913F" }} onClick={() => handleDetailsClick(restaurante.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListRestaurantes;