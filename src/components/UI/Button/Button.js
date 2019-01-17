import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
    return (
        <button 
        disabled = {props.disabled}
        onClick={props.clicked}
        style={{...props.customStyle, backgroundColor: props.color, borderColor: props.color}}
        className = {[classes.Button, classes[props.btnType]].join(' ')} >
            {props.children}
        </button>
    );
}

export default button;