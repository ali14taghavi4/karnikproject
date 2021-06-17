import { useEffect, useState } from 'react';
import classes from '../../styles/component_style/top_bar.module.css';
import NavItems from './navitems';
import Link from 'next/link';
const MobMenue = () => {

    const [ open, setOpen ] = useState(false); 
    
    return (
        <>
            <div onClick={() => setOpen(!open)} className={classes.menuebar}>
                <i class="fas fa-bars"></i>
            </div>
            {open &&
                <div className={classes.mobile_nav_container_container}>
                    <div className={classes.mobile_nav_container}>

                        <div onClick={() => setOpen(!open)} className={classes.times_icon}>
                            <i class="fas fa-times"></i>
                        </div>
                        <hr/>
                        <div className={classes.mob_menue_buttons_container}>
                            <Link href="#">
                                <span className={classes.mob_post_link}>ثبت آگهی</span>
                            </Link>
                            <Link href="#">
                                <span className={classes.mob_login_link}>ورود/ثبت نام</span>
                            </Link>
                        </div>
                        <hr/>
                        <NavItems/>
                    </div>
                </div>
            }
        </>
    )
}

export default MobMenue;