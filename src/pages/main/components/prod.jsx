import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, discount, title, currentPrice, originalPrice, id }) => {
  return (
    <div className="relative  bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-4 left-50 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          -{discount}%
        </div>
      )}

      {/* Product Image */}
      {/* image будет строкой, например "/images/gl5.png" */}
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img src={image} alt={title} className="max-h-full max-w-full object-contain" />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-gray-800 text-lg font-semibold truncate mb-2">{title}</h3>
        
        {/* Кнопка "Глаз" для перехода к деталям продукта */}
        <Link to={`/info/${id}`} className="block mb-2 text-center text-gray-600 hover:text-blue-500 transition-colors duration-200">
          {/* Предполагается, что иконка FontAwesome подключена глобально */}
          <i className="fa-solid fa-eye text-xl"></i>
        </Link>
        
        <div className="flex items-baseline space-x-2">
          <span className="text-gray-900 text-2xl font-bold">${currentPrice}</span>
          {originalPrice && (
            <span className="text-gray-400 text-sm line-through">${originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;