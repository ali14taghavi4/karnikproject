import classes from '../../styles/component_style/top_bar.module.css';
import Link from 'next/link';
const NavItems = () => {
    const menuItems = [
        { id: 1, routename: 'آگهی شغلی'},
        { id: 2, routename: 'بلاگ'},
        { id: 3, routename: 'رزومه ساز'},
        { id: 4, routename: 'تجربه ها'},
        { id: 5, routename: 'شرکت های برتر'},
        { id: 6, routename: 'دوره های اموزشی'}
    ];
    return (
        <>
            {
                menuItems.map(item => (
                    <div className={classes.topbar_right_item} key={item.id} >
                        <Link href="#">{item.routename}</Link> 
                    </div>
                ))
            }
        </>
    )
}

export default NavItems;