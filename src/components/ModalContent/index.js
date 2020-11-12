/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'

import { Select, CheckBox, CleanSelect, ItemModalContent, Range, ColourButton, WhiteButton } from '..'

import { useScholarShipsData } from '../../hooks/scholarShipsData'
import { formatPrice, getDataFiltered, getDataSort } from '../../utils'
import { Container, WrapperSelect, WrapperButtons, WrapperItensResp } from './styles'

export function ModalContent() {
  const [city, setCity] = useState('all')
  const [presential, setPresential] = useState(true)
  const [distance, setDistance] = useState(true)
  const [course, setCourse] = useState('all')
  const [filterData, setFilterData] = useState(false)
  const [sortFor, setSortFor] = useState(0)
  const [storageCourses, setStorageCourses] = useState([])

  const [courseValue, setCourseValue] = useState(1000)
  const { scholarShipsData, cities, courses, maxMin, addFavoritesCourses, setOpenModal } = useScholarShipsData()
  const { max, min } = maxMin || {}

  useEffect(() => {
    setFilterData(scholarShipsData)
  }, [scholarShipsData])

  useEffect(() => {
    const newData = getDataFiltered({ data: scholarShipsData, value: courseValue, city, distance, presential, course })
    setFilterData(getDataSort({ data: newData, sortFor }))
  }, [distance, city, presential, course, courseValue, scholarShipsData, sortFor])

  const storageCourse = (newCourse) => {
    const find = storageCourses.findIndex((item) => item.id === newCourse.id)

    if (find < 0) {
      setStorageCourses([newCourse, ...storageCourses])
    } else {
      const newData = storageCourses.filter((item) => item.id !== newCourse.id)
      setStorageCourses(newData)
    }
  }

  const submit = () => {
    addFavoritesCourses(storageCourses)
    setOpenModal(false)
  }
  const orderOptions = [
    {
      value: 0,
      label: 'Nome da faculdade',
    },
    {
      value: 1,
      label: 'Nome do curso',
    },
    {
      value: 2,
      label: 'Maior desconto',
    },
    {
      value: 3,
      label: 'Menor desconto',
    },
    {
      value: 4,
      label: 'Maior preço',
    },
    {
      value: 5,
      label: 'Menor preço',
    },
  ]
  return (
    <Container>
      <h2>Adicionar Bolsa</h2>
      <p className="price">Filtre e adicione as bolsas de seu interesse.</p>
      <WrapperItensResp>
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
      </WrapperItensResp>
      <WrapperItensResp>
        <div>
          <h4>Como você quer estudar ?</h4>
          <div style={{ display: 'flex', gap: 20, marginTop: 30 }}>
            <CheckBox
              checked={presential}
              id="presencial"
              name="presencial"
              onChange={() => {
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
        </div>

        <div>
          <h4>Até quanto pode pagar ?</h4>
          <p className="price">{formatPrice(courseValue)}</p>
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
        </div>
      </WrapperItensResp>
      <WrapperSelect>
        <span>Resultado:</span>
        <div className="result-select">
          <span>Ordenar por</span>
          <CleanSelect
            placeholder="Todos os cursos"
            name="courses"
            options={orderOptions}
            value={sortFor}
            onChange={({ value }) => setSortFor(value)}
          />
        </div>
      </WrapperSelect>
      {filterData && (
        <div>
          {filterData.map((item, index) => (
            <ItemModalContent key={index} storageCourse={storageCourse} index={index} data={item} />
          ))}
        </div>
      )}

      <WrapperButtons>
        <WhiteButton style={{ maxWidth: 250 }} type="button" onClick={() => setOpenModal(false)}>
          Cancelar
        </WhiteButton>
        <ColourButton disabled={filterData.length === 0} type="button" onClick={filterData.length === 0 ? '' : submit}>
          Adicionar Bolsa(s)
        </ColourButton>
      </WrapperButtons>
    </Container>
  )
}
