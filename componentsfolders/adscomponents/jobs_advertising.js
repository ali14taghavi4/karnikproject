import SmallAdvertisingInstant from "./small_advertising_instant";
import SmallAdVip from './small_ad_vip';
import SmallAdNormal from './small_ad_normal';
import Modal from 'react-modal';
import classes from '../../styles/component_style/jobs_advertisings.module.css'
import JobDetails from "./job_details";
import React,{ useState,useEffect } from "react";
import AdModal from "./ad_modal";
const JobsAdvertisings = () => {
    const ads =[   
        {
            jobTitle:'مهندس داده',
            city:'تهران',
            cityZone:'شهرک غرب',
            jobType:'پاره وقت',
            jobSalary:'6-8 میلیون',
            companyLogo:'/tapsilogo.png',
            companyName:'صنایع غذایی اصالت',
            uploadTime:'امروز',
            abilities:['html','css','js','react','nextjs','redux'],
            languages:['فارسی','اسپانیایی','فرانسوی'],
            jobDesc:[
                {title:'روز و ساعت کاری',explain:'شنبه تا چهارشنبه 9 تا 18 '},
                {title:'نوع همکاری',explain:'تمام وقت'},
                {title:'مزایا و تسهیلات ',explain:'بیمه تکمیلی - بیمه تامین اجتماعی - امریه سربازی '}
            ],
            scoringSkills:['nextjs','ssr','responsive-design'],
            expectedIndicators:['روابط عمومی قوی ','icdl','حداقل 3 سال سابقه کار مرتبط','حداق مدرک کارشناسی']    
        },
        {
            jobTitle:'دانشمند داده',
            city:'تهران',
            cityZone:'شهرک غرب',
            jobType:'پاره وقت',
            jobSalary:'6-8 میلیون',
            companyLogo:'/tapsilogo.png',
            companyName:'صنایع غذایی اصالت',
            uploadTime:'امروز',
            abilities:['html','css','js','react','nextjs','redux'],
            languages:['فارسی','اسپانیایی','فرانسوی'],
            jobDesc:[
                {title:'روز و ساعت کاری',explain:'شنبه تا چهارشنبه 9 تا 18 '},
                {title:'نوع همکاری',explain:'تمام وقت'},
                {title:'مزایا و تسهیلات ',explain:'بیمه تکمیلی - بیمه تامین اجتماعی - امریه سربازی '}
            ],
            scoringSkills:['nextjs','ssr','responsive-design'],
            expectedIndicators:['روابط عمومی قوی ','icdl','حداقل 3 سال سابقه کار مرتبط','حداق مدرک کارشناسی']    
        },
        {
            jobTitle:'حمال',
            city:'تهران',
            cityZone:'شهرک غرب',
            jobType:'پاره وقت',
            jobSalary:'6-8 میلیون',
            companyLogo:'/tapsilogo.png',
            companyName:'صنایع غذایی اصالت',
            uploadTime:'امروز',
            abilities:['html','css','js','react','nextjs','redux'],
            languages:['فارسی','اسپانیایی','فرانسوی'],
            jobDesc:[
                {title:'روز و ساعت کاری',explain:'شنبه تا چهارشنبه 9 تا 18 '},
                {title:'نوع همکاری',explain:'تمام وقت'},
                {title:'مزایا و تسهیلات ',explain:'بیمه تکمیلی - بیمه تامین اجتماعی - امریه سربازی '}
            ],
            scoringSkills:['nextjs','ssr','responsive-design'],
            expectedIndicators:['روابط عمومی قوی ','icdl','حداقل 3 سال سابقه کار مرتبط','حداق مدرک کارشناسی']    
        },
        {
            jobTitle:'front end developer',
            city:'تهران',
            cityZone:'شهرک غرب',
            jobType:'پاره وقت',
            jobSalary:'6-8 میلیون',
            companyLogo:'/tapsilogo.png',
            companyName:'صنایع غذایی اصالت',
            uploadTime:'امروز',
            abilities:['html','css','js','react','nextjs','redux'],
            languages:['فارسی','اسپانیایی','فرانسوی'],
            jobDesc:[
                {title:'روز و ساعت کاری',explain:'شنبه تا چهارشنبه 9 تا 18 '},
                {title:'نوع همکاری',explain:'تمام وقت'},
                {title:'مزایا و تسهیلات ',explain:'بیمه تکمیلی - بیمه تامین اجتماعی - امریه سربازی '}
            ],
            scoringSkills:['nextjs','ssr','responsive-design'],
            expectedIndicators:['روابط عمومی قوی ','icdl','حداقل 3 سال سابقه کار مرتبط','حداق مدرک کارشناسی']    
        },
        {
            jobTitle:'backend developer',
            city:'تهران',
            cityZone:'شهرک غرب',
            jobType:'پاره وقت',
            jobSalary:'6-8 میلیون',
            companyLogo:'/tapsilogo.png',
            companyName:'صنایع غذایی اصالت',
            uploadTime:'امروز',
            abilities:['html','css','js','react','nextjs','redux'],
            languages:['فارسی','اسپانیایی','فرانسوی'],
            jobDesc:[
                {title:'روز و ساعت کاری',explain:'شنبه تا چهارشنبه 9 تا 18 '},
                {title:'نوع همکاری',explain:'تمام وقت'},
                {title:'مزایا و تسهیلات ',explain:'بیمه تکمیلی - بیمه تامین اجتماعی - امریه سربازی '}
            ],
            scoringSkills:['nextjs','ssr','responsive-design'],
            expectedIndicators:['روابط عمومی قوی ','icdl','حداقل 3 سال سابقه کار مرتبط','حداق مدرک کارشناسی']    
        },
        {
            jobTitle:'ui ux designer',
            city:'تهران',
            cityZone:'شهرک غرب',
            jobType:'پاره وقت',
            jobSalary:'6-8 میلیون',
            companyLogo:'/tapsilogo.png',
            companyName:'صنایع غذایی اصالت',
            uploadTime:'امروز',
            abilities:['html','css','js','react','nextjs','redux'],
            languages:['فارسی','اسپانیایی','فرانسوی'],
            jobDesc:[
                {title:'روز و ساعت کاری',explain:'شنبه تا چهارشنبه 9 تا 18 '},
                {title:'نوع همکاری',explain:'تمام وقت'},
                {title:'مزایا و تسهیلات ',explain:'بیمه تکمیلی - بیمه تامین اجتماعی - امریه سربازی '}
            ],
            scoringSkills:['nextjs','ssr','responsive-design'],
            expectedIndicators:['روابط عمومی قوی ','icdl','حداقل 3 سال سابقه کار مرتبط','حداق مدرک کارشناسی']    
        },
        {
            jobTitle:'social engineer',
            city:'تهران',
            cityZone:'شهرک غرب',
            jobType:'پاره وقت',
            jobSalary:'6-8 میلیون',
            companyLogo:'/tapsilogo.png',
            companyName:'صنایع غذایی اصالت',
            uploadTime:'امروز',
            abilities:['html','css','js','react','nextjs','redux'],
            languages:['فارسی','اسپانیایی','فرانسوی'],
            jobDesc:[
                {title:'روز و ساعت کاری',explain:'شنبه تا چهارشنبه 9 تا 18 '},
                {title:'نوع همکاری',explain:'تمام وقت'},
                {title:'مزایا و تسهیلات ',explain:'بیمه تکمیلی - بیمه تامین اجتماعی - امریه سربازی '}
            ],
            scoringSkills:['nextjs','ssr','responsive-design'],
            expectedIndicators:['روابط عمومی قوی ','icdl','حداقل 3 سال سابقه کار مرتبط','حداق مدرک کارشناسی']    
        },
        {
            jobTitle:'programmer',
            city:'تهران',
            cityZone:'شهرک غرب',
            jobType:'پاره وقت',
            jobSalary:'6-8 میلیون',
            companyLogo:'/tapsilogo.png',
            companyName:'صنایع غذایی اصالت',
            uploadTime:'امروز',
            abilities:['html','css','js','react','nextjs','redux'],
            languages:['فارسی','اسپانیایی','فرانسوی'],
            jobDesc:[
                {title:'روز و ساعت کاری',explain:'شنبه تا چهارشنبه 9 تا 18 '},
                {title:'نوع همکاری',explain:'تمام وقت'},
                {title:'مزایا و تسهیلات ',explain:'بیمه تکمیلی - بیمه تامین اجتماعی - امریه سربازی '}
            ],
            scoringSkills:['nextjs','ssr','responsive-design'],
            expectedIndicators:['روابط عمومی قوی ','icdl','حداقل 3 سال سابقه کار مرتبط','حداق مدرک کارشناسی']    
        },
        {
            jobTitle:'برنامه نویس سیستمی',
            city:'تهران',
            cityZone:'شهرک غرب',
            jobType:'پاره وقت',
            jobSalary:'6-8 میلیون',
            companyLogo:'/tapsilogo.png',
            companyName:'صنایع غذایی اصالت',
            uploadTime:'امروز',
            abilities:['html','css','js','react','nextjs','redux'],
            languages:['فارسی','اسپانیایی','فرانسوی'],
            jobDesc:[
                {title:'روز و ساعت کاری',explain:'شنبه تا چهارشنبه 9 تا 18 '},
                {title:'نوع همکاری',explain:'تمام وقت'},
                {title:'مزایا و تسهیلات ',explain:'بیمه تکمیلی - بیمه تامین اجتماعی - امریه سربازی '}
            ],
            scoringSkills:['nextjs','ssr','responsive-design'],
            expectedIndicators:['روابط عمومی قوی ','icdl','حداقل 3 سال سابقه کار مرتبط','حداق مدرک کارشناسی']    
        },
        {
            jobTitle:'c++ developer',
            city:'تهران',
            cityZone:'شهرک غرب',
            jobType:'پاره وقت',
            jobSalary:'6-8 میلیون',
            companyLogo:'/tapsilogo.png',
            companyName:'صنایع غذایی اصالت',
            uploadTime:'امروز',
            abilities:['html','css','js','react','nextjs','redux'],
            languages:['فارسی','اسپانیایی','فرانسوی'],
            jobDesc:[
                {title:'روز و ساعت کاری',explain:'شنبه تا چهارشنبه 9 تا 18 '},
                {title:'نوع همکاری',explain:'تمام وقت'},
                {title:'مزایا و تسهیلات ',explain:'بیمه تکمیلی - بیمه تامین اجتماعی - امریه سربازی '}
            ],
            scoringSkills:['nextjs','ssr','responsive-design'],
            expectedIndicators:['روابط عمومی قوی ','icdl','حداقل 3 سال سابقه کار مرتبط','حداق مدرک کارشناسی']    
        },
        {
            jobTitle:'scrum master',
            city:'تهران',
            cityZone:'شهرک غرب',
            jobType:'پاره وقت',
            jobSalary:'6-8 میلیون',
            companyLogo:'/tapsilogo.png',
            companyName:'صنایع غذایی اصالت',
            uploadTime:'امروز',
            abilities:['html','css','js','react','nextjs','redux'],
            languages:['فارسی','اسپانیایی','فرانسوی'],
            jobDesc:[
                {title:'روز و ساعت کاری',explain:'شنبه تا چهارشنبه 9 تا 18 '},
                {title:'نوع همکاری',explain:'تمام وقت'},
                {title:'مزایا و تسهیلات ',explain:'بیمه تکمیلی - بیمه تامین اجتماعی - امریه سربازی '}
            ],
            scoringSkills:['nextjs','ssr','responsive-design'],
            expectedIndicators:['روابط عمومی قوی ','icdl','حداقل 3 سال سابقه کار مرتبط','حداق مدرک کارشناسی']    
        },
        {
            jobTitle:' ui designer',
            city:'تهران',
            cityZone:'شهرک غرب',
            jobType:'پاره وقت',
            jobSalary:'6-8 میلیون',
            companyLogo:'/tapsilogo.png',
            companyName:'صنایع غذایی اصالت',
            uploadTime:'امروز',
            abilities:['html','css','js','react','nextjs','redux'],
            languages:['فارسی','اسپانیایی','فرانسوی'],
            jobDesc:[
                {title:'روز و ساعت کاری',explain:'شنبه تا چهارشنبه 9 تا 18 '},
                {title:'نوع همکاری',explain:'تمام وقت'},
                {title:'مزایا و تسهیلات ',explain:'بیمه تکمیلی - بیمه تامین اجتماعی - امریه سربازی '}
            ],
            scoringSkills:['nextjs','ssr','responsive-design'],
            expectedIndicators:['روابط عمومی قوی ','icdl','حداقل 3 سال سابقه کار مرتبط','حداق مدرک کارشناسی']    
        },
        {
            jobTitle:'linux man',
            city:'تهران',
            cityZone:'شهرک غرب',
            jobType:'پاره وقت',
            jobSalary:'6-8 میلیون',
            companyLogo:'/tapsilogo.png',
            companyName:'صنایع غذایی اصالت',
            uploadTime:'امروز',
            abilities:['html','css','js','react','nextjs','redux'],
            languages:['فارسی','اسپانیایی','فرانسوی'],
            jobDesc:[
                {title:'روز و ساعت کاری',explain:'شنبه تا چهارشنبه 9 تا 18 '},
                {title:'نوع همکاری',explain:'تمام وقت'},
                {title:'مزایا و تسهیلات ',explain:'بیمه تکمیلی - بیمه تامین اجتماعی - امریه سربازی '}
            ],
            scoringSkills:['nextjs','ssr','responsive-design'],
            expectedIndicators:['روابط عمومی قوی ','icdl','حداقل 3 سال سابقه کار مرتبط','حداق مدرک کارشناسی']    
        },
        {
            jobTitle:'mobile developer',
            city:'تهران',
            cityZone:'شهرک غرب',
            jobType:'پاره وقت',
            jobSalary:'6-8 میلیون',
            companyLogo:'/tapsilogo.png',
            companyName:'صنایع غذایی اصالت',
            uploadTime:'امروز',
            abilities:['html','css','js','react','nextjs','redux'],
            languages:['فارسی','اسپانیایی','فرانسوی'],
            jobDesc:[
                {title:'روز و ساعت کاری',explain:'شنبه تا چهارشنبه 9 تا 18 '},
                {title:'نوع همکاری',explain:'تمام وقت'},
                {title:'مزایا و تسهیلات ',explain:'بیمه تکمیلی - بیمه تامین اجتماعی - امریه سربازی '}
            ],
            scoringSkills:['nextjs','ssr','responsive-design'],
            expectedIndicators:['روابط عمومی قوی ','icdl','حداقل 3 سال سابقه کار مرتبط','حداق مدرک کارشناسی']    
        },
        {
            jobTitle:'برنامه نویس جاوا',
            city:'تهران',
            cityZone:'ورامین',
            jobType:'پاره وقت',
            jobSalary:'6-8 میلیون',
            companyLogo:'/tapsilogo.png',
            companyName:'صنایع غذایی اصالت',
            uploadTime:'3 روز پیش',
            abilities:['html','css','js','react','nextjs','redux'],
            languages:['فارسی','اسپانیایی','فرانسوی'],
            jobDesc:[
                {title:'روز و ساعت کاری',explain:'شنبه تا چهارشنبه 9 تا 18 '},
                {title:'نوع همکاری',explain:'تمام وقت'},
                {title:'مزایا و تسهیلات ',explain:'بیمه تکمیلی - بیمه تامین اجتماعی - امریه سربازی '}
            ],
            scoringSkills:['nextjs','ssr','responsive-design'],
            expectedIndicators:['روابط عمومی قوی ','icdl','حداقل 3 سال سابقه کار مرتبط','حداق مدرک کارشناسی']    
        },
        {
            jobTitle:'مهندس ایمنی',
            city:'تهران',
            cityZone:'شهرک غرب',
            jobType:'پاره وقت',
            jobSalary:'6-8 میلیون',
            companyLogo:'/tapsilogo.png',
            companyName:'صنایع غذایی اصالت',
            uploadTime:'2 روز پیش',
            abilities:['c++','css','js','react','nextjs','redux'],
            languages:['فارسی','اسپانیایی','فرانسوی'],
            jobDesc:[
                {title:'روز و ساعت کاری',explain:'شنبه تا چهارشنبه 9 تا 18 '},
                {title:'نوع همکاری',explain:'تمام وقت'},
                {title:'مزایا و تسهیلات ',explain:'بیمه تکمیلی - بیمه تامین اجتماعی - امریه سربازی '}
            ],
            scoringSkills:['python','ssr','responsive-design'],
            expectedIndicators:['روابط عمومی قوی ','icdl','حداقل 3 سال سابقه کار مرتبط','حداق مدرک کارشناسی']    
        }
    ];
    const size = useWindowSize();
    let width=size.width;
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [itemToShow,setItemToShow] = useState(0) ;
    const itemclickhandler=(i) => {
        setItemToShow(i);
        if (width < 750){
            setModalIsOpen(!modalIsOpen);
        }
    };
    const nextbuttonhandler = () => {
        if( itemToShow < ads.length -1 ){
            setItemToShow(prev => prev+1);
        } 
    }
    const prevbuttonhandler = () => {
        if( itemToShow > 0 ){
            setItemToShow(prev => prev-1); 
        }
    }
    const [itemsNum,setItemsNum] = useState (ads.length > 10 ? 10 : ads.length);
    const loadmorehandler = function() {
        let plus = ads.length - itemsNum < 10 ? ads.length - itemsNum : 10;
        setItemsNum(prevstate => prevstate + plus);
    }
    const slicedads = ads.slice(0,itemsNum);
    return (
        
        <div className={classes.jobs_advertising_container}>
            <div className={classes.small_ad_container}>
                {slicedads.map((ad,index) => (
                    <div  onClick={() => itemclickhandler(index)}>
                    {   
                        index  >= 5 ? <SmallAdNormal data={ad}/> :  index < 3  ? <SmallAdVip data={ad}/> : <SmallAdvertisingInstant data={ad}/>
                    }
                    </div> 
                ))
                }
                <div className={classes.load_more_button_container} onClick={loadmorehandler}>
                    <button className={classes.load_more_button}> بارگزاری بیشتر </button>
                </div>            
            </div>
            <div className={classes.large_ad_container}>
                <JobDetails data={ads[itemToShow]}/>
            </div>
            {width < 750 ?
                <Modal
                    isOpen={modalIsOpen}
                    style={{
                        overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: '#bdbdbd'
                        },
                        content: {
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        right: '20px',
                        bottom: '20px',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '20px'
                        }
                    }}
                >
                    <div className={classes.modal_click_buttons}>
                        <div className={classes.next_prev_button} onClick={nextbuttonhandler}>
                            <button>بعدی</button>
                        </div>
                        <div className={classes.time_button} onClick={() => setModalIsOpen(!modalIsOpen)}>
                            <i class="fas fa-times"></i>
                        </div>
                        <div className={classes.next_prev_button} onClick={prevbuttonhandler}>
                            <button>قبلی</button>
                        </div>
                    </div>
                    <AdModal data={ads[itemToShow]}/>
                </Modal>
                : null
            }
            
        </div>
    )
}
export default JobsAdvertisings;

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