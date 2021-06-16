import classesins from '../../styles/component_style/small_advertising_instant.module.css';
import SmallAdDetails from './small_ad_details';
const SmallAdvertisingInstant = ({data}) => {
    return (
            <article className={classesins.small_ad_container}>
                <span className={classesins.small_ad_container_first}>
                    <span>فوری</span>
                
                </span>
                <div className={classesins.small_ad_container_second}>
                    <SmallAdDetails data={data}/>
                </div>
            </article>
    )
}
export default SmallAdvertisingInstant;