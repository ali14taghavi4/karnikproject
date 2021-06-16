import classes from '../../styles/component_style/job_details.module.css';
const JobMoreDetails = ( { abilities, languages, jobDesc, scoringSkills, expectedIndicators }) => {
    return (
        <>
            <div className={classes.abilities}>
                <h2>توانایی ها </h2>
                <div className={classes.abilities_items}>
                    {abilities.map(ability => (
                        <span>{ability}</span>
                    ))}
                </div>
            </div>
            <div className={classes.company_language}>
                <h2> زبان </h2>
                <div className={classes.language_items}>
                    {languages.map(language => (
                        <span>{language}</span> 
                    ))}
                </div>
            </div>
            <div className={classes.job_pos_desc}>
                <h2>شرح موقعیت شغلی</h2>
                <div className={classes.job_pos_desc_items}>
                    {jobDesc.map(item => (
                        <div className={classes.job_pos_desc_item}>
                                    
                            <span>
                                <i class="far fa-dot-circle"></i>
                                <span>{item.title}: </span>
                                <span> {item.explain}</span>
                            </span>
                                    
                        </div> 
                    ))}
                </div>
            </div>
            <div className={classes.scoring_skills}>
                <h2>مهارت های امتیازی </h2>
                {scoringSkills.map(scoringskill => (
                    <div>
                        <i class="far fa-check-square"></i>
                        {scoringskill}
                    </div>
                ))
                }
            </div>
            <div className={classes.expected_indicators}>
                <h2> شاخص های مورد انتظار </h2>
                {expectedIndicators.map(expectedIndicator => (
                    <div>
                        <i class="fas fa-arrow-left"></i>
                        {expectedIndicator}
                    </div>
                ))}
            </div>
        </>
    )
}

export default JobMoreDetails;