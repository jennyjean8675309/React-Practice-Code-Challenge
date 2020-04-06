import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  const renderSushi = () => {
    return props.currentSushi.map(sushi => {
      return <Sushi sushi={sushi} key={sushi.id} />
    })
  }

  return (
    <Fragment>
      <div className="belt">
        { renderSushi() }
        <MoreButton getMore={props.getMore} />
      </div>
    </Fragment>
  )
}

export default SushiContainer