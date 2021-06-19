import React , { useState, useCallback } from 'react';
import SearchBox from './search_box';
import SelectList from './select_list';
import classes from '../../styles/component_style/navbar_bottom.module.css';
const SearchSection = () => {
    const [cityname,setCityname] = useState('');
    const [jobtitle,setJobtitle] = useState('');
    const [searchedkeyword,setSearchedkeyword] = useState('');
    const setKeyword = useCallback( (e) => {
        setSearchedkeyword(e.target.value)
    }, [searchedkeyword]
    );
    const setCityName = useCallback( (e) => {
        setCityname(e.target.value)
    }, [cityname]
    );
    const setJobTitle = useCallback( (e) => {
        setJobtitle(e.target.value)
    }, [jobtitle]
    );
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
    ];
    return (
        <div className={classes.search_section}>
            <SearchBox setKeyword={setKeyword}/>
            <SelectList 
            label={"انتخاب شهر ..."} 
            setChange={setCityName}
            selectedoption={"شهر"}
            options={citysname}
            />
            <SelectList 
            label={"انتخاب گروه شغلی ..."} 
            setChange={setJobTitle }
            selectedoption={"گروه شغلی"}
            options={jobstitle}
            />
            <button className={classes.search_button}>جستجو</button>
        </div>
    )
}
export default SearchSection;