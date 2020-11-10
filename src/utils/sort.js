export const getDataSort = ({ data, sortFor }) => {
  switch (sortFor) {
    case 1:
      return data.sort((a, b) => {
        const nameA = a.course.name
        const nameB = b.course.name
        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
      })

    case 2:
      return sortHigher(data, 'discount_percentage')

    case 3:
      return sortLower(data, 'discount_percentage')

    case 4:
      return sortHigher(data, 'price_with_discount')

    case 5:
      return sortLower(data, 'price_with_discount')

    default:
      return data.sort((a, b) => {
        const nameA = a.university.name
        const nameB = b.university.name
        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
      })
  }
}

const sortLower = (array, item) => array.sort((a, b) => a[item] - b[item])

const sortHigher = (array, item) => array.sort((a, b) => b[item] - a[item])
