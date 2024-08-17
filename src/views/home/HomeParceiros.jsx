import React from 'react';
import { FaChartLine } from 'react-icons/fa';
import { IoMdRestaurant } from 'react-icons/io';
import { Link } from 'react-router-dom';
import '../../../src/index.css';
import gerencieCardapio from '../../assets/gerencieCardapio.png';
import gerenciePedidos from '../../assets/gerenciePedidos.png';
import logo from '../../assets/iffood.png'; // Substitua pelo caminho correto da sua logo
import Sidebar from '../../componentes/Sidebar';


const cardsData = [
    {
        id: 1,
        image: gerencieCardapio,
        label: 'Destaque',
        link: "/cardapio",
        highlight: false,
    },
    {
        id: 2,
        image: gerenciePedidos,
        label: 'Card 2',
        highlight: false,
    },


];

function HomeParceiros() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-1 overflow-hidden ">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-y-auto">
                    {/* Banner */}
                    <div className="bg-blue-600 text-white h-48 flex items-center justify-center text-2xl font-bold mr-10 ml-5 my-4 rounded-2xl">
                        Banner da Loja
                    </div>

                    <div className="flex-1 p-6 overflow-auto">
                        {/* Welcome Section */}
                        <div className="flex items-center mb-4">
                            <IoMdRestaurant className="text-4xl text-secondary_2" />
                            <h1 className="text-3xl text-white font-bold ml-4">Bem-vindo, Usuário</h1>
                        </div>

                        {/* Loja Info Section */}
                        <div className="flex flex-col bg-white p-6 rounded-lg w-full mb-4 text-secondary_1">
                            <div className="flex items-center mb-4">
                                <img src={logo} alt="Logo da Loja" className="w-36" />
                                <div className="ml-4 flex flex-col flex-grow">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-xl font-bold">Nome da Loja</h2>
                                        <p className="text-secondary_3">Acompanhamento</p>
                                        <p className="text-atention_02">Fechar Agora</p>
                                    </div>
                                    <div className="flex flex-wrap justify-between">
                                        <div className="flex flex-col items-center w-full lg:w-1/3 mb-4">
                                            <div className="flex items-center mb-4">
                                                <FaChartLine className="text-2xl text-secondary_1 mr-4" />
                                                <h2 className="text-xl font-bold">Desempenho</h2>
                                            </div>
                                            <div className="flex justify-between w-full">
                                                <div className="flex flex-col mr-8">
                                                    <h3 className="text-lg font-bold text-secondary_2">Pedidos de Hoje</h3>
                                                    <p className="text-2xl">25 pedidos</p>
                                                </div>
                                                <div className="flex flex-col">
                                                    <h3 className="text-lg font-bold text-secondary_2">Ticket Médio</h3>
                                                    <p className="text-2xl">R$ 50,00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center w-full lg:w-1/3 mb-4">
                                            <div className="flex items-center mb-4">
                                                <FaChartLine className="text-2xl text-secondary_1 mr-4" />
                                                <h2 className="text-xl font-bold">Vendas</h2>
                                            </div>
                                            <div className="flex justify-between w-full">
                                                <div className="flex flex-col mr-8">
                                                    <h3 className="text-lg font-bold text-secondary_2">Total de Vendas</h3>
                                                    <p className="text-2xl">100</p>
                                                </div>
                                                <div className="flex flex-col">
                                                    <h3 className="text-lg font-bold text-secondary_2">Valor Total</h3>
                                                    <p className="text-2xl">R$ 1.250,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cards Section */}
                        <div className="flex h-80 justify-center text-secondary1 ">
                            {cardsData.map(card => (
                                <div
                                    key={card.id}
                                    className={'flex justify-center items-center '}
                                >
                                    {/* Condicional para conteúdo específico */}
                                    <div className="relative  flex justify-center">
                                        <Link to={card.link} className="relative block">
                                            <img className="w-5/6" src={card.image} alt={card.label} />
                                            {card.highlight && (
                                                <span className="">
                                                    {card.label}
                                                </span>
                                            )}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gradient-to-t from-[#1F2026] via-#1c1918 to-[#37383F] text-secondary_3 py-4 text-center">
                <p>&copy; 2024 Seu Restaurante. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default HomeParceiros;
