import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import log from '../../assets/ssd.png'
import foot from '../../assets/foot.png'

const Layout = () => {
    const [isVisible, setIsVisible] = useState(true); // Состояние видимости навбара
  const [lastScrollY, setLastScrollY] = useState(0); // Последняя позиция скролла

  // Функция для обработки события скролла
  const handleScroll = () => {
    // Если пользователь скроллит вниз и позиция скролла больше определенного порога (например, 100px)
    // и навбар в данный момент виден, то скрываем его
    if (window.scrollY > lastScrollY && window.scrollY > 100 && isVisible) {
      setIsVisible(false);
    } 
    // Если пользователь скроллит вверх (или находится в верхней части страницы)
    // и навбар скрыт, то показываем его
    else if (window.scrollY < lastScrollY || window.scrollY < 10) { // <10 для показа навбара в самом верху
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY); // Обновляем последнюю позицию скролла
  };
  useEffect(() => {
    // Добавляем слушатель события скролла при монтировании компонента
    window.addEventListener('scroll', handleScroll);

    // Удаляем слушатель события скролла при размонтировании компонента
    // Это важно для предотвращения утечек памяти
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isVisible]);
  return (
    <div>
        <section className='max-w-4/5 m-auto p-4 flex flex-col gap-[2rem]'>

        <header >
           <nav
      className={`
        fixed top-0 left-1/2 -translate-x-1/2 flex 
        lg:w-[78%] h-20 justify-between items-center 
        bg-white/60 p-4 shadow-md z-50
        transition-transform duration-300 ease-in-out 
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        backdrop-blur-sm
      `}
    >
                <img src={log} alt="" />
                <div className='flex font-semibold gap-[5rem]'>

                <Link to='/'>
                <p className='hover:text-green-500'>Main Page</p>
                </Link>
                <Link to='/categories'>
                <p className='hover:text-green-500'>Categories</p>
                </Link>
                <Link to='/products'>
                <p className='hover:text-green-500'>All products</p>
                </Link>
                </div>
                <i className="fa-solid text-3xl hover:text-green-500 fa-bag-shopping"></i>
            </nav>
        </header><br />
        <main>
            <Outlet/>
        </main>
        <footer>
            <section className='flex flex-col gap-4'>
                <h2 className='text-5xl font-bold'>Contact</h2>
                <article className='flex justify-between'>
                    <div className='flex flex-col gap-4 bg-gray-300 p-4 w-[600px] rounded-lg'>
                        <p className='text-xl opacity-50'>Phone</p>
                        <h2 className='text-4xl font-semibold'>+7 (499) 350-66-04</h2>
                    </div>
                    <div className='flex flex-col gap-4 bg-gray-300 w-[400px] p-4 rounded-lg'>
                        <p className='text-xl opacity-50'>Socials</p>
                        <div>
                            <i class="fa-brands text-3xl m-2 font-bold fa-instagram"></i>
                            <i class="fa-brands text-3xl m-2 font-bold fa-whatsapp"></i>
                        </div>
                    </div>
                </article>
                <article className='flex justify-between'>
                    <div className='flex flex-col gap-4 bg-gray-300 p-4 w-[600px] rounded-lg'>
                        <p className='text-xl opacity-50'>Address</p>
                        <h2 className='text-4xl font-semibold'>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</h2>
                    </div>
                    <div className='flex flex-col gap-4 bg-gray-300 w-[400px] p-4 rounded-lg'>
                        <p className='text-xl opacity-50'>Working Hours</p>
                        <h2 className='text-4xl font-semibold'>24 hours a day</h2>
                    </div>
                </article>
                <img src={foot} alt="" />
            </section>
        </footer>
        </section>
    </div>
  )
}

export default Layout