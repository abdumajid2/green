import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Info = () => {
  let { id } = useParams();
  const api = 'http://localhost:3003/products';
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); // Новое состояние для количества

  useEffect(() => {
    const getProductById = async () => {
      setLoading(true);
      setError(null);
      try {
        let { data } = await axios.get(`${api}/${id}`);
        setProduct(data);
      } catch (err) {
        console.error("Ошибка при получении информации о товаре:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getProductById();
    }
  }, [id]);

  const handleDecrement = () => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };




  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-lg text-gray-700">Загрузка информации о товаре...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <p className="text-lg text-red-600">Ошибка при загрузке информации о товаре:</p>
        <p className="text-sm text-gray-500 mt-2">{error.message}</p>
        <p className="text-sm text-gray-500 mt-2 text-center">
          Убедитесь, что json-server запущен на порту 3002 и товар с ID="{id}" существует.
        </p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-lg text-gray-700">Товар не найден.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
  
        <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-50">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-96 w-auto object-contain rounded-lg shadow-md"
          />
        </div>

     
        <div className="md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>

      
          <div className="flex items-baseline space-x-3 mb-6">
            <span className="text-4xl font-extrabold text-gray-900">${product.currentPrice}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
            )}
            {product.discount && (
              <span className="bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded-full">
                -{product.discount}%
              </span>
            )}
          </div>

          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={handleDecrement}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-l-md"
              >
                -
              </button>
              <span className="px-4 py-2 border-l border-r border-gray-300 text-gray-800">
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-r-md"
              >
                +
              </button>
            </div>
            <button
              
              className="flex-grow bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Add to cart
            </button>
          </div>

          
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Description</h2>
            {product.description && (
              
              <p className="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">
                {product.description}
         
                {product.description.length > 200 && ( 
                  <a href="#" className="text-blue-600 hover:underline ml-1">Read more</a>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;