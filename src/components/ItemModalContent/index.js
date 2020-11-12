/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'

import { MainCheckBox } from '..'

import PropTypes from 'prop-types'

import { useScholarShipsData } from '../../hooks/scholarShipsData'
import { formatPrice } from '../../utils'
import { Container, WrapperItens } from './styles'

export function ItemModalContent({ data, index, storageCourse }) {
  const [scholarShipsData, setScholarShipsData] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  const { favorites } = useScholarShipsData()

  useEffect(() => {
    favorites.forEach((element) => {
      element.id === data.id && setIsChecked(true)
    })

    data && setScholarShipsData(data)
  }, [data, favorites])

  return (
    <>
      {scholarShipsData && (
        <Container>
          <MainCheckBox
            defaultChecked={isChecked || false}
            id={index}
            name="course"
            style={{
              fontStyle: 'normal',
              fontWeight: 300,
              fontSize: 14,
              lineHeight: 19,
            }}
            onChange={() => storageCourse(data)}
          />
          <div className="wrapper-image">
            <img src={scholarShipsData.university.logo_url} />
          </div>
          <WrapperItens>
            <div className="first-child-div">
              <p className="main-title">{scholarShipsData.course.name}</p>
              <p className="course-level">{scholarShipsData.course.level}</p>
            </div>
            <div className="price-div">
              <span className="percent">
                <span>Bolsa de </span>
                {scholarShipsData.discount_percentage}%
              </span>
              <p className="price">{formatPrice(scholarShipsData.price_with_discount)}</p>
            </div>
          </WrapperItens>
        </Container>
      )}
    </>
  )
}

ItemModalContent.propTypes = {
  data: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  storageCourse: PropTypes.func.isRequired,
}
