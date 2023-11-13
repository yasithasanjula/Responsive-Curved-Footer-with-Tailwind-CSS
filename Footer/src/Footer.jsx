import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
    const  Year = new Date().getFullYear()
  return (
    <footer className='relative text-white'>
        <div className='absolute top-0 left-0 w-full overflow-hidden'>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className='relative block fill-white'></path>
            </svg>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-20 p-20 text-[18px] font-serif'>
                <div className='flex flex-col'>
                    <h2 className='text-3xl text-pink-500 uppercase mb-4'>Footer</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iste hic, 
                        laudantium eligendi quidem cum minima porro architecto quia maiores quae 
                    </p>
                </div>

                <div className='flex flex-col'>
                    
                    <ul>
                        <li className='text-[22px] list-none font-semibold text-pink-500 py-2 uppercase'>Creativity</li>
                        <li className='my-4 list-none'>Website Guidline & Ideas</li>
                        <li className='my-4 list-none'>Tips & Tricks</li>
                        <li className='my-4 list-none'>Photogriphy</li>
                    </ul>
                </div>

                <div className='flex flex-col'>
                    
                    <ul>
                        <li className='text-[22px] list-none font-semibold text-pink-500 py-2 uppercase'>Creativity</li>
                        <li className='my-4 list-none'>Guidline & Ideas</li>
                        <li className='my-4 list-none'>Tips & Tricks</li>
                        <li className='my-4 list-none'>Photogriphy</li>
                    </ul>
                </div>


                <div className='flex flex-col '>
                    
                    <ul>
                        <li className='text-[22px] list-none font-semibold text-pink-500 py-2 uppercase'>Contact</li>
                        <li className='my-4 list-none'>Email: youremail@gmail.com</li>
                        <li className='my-4 list-none'>Phone: +94717193763</li>
                    </ul>

                    <div className='flex space-x-4'>
                        <a className='text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out 'href='https://github.com/yasithasanjula'>
                            <FaGithub/>
                        </a>

                        <a className='text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out 'href='https://github.com/yasithasanjula'>
                            <FaLinkedin/>
                        </a>

                        <a className='text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out 'href='https://github.com/yasithasanjula'>
                            <FaTwitter/>
                        </a>

                        <a className='text-white hover:text-pink-500 transform hover:scale-150 transition-all duration-150 ease-in-out 'href='https://github.com/yasithasanjula'>
                            <FaInstagram/>
                        </a>
  
                    </div>                  
                </div>
            </div>
            <div className='mt-20'>
                <div className='h-full flex items-center justify-center mb-5'>
                    <form  className='w-96 relative' action="">
                        <input className='w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none focus:border border-pink-800' type="email" />
                        <button className='bg-pink-400 px-8 py-2 rounded-full text-white absolute top-0 right-0'type='Submit'>Submit</button>
                    </form>
                </div>
            </div>
            <h6 className='text-center'>&copy; Copy right Yas San {Year}</h6>
        </div>
    </footer>
  )
}

export default Footer