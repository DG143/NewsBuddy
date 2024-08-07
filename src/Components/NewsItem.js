import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description , imageUrl , newsUrl , author, date , source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: '80%' , zIndex:'1'}}>{source} </span>
  <img src={!imageUrl?"https://img.etimg.com/thumb/msid-111288688,width-1200,height-630,imgsize-25842,overlay-etmarkets/photo.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>

      </div>
    )
  }
}

export default NewsItem
