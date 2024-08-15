import React, { useState } from 'react';
import Sidebar from '../home/Sidebar'; // Componente da barra lateral
import { FaSearch, FaChevronDown, FaChevronUp, FaEdit, FaTrashAlt } from 'react-icons/fa'; // Ícones para pesquisa e expandir/contrair
import FormSelect from '../../components/FormSelect'; // Componente de seleção personalizado

// Função para gerar IDs únicos para itens
const generateId = () => '_' + Math.random().toString(36).substr(2, 9);

function Cardapio() {
    // Estado para armazenar categorias e itens
    const [categories, setCategories] = useState({});
    // Estado para armazenar a categoria atualmente selecionada
    const [selectedCategory, setSelectedCategory] = useState('');
    // Estado para armazenar o nome da nova categoria que será adicionada
    const [newCategory, setNewCategory] = useState('');
    // Estado para armazenar os dados do novo item (nome, preço, descrição)
    const [newItem, setNewItem] = useState({ name: '', price: '', description: '' });
    // Estado para gerenciar a expansão de categorias
    const [expandedCategories, setExpandedCategories] = useState({});

    // Função para adicionar uma nova categoria
    const handleAddCategory = () => {
        if (newCategory) {
            setCategories({ ...categories, [newCategory]: [] });
            setNewCategory(''); // Limpa o campo de entrada de categoria
            setSelectedCategory(newCategory); // Define a nova categoria como selecionada
        } else {
            alert('Digite um nome para a nova categoria.');
        }
    };

    // Função para adicionar um novo item à categoria selecionada
    const handleAddItem = () => {
        if (newItem.name && newItem.price && newItem.description && selectedCategory) {
            setCategories({
                ...categories,
                [selectedCategory]: [
                    ...categories[selectedCategory],
                    { ...newItem, id: generateId() }
                ]
            });
            setNewItem({ name: '', price: '', description: '' }); // Limpa o formulário de item
        } else {
            alert('Preencha todos os campos e selecione uma categoria.');
        }
    };

    // Função para editar um item existente
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

    // Função para excluir um item da lista
    const handleDeleteItem = (id, category) => {
        const updatedItems = categories[category].filter(item => item.id !== id);
        setCategories({ ...categories, [category]: updatedItems });
    };

    // Função para excluir uma categoria e todos os seus itens
    const handleDeleteCategory = (category) => {
        if (window.confirm('Tem certeza de que deseja excluir esta categoria?')) {
            const updatedCategories = { ...categories };
            delete updatedCategories[category]; // Remove a categoria do objeto
            setCategories(updatedCategories); // Atualiza o estado com a cópia modificada
            if (selectedCategory === category) {
                setSelectedCategory(''); // Limpa a seleção se a categoria excluída for a selecionada
            }
        }
    };

    // Função para alternar a expansão de uma categoria
    const toggleCategoryExpansion = (category) => {
        setExpandedCategories({
            ...expandedCategories,
            [category]: !expandedCategories[category]
        });
    };

    return (
        <div className="flex  flex-col  h-screen">
            <div className="flex flex-1">
                <Sidebar /> {/* Componente da barra lateral */}
                <div className="flex-1 flex flex-col m-4">
                    <div className="bg-blue-600 text-white h-40 flex items-center justify-center text-2xl font-bold w-full">
                        <h1>Cardápio</h1> {/* Título da página */}
                    </div>

                    {/* Topo da Tela */}
                    <div className="flex justify-end mb-4">
                        <span className="text-xl font-semibold text-secondary_3 mt-4">Restaurante Aberto</span>
                    </div>

                    {/* Filtros e Pesquisa */}
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

                        {/* Botão para adicionar uma nova categoria */}
                        <div className='ml-6'>
                            <button
                                onClick={handleAddCategory}
                                className="bg-blue-500 text-white py-2 px-4 rounded-xl"
                            >
                                Nova Categoria
                            </button>
                        </div>

                        {/* Seletor de Categoria */}
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

                    {/* Formulário de Nova Categoria */}
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

                    {/* Exibindo Categorias e Seus Itens */}
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

                                {/* Formulário para Adicionar Novo Item */}
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

                                        {/* Tabela de Itens da Categoria */}
                                        <table className=" table-fixed break-words w-full border-2 border-spacing-2 border-separate text-secondary_1 border-secondary_3 mb-4">
                                            <thead>
                                                <tr>
                                                    <th className="border border-secondary_3 px-4 py-2">Item</th>
                                                    <th className="border border-secondary_3 w-36 px-4 py-2">Preço</th>
                                                    <th className="border border-secondary_3  px-4 py-2">Descrição</th>
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
                                                            <td className="border border-secondary_3  px-4 py-2">
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

            {/* Footer */}
            <div className="bg-gray-800 text-white text-center p-4 w-full">
                <p className="text-sm">&copy; 2024 ifFood. Todos os direitos reservados.</p>
            </div>
        </div>
    );
}

export default Cardapio;
