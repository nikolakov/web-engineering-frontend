import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SearchBox from './components/SearchBox/SearchBox';
import ResultsBox from './components/ResultsBox/ResultsBox';
import Button from './components/UI/Button/Button';
import axios from './axiosConfig';

import BG from './assets/bg.jpg';

import classes from './App.module.css';

class App extends Component {
  state = {
    searchTerm: '',
    files: [
      {fileName: 'document.docx', order: 0, url: 'sdfsad'},
      {fileName: 'anotherDocument.pdf', order: 3},
      // {fileName: 'excelSheet.xlsx', order: 1},
      // {fileName: 'presentation.pptx', order: 2},
      {fileName: 'document2.doc', order: 6},
      {fileName: 'pdfDoc.pdf', order: 5},
      {fileName: 'excelSheet2.xlsx', order: 4},
      // {fileName: 'presentation2.pptx', order: 7},
      {fileName: 'presentation2.pptx', order: 8},
      // {fileName: 'presentation2.pptx', order: 9},
      // {fileName: 'presentation2.pptx', order: 10},
    ],
    loadingFiles: false,
    
  };

  inputChangedHandler = (event) => {
    const newValue = event.target.value
    this.setState({searchTerm: newValue});
    console.log("New value: ", newValue);
  }

  submitSearchHandler = async () => {
    if(this.state.searchTerm.length > 0) {
      this.setState({loadingFiles: true});
      const res = await axios.get('search?keyword=' + this.state.searchTerm);
      this.setState({files: res.data, loadingFiles:false})
      if(res.status !== 200) this.setState({loadingFiles: false}, ()=>{console.log("Connection error!")});
    } else {
      this.getFilesHandler();
    }
    
  }

  indexFilesHandler = async () => {
    this.setState({loadingFiles: true});
    const res = await axios.post('index');
    if(res.status === 200) this.getFilesHandler();
    else console.log('Connection Error!');
  }

  getFilesHandler = async () => {
    this.setState({loadingFiles: true});
    const filesResponse = await axios.get('index');
    // const data = productsResponse.data ? productsResponse.data : {};
    console.log(filesResponse.data);
    this.setState({files: filesResponse.data, loadingFiles: false});
  } 

  render() {
    return (
      <> 
        <div className={classes.BG} style={{backgroundImage: `url(${BG})`}}>

        </div>
        <Toolbar />
        <div className={classes.App} >
          <div className={classes.SearchBoxContainer}>
            <SearchBox 
              inputHandler={this.inputChangedHandler}
              value={this.state.searchTerm}
              buttonClicked={this.submitSearchHandler}
            />
          </div>
          <div className={classes.ResultsBoxContainer}>
            <ResultsBox 
              files={this.state.files.length > 0 ? this.state.files : []}
              // files={[]} 
              isLoading = {this.state.loadingFiles}
            />
          </div>
          <div className={classes.IndexButtonContainer}>
            <Button color="#279DCF" clicked={this.indexFilesHandler} >Index files</Button>
          </div>
        </div>
      </>
      
    );
  }
}

export default App;


// const productsResponse = await axios.get('api/products');
        
//         const data = productsResponse.data ? productsResponse.data : {};
//         const productsArray = [];
//         for(const key in data) {
//             productsArray.push({...data[key]});
//         }
//         return productsArray;