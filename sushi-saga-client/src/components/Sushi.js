import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.eatSushi(props.sushi)}>
        { 
          /* Tell me if this sushi has been eaten! 
           - Somehow, I have to keep track of whether or not my sushi have been eaten - I can keep track of my eaten sushi in a separate array that I can store in state
          */ 
          props.eaten ?
            null
          :
            <img src={props.sushi.img_url} width="100%" alt="cute sushi" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi