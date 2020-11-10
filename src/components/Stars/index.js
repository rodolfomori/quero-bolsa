/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React from 'react'
import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa'

import PropTypes from 'prop-types'

import { Container } from './styles'

export function Stars({ score }) {
  const Rating = () => {
    const number = Math.floor(score)
    const half = !Number.isInteger(score)
    const all = new Array(number).fill(true)
    const render = all.map((item, index) => <FaStar key={index} />)
    const voidStar = all.map((item, index) => <FaStar key={index} />)
    return (
      <Container>
        {render}
        {half && <FaStarHalfAlt />}
        {voidStar && <FaRegStar />}
      </Container>
    )
  }

  return (
    <Container>
      <Rating />
    </Container>
  )
}

Stars.propTypes = {
  score: PropTypes.number.isRequired,
}
