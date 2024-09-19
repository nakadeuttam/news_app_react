import './App.css';
import NewsComponent from './comonents/NewsComponent';
import Nav from './comonents/Nav';
import FooterSec from './comonents/FooterSec';
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {

  
  constructor() {
    super();
  
    this.state={
      
       theme : {backgroundColor:'white',
      color: 'black'},
      nav:'light',
      progress:0
      
    }
  }


  toggleTheme =()=>{
    if(this.state.theme.color === 'black')
    {
      console.log('dark')
      this.setState({
        theme:{color:'white',
      backgroundColor:'#020226'},
      nav:'dark'
              })
            
    }
    else
    {
      console.log('light')
      this.setState({
        theme:{color:'black',backgroundColor:'white'},
        nav:'light'
      })
    }
}
setProgress=(progress)=>{
  this.setState({progress:progress})          //defining the state for Top-loading bar
}

   

 
  render() {

    
    
    return (
      <>
      <Router>
      <LoadingBar       //Top loading module
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(100)}
      />
      <div style={this.state.theme}>
        <Nav toggleTheme={this.toggleTheme} nav={this.state.nav}></Nav>
        {/* <NewsComponent setProgress={this.setProgress} theme={this.state.theme} ></NewsComponent > */}
        



        <Routes>
          <Route exact path="/" element={<NewsComponent Api_key={process.env.REACT_APP_MY_API_KEY} setProgress={this.setProgress} key="general" progresstheme={this.state.theme} category='general' country='us'></NewsComponent >}></Route>
          <Route exact path="/Sports" element={<NewsComponent Api_key={process.env.REACT_APP_MY_API_KEY} setProgress={this.setProgress} key="sports" theme={this.state.theme} category='sports' country='us'></NewsComponent >}></Route>
          <Route exact path="/Entertainment" element={<NewsComponent Api_key={process.env.REACT_APP_MY_API_KEY} setProgress={this.setProgress} key="entertain" theme={this.state.theme} category='entertainment' country='us'></NewsComponent >}></Route>
          <Route exact path="/Health" element={<NewsComponent Api_key={process.env.REACT_APP_MY_API_KEY} setProgress={this.setProgress} key="health" theme={this.state.theme} category='health' country='us'></NewsComponent >}></Route>
          <Route exact path="/Business" element={<NewsComponent Api_key={process.env.REACT_APP_MY_API_KEY} setProgress={this.setProgress} key="buissness" theme={this.state.theme} category='business' country='us'></NewsComponent >}></Route>
          <Route exact path="/Technology" element={<NewsComponent Api_key={process.env.REACT_APP_MY_API_KEY} setProgress={this.setProgress} key="technology" theme={this.state.theme} category='technology' country='us'></NewsComponent >}></Route>
          <Route exact path="/Science" element={<NewsComponent Api_key={process.env.REACT_APP_MY_API_KEY} setProgress={this.setProgress} key="science" theme={this.state.theme} category='science' country='us'></NewsComponent >}></Route>
          
          
        </Routes>


        <FooterSec/>
      </div>
      </Router>
      </>
    )
  }
}

