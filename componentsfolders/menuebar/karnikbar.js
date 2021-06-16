import React from 'react';
import Link from 'next/link';
import classes from '../../styles/component_style/top_bar.module.css';

const KarnikBar = () => {
    const menuItems = [
        { id: 1, routename: 'آگهی شغلی'},
        { id: 2, routename: 'بلاگ'},
        { id: 3, routename: 'رزومه ساز'},
        { id: 4, routename: 'تجربه ها'},
        { id: 5, routename: 'شرکت های برتر'},
        { id: 6, routename: 'دوره های اموزشی'}
    ];
    return (
        <div className={classes.header}>
            <div className={classes.top_nav_container}>
                <div className={classes.menuebar}>
                    <i class="fas fa-bars"></i>
                </div>
                <div className={classes.topbar_right}>
                    {
                    menuItems.map(item => (
                        <div className={classes.topbar_right_item} key={item.id} >
                            <Link href="#">{item.routename}</Link> 
                        </div>
                    ))
                    }
                </div>
                <div className={classes.topbar_left}>
                    
                    <div className={classes.button_container}>
                        <button className={classes.post_button}>ثبت آگهی</button>
                        <button className={classes.login_button}>ورود/ثبت نام</button>
                    </div>
                    <div className={classes.header_logo}>
                        <img src="/karniklogo1.png"/>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
export default KarnikBar;