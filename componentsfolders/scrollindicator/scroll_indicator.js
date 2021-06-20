import classes from '../../styles/component_style/scroll_indicator.module.css';
import { useState, useEffect } from 'react';
const ScrollIndicator = ({ children }) => {
    const [scroll, setScroll] = useState(0);
    const onScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
      setScroll(scrolled);
    };
    useEffect(() => {
      window.addEventListener('scroll', onScrollProgress);
      return () => {
        window.removeEventListener('scroll', onScrollProgress);
      };
    }, []);
    
    return (
      <>
        <div className={classes.indicator_container}>
          <div className={classes.indicator} style={{ width: scroll}}/>
        </div>
        {children}
      </>
    );
};

export default ScrollIndicator;
