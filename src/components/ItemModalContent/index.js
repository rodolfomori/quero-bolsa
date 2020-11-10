/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'

import { Select, CheckBox, CleanSelect } from '..'

import PropTypes from 'prop-types'

// import { useScholarShipsData } from '../../hooks/scholarShipsData'
import { formatPrice } from '../../utils'
import { Container, WrapperItens } from './styles'

export function ItemModalContent({ data, index }) {
  const [scholarShipsData, setScholarShipsData] = useState(false)

  useEffect(() => {
    console.log(data)
    data && setScholarShipsData(data)
  }, [data])

  return (
    <>
      {scholarShipsData && (
        <Container>
          <CheckBox
            // checked={distance}
            id={index}
            name="distance"
            // onClick={() => setDistance(!distance)}
            style={{
              fontStyle: 'normal',
              fontWeight: 300,
              fontSize: 14,
              lineHeight: 19,
            }}
          />
          <div className="wrapper-image">
            <img src={scholarShipsData.university.logo_url} />
          </div>
          <WrapperItens>
            <p className="main-title">{scholarShipsData.course.name}</p>
            <p className="course-level">{scholarShipsData.course.level}</p>
            Bolsa de <span className="percent">{scholarShipsData.discount_percentage}%</span>
            <p className="price">{formatPrice(scholarShipsData.price_with_discount)}</p>
          </WrapperItens>
        </Container>
      )}
    </>
  )
}

ItemModalContent.propTypes = {
  data: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
}
