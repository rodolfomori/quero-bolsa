/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'

import { Select, CheckBox, CleanSelect, ItemModalContent, Range } from '..'

import { useScholarShipsData } from '../../hooks/scholarShipsData'
import { formatPrice, getDataFiltered } from '../../utils'
import { Container, WrapperCheck, WrapperSelect } from './styles'

export function ModalContent() {
  const [city, setCity] = useState('all')
  const [presential, setPresential] = useState(true)
  const [distance, setDistance] = useState(true)
  const [course, setCourse] = useState('all')
  const [filterData, setFilterData] = useState(false)

  const [courseValue, setCourseValue] = useState(1000)
  const { scholarShipsData, cities, courses, maxMin } = useScholarShipsData()
  const { max, min } = maxMin || {}

  useEffect(() => {
    setFilterData(scholarShipsData)
  }, [scholarShipsData])

  useEffect(() => {
    const newData = getDataFiltered({ data: scholarShipsData, value: courseValue, city, distance, presential, course })
    setFilterData(newData)
  }, [distance, city, presential, course, courseValue, scholarShipsData])

  return (
    <Container>
      <h2>Adicionar Bolsa</h2>
      <p>Filtre e adicione as bolsas de seu interesse.</p>
      <Select
        label="SELECIONE SUA CIDADE"
        placeholder=""
        name="cities"
        options={[{ value: 'all', label: 'Todas as cidades' }, ...cities]}
        value={city}
        onChange={({ value }) => setCity(value)}
      />
      <Select
        label="SELECIONE O CURSO DE SUA PREFERÊNCIA"
        placeholder=""
        name="courses"
        options={[{ value: 'all', label: 'Todos os cursos' }, ...courses]}
        value={course}
        onChange={({ value }) => setCourse(value)}
      />
      <h4>Como você quer estudar ?</h4>
      <div style={{ display: 'flex', gap: 20, marginTop: 30 }}>
        <CheckBox
          checked={presential}
          id="presencial"
          name="presencial"
          onChange={() => {
            console.log('teesteee')
            setPresential(!presential)
          }}
          style={{
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: 14,
            lineHeight: 19,
          }}
        />
        <span className="label-checkbox">Presencial</span>
        <CheckBox
          checked={distance}
          id="distance"
          name="distance"
          onClick={() => setDistance(!distance)}
          style={{
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: 14,
            lineHeight: 19,
          }}
        />
        <span className="label-checkbox">A distância</span>
      </div>

      <h4>Até quanto pode pagar ?</h4>
      <p>{formatPrice(courseValue)}</p>
      <Range
        type="range"
        value={courseValue}
        id="pricerange"
        name="pricerange"
        min={min}
        max={max}
        step="10"
        onChange={({ target: { value } }) => setCourseValue(value)}
      />

      <WrapperSelect style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Resultado:</span>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>Ordernar por</span>
          <CleanSelect
            placeholder="Todos os cursos"
            name="courses"
            options={courses}
            value={course}
            onChange={({ value }) => setCourse(value)}
          />
        </div>
      </WrapperSelect>
      {filterData && (
        <div>
          {filterData.map((item, index) => (
            <ItemModalContent key={index} index={index} data={item} />
          ))}
        </div>
      )}
    </Container>
  )
}
