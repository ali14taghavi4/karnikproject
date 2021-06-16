import Link from 'next/link';
import classes from '../../styles/component_style/footer.module.css';
const Footer = () => {
    const menuItems = [
        { id: 1, routename: 'آگهی شغلی'},
        { id: 2, routename: 'بلاگ'},
        { id: 3, routename: 'رزومه ساز'},
        { id: 4, routename: 'تجربه ها'},
        { id: 5, routename: 'شرکت های برتر'},
        { id: 6, routename: 'دوره های آموزشی'}
    ];
    return (
        <footer className={classes.footer}>
            <div className={classes.footer_container}>
                <div className={classes.footer_navbar_container}>
                {
                    menuItems.map(item => (
                        <div className={classes.footer_navbar_item} key={item.id} >
                            <Link href="#">{item.routename}</Link> 
                        </div>
                    ))
                }
                </div>
                <div className={classes.footer_buttons}>
                    <button className={classes.footer_button}>
                        <Link href="#">ثبت آگهی</Link>
                    </button>
                    <button className={classes.footer_button}>
                        <Link href="#">ساخت رزومه</Link>
                    </button>
                    <button className={classes.footer_button}>
                        <Link href="#">ثبت تجربه</Link>
                    </button>
                </div>
                <div className={classes.footer_buttons_bottom}>
                    <div className={classes.footer_buttons_bottom_item}>
                        <Link href="#">درباره ی کارنیک</Link>
                    </div>
                    <div className={classes.footer_buttons_bottom_item}>
                        <Link href="#">ارتباط باما</Link>
                    </div>
                    <div className={classes.footer_buttons_bottom_item}>
                        <Link href="#">سوالات متداول</Link>
                    </div>
                    <div className={classes.footer_buttons_bottom_item}>
                        <Link href="#">قوانین و مقررات</Link>
                    </div>


                </div>
                <div className={classes.footer_social_networks}>
                    <Link href="#">
                        <div className={classes.social_networks_item}>
                            <i className="fab fa-twitter"></i>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className={classes.social_networks_item}>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className={classes.social_networks_item}>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className={classes.social_networks_item}>
                            <i className="fab fa-telegram"></i>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className={classes.social_networks_item}>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </Link>
    
                </div>
                <div className={classes.footer_logos}>
                    <img src="/namadE.png"/>
                    <img className={classes.footer_karnik_logo} src="/karniklogo3.png"/>
                    <img src="/namadE.png"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;