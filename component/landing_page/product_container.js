'use client'
import React, {useState} from 'react';
import Card from "@/component/product/card";

const ProductContainer = () => {

    const initialState = [
        {
            imgUrl: "nuu-bgless.png",
            productName: "Nuu B20 5G",
            price: "Rs. 340 000"
        }, {
            imgUrl: "samsung_s22.png",
            productName: "Samsung Galaxy S22 Ultra",
            price: "Rs. 340 000"
        }, {
            imgUrl: "14-pro-removebg.png",
            productName: "iphone 14 pro max",
            price: "Rs. 340 000"
        }, {
            imgUrl: "samsung_s22.png",
            productName: "Samsung Galaxy S22 Ultra",
            price: "Rs. 340 000"
        }, {
            imgUrl: "14-pro-removebg.png",
            productName: "iphone 14 pro max",
            price: "Rs. 340 000"
        }, {
            imgUrl: "nuu-bgless.png",
            productName: "Nuu B20 5G",
            price: "Rs. 340 000"
        },
    ]
    const [products, setProducts] = useState(initialState)

    return (
        <section className='w-full  lg:w-10/12 '>
            <div
                className='grid gap-x-5 place-items-center gap-y-12 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {products.map((product,id) => (
                    <Card product={product} key={id}/>
                ))}s
            </div>
        </section>
    );
};

export default ProductContainer;