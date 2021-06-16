import classes from '../../styles/component_style/job_details.module.css';
import JobMoreDetails from './job_more_details';
import LargeAdButtons from './large_ad_buttons';
import MoreDetail from './large_ad_header_more';
const JobDetails = ({data}) => {

    const jobTitle = data.jobTitle;
    const city = data.city;
    const cityZone = data.cityZone;
    const uploadTime = data.uploadTime;
    const jobSalary = data.jobSalary;
    const companyName = data.companyName;
    const abilities = data.abilities;
    const languages = data.languages;
    const jobDesc = data.jobDesc;
    const scoringSkills =data.scoringSkills;
    const expectedIndicators =data.expectedIndicators;
    return (
        <>
            <div className={classes.large_ad_header}>  
                <div className={classes.large_header_right}>    
                    <div className={classes.header_job_title}>
                        <span>{jobTitle}</span>
                    </div>
                    <div className={classes.header_company_name}>
                        <span>{companyName}</span>
                    </div>
                    <div className={classes.header_more_detail}>
                        <MoreDetail 
                            city={city} 
                            cityZone={cityZone} 
                            jobSalary={jobSalary}
                            uploadTime={uploadTime}
                        />
                    </div>    
                </div>
                <div className={classes.large_header_left}>
                    <LargeAdButtons/>
                </div>
            </div>
            <div className={classes.job_details}>
                <JobMoreDetails 
                    abilities={abilities}
                    languages={languages}
                    jobDesc={jobDesc}
                    scoringSkills={scoringSkills}
                    expectedIndicators={expectedIndicators}
                />
            </div>
        </>
    )
}

export default JobDetails;