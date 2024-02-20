import React, { Component } from 'react'
 import NewsItem from './NewsItem'
 import Spinner from './Spinner';
 import PropTypes from 'prop-types'
 
export class NewsComponent extends Component {

  static propTypes = {
    country:PropTypes.string,
    category:PropTypes.string
  }

  static defaultProps = {
    country:'in',
    category : 'general'
  }
   capitalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1)
   }

  constructor(props)
  {
    super(props);
    this.state={
      article : [],
      loading : false,
      page:1
    };
    document.title=`UGN news -${this.capitalizeFirstLetter(this.props.category)}`
  }

    async updateNews(PAGE)
    {

          this.setState({loading:true})
          this.props.setProgress(0)
          this.props.setProgress(10)
          let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.Api_key}&page=${PAGE}&pageSize=20`;
          let data = await fetch(url);
          this.props.setProgress(50)
          let parsedData=await data.json();
          this.props.setProgress(70)
          if(parsedData.articles)
          {
            this.setState({article: parsedData.articles,
              loading:false,
              pageSize:20,  //pageSize is no.of element per page given in newsAPI documentation>everything
              totalElement:parsedData.totalResults,  //we are defining stete/value of totalelement variable using the json file stored in parsedData. See the json file from newsapi documentation
              progress:100
            });
          }
          else{console.log("Data not avialable")}
          this.props.setProgress(80)
          this.props.setProgress(100)
    }


    //componentDidMount() function will invoked once component is rendered
    // so that it can fetch the api and update the data
  async componentDidMount()
  {
    this.updateNews(1)      //passed page_no:1 initialization
  }


  handle_prev=async()=>{
        const stateObject = this.state.page-1;   //storing next state in a object because it requires to terminate function in order to actual update the state,so now we can use this object before terminating function
        this.setState({page:this.state.page-1}); //this state of page will be updated once the function will terminate,thus we use object to store the new state and used it before actual updation of state
        this.updateNews(stateObject) 
  }


  handle_next=async()=>{
    const stateObject = this.state.page+1;
    this.setState({ page:this.state.page + 1})
    this.updateNews(stateObject)
  }



    

  render() {
    

    const Heading_style={
      textAlign: 'center',
       marginTop: '60px',
       paddingTop: '30px'
      

      
    }
    return (
      <>
        <h1 style={Heading_style}>{`UGN news -Top Trending on ${this.capitalizeFirstLetter(this.props.category)}`}</h1>
        
        

        <div className="d-flex justify-content-around my-3" style={{marginTop:'85px'}}>
      <button disabled={this.state.page<=1} type="button" className="btn btn-outline-secondary" onClick={this.handle_prev}>&larr; Previous </button>
      <button disabled={(this.state.page >= Math.ceil(this.state.totalElement/this.state.pageSize))} type="button" className="btn btn-outline-secondary" onClick={this.handle_next}>   Next &rarr; </button>
      </div>

      {this.state.loading && <Spinner/>}  
       {/* here we will display the loader as per the state that we are changing before and after fetching of API */}

      <div className='container'>
      <div className="row">
        {  this.state.article.map((element) =>{
            return(
            <div className="col-md-3 my-3" style={{height:'10%'}}>
       {this.state.loading===false && <NewsItem theme={this.props.theme} author={element.author?element.author:"Unknown"} source={element.source.name} date={element.publishedAt} title={element.title?element.title.slice(0,30)+".....":""} url={element.url?element.url:""} imgurl={element.urlToImage?element.urlToImage:"data:image/png;base64,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"} desc={element.description?element.description.slice(0,50)+"....":""}/> }
        {/* when loader is visible then we will hide the content */}
        </div>
            )
          })}
       

          
      </div>
      </div>
      <div className="d-flex justify-content-around my-5">
      <button disabled={this.state.page<=1} type="button" className="btn btn-outline-secondary" onClick={this.handle_prev}>&larr; Previous </button>
      <button disabled={(this.state.page >= Math.ceil(this.state.totalElement/this.state.pageSize))} type="button" className="btn btn-outline-secondary" onClick={this.handle_next}>   Next &rarr; </button>
      </div>
      </>
    )
  }
}

export default NewsComponent

