import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from "@testing-library/react";
import Header from './Header';

describe('Header component test', () => {
  test('should render properly', () => {
    render(
      <Header />
    )
    expect(screen.getByRole('button', { name: 'Nuevo' })).toBeInTheDocument()
    expect(screen.getByText(/listado de pokemon/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/buscar/i)).toBeInTheDocument()
  })
})