import classes from '../../styles/component_style/navbar_bottom.module.css';
const SearchBox = ({ setKeyword }) => {
    return (
        <div className={classes.search_box}>
                <label>عنوان شغلی یا نام شرکت ...</label>
                <div className={classes.serach_box_input}>
                    <i className="fas fa-search"></i>
                    <input onBlur={setKeyword} type="text" placeholder="" required/>
                </div>
        </div>
    )
}

export default SearchBox;
