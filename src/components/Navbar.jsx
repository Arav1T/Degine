import React from 'react'
import logo_img from '../item/logo_img.gif'
import logo from '../item/logo.png'

export default function Navbar({ShowHide}) {
    // console.log(window.screen)
    return (
        <div>
            <nav className='flex justify-between p-2 bg-gradient-to-r from-sky-400 from-10% via-sky-500 via-40% to-emerald-200 to-90% '>
                <div className='flex items-center space-x-4'>
                    <div>
                        <img src={logo_img} className='rounded-full h-20 w-20' alt="" />
                    </div>
                    <div>
                        <h1 className='to-blue-200 text-sky-50 hover:animate-bounce'>ADHARSH FOOD PRODUCTS</h1>
                    </div>
                </div>
                <div className='flex items-center space-x-4'>
                    <div>
                        <img src={logo} className='rounded-full h-14 w-14' alt="" />
                    </div>
                    <div>
                        <details onClick={ShowHide}>
                            <summary></summary>
                        </details>
                    </div>
                </div>
            </nav>
        </div>
    )
}
