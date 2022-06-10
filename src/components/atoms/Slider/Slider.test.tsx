import React from 'react'
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Slider from './Slider';

describe('Slider input test', () => {
  test('should render properly', () => {
    const mockChange = jest.fn()
    render(
      <Slider name={'testing'} onChange={mockChange}/>
    )
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })
})
