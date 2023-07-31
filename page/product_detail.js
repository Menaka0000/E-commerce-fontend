/**
 author : Menaka Lakshan
 created : 19/07/2023
 */
'use client'
import React from 'react';
import {useSelector} from "react-redux";
import Image from 'next/image'

const ProductDetail = () => {

    // const {productName,imgUrl, price} = useSelector(state => state.appState.selectedItem);

    return (
        <section className='container pt-8'>
            {/*<h1 className='text-4xl mb-3'>{productName}</h1>*/}
            <div className="grid grid-cols-1 md:lg:xl:grid-cols-2">
                <div className='flex items-center justify-center py-4'>
                    {/*<Image src={`/assets/image/${imgUrl}`} alt={productName}*/}
                    {/*       className='rounded'*/}
                    {/*       width={300}*/}
                    {/*       height={40}/>*/}
                </div>
                <div className='flex flex-col gap-2'>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad aliquam aperiam, aspernatur consectetur consequatur ducimus enim error harum in iste iure maxime mollitia natus placeat totam veniam veritatis!</span><span>At autem dolore doloremque dolores enim esse eum eveniet expedita ipsum laboriosam, laudantium minus mollitia possimus quae totam unde voluptas. Asperiores aut, culpa cum eligendi laborum neque ratione vel voluptas?</span><span>Aliquid dicta ducimus eaque enim facere illum iusto modi nisi nostrum omnis pariatur perspiciatis, quaerat quidem sequi, tempore unde ut? A ad, ea ex facilis minima officia quisquam rem repudiandae!</span><span>In magni obcaecati officia porro repudiandae? Deserunt dolore doloremque doloribus eligendi expedita ipsam libero quam quod? Consequatur, ea, sit? Ad alias beatae blanditiis magni natus possimus quaerat temporibus ut voluptates!</span><span>Animi consequuntur deserunt dolores error fuga, fugiat, impedit iusto laudantium magnam maxime possimus rem sed voluptates? Alias beatae delectus, dolor eos, expedita fuga illum neque nostrum porro quasi sint voluptatibus.</span></p>
                    {/*<p className='font-bold'>{price}</p>*/}
                    <button className='px-4 py-2 bg-stone-200 shadow-md w-44'>Add To Cart</button>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;