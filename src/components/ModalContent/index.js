/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'

import { Select, CheckBox } from '..'

import { useScholarShipsData } from '../../hooks/scholarShipsData'
import { Container, Range, WrapperCheck } from './styles'

export function ModalContent() {
  const [city, setCity] = useState([{}])
  const [presential, setPresential] = useState(true)
  const [distance, setDistance] = useState(true)
  const [course, setCourse] = useState([{}])

  const [courseValue, setCourseValue] = useState(1000)
  const { scholarShipsDataData, cities, courses, maxMin } = useScholarShipsData()
  const { max, min } = maxMin || {}

  useEffect(() => {
    console.log(maxMin)
  }, [scholarShipsDataData, cities, maxMin])

  return (
    <Container>
      <h2>Adicionar Bolsa</h2>
      <p>Filtre e adicione as bolsas de seu interesse.</p>
      <Select
        label="SELECIONE SUA CIDADE"
        placeholder="Todas as cidades"
        name="cities"
        options={cities}
        value={city}
        onChange={({ value }) => setCity(value)}
      />
      <Select
        label="SELECIONE O CURSO DE SUA PREFERÊNCIA"
        placeholder="Todos os cursos"
        name="courses"
        options={courses}
        value={course}
        onChange={({ value }) => setCourse(value)}
      />
      <h4>Como você quer estudar ?</h4>
      <div style={{ display: 'flex', gap: 20, marginTop: 30 }}>
        <CheckBox
          checked={presential}
          id="presencial"
          label="Presencial"
          name="presencial"
          onClick={() => setPresential(!presential)}
          style={{
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: 14,
            lineHeight: 19,
          }}
        />
        <CheckBox
          checked={distance}
          id="distance"
          label="A distância"
          name="distance"
          onClick={() => setDistance(!distance)}
          style={{
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: 14,
            lineHeight: 19,
          }}
        />
      </div>

      <h4>Até quanto pode pagar ?</h4>
      <p>{courseValue}</p>
      <Range
        type="range"
        value={courseValue}
        id="pricerange"
        name="pricerange"
        min={min}
        max={max}
        step="1"
        onChange={({ target: { value } }) => setCourseValue(value)}
      />
    </Container>
  )
}
