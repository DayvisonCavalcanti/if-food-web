import React from 'react';
import Sidebar from './Sidebar';
import '../../../src/index.css';
import { FaChartLine } from 'react-icons/fa';
import { IoMdRestaurant } from 'react-icons/io';
import logo from '../../assets/iffood.png'; // Substitua pelo caminho correto da sua logo

const App = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-1">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 flex flex-col">
                    {/* Banner */}
                    <div className="bg-blue-600 text-white h-48 flex items-center justify-center text-2xl font-bold w-full">
                        Banner da Loja
                    </div>

                    <div className="flex-1 p-6  ">
                        {/* Welcome Section */}
                        <div className="flex items-center mb-6">
                            <IoMdRestaurant className="text-4xl text-green-500" />
                            <h1 className="text-3xl text-white font-bold ml-4">Bem-vindo, Usuário</h1>
                        </div>

                        {/* Loja Info Section */}
                        <div className="flex justify-between bg-white p-6 rounded-lg shadow-md mb-6">
                            <div className='flex items-center w-28'>
                                <img src={logo} alt="Logo da Loja" className="" />
                            </div>
                            <div className="flex flex-col justify-between items-center w-40">
                                <div className="flex items-center">
                                    <div className="ml-4">
                                    <FaChartLine className="text-2xl text-gray-600" />
                                        <h2 className="text-xl font-bold">Desempenho</h2>
                                <div className='flex flex-col w-40' >
                                    <h3 className="text-lg font-bold">Pedidos de Hoje</h3>
                                    <p className="text-2xl">25</p>
                                    <p className="text-sm">Ticket Médio: R$ 50,00</p>
                                </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div className='flex flex-col w-40' >
                                    <h3 className="text-lg font-bold">Vendas</h3>
                                    <p className="text-2xl">R$ 1.250,00</p>
                                    <p className="text-sm">Total de Vendas: 100</p>
                                </div>
                            </div>
                        </div>

                        {/* Cards Section */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <Card title="Função 1" />
                            <Card title="Função 2" />
                            <Card title="Função 3" />
                            <Card title="Função 4" />
                            <Card title="Função 5" />
                            <Card title="Função 6" />
                            <Card title="Função 7" />
                            <Card title="Função 8" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-800 text-white text-center p-4 w-full">
                <p className="text-sm">&copy; 2024 ifFood. Todos os direitos reservados.</p>
            </div>
        </div>
    );
};

const Card = ({ title }) => (
    <div className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition">
        <h3 className="text-lg font-semibold">{title}</h3>
    </div>
);

export default App;
