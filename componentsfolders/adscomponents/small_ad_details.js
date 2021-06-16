import classes from '../../styles/component_style/small_ad_normal.module.css';
import Link from 'next/link';
const SmallAdDetails = ({data}) => {
    const jobTitle = data.jobTitle;
    const city = data.city;
    const cityZone = data.cityZone;
    const jobType = data.jobType;
    const jobSalary = data.jobSalary;
    const companyLogo = data.companyLogo;
    const companyName = data.companyName;
    const uploadTime = data.uploadTime;
    return(
        <>
            <div className={classes.small_ad_right}>
                <div className={classes.job_title}>
                    <span>{jobTitle}</span>
                </div>
                <div className={classes.job_location}>
                    <i class="fas fa-map-marker-alt"> </i>
                    <span>{city}</span><span>,</span><span>{cityZone}</span>
                </div>
                <div className={classes.job_type}>
                    <span>نوع همکاری : </span>
                    <span>{jobType}</span>
                </div>
                <div className={classes.job_salary}>
                    <span>حقوق :</span>
                    <span>{jobSalary}</span>
                </div>
                <div className={classes.upload_time}>
                    <i class="far fa-clock"></i>
                    <span>{uploadTime}</span>
                </div>
            </div>
            <div className={classes.small_ad_left}>
                            
                <img className={classes.company_logo} src={companyLogo} />
                <div className={classes.company_name}>
                    <span>{companyName}</span>
                </div>
                <div className={classes.icons_container}>
                    <Link href="#">
                        <i class="fas fa-expand"></i>
                    </Link>
                    <Link href="#"> 
                        <i class="fas fa-share-alt"></i>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}

export default SmallAdDetails;