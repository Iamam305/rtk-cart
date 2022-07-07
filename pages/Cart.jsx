import React from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'
const Cart = () => {
    const dispatch = useDispatch();
    const productsInCart = useSelector((state) => state.cart)
    const handleRemove =(id) =>{
        dispatch(remove(id))
    }
    return (
        <>

            <div className='flex flex-col '>
                <div className="container mx-auto mt-10">
                    <div className="flex shadow-md my-10 justify-center">
                        <div className="w-3/4 bg-white px-10 py-10">
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                                <h2 className="font-semibold text-2xl">3 Items</h2>
                            </div>
                            <div className="flex mt-10 mb-5 justify-start mx-8 px-6 py-5">
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                            

                            </div>
                            {productsInCart.map((product) => (
                                <div className="flex items-center justify-start hover:bg-gray-100 mx-8 px-6 py-5" key={product.id}>
                                    <div className="flex w-2/5">
                                        <div className="w-20">
                                            <Image className="h-24" src={product.image} width={100} height={100} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-evenly ml-4 flex-grow">
                                            <span className="font-bold text-sm">{product.title}</span>
                                            <span className="text-red-500 text-xs">{product.category}</span>
                                           
                                        </div>
                                    </div>
                                  
                                    <span className="text-center w-1/5 font-semibold text-sm">{product.price}</span>
                                    <span className="text-center w-1/5 font-semibold text-sm">{product.price}</span>

                                    <button onClick={()=> handleRemove(product.id)} className="font-semibold hover:bg-red-600 text-white text-base p-2 bg-red-500">Remove</button>
                                </div>
                            ))}




                            <a href="#" className="flex font-semibold text-indigo-600 text-sm mt-10">

                                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                                Continue Shopping
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart