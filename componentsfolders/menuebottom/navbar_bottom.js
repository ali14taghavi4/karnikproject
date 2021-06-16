import React from 'react';
import Link from 'next/link';
import classes from '../../styles/component_style/navbar_bottom.module.css';
import SearchSection from '../search/search_section';

const NavbarBottom = () => {
    
    return (
        <div className={classes.navbar_bottom_section}>
            <div className={classes.navbar_bottom_container}>
                
                <div className={classes.header_bottom_logo}>
                    <img  src="/karniklogo2.png"/>
                </div>
                <SearchSection/>
            </div>
        </div>
    )
}
export default NavbarBottom;