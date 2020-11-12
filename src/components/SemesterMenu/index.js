import React, { useState } from 'react'

import { useScholarShipsData } from '../../hooks/scholarShipsData'
import { Container, ChooseButtonMain, ChooseButtonSeccond, ChooseButtonFirst } from './styles'

export function SemesterMenu() {
  const [semester, setSemester] = useState(null)
  const { chooseSemester } = useScholarShipsData()

  return (
    <Container>
      <ChooseButtonMain
        semester={semester}
        onClick={() => {
          setSemester(null)
          chooseSemester()
        }}
      >
        Todos os semestres
      </ChooseButtonMain>
      <ChooseButtonSeccond
        semester={semester}
        onClick={() => {
          setSemester(2)
          chooseSemester('2019.2')
        }}
      >
        2° semestre de 2019
      </ChooseButtonSeccond>
      <ChooseButtonFirst
        semester={semester}
        onClick={() => {
          setSemester(1)
          chooseSemester('2020.1')
        }}
      >
        1° semestre de 2020
      </ChooseButtonFirst>
    </Container>
  )
}
