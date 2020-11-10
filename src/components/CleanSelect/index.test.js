import React from 'react'

import { shallow } from 'enzyme'
import { maritalStatusOptions } from 'utils'

import { Select } from '.'

describe('<Select />', function () {
  it('should render correctly', () => {
    const component = shallow(<Select name="name" options={maritalStatusOptions} />)

    expect(typeof component).toBe('object')

    component.unmount()
  })
})
