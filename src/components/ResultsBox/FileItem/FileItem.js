import React from 'react';
import classes from './FileItem.module.css';
import pdfIcon from '../../../assets/pdf.png';
import docxIcon from '../../../assets/docx.png';
import docIcon from '../../../assets/doc.png';
import xlsxIcon from '../../../assets/xlsx.png';
import xlsIcon from '../../../assets/xls.png';
import pptxIcon from '../../../assets/pptx.png';
import txtIcon from '../../../assets/txt.png';
import csvIcon from '../../../assets/csv.png';
import xmlIcon from '../../../assets/xml.png';
import javaIcon from '../../../assets/java.png';
import jsonIcon from '../../../assets/json.png';

const fileItem = (props) => {

    let icon = null;
    switch (props.fileType) {
        case 'pdf':
            icon = pdfIcon;
            break;

        case 'doc':
            icon = docIcon;
            break;

        case 'docx':
            icon = docxIcon;
            break;
        
        case 'xlsx':
            icon = xlsxIcon;
            break;

        case 'pptx':
            icon = pptxIcon;
            break;
        
        case 'txt':
            icon = txtIcon;
            break;

        case 'xls':
            icon = xlsIcon;
            break;

        case 'csv':
            icon = csvIcon;
            break;

        case 'xml':
            icon = xmlIcon;
            break;

        case 'java':
            icon = javaIcon;
            break;

        case 'json':
            icon = jsonIcon;
            break;

        default:
            icon = pdfIcon;
            break;
    }

    let name = props.name;
    
    if(props.order > 0) {
        if(name.length > 15) {
            name = name.slice(0, 11) + '...';
        }
        name = props.order + '. ' + name;
    } else {
        if(name.length > 17) {
            name = name.slice(0, 13) + '...';
        }
    }

    return (
        <div className={classes.FileItem}>
            <div className={classes.IconContainer}>
                <img src={icon} alt='icon'/>
            </div>
            <div className={classes.NameContainer}>
                {name}
            </div>
        </div>
    );
}

export default fileItem;