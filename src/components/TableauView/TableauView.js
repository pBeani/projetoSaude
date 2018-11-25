import React, { Component } from 'react';
import tableau from 'tableau-api';
import './TableauView.css';


  class TableauDashboard extends Component {
    
    componentDidMount() {  
      this.initViz()  
    }  
    
    initViz() {  
      const vizUrl = this.props.url;  
      const vizContainer = this.vizContainer;  
      let viz = new window.tableau.Viz(vizContainer, vizUrl)  
    }  
    
    
    render() {  
      return (  
        <div ref={(div) => { this.vizContainer = div }}>  
        </div>  
      )  
    }  
  }
  
  export default TableauDashboard;