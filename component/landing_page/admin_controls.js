/**
 author : Menaka Lakshan
 created : 27/07/2023
 */
'use client'
import React from 'react';
import DropDown from "@/component/common/dropDown";
import {useRouter} from "next/navigation";

const AdminControls = () => {

    const router = useRouter();

    const options = [
        {
            optionName : "Add New Product",
            onClick: () => {
                router.push('/new-product')
            }
        }
    ]
    return (
        <div className=" rounded-md p-2">
            <h2 className='text-xs'>Admin Controls</h2>
            <div className=' flex gap-2'>
                <DropDown title="User" options={[]}/>
                <DropDown title="Products" options={options}/>
                <DropDown title="Reports" options={[]}/>
            </div>
        </div>
    );
};

export default AdminControls;