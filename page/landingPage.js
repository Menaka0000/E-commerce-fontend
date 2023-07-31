import React from 'react';
import Header from "@/component/landing_page/header";
import FilterPanel from "@/component/landing_page/filter_panel";
import Product_container from "@/component/landing_page/product_container";

const LandingPage = () => {
    return (
        <section>
                <div className='flex mt-10'>
                    <FilterPanel/>
                    <Product_container/>
                </div>
        </section>
    );
};

export default LandingPage;