import Button from '@restart/ui/esm/Button'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const BookMark = () => {
  const bookmark=useSelector(state=>state.headlinesReducer.bookmark)
  return (
    <div>
      <h2 className="text-center">Book Marked Item</h2>
      {bookmark.map((item,index)=>(
        <>
          <Link to={`/articles/${index}`} className="text-decoration-none"> 
            <img src={item.urlToImage} alt="" style={{maxWidth:"50%"}}/>
            <li className="list-group-item">{item.title} <span className="text-primary">Read more....</span>
            </li> 
          </Link> 
        </>
      ))}
    </div>
  )
}
