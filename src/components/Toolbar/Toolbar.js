import React from 'react';
import classes from './Toolbar.module.css';
import tuLogo from '../../assets/tu-logo.png';

const toolbar = (props) => {
    return (
        <div className={classes.Toolbar}>
            <div className={classes.LogoContainer}><img src={tuLogo} alt="logo"/></div>
            <h1>File Indexing Project - Apache Lucene</h1>
        </div>
    );
}

export default toolbar;