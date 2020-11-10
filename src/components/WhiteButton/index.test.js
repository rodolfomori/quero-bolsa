import React from 'react'

import { mount, shallow } from 'enzyme'

import { Button } from '.'

describe('<Button />', function () {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('should render correctly', () => {
    const component = shallow(<Button />)

    expect(typeof component).toBe('object')

    component.unmount()
  })

  describe('when children prop is defined', () => {
    it('should contain the children prop given', () => {
      const children = 'Seguir'

      const component = mount(<Button>{children}</Button>)

      expect(component.text()).toEqual(children)

      component.unmount()
    })
  })

  describe('when disabled prop is defined', () => {
    it('and value is true', () => {
      const component = mount(<Button disabled />)

      expect(component.props('disabled')).toStrictEqual({ disabled: true })

      component.unmount()
    })
  })

  describe('when loading prop is defined', () => {
    it('and value is true', () => {
      const component = mount(<Button loading />)

      expect(component.props('loading')).toStrictEqual({ loading: true })

      expect(setTimeout).toHaveBeenCalledTimes(1)

      component.unmount()
    })
  })
})
