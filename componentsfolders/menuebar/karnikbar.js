import React from 'react';
import classes from '../../styles/component_style/top_bar.module.css';
import NavItems from './navitems';
import MobMenue from './mob_menue';
const KarnikBar = () => {
    return (
        <div className={classes.header}>
            <div className={classes.top_nav_container}>
                <MobMenue className={classes.menuebar}/>
                <div className={classes.topbar_right}>
                    <NavItems/>
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