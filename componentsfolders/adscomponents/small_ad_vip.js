import classesvip from '../../styles/component_style/small_ad_vip.module.css';
import SmallAdDetails from './small_ad_details';
const SmallAdVip = ({data}) => {
    return (
            <article className={classesvip.small_ad_container}>
                <div className={classesvip.ribbon}>
                    <i className="fas fa-medal"></i>
                </div>
                <div className={classesvip.small_ad_container_second}>
                    <SmallAdDetails data={data}/>
                </div>
            </article>
    )
}

export default SmallAdVip;