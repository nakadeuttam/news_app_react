import React, { Component } from 'react'

export class NewsItem extends Component {
constructor(props) {{
  super();
  this.state={
    btncolor:"#212529"
  }
}}

  render() {
    let {title,desc,imgurl,url,author,date} = this.props;
    
    return (
      <div>
        
     <div className="card">

     <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%'}}>
    {this.props.source}
    <span class="visually-hidden">unread messages</span>
  </span>

  <img src={imgurl} className="card-img-top" alt="..."/>
  <div className="card-body" style={this.props.theme}>

    
    <p style={{color:'grey'}}><b style={{color:'darkgrey'}}>{author}</b>       {new Date(date).toGMTString()}
    
  
    
    </p>
    <h5 className="card-title">{title} 
   
  </h5>
    <p className="card-text">{desc}
    </p>
    <a href={url}   className="btn btn-primary">Details</a>

    
  </div>
</div>
    
      </div>
    )
  }
}

export default NewsItem
