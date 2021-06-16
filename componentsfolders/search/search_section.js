import React , {useState} from 'react';
import classes from '../../styles/component_style/navbar_bottom.module.css';
const SearchSection = () => {
    const [cityname,setCityname] = useState('');
    const [jobtitle,setJobtitle] = useState('');
    const [searchedkeyword,setSearchedkeyword] = useState('');
    console.log(cityname);
    console.log(jobtitle);
    console.log(searchedkeyword);
    const citysname = [
        {id:1,name:'تهران'},
        {id:2,name:'کرج'},
        {id:3,name:'دماوند'},
        {id:4,name:'اسلامشهر'},
        {id:5,name:'ورامین'},
        {id:6,name:'پردیس'},
    ];
    const jobstitle = [
        {id:1,name:'خدمات'},
        {id:2,name:'مدیریت'},
        {id:3,name:'برنامه نویسی'},
        {id:4,name:'دیجیتال مارکتینگ'}
    ]
    return (
        <div className={classes.search_section}>
            <div className={classes.search_box}>
                <label>عنوان شغلی یا نام شرکت ...</label>
                <div className={classes.serach_box_input}>
                    <i className="fas fa-search"></i>
                    <input onChange={e => setSearchedkeyword(e.target.value)} type="text" placeholder="" required/>
                </div>
            </div>
            <div className={classes.select_list}>
                <label>انتخاب شهر ...</label>
                <div className={classes.select_list_inner}>
                    <i className='fas fa-map-pin'></i>
                    <select onChange={e => setCityname(e.target.value)}>
                        <option hidden>شهر</option>
                    {citysname.map(item => (
                        <option key={item.id}>{item.name}</option>
                        )
                    )
                    }
                    </select>
                </div>
            </div>
            <div className={classes.select_list}>
                <label>انتخاب گروه شغلی ...</label>
                <div className={classes.select_list_inner}>
                    <i className="fas fa-briefcase"></i>
                    <select onChange={e => setJobtitle(e.target.value)}>
                        <option hidden>گروه شغلی</option>
                    {jobstitle.map(item => (
                        <option key={item.id}>{item.name}</option>
                        )
                    )
                    }
                    </select>
                </div>
            </div>
            <button className={classes.search_button}>جستجو</button>
        </div>
    )
}

export default SearchSection;