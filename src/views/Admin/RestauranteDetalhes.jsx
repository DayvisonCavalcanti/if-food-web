import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import brandImage from '../../assets/brand-name-rest.png';

const RestauranteDetalhes = () => {
    const { id } = useParams(); // Pega o ID da URL
    const [restaurante, setRestaurante] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/restaurante/${id}`)
            .then(response => {
                setRestaurante(response.data);
            })
            .catch(error => {
                console.error("Houve um erro ao buscar os detalhes do restaurante:", error);
            });
    }, [id]);

    if (!restaurante) {
        return (
            <div
                style={{
                    background: 'linear-gradient(to top, #1F2026, black, #37383F)',
                    color: 'white',
                    padding: '20px',
                    textAlign: 'center',
                    width: '100%'
                }}
            >
                Carregando...
            </div>
        );
    }

    return (
        <div
            style={{
                background: 'linear-gradient(to top, #1F2026, black, #37383F)',
                minHeight: '100vh',
                padding: '20px',
                color: 'white',
                marginLeft: '4em'
            }}
        >
            <div
                style={{
                    color: "#BA913F",
                    marginBottom: '5em',
                    marginTop: '4em',                    
                }}
            >
                <h1
                style={{
                    fontSize: '48px',
                    fontFamily: 'Poppins, sans-serif',
                    
                }}
                >Detalhes</h1>
                <h1
                style={{
                    fontSize: '36px',
                    fontFamily: 'Poppins, sans-serif'
                    
                }}
                >{restaurante.razaoSocial}</h1>
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'flex-start', // Alinha itens no início do container
                    width: '50%'
                }}
            >
                <div
                    style={{
                        flex: 1
                    }}
                >
                    <h3
                    style={{
                        marginTop: '2em',
                        fontFamily: 'Poppins, sans-serif'
                        
                    }}
                    >
                        CNPJ: {restaurante.cnpj} <br />
                        Endereço: {restaurante.rua}, {restaurante.numero}, {restaurante.bairro} <br />
                        Cidade: {restaurante.cidade} <br />
                        Estado: {restaurante.estado} <br />
                        CEP: {restaurante.cep}

                    </h3>
                </div>
                <div style={{ flexShrink: 0 }}>
                    <img
                        src={brandImage}
                        alt={`Imagem do ${restaurante.razaoSocial}`}
                        style={{ maxWidth: '300px', maxHeight: '200px', borderRadius: '200px' }}
                    />
                </div>
            </div>

            <div
            style={{
                background: 'white',
                width: '75%',
                height: '10em',
                marginTop: '5em',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'

            }}
            >
                <h2
                style={{
                    color: '#1C4F2A',
                    marginLeft: '1em',
                    fontFamily: 'Poppins, sans-serif'
                }}
                >Categoria: {restaurante.categoriasEnum}</h2>
            </div>
        </div>
    );
}

export default RestauranteDetalhes;