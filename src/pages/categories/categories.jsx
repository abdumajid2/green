import React from 'react'
import gl1 from '../main/images/gl1.png'
import gl2 from '../main/images/gl2.png'
import gl3 from '../main/images/gl3.png'
import gl4 from '../main/images/gl4.png'

const Categories = () => {
  return (
    <div>
        <section>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-4xl font-bold'>Categories</h2>
                        
                    </div>
                    <br /> <br />
                    <article className='flex text-center gap-5'>
                        <div>
                            <img src={gl1} alt="" />
                            <p>Fertilizer</p>
                        </div>
                        <div>
                            <img src={gl2} alt="" />
                            <p>Protective products and septic <br /> tanks</p>
                        </div>
                        <div>
                            <img src={gl3} alt="" />
                            <p>Planting material</p>
                        </div>
                        <div>
                            <img src={gl4} alt="" />
                            <p>Tools and equipment</p>
                        </div>
                    </article>
                </section>
    </div>
  )
}

export default Categories