import classes from '../../styles/component_style/job_details.module.css';
import Link from 'next/link';
const LargeAdButtons = () => {
    return (
        <>
            <Link href="#">
                <button className={classes.resume_button}>ارسال رزومه</button>
            </Link>
            <Link href="#">
                <button className={classes.about_company_button}>درباره شرکت</button>
            </Link>
        </>
    )
}

export default LargeAdButtons;