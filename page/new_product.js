/**
 author : Menaka Lakshan
 created : 27/07/2023
 */
'use client'
import React, {useEffect, useState} from 'react';
import FormInput from "@/component/common/FormInput";
import {BsCardImage} from "react-icons/bs";
import Image from "next/image";
import {getAllProducts, saveProduct} from '@/services/product'

const NewProduct = () => {

    const [imgUrls, setImageUrls] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [product,setProduct] = useState({
        productId:'',
        productName: '',
        itemPrice : ''
    })

    useEffect(() => {
        if (imgUrls && selectedFile && imgUrls.length < 4)
            setImageUrls([...imgUrls, selectedFile])
    }, [selectedFile]);

    useEffect(()=>{
        console.log(product)
    },[product])

    const handleInputChange = event => {
        setProduct(prevState => ({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }
    const handleSave = ()=> {
         saveProduct(product)
             .then(alert('cusotomer save successfull'))
    }

    return (
        <div className='grid grid-cols-1 md:lg:xl:grid-cols-2 mt-8'>
            <div className='px-5 py-1 '>
                <div className="bg-gray-200 rounded w-full h-96">

                </div>
                <div className='flex gap-4 mt-5'>
                    {imgUrls &&
                        imgUrls.map((url, id) => (
                            <Image key={id} src={url} alt={'mobile phone'}
                                   className='rounded'
                                   width={130}
                                   height={40}/>
                        ))
                    }
                </div>
                <div
                    className="shadow--primary bg-zinc-200 flex item-center justify-content  placeholder:text-slate-100 w-48 rounded-md shadow-sm focus:outline-none sm:text-sm text-slate-200 cursor-pointer mt-4">
                    <label htmlFor="attachment"
                           className='border rounded-md border-slate-600 border-dashed px-3 w-full flex gap-5 justify-center items-center'>
                        <BsCardImage size={50} color='rgba(0,0,0,.5)'/>
                        <label htmlFor="attachment" className='w-fit text-black'>Upload Image</label>
                        <input type="file"
                               id='attachment'
                               name='message'
                               className='hidden'
                               onChange={(e) => {
                                   setSelectedFile(URL.createObjectURL(e.target.files[0]))
                               }}
                        />
                    </label>
                </div>
            </div>
            <div className='flex flex-col px-4'>
                <div className="grid grid-cols-1 md:lg:xl:grid-cols-2 gap-5">
                    <FormInput label="Product Id" placeHolder="Enter Id" name={"productId"} onChange={handleInputChange} value={product.productId}/>
                    <FormInput label="Product Name" placeHolder="Enter Name" name={"productName"} onChange={handleInputChange} value={product.productName}/>
                    <FormInput label="Item Price" placeHolder="Enter Price" name={"itemPrice"} onChange={handleInputChange} value={product.itemPrice}/>
                </div>
                <button className="rounded bg-gray-600 text-white px-8 py-1 shadow text-sm self-end mt-2" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default NewProduct;