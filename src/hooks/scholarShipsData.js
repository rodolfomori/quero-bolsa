import React, { createContext, useState, useContext, useCallback, useEffect, useMemo } from 'react'

import PropTypes from 'prop-types'

import { mainApi } from '../services/api'
import { getAllCities, getAllCourses, getMaxMinPrice } from '../utils'

const ScholarShipsDataContext = createContext({})

const ScholarShipsDataProvider = ({ children }) => {
  const [scholarShipsDataData, setScholarShipsDataData] = useState([{}])
  const [cities, setCities] = useState([{}])
  const [courses, setCourses] = useState([{}])
  const [maxMin, setMaxMin] = useState([{}])

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await mainApi.get()
        setScholarShipsDataData(data)

        setCities(getAllCities(data))
        setCourses(getAllCourses(data))
        setMaxMin(getMaxMinPrice(data))
      } catch (err) {
        console.error(err)
      }
    }
    loadData()
  }, [])

  const value = useMemo(() => ({ scholarShipsDataData, cities, courses, maxMin }), [
    scholarShipsDataData,
    cities,
    courses,
    maxMin,
  ])

  return <ScholarShipsDataContext.Provider value={value}>{children}</ScholarShipsDataContext.Provider>
}

function useScholarShipsData() {
  const context = useContext(ScholarShipsDataContext)

  if (!context) {
    throw new Error(`useScholarShipsData must be used within a ScholarShipsDataProvider`)
  }

  return context
}

export { ScholarShipsDataProvider, useScholarShipsData }

// ScholarShipsDataProvider.propTypes = {
//   children: PropTypes.any,
// }
