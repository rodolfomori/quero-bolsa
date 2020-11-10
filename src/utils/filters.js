export const getAllCities = (data) => {
  const cities = Array.from([...new Set(data.map((item) => item.campus.city))].sort())

  return cities.map((element) => ({ value: element, label: element }))
}

export const getAllCourses = (data) => {
  const courses = Array.from([...new Set(data.map((item) => item.course.name))].sort())

  return courses.map((element) => ({ value: element, label: element }))
}

export const getMaxMinPrice = (data) => {
  const prices = [...new Set(data.map((item) => item.price_with_discount))].sort()

  const max = Math.round(Math.max(...prices))
  const min = Math.round(Math.min(...prices))

  return { max, min }
}

export const getDataFiltered = ({
  data,
  city = 'all',
  course = 'all',
  presential = true,
  distance = true,
  value = 1000,
}) => {
  const newData = data
    .filter((item) => (city === 'all' ? item.campus.city : item.campus.city === city))
    .filter((item) => (course === 'all' ? item.course.name : item.course.name === course))
    .filter((item) => item.price_with_discount <= value)
    .filter((item) =>
      presential && distance
        ? item.course.kind
        : !presential && !distance
        ? item.course.kind !== 'Presencial' && item.course.kind !== 'EaD'
        : !presential && distance
        ? item.course.kind === 'EaD'
        : item.course.kind === 'Presencial'
    )

  return newData
}
