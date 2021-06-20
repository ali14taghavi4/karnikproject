import classes from '../../styles/component_style/companys_slider.module.css';
import React , {useState,useEffect} from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

const Companys = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const companys = [
        {id:1,name:'اسنپ مارکت',src:'/snapmarketlogo.png',jobs:10},
        {id:2,name:'علی بابا',src:'/alibaba.png',jobs:7},
        {id:3,name:'های وب',src:'/hiweblogo.png',jobs:20},
        {id:4,name:'دیجی پی',src:'/digipaylogo.png',jobs:1},
        {id:5,name:'درسا',src:'/dorsalogo.png',jobs:9},
        {id:6,name:'همکاران سیستم',src:'/hamkaranlogo.png',jobs:11},
        {id:7,name:'شاتل',src:'/shatel.png',jobs:17},
        {id:8,name:'اسنپ فود',src:'/snapfood.png',jobs:12},
        {id:9,name:'اسنپ',src:'/snapplogo.png',jobs:8},
        {id:10,name:'تپسل',src:'/tapsellogo.png',jobs:6},
        {id:11,name:'تپسی',src:'/tapsilogo.png',jobs:16}
    ];
    let showcase =7;
    const size = useWindowSize();
    let width=size.width;
    
    if (width < 800 ) {
        showcase=6
    }
    if (width < 700){
        showcase =5;
    }
    if (width < 550){
        showcase =4;
    }
    if (width < 450){
        showcase =3;
    }
    if (width < 350){
        showcase =2;
    }
    if (width < 230){
        showcase =1;
    }
    const length = companys.length;
    let [steps, setSteps] = useState(0);
    function increment() {
        if( steps < length-1 && steps+showcase <length ) {
            setSteps(prevState => prevState + 1);
        }
    }
    function decrement() {
        if( steps >= 1 ){
            setSteps(prevState => prevState - 1);
        }
    }
    let nstep = 1;
    if( steps + nstep > length ){
        nstep += ( steps + nstep -length )
    }
    else {
        nstep = steps + showcase;
    }
 
    var sliceditems = companys.slice(steps, nstep);
    return (
        <div className={classes.slider_container}>
            <div className={classes.companys_items}>
                {sliceditems.map(item => (

                    <Link href={`/companys/${item.name}`}>
                        <div  className={classes.companys_item}>
                            <img src={item.src}/>
                            <span>{item.name}</span>
                            <span>{item.jobs}موقعیت شغلی</span>
                        </div>
                    </Link>
                ))}
            </div>
            <div className={classes.chevrons_container}>
                <div className={classes.chevron_container}  onClick={increment}>
                        <i class="fas fa-chevron-right"></i>
                </div>
                <div className={classes.chevron_container}  onClick={decrement}>
                        <i class="fas fa-chevron-left"></i>
                </div>
            </div>
            
        </div>
    )
}
export default Companys;



/* useWindowSize for have window size in ssr*/
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}