import React, { useState } from 'react'

import { Container, ChooseButtonMain, ChooseButtonSeccond, ChooseButtonFirst } from './styles'

export function SemesterMenu() {
  const [semester, setSemester] = useState(null)

  const chooseSemester = (semesterChosen = null) => {
    setSemester(semesterChosen)
  }

  return (
    <Container>
      <ChooseButtonMain semester={semester} onClick={() => chooseSemester(null)}>
        Todos os semestres
      </ChooseButtonMain>
      <ChooseButtonSeccond semester={semester} onClick={() => chooseSemester(2)}>
        2° semestre de 2019
      </ChooseButtonSeccond>
      <ChooseButtonFirst semester={semester} onClick={() => chooseSemester(1)}>
        1° semestre de 2019
      </ChooseButtonFirst>
    </Container>
  )
}
