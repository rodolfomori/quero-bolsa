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
