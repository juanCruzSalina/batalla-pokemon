import React from 'react'
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Text from './Text';

describe('Text component test', () => {
  test('should render properly', () => {
    render(<Text>testing text</Text>)
    expect(screen.getByText(/testing text/i)).toBeInTheDocument()
  })
})