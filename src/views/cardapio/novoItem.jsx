import React, { useState, useEffect } from 'react';

function NovoItem({ onClose, onAddItem, selectedCategory, itemToEdit }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (itemToEdit) {
      setName(itemToEdit.name);
      setPrice(itemToEdit.price);
      setDescription(itemToEdit.description);
      setImage(itemToEdit.image);
    } else {
      setName('');
      setPrice('');
      setDescription('');
      setImage(null);
    }
  }, [itemToEdit]);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSave = () => {
    if (!name || !price || !description || !selectedCategory || !image) {
      alert('Preencha todos os campos e selecione uma imagem.');
      return;
    }

    onAddItem({
      name,
      price,
      description,
      image
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-opacity-75 flex items-center justify-center">
      <div className="bg-gradient-to-t from-[#1F2026] via-black to-[#37383F] p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
        <div className="flex justify-between items-center mb-4">
          <button className="text-secondary_3_variant hover:text-secondary_3" onClick={onClose}>
            Voltar
          </button>
          <div className="text-right">
            <p className="font-semibold text-secondary_3_variant">Restaurante Aberto</p>
            <p className="text-sm text-secondary_2">Dentro do horário programado</p>
          </div>
        </div>
        <h2 className="text-3xl text-secondary_3_variant font-semibold mb-4">
          {itemToEdit ? 'Editar Item' : 'Novo Item'}
        </h2>
        <div className="mb-4">
          <label className="block text-secondary_3_variant">Nome do Item</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Nome do Item"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4 flex space-x-4">
          <div className="w-1/3">
            <label className="block text-secondary_3_variant">Preço</label>
            <input
              type="number"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Preço"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="w-2/3">
            <label className="block text-secondary_3_variant">Categoria</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Categoria"
              value={selectedCategory}
              readOnly
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-secondary_3_variant">Descrição</label>
          <textarea
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-secondary_3_variant">Upload de Imagem</label>
          <input
            type="file"
            className="mt-1 block w-1/2 p-2 border border-gray-300 rounded-md"
            accept=".jpeg, .jpg, .png"
            onChange={handleImageChange}
          />
          {image && <img src={image} alt="Preview" className="mt-2 w-32 h-32 object-cover" />}
          <p className="text-sm text-secondary_3_variant mt-2">
            Formatos: JPEG, JPG, PNG<br />
            Peso máximo: 20MB
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="bg-secondary_1 hover:bg-secondary_2 text-white text-2xl font-bold py-2 px-4 rounded w-48"
            onClick={handleSave}
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

export default NovoItem;
