import classes from '../../styles/component_style/navbar_bottom.module.css';
const SelectList = ({ label , selectedoption, setChange ,options}) => {
    return (
        <div className={classes.select_list}>
            <label>{label}</label>
            <div className={classes.select_list_inner}>
                <i className='fas fa-map-pin'></i>
                <select onChange={setChange}>
                    <option hidden>{selectedoption}</option>
                    {options.map(item => (
                        <option key={item.id}>{item.name}</option>
                        )
                    )
                    }
                </select>
            </div>
         </div>
    )
}
export default SelectList;