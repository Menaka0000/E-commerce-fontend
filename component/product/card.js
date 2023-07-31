'use client'
import React, {useEffect} from 'react';
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import {useDispatch,useSelector} from "react-redux";
import {setSelectedItem} from "@/app/store/features/appStateSlice";
import {useNavigate} from "react-router-dom";
import Link from "next/link"

const Card = ({product}) => {
    // const router = useRouter()
    // const dispatch  =  useDispatch();
    // const appState = useSelector(state => state.appState);
    // const navigate = useNavigate();
    // const routHandler = () => {
    //     // dispatch(setSelectedItem(product));
    //     // if(appState.selectedItem) router.push('/product');
    //     navigate("/product",{
    //         state:{
    //             product
    //         }
    //     })
    // }

    return (
        <div
            className='w-64 min-h-full rounded-md px-2 py-8 flex flex-col justify-center items-center gap-2 border-[1px] shadow-md'>
            <Image src={`/assets/image/${product.imgUrl || '14-pro-removebg.png'}`} alt={'mobile phone'}
                   className='rounded'
                   width={130}
                   height={40}/>
            <h1>{product.productName || 'iPhone 14 Pro'}</h1>
            <p className="font-medium">{product.price || 'not available'}</p>
            <Link href={{
                pathname:'/product',
                query:{
                    userId : 1,
                    productName: product.productName
                }
            }}>

                <button className='px-5 py-1 bg-gray-800 rounded-md text-white'>View</button>
            </Link>
        </div>
    );
};

export default Card;