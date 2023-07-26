import React, { useState } from 'react'
import inout from '../item/inout.png'
import '../App.css'
import logo from '../item/logo.png'
export default function Degine({check}) {
    // const [check, setcheck] = useState(checks)
    const element = []
    for (let i = 0; i < 13; i++) {
        element.push(
            <fieldset className='border border-sky-300 rounded-xl sm:h-14 h-10 sm:pl-6 pl-2 '>
                <legend className='sm:px-2  text-sm'>Field</legend>

            </fieldset>
        )
    }
    const N = 15
    return (
        <>
            <div className=' h-5/6'>
                <main className='flex w-screen h-full '>
                    <div className={` ${check && 'fixed blur-md'} sm:w-4/6 w-full  scroll-my-6 overflow-y-auto custom-scrollbar h-full space-y-6 pt-6 p-2`}>
                        <div className='space-y-2 '>
                            <div className='flex justify-between '>
                                <div>
                                    <img src={inout} alt="inout" className='h-10 ' />
                                </div>
                                <div className='flex items-center sm:space-x-3 space-x-1'>
                                    <input type="text" placeholder='search' className='h-6 md:w-52 sm:w-40 w-20 shadow-lg border pl-2' name="search" id="search" />
                                    <button className='sm:text-lg text-xs text-sky-800 h-8 rounded-md hover:shadow-md hover:shadow-sky-200 px-1  bg-gradient-to-r to-sky-500 via-green-300 from-lime-200' type='submit'>New Gate Pass</button>
                                </div>
                            </div>
                            <div>
                                <ul className='grid sm:grid-cols-4 space-x-3 grid-cols-2 space-y-2 '>
                                    <li className='border-2 h-20 rounded-xl border-sky-300 mt-2 m-3 sm:m-0 sm:mt-2'>
                                        <div className='flex items-center space-x-2'>
                                            <h4>Stock</h4>
                                            <img className='h-2 ' src="https://img.icons8.com/ios/50/cancel.png" alt="cancel" />
                                        </div>
                                        <div>
                                            <h3>100,000</h3>
                                        </div>
                                    </li>
                                    <li className='border-2 h-20 rounded-xl border-sky-300 '>
                                        <div className='flex items-center space-x-2'>
                                            <h4>Stock</h4>
                                            <img className='h-2 ' src="https://img.icons8.com/ios/50/cancel.png" alt="cancel" />
                                        </div>
                                        <div>
                                            <h3>100,000</h3>
                                        </div>
                                    </li>
                                    <li className='border-2 h-20 rounded-xl border-sky-300 '>
                                        <div className='flex items-center space-x-2'>
                                            <h4>Stock</h4>
                                            <img className='h-2 ' src="https://img.icons8.com/ios/50/cancel.png" alt="cancel" />
                                        </div>
                                        <div>
                                            <h3>100,000</h3>
                                        </div>
                                    </li>
                                    <li className='border-2 h-20 rounded-xl border-sky-300 '>
                                        <div className='flex items-center space-x-2'>
                                            <h4>Stock</h4>
                                            <img className='h-2 ' src="https://img.icons8.com/ios/50/cancel.png" alt="cancel" />
                                        </div>
                                        <div>
                                            <h3>100,000</h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='border border-sky-300'>
                            <div className=' bg-gradient-to-r from-emerald-300 via-sky-300 to-blue-300'>
                                <div className='flex  items-center justify-between border-sky-600 px-2'>
                                    <div className='flex items-center'>
                                        <p className='sm:h-10 h-7 w-7 sm:w-10 rounded-full border border-sky-600 bg-gradient-to-r from-emerald-400 to-sky-400 text-white m-1'></p>
                                        <p className='sm:text-lg text-[10px] pl-3 flex items-center p-2 h-10 rounded-full border border-sky-600 bg-gradient-to-r from-emerald-400 to-sky-400 text-white m-1 '>Slip Number #123456</p>
                                        <p className='hidden sm:block p-2 h-10 rounded-full border border-sky-600 bg-gradient-to-r from-emerald-400 to-sky-400 text-white m-1'> Loading</p>
                                        <p className='hidden sm:block p-2 h-10 rounded-full border border-sky-600 bg-gradient-to-r from-emerald-400 to-sky-400 text-white m-1'> Loading</p>
                                    </div>
                                    <div className='flex items-center sm:space-x-6'>
                                        <div className='flex space-x-1'>
                                            <div className='hidden sm:block'>
                                                <input  type="range" name="r" id="r" /> 75%
                                            </div>
                                            <button className='border border-sky-100 bg-sky-100 rounded-md cursor-pointer hover:shadow-lg hover:shadow-sky-100'>
                                                <img className='h-5 w-5' src="https://img.icons8.com/fluency-systems-regular/48/000000/edit--v1.png" alt="edit--v1" />
                                            </button>
                                            <button className='border border-sky-100 bg-sky-100 rounded-md cursor-pointer hover:shadow-lg hover:shadow-sky-100'>
                                                <img className='h-5 w-5' src="https://img.icons8.com/ios/50/000000/pause--v1.png" alt="pause--v1" />
                                            </button>
                                            <button className='border border-sky-100 bg-sky-100 rounded-md cursor-pointer hover:shadow-lg hover:shadow-sky-100'>
                                                <img className='h-5 w-5' src="https://img.icons8.com/ios/50/000000/play--v1.png" alt="play--v1" />
                                            </button>
                                            <button className='border border-sky-100 bg-sky-100 rounded-md cursor-pointer hover:shadow-lg hover:shadow-sky-100'>
                                                <img className='h-5 w-5' src="https://img.icons8.com/pastel-glyph/64/000000/download--v1.png" alt="download--v1" />
                                            </button>
                                            <button className='border border-sky-100 bg-sky-100 rounded-md cursor-pointer hover:shadow-lg hover:shadow-sky-100'>
                                                <img className='h-5 w-5' src="https://img.icons8.com/fluency-systems-regular/48/000000/chain.png" alt="chain" />
                                            </button>
                                        </div>
                                        <div>
                                            <ul className='hidden sm:flex'>
                                                <li>
                                                    <img className='h-5 w-5' src="https://img.icons8.com/ios-filled/50/filled-star.png" alt="filled-star" />
                                                </li>
                                                <li>
                                                    <img className='h-5 w-5' src="https://img.icons8.com/ios-filled/50/filled-star.png" alt="filled-star" />
                                                </li>
                                                <li>
                                                    <img className='h-5 w-5' src="https://img.icons8.com/ios-filled/50/filled-star.png" alt="filled-star" />
                                                </li>
                                                <li>
                                                    <img className='h-5' src="https://img.icons8.com/ios-glyphs/30/000000/star-half-empty.png" alt="star-half-empty" />
                                                </li>
                                                <li>
                                                    <img className='h-5 w-5' src="https://img.icons8.com/ios/50/000000/star--v1.png" alt="star" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-4 sm:grid-cols-7 space-x-3 space-y-3 pb-5 sm:pr-28 pr-14'>
                                <div className='pt-3 pl-3'>
                                    <fieldset className='border border-sky-300 rounded-xl h-10 sm:h-14 pl-1'>
                                        <legend className='sm:px-2 px-1 sm:text-sm  text-[8px]'>Truck Number</legend>
                                        <p className='sm:text-xs text-[8px] sm:p-1 '>HR29 BD 2345</p>

                                    </fieldset>
                                </div>

                                {element}

                            </div>
                            <div>
                                <div className='bg-gradient-to-r from-emerald-300 via-sky-300 to-blue-300  h-10 flex justify-end items-center opacity-70 '>
                                    <img className='w-5 h-5' src="https://img.icons8.com/ios/50/expand-arrow--v2.png" alt="expand-arrow--v2" />
                                </div>
                            </div>
                            <div>
                                <div className='bg-gradient-to-r from-emerald-100 via-sky-100 to-blue-100  h-32 flex justify-end items-center opacity-50 '>

                                </div>
                            </div>
                        </div>
                        <div className='border border-sky-300'>
                            <div className=' bg-gradient-to-r from-emerald-300 via-sky-300 to-blue-300'>
                                <div className='flex  items-center justify-between border-sky-600 px-2'>
                                    <div className='flex items-center'>
                                        <p className='sm:h-10 h-7 w-7 sm:w-10 rounded-full border border-sky-600 bg-gradient-to-r from-emerald-400 to-sky-400 text-white m-1'></p>
                                        <p className='sm:text-lg text-[10px] pl-3 flex items-center p-2 h-10 rounded-full border border-sky-600 bg-gradient-to-r from-emerald-400 to-sky-400 text-white m-1 '>Slip Number #123456</p>
                                        <p className='hidden sm:block p-2 h-10 rounded-full border border-sky-600 bg-gradient-to-r from-emerald-400 to-sky-400 text-white m-1'> Loading</p>
                                        <p className='hidden sm:block p-2 h-10 rounded-full border border-sky-600 bg-gradient-to-r from-emerald-400 to-sky-400 text-white m-1'> Loading</p>
                                    </div>
                                    <div className='flex items-center sm:space-x-6'>
                                        <div className='flex space-x-1'>
                                            <div className='hidden sm:block'>
                                                <input  type="range" name="r" id="r" /> 75%
                                            </div>
                                            <button className='border border-sky-100 bg-sky-100 rounded-md cursor-pointer hover:shadow-lg hover:shadow-sky-100'>
                                                <img className='h-5 w-5' src="https://img.icons8.com/fluency-systems-regular/48/000000/edit--v1.png" alt="edit--v1" />
                                            </button>
                                            <button className='border border-sky-100 bg-sky-100 rounded-md cursor-pointer hover:shadow-lg hover:shadow-sky-100'>
                                                <img className='h-5 w-5' src="https://img.icons8.com/ios/50/000000/pause--v1.png" alt="pause--v1" />
                                            </button>
                                            <button className='border border-sky-100 bg-sky-100 rounded-md cursor-pointer hover:shadow-lg hover:shadow-sky-100'>
                                                <img className='h-5 w-5' src="https://img.icons8.com/ios/50/000000/play--v1.png" alt="play--v1" />
                                            </button>
                                            <button className='border border-sky-100 bg-sky-100 rounded-md cursor-pointer hover:shadow-lg hover:shadow-sky-100'>
                                                <img className='h-5 w-5' src="https://img.icons8.com/pastel-glyph/64/000000/download--v1.png" alt="download--v1" />
                                            </button>
                                            <button className='border border-sky-100 bg-sky-100 rounded-md cursor-pointer hover:shadow-lg hover:shadow-sky-100'>
                                                <img className='h-5 w-5' src="https://img.icons8.com/fluency-systems-regular/48/000000/chain.png" alt="chain" />
                                            </button>
                                        </div>
                                        <div>
                                            <ul className='hidden sm:flex'>
                                                <li>
                                                    <img className='h-5 w-5' src="https://img.icons8.com/ios-filled/50/filled-star.png" alt="filled-star" />
                                                </li>
                                                <li>
                                                    <img className='h-5 w-5' src="https://img.icons8.com/ios-filled/50/filled-star.png" alt="filled-star" />
                                                </li>
                                                <li>
                                                    <img className='h-5 w-5' src="https://img.icons8.com/ios-filled/50/filled-star.png" alt="filled-star" />
                                                </li>
                                                <li>
                                                    <img className='h-5' src="https://img.icons8.com/ios-glyphs/30/000000/star-half-empty.png" alt="star-half-empty" />
                                                </li>
                                                <li>
                                                    <img className='h-5 w-5' src="https://img.icons8.com/ios/50/000000/star--v1.png" alt="star" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-4 sm:grid-cols-7 space-x-3 space-y-3 pb-5 sm:pr-28 pr-14'>
                                <div className='pt-3 pl-3'>
                                    <fieldset className='border border-sky-300 rounded-xl h-10 sm:h-14 pl-1'>
                                        <legend className='sm:px-2 px-1 sm:text-sm  text-[8px]'>Truck Number</legend>
                                        <p className='sm:text-xs text-[8px] sm:p-1 '>HR29 BD 2345</p>

                                    </fieldset>
                                </div>

                                {element}

                            </div>
                            <div>
                                <div className='bg-gradient-to-r from-emerald-300 via-sky-300 to-blue-300  h-10 flex justify-end items-center opacity-70 '>
                                    <img className='w-5 h-5' src="https://img.icons8.com/ios/50/expand-arrow--v2.png" alt="expand-arrow--v2" />
                                </div>
                            </div>
                            <div>
                                <div className='bg-gradient-to-r from-emerald-100 via-sky-100 to-blue-100  h-32 flex justify-end items-center opacity-50 '>

                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className={`h-full sm:w-2/6  sm:block md:block space-y-2 ${check ? 'w-full z-20 relative block' : 'hidden '}`}>
                        <div className=' h-2/4 w-full p-2 flex items-center justify-center bg-gradient-to-r from-sky-400 from-10% via-sky-500 via-40% to-emerald-200 to-90% '>
                        <div className='border rounded-lg border-sky-100 h-5/6 w-11/12'>
                        <div className='flex p-2 space-x-1 items-center'>
                            <img src={logo} alt="logo" className='w-10 rounded-full' /> 
                            <p className='sm:text-xs md:text-lg'>Hi, Keval Here Choose one option</p>
                        </div>
                        <div>
                            <ul className='p-2 md:flex space-x-2 items-center pl-12 sm:grid sm:grid-cols-2 sm:space-y-1'>
                                <li className='sm:mt-1 p-2 border border-sky-200 rounded-lg sm:text-xs md:text-lg'>Menu</li>
                                <li className='p-2 border border-sky-200 rounded-lg sm:text-xs md:text-lg'>Notification</li>
                                <li className='p-2 border border-sky-200 rounded-lg sm:text-xs md:text-lg'>Most Searched</li>
                            </ul>
                        </div>

                        </div>

                        </div>
                        <div className='h-1/4 m-2 w-11/12 flex items-center justify-center border-sky-400 border-2 rounded-lg'>
                        <ul className='grid grid-cols-3 grid-rows-3 h-1/4 w-1/4 border border-sky-300 rounded-lg'>
                            <li className='  col-span-3  border-sky-300'></li>
                            <li className=' row-span-2 border-t border-sky-300 '></li>
                            <li className=' row-span-2 col-span-2 border-t border-l border-sky-300 '></li>
                        </ul>

                        </div>
                        <div className='h-1/4 m-2 w-11/12 flex items-center justify-center border-sky-400 border-2 rounded-lg'>
                        <ul className='grid grid-cols-3 grid-rows-3 h-1/4 w-1/4 border border-sky-300 rounded-lg'>
                            <li className='  col-span-3  border-sky-300'></li>
                            <li className=' row-span-2 border-t border-sky-300 '></li>
                            <li className=' row-span-2 col-span-2 border-t border-l border-sky-300 '></li>
                        </ul>

                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}
