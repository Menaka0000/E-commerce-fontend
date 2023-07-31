/**
 author : Menaka Lakshan
 created : 19/07/2023
 */
'use client'
import React from 'react';
import ProductDetail from "@/page/product_detail";
// import {useRouter} from "next/router";

const Page = ({searchParams}) => {
    // const router = useRouter()
    // console.log(router.query)
    console.log(searchParams)
    return (
        <ProductDetail/>
    );
};

export default Page;