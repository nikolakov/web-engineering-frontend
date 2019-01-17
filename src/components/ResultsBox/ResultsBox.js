import React from 'react';
import classes from './ResultsBox.module.css';
import FileItem from './FileItem/FileItem';
import Spinner from '../UI/Spinner/Spinner';

const resultsBox = (props) => {
    let assignedClass = classes.ResultsBox;
    let files = null;

    if(props.isLoading) {
        assignedClass = classes.EmptyResultBox;

        files = (<div className={classes.SpinnerContainer}><Spinner /></div>);
    } else {
        if(props.files.length > 0) {
            const sortedFiles = [...props.files].sort((a, b) => {
                return a.order - b.order;
            });
    
            files = sortedFiles.map(file => {
                const splittedName = file.fileName.split('.');
                const fileType = splittedName[splittedName.length - 1];
                
                return (
                    <a target="_blank" rel="noopener noreferrer" href={"http://172.20.10.8:4080/uploadedFiles/input/" + file.fileName}>
                        <FileItem fileType={fileType} name={file.fileName} key={file.fileName} order={file.order}/>
                    </a>
                );
            })
        } else {
            assignedClass = classes.EmptyResultBox;
            files=(<div className={classes.EmptyMessageContainer}><p>There are no files to display</p></div>)
        }
        
    }

    return (
        <div className={assignedClass}>
            {files}
        </div>
    );
}

export default resultsBox;