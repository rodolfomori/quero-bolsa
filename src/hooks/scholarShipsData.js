import React, { createContext, useState, useContext, useCallback, useEffect, useMemo } from 'react'

import PropTypes from 'prop-types'

import { mainApi } from '../services/api'
import { getAllCities, getAllCourses, getMaxMinPrice } from '../utils'

const ScholarShipsDataContext = createContext({})

const ScholarShipsDataProvider = ({ children }) => {
  const [scholarShipsData, setScholarShipsData] = useState([])
  const [cities, setCities] = useState([])
  const [courses, setCourses] = useState([])
  const [maxMin, setMaxMin] = useState([])
  const [favorites, setFavorites] = useState([])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await mainApi.get()
        console.log(data)
        const finalData = data.map((item, index) => {
          item.id = index + 1
          return item
        })

        console.log(data)
        setScholarShipsData(finalData)
        setCities(getAllCities(data))
        setCourses(getAllCourses(data))
        setMaxMin(getMaxMinPrice(data))
      } catch (err) {
        console.error(err)
      }
    }
    loadData()
  }, [])

  useEffect(() => {
    async function loadData() {
      const storageData = await localStorage.getItem('QB:favorites-courses')

      if (storageData) {
        setFavorites(JSON.parse(storageData))
      }
    }
    loadData()
  }, [])

  const addFavoritesCourses = useCallback(async (courses) => {
    let storageData = await localStorage.getItem('QB:favorites-courses')

    let newData = []
    if (storageData) {
      storageData = JSON.parse(storageData)

      for (let i = courses.length - 1; i >= 0; i--) {
        for (let j = 0; j < storageData.length; j++) {
          if (courses[i] && courses[i].id === storageData[j].id) {
            courses.splice(i, 1)
          }
        }
      }

      newData = [...courses, ...storageData]
    } else newData = courses

    setFavorites(newData)
    await localStorage.setItem('QB:favorites-courses', JSON.stringify(newData))
  }, [])

  const removeFavoritesCourses = useCallback(async (courseID) => {
    let storageData = await localStorage.getItem('QB:favorites-courses')
    storageData = JSON.parse(storageData)

    const newData = storageData.filter((item) => item.id !== courseID)

    setFavorites(newData)
    await localStorage.setItem('QB:favorites-courses', JSON.stringify(newData))
  }, [])

  const chooseSemester = useCallback(async (semester = 'all') => {
    let storageData = await localStorage.getItem('QB:favorites-courses')
    storageData = JSON.parse(storageData)

    let newData = []

    if (semester === 'all') {
      setFavorites(storageData)
    } else {
      newData = storageData.filter((item) => item.enrollment_semester === semester)
      setFavorites(newData)
    }
  }, [])

  const value = useMemo(
    () => ({
      scholarShipsData,
      cities,
      courses,
      openModal,
      setOpenModal,
      maxMin,
      removeFavoritesCourses,
      addFavoritesCourses,
      favorites,
      chooseSemester,
    }),
    [
      scholarShipsData,
      cities,
      courses,
      maxMin,
      openModal,
      setOpenModal,
      addFavoritesCourses,
      favorites,
      removeFavoritesCourses,
      chooseSemester,
    ]
  )

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

ScholarShipsDataProvider.propTypes = {
  children: PropTypes.any,
}
