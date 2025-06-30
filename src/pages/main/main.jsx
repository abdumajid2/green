import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './components/prod';
import './main.css'
import gl1 from './images/gl1.png'
import gl2 from './images/gl2.png'
import gl3 from './images/gl3.png'
import gl4 from './images/gl4.png'
import od2 from './images/od2.png'

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3003/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        setProducts(data);
      } catch (e) {
        console.error("Failed to fetch products:", e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-lg text-gray-700">Загрузка товаров...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-lg text-red-600">Ошибка при загрузке: {error.message}</p>
        <p className="text-sm text-gray-500 mt-2">Убедитесь, что json-server запущен на порту 3001.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <section className='dd'> 
        <div className='w-[950px] flex flex-col gap-5 items-start justify-center text-white'>
          <h1 className='text-[70px] font-bold leading-tight'>Amazing Discounts <br /> on Garden Products!</h1>
          <button className='text-lg cursor-pointer font-semibold bg-[#339933] rounded-md px-7 py-2 hover:bg-[#2e8a2e] transition-colors duration-200'>Check out</button>
        </div>
      </section>
      <br /><br />

      <section className='container mx-auto px-4'> 
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-4xl font-bold'>Categories</h2>
          <div className='border-t border-gray-400 flex-grow mx-4 mt-2'></div>
          <Link to='/categories' className=''>
            <p className='opacity-50 border border-gray-400 p-1 rounded-md text-sm hover:opacity-100 transition-opacity'>All categories</p>
          </Link>
        </div>
        <br />
        <article className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center'>
          <div>
            <img src={gl1} alt="Fertilizer" className="mx-auto" />
            <p className="mt-2">Fertilizer</p>
          </div>
          <div>
            <img src={gl2} alt="Protective products and septic tanks" className="mx-auto" />
            <p className="mt-2">Protective products and septic <br /> tanks</p>
          </div>
          <div>
            <img src={gl3} alt="Planting material" className="mx-auto" />
            <p className="mt-2">Planting material</p>
          </div>
          <div>
            <img src={gl4} alt="Tools and equipment" className="mx-auto" />
            <p className="mt-2">Tools and equipment</p>
          </div>
        </article>
      </section>
      <br /><br />

      <section className='bg-gradient-to-r from-[#339933] to-[#0B710B] rounded-2xl p-5 text-white container mx-auto'> {/* Добавил контейнер */}
        <h2 className='text-center text-5xl font-bold mb-8'>5% off on the first order</h2>
        <article className='flex flex-col md:flex-row items-center justify-center gap-8'> 
          <img src={od2} alt="Discount image" className="max-w-ws" /> 
          <div className='flex flex-col gap-3 w-full md:w-auto'>
            <input className='border border-white p-2 w-full md:w-[350px] rounded-md text-black' type="text" placeholder='Name' />
            <input className='border border-white p-2 w-full md:w-[350px] rounded-md text-black' type="text" placeholder='Phone number'/>
            <input className='border border-white p-2 w-full md:w-[350px] rounded-md text-black' type="text" placeholder='Email' />
            <button className='bg-white p-2 text-black rounded-lg hover:bg-gray-200 transition-colors duration-200'>Get a discount</button>
          </div>
        </article>
      </section>
      <br /><br />

       <section className='container mx-auto px-4'>
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-4xl font-bold'>Sale</h2>
          <div className='border-t border-gray-400 flex-grow mx-4 mt-2'></div> 
          <p className='opacity-50 border border-gray-400 p-1 rounded-md text-sm hover:opacity-100 transition-opacity'>All sales</p>
        </div>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image} 
              discount={product.discount}
              title={product.title}
              currentPrice={product.currentPrice}
              originalPrice={product.originalPrice}
              id={product.id} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Main;