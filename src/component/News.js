import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component
{

  articles: [

  ]
  constructor(){
    super();
    console.log("Hello I'm constructor running from News.js");
    this.state={
      articles: this.articles,
      loading: false
    }
  }
  async componentDidMount(){
    console.log("ComponentDidMount working");
    let url= 
    "https://newsapi.org/v2/everything?q=tesla&from=2022-12-30&sortBy=publishedAt&apiKey=ac0d020b1dbd4e119002ef3cff03eebc";
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
<>
<div className='container'>
  <div className='row'>
    {this.state.articles.map((element)=>{
      return<div className='col-md-4'>
      <NewsItem key={element.url}title={element.title} description={element.title} />
      </div>
    })}
    
<div className='col-md-4'>
<NewsItem title="TDILCS" description="TDIL Consultancy Services"/>
</div>
<div className='col-md-4'>
<NewsItem title="TDILCS" description="TDIL Consultancy Services"/>
</div>
</div>
</div>

</>
    
    )
  }
}
