import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  const renderSushi = () => {
    return props.currentSushi.map(sushi => {
      if (props.eatenSushi.includes(sushi)) {
        return <Sushi sushi={sushi} key={sushi.id} eaten={true} eatSushi={props.eatSushi} />
      } else {
        return <Sushi sushi={sushi} key={sushi.id} eatSushi={props.eatSushi} />
      } 
    })
  }

  return (
    <Fragment>
      <div className="belt">
        { renderSushi() }
        <MoreButton getMoreSushi={props.getMoreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer