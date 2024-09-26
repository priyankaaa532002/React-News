import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

// 390f5d1c62974102a3f9eab77bda712e
export class News extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        <div className='row'>
            <div className='col-md-4'>
            <NewsItem title="hello 1" description="hello 1 desc"/>
            </div>
            <div className='col-md-4'>
            <NewsItem title="hello 2" description="hello 1 desc"/>
            </div>
            <div className='col-md-4'>
            <NewsItem title="hello 3" description="hello 1 desc"/>
            </div>
        </div>
      </div>
    )
  }
}

export default News
