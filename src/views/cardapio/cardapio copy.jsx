import React, { useState } from 'react';
import Sidebar from '../home/Sidebar';
import { FaSearch, FaChevronDown, FaChevronUp, FaEdit, FaTrashAlt } from 'react-icons/fa';
import FormSelect from '../../componentes/FormSelect';

// Função para gerar IDs únicos para itens
const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

function Cardapio() {
    const [categories, setCategories] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newItem, setNewItem] = useState({ name: '', price: '', description: '' });
    const [expandedCategories, setExpandedCategories] = useState({});

    const handleAddCategory = () => {
        if (newCategory) {
            setCategories({ ...categories, [newCategory]: [] });
            setNewCategory('');
            setSelectedCategory(newCategory);
        } else {
            alert('Digite um nome para a nova categoria.');
        }
    };

    const handleAddItem = () => {
        if (newItem.name && newItem.price && newItem.description && selectedCategory) {
            setCategories({
                ...categories,
                [selectedCategory]: [
                    ...categories[selectedCategory],
                    { ...newItem, id: generateId() }
                ]
            });
            setNewItem({ name: '', price: '', description: '' });
        } else {
            alert('Preencha todos os campos e selecione uma categoria.');
        }
    };

    const handleEditItem = (id, category) => {
        const updatedItems = categories[category].map(item =>
            item.id === id ? {
                ...item,
                name: prompt('Novo nome:', item.name) || item.name,
                price: prompt('Novo preço:', item.price) || item.price,
                description: prompt('Nova descrição:', item.description) || item.description
            } : item
        );
        setCategories({ ...categories, [category]: updatedItems });
    };

    const handleDeleteItem = (id, category) => {
        const updatedItems = categories[category].filter(item => item.id !== id);
        setCategories({ ...categories, [category]: updatedItems });
    };

    const handleDeleteCategory = (category) => {
        if (window.confirm('Tem certeza de que deseja excluir esta categoria?')) {
            const updatedCategories = { ...categories };
            delete updatedCategories[category];
            setCategories(updatedCategories);
            if (selectedCategory === category) {
                setSelectedCategory('');
            }
        }
    };

    const toggleCategoryExpansion = (category) => {
        setExpandedCategories({
            ...expandedCategories,
            [category]: !expandedCategories[category]
        });
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <header className="bg-blue-600 text-white h-40 flex items-center justify-center text-2xl font-bold">
                        <h1>Cardápio</h1>
                    </header>

                    <div className="flex-1 flex flex-col overflow-hidden p-4">
                        <div className="flex justify-end mb-4">
                            <span className="text-xl font-semibold text-secondary_3 mt-4">Restaurante Aberto</span>
                        </div>

                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center border w-1/2 bg-white rounded-2xl overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="Pesquisar..."
                                    className="p-2 w-full outline-none"
                                />
                                <button className="p-2 text-xl flex items-center justify-center">
                                    <FaSearch className='text-secondary_1' />
                                </button>
                            </div>

                            <div className='ml-6'>
                                <button
                                    onClick={handleAddCategory}
                                    className="bg-blue-500 text-white py-2 px-4 rounded-xl"
                                >
                                    Nova Categoria
                                </button>
                            </div>

                            <div>
                                <form className='flex justify-center items-center'>
                                    <FormSelect
                                        id="category-select"
                                        name="categorySelect"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        options={[
                                            { value: '', label: 'Categoria Selecionada' },
                                            ...Object.keys(categories).map(category => ({ value: category, label: category }))
                                        ]}
                                    />
                                </form>
                            </div>
                        </div>

                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Nova Categoria"
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                                className="border rounded px-2 py-1 mr-2"
                            />
                            <button
                                onClick={handleAddCategory}
                                className="bg-blue-500 text-white py-2 px-4 rounded-xl"
                            >
                                Adicionar Categoria
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            {Object.keys(categories).map((category) => (
                                <div key={category} className="mb-6">
                                    <div className="bg-gray-100 p-4 rounded-lg">
                                        <div className="flex items-center justify-between mb-2">
                                            <button
                                                onClick={() => toggleCategoryExpansion(category)}
                                                className="text-gray-500 mr-2"
                                            >
                                                {expandedCategories[category] ? <FaChevronUp /> : <FaChevronDown />}
                                            </button>
                                            <span className="font-medium text-lg">{category}</span>
                                            <button
                                                className="text-red-500"
                                                onClick={() => handleDeleteCategory(category)}
                                            >
                                                <span className='flex justify-center items-center'>
                                                    <FaTrashAlt className='mr-2' />
                                                    Excluir Categoria
                                                </span>
                                            </button>
                                        </div>

                                        {expandedCategories[category] && (
                                            <div>
                                                <div className="mb-4">
                                                    <input
                                                        type="text"
                                                        placeholder="Nome do item"
                                                        value={newItem.name}
                                                        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                                                        className="border rounded px-2 py-1 mr-2"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Preço"
                                                        value={newItem.price}
                                                        onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                                                        className="border rounded px-2 py-1 mr-2"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Descrição"
                                                        value={newItem.description}
                                                        onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                                                        className="border rounded px-2 py-1 mr-2"
                                                    />
                                                    <button
                                                        onClick={handleAddItem}
                                                        className="bg-green-500 text-white py-2 px-4 rounded"
                                                    >
                                                        Adicionar Item
                                                    </button>
                                                </div>

                                                <table className="table-fixed break-words w-full border-2 border-spacing-2 border-separate text-secondary_1 border-secondary_3 mb-4">
                                                    <thead>
                                                        <tr>
                                                            <th className="border border-secondary_3 px-4 py-2">Item</th>
                                                            <th className="border border-secondary_3 w-36 px-4 py-2">Preço</th>
                                                            <th className="border border-secondary_3 px-4 py-2">Descrição</th>
                                                            <th className="border border-secondary_3 w-36 px-4 py-2">Ações</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {categories[category].length > 0 ? (
                                                            categories[category].map((item) => (
                                                                <tr key={item.id}>
                                                                    <td className="border border-secondary_3 px-4 py-2">{item.name}</td>
                                                                    <td className="border border-secondary_3 px-4 py-2">{item.price}</td>
                                                                    <td className="border border-secondary_3 px-4 py-2">{item.description}</td>
                                                                    <td className="border border-secondary_3 px-4 py-2">
                                                                        <div className='flex justify-center text-xl gap-4'>
                                                                            <button
                                                                                onClick={() => handleEditItem(item.id, category)}
                                                                                className="text-secondary_2"
                                                                            >
                                                                                <FaEdit/>
                                                                            </button>
                                                                            <button
                                                                                onClick={() => handleDeleteItem(item.id, category)}
                                                                                className="text-atention_02"
                                                                            >
                                                                                <FaTrashAlt />
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        ) : (
                                                            <tr>
                                                                <td colSpan="4" className="border border-gray-300 px-4 py-2 text-center">
                                                                    Nenhum item encontrado
                                                                </td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-gray-800 text-white text-center w-full p-4">
                <p className="text-sm">&copy; 2024 ifFood. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Cardapio;
