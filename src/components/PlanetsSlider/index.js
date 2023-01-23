import {Component} from 'react'
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

export default class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props

    return (
      <div data-testid="planets" className="conatiner">
        <h1 className="PLANETS"> PLANETS</h1>
        <div>
          <Slider>
            {planetsList.map(each => (
              <PlanetItem each={each} key={each.id} />
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}
