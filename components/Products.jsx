import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { add } from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import { STATUSES } from '../store/productSlice'

const Products = () => {
    const dispach = useDispatch();
    const {data:products, status} = useSelector(state => state.product)
    // const [products, setProducts] = useState([])
    useEffect(() => {
        dispach(fetchProducts());
        // const fetchProduct = async () => {
        //     let res = await fetch("https://fakestoreapi.com/products");
        //     let data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // }
        // fetchProduct();

    }, [])

    const handleAddProduct = (product) =>{
        dispach(add(product))
    }

    if(status === STATUSES.LOADING){
        return <h2 className='text-center  text-gray-500 font-extrabold font-xl'>LOADING...</h2>
    }

    return (
        <>

            <section className="text-gray-700 bg-white body-font">
                <div className="container px-5 py-24 mx-auto max-w-screen-xl">
                    <div className="flex flex-wrap m-4">
                        {
                            products?.map((product) => 
                                
                                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={product.id}>
                                        <a className="block relative  w-full rounded overflow-hidden">
                                            <Image alt="ecommerce" className="object-center w-full h-auto block " src={product.image} height={400} width={300}/>
                                        </a>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                                            <h2 className="text-green-600 title-font text-lg font-medium">{product.title}</h2>
                                            <p className="mt-1">{product.price}</p>
                                            <button className='' onClick={() => handleAddProduct(product)}>Add to cart</button>
                                        </div>
                                    </div>
                              

                            )
                        }
                     
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products