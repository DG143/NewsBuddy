import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description , imageUrl , newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card">
  <img src={!imageUrl?"https://img.etimg.com/thumb/msid-111288688,width-1200,height-630,imgsize-25842,overlay-etmarkets/photo.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>

      </div>
    )
  }
}

export default NewsItem