/* eslint-disable no-unused-expressions */
import React from 'react'

import PropTypes from 'prop-types'

import { useScholarShipsData } from '../../hooks/scholarShipsData'
import { formatPrice } from '../../utils'

import { Stars, WhiteButton, ColourButton } from '..'

import { Container, WrapperItens, WrapperStars, WrapperMiddle, WrapperFooter, WrapperButtons, Image } from './styles'

export function ItemHome({ favorite }) {
  const { removeFavoritesCourses } = useScholarShipsData()

  return (
    <>
      {favorite && (
        <Container>
          <WrapperItens className="wrapper">
            <Image>
              <img src={favorite.university.logo_url} />
            </Image>
            <p className="main-title first-child">{favorite.university.name}</p>
            <div style={{ height: 60 }}>
              <p className="course">{favorite.course.name}</p>
            </div>
            <WrapperStars>
              <p>{favorite.university.score}</p>
              <Stars score={favorite.university.score} />
            </WrapperStars>
          </WrapperItens>
          <div className="middle-child-div">
            <WrapperItens className="middle-child">
              <WrapperMiddle>
                <p className="main-title">{favorite.course.kind}</p>•
                <p className="main-title">{favorite.course.shift}</p>
              </WrapperMiddle>
              <WrapperMiddle className="last-child-wrapper">
                <span>Início das aulas em: {favorite.start_date}</span>
              </WrapperMiddle>
            </WrapperItens>
          </div>

          <WrapperItens className="last-child">
            <p className="qb-text">Mensalidade com o Quero Bolsa:</p>
            <p className="full-price">{formatPrice(favorite.full_price)}</p>
            <WrapperFooter>
              <p className="price">{formatPrice(favorite.price_with_discount)} </p> <span className="month"> /mês</span>
            </WrapperFooter>
            <WrapperButtons>
              <WhiteButton onClick={() => removeFavoritesCourses(favorite.id)} type="button">
                Excluir
              </WhiteButton>
              <ColourButton type="button" disabled={!favorite.enabled}>
                {favorite.enabled ? 'Ver Oferta' : 'Indisponível'}
              </ColourButton>
            </WrapperButtons>
          </WrapperItens>
        </Container>
      )}
    </>
  )
}

ItemHome.propTypes = {
  favorite: PropTypes.array.isRequired,
}
