import React from 'react'
import { Link } from 'react-router-dom';
import './card.css'

  class Card extends React.Component {
    render() {
      const { image, headerTxt, title, children, recipe, ingredientView } = this.props;
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
            
            <div className="body-content">{children}</div>
            <Link to={ingredientView?{pathname: "/ingredients/", state: {recipe}}:"/"}>
              <button className="button button-primary">
                {ingredientView 
                ? "Find out more": "back to recipes"}
              </button>
            </Link>
          </div>
        </article>
      )
    }
  }

  export default Card
  