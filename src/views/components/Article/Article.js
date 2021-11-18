import React from 'react'
import './Article.css'

function Article() {
    return (
        <div className="featured__article">
        <figure className="article">
          <img src="images/hospice-care.png" alt="" />
          
          <figcaption>
            <p className="article__title">
              5 Tips on Improving your health
            </p>
          </figcaption>
        </figure>
      </div>
    )
}

export default Article
