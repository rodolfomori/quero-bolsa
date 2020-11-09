import React from 'react'

import { shallow } from 'enzyme'

import { Checkbox } from '.'

describe('<Checkbox />', function () {
  it('should render correctly', () => {
    const component = shallow(
      <Checkbox
        id="checkbox"
        name="name"
      />
    )

    expect(typeof component).toBe('object')

    component.unmount()
  })
})
