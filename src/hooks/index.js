import React from 'react'

import PropTypes from 'prop-types'

import { ScholarShipsDataProvider } from './scholarShipsData'

const AppProvider = ({ children }) => <ScholarShipsDataProvider>{children}</ScholarShipsDataProvider>

export default AppProvider

// AppProvider.propTypes = {
//   children: PropTypes.any,
// }
