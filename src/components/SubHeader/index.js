import React, { useState, useEffect } from 'react'

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import { Container, Icon } from './styles'

export function SubHeader() {
  const [desktop, setDesktop] = useState(0)

  useEffect(() => {
    function handleResize() {
      setDesktop(window.innerWidth > 620)
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <Container>
      <div>
        {desktop ? (
          <>
            {' '}
            <a href="/">Home</a> <span>/</span>
          </>
        ) : (
          <Icon icon={faChevronLeft} />
        )}
        <a href="/">Minha conta</a>
        {desktop && (
          <>
            <span>/</span>
            <a href="/" className="active-link">
              Bolsas favoritas
            </a>
          </>
        )}
      </div>
      <div>
        <h2>Bolsas favoritas </h2>
        <p>
          Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas
          disponíveis.
        </p>
      </div>
    </Container>
  )
}
