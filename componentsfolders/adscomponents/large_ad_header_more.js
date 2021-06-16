import classes from '../../styles/component_style/job_details.module.css';
const MoreDetail = ({ city, cityZone, uploadTime, jobSalary }) => {
    
    return (
        <>
            <div className={classes.header_city}>
                <i class="fas fa-map-marker-alt"> </i>
                <span>{city}</span><span>,</span><span>{cityZone}</span>
            </div>
            <div className={classes.header_uploadtime}>
                <i class="far fa-clock"></i>
                <span>{uploadTime}</span>
            </div>
            <div className={classes.header_salary}>
                <span>حقوق :</span>
                <span>{jobSalary}</span>
            </div>
        </>
    )
}

export default MoreDetail;
