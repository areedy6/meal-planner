import React from 'react'
import { Link } from 'react-router-dom';
import './card.css'

  class Card extends React.Component {
    render() {
      const { image, headerTxt, title, children, btnClick } = this.props;
      const style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <article className="card">
          <header style={style} id={image} className="card-header">
            <h4 className="card-header--title">{headerTxt}</h4>
          </header>
          <div className="card-body">
            
            <h2>{title}</h2>
            
            <p className="body-content">{children}</p>
            <Link to={"/ingredients/" + title} onClick={btnClick}>
              <button className="button button-primary">
                Find out more
              </button>
            </Link>
          </div>
        </article>
      )
    }
  }

  export default Card
  
  