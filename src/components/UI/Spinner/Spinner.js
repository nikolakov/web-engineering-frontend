import React from 'react';

import classes from './Spinner.module.css';

const spinner = () => (
    <div className = {classes.Skcubegrid}>
        <div className = {[classes.Skcube, classes.Skcube1].join(' ')}></div>
        <div className = {[classes.Skcube, classes.Skcube2].join(' ')}></div>
        <div className = {[classes.Skcube, classes.Skcube3].join(' ')}></div>
        <div className = {[classes.Skcube, classes.Skcube4].join(' ')}></div>
        <div className = {[classes.Skcube, classes.Skcube5].join(' ')}></div>
        <div className = {[classes.Skcube, classes.Skcube6].join(' ')}></div>
        <div className = {[classes.Skcube, classes.Skcube7].join(' ')}></div>
        <div className = {[classes.Skcube, classes.Skcube8].join(' ')}></div>
        <div className = {[classes.Skcube, classes.Skcube9].join(' ')}></div>
    </div>
);

export default spinner;