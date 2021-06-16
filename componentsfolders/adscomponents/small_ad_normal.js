import classes from '../../styles/component_style/small_ad_normal.module.css';
import SmallAdDetails from './small_ad_details';
const SmallAdNormal = ({data}) => {
    return (
                <article className={classes.small_ad_container}>
                    <SmallAdDetails data={data}/>
                </article>
    )
}

export default SmallAdNormal;