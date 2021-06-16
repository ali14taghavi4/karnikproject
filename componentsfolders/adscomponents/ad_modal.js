import Link from 'next/link';
import classes from '../../styles/component_style/ad_modal.module.css';
const AdModal = ({data}) => {

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
        <div>  
            <div className={classes.modal_ad_header}>
                <div className={classes.modal_ad_header_right}>
                    <div className={classes.header_job_title}>
                        <span>{jobTitle}</span>
                    </div>
                    <div className={classes.modal_header_company_name}>
                        <span>{companyName}</span>
                    </div>
                    <div className={classes.modal_header_city}>
                        <i class="fas fa-map-marker-alt"> </i>
                        <span>{city}</span><span>,</span><span>{cityZone}</span>
                    </div>
                    <div className={classes.modal_header_uploadtime}>
                        <i class="far fa-clock"></i>
                        <span>{uploadTime}</span>
                    </div>
                    <div className={classes.modal_header_salary}>
                        <span>حقوق :</span>
                        <span>{jobSalary}</span>
                    </div>
                </div>
                <div className={classes.modal_header_button_container}>
                    <Link href="#">
                        <button className={classes.modal_resume_button}>ارسال رزومه</button>
                    </Link>
                    <Link href="#">
                        <button className={classes.modal_about_company_button}>درباره شرکت</button>
                    </Link>
                </div>
            </div>
            <div className={classes.modal_job_details}>
                <div className={classes.modal_abilities}>
                    <h2>توانایی ها </h2>
                    <div className={classes.modal_abilities_items}>
                        {abilities.map(ability => (
                            <span>{ability}</span>
                        ))}
                    </div>
                </div>
                <div className={classes.modal_company_language}>
                    <h2> زبان </h2>
                    <div className={classes.modal_language_items}>
                        {languages.map(language => (
                            <span>{language}</span> 
                        ))}
                    </div>
                </div>
                <div className={classes.modal_job_pos_desc}>
                    <h2>شرح موقعیت شغلی</h2>
                    <div className={classes.modal_job_pos_desc_items}>
                        {jobDesc.map(item => (
                            <div className={classes.modal_job_pos_desc_item}>
                                        
                                <span>
                                    <i className="far fa-dot-circle"></i>
                                    <span>{item.title}: </span>
                                    <span> {item.explain}</span>
                                </span>
                                        
                            </div> 
                        ))}
                    </div>
                </div>
                <div className={classes.modal_scoring_skills}>
                    <h2>مهارت های امتیازی </h2>
                    {scoringSkills.map(scoringskill => (
                        <div className={classes.modal_scoring_skills_item}>
                            <i className="far fa-check-square"></i>
                            {scoringskill}
                        </div>
                    ))
                    }
                </div>
                <div className={classes.modal_expected_indicators}>
                    <h2> شاخص های مورد انتظار </h2>
                    {expectedIndicators.map(expectedIndicator => (
                        <div className={classes.modal_expected_indicators_item}>
                            <i className="fas fa-arrow-left"></i>
                            {expectedIndicator}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default AdModal;