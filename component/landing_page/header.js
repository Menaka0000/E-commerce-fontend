import React from 'react';
import Image from 'next/image'
import Search from "@/component/landing_page/search";
import Navigation from "@/component/landing_page/navigation";
import AdminControls from "@/component/landing_page/admin_controls";

const Header = () => {
    return (
        <section className='flex items-center justify-between'>
            <Image src={"/next.svg"} alt="site_logo" width={70} height={40}/>
            <AdminControls/>
            <div className="flex gap-5 out">
                <Search/>
                <Navigation/>
            </div>
        </section>
    );
};

export default Header;