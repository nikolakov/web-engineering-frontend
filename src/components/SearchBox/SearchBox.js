import React from 'react';
import classes from './SearchBox.module.css';

const searchBox = (props) => {
    return (
        <div className={classes.SearchBox}>
            <input 
                type="text" 
                onChange={props.inputHandler} 
                value={props.value} 
                className={classes.Input}
                placeholder="Enter a search term"
            />
            <button
                onClick={props.buttonClicked}
                className={classes.Button}
            >Search</button>
        </div>
    );
}

export default searchBox;