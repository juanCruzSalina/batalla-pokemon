import React from 'react'
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import Button from './Button';

describe('Button component test', () => {
  test('should render properly', () => {
    const mockClick = jest.fn()
    render(
      <Button onClick={mockClick} >
        Test
      </Button>
    )
    expect(screen.getByRole('button', { name: 'Test' })).toBeInTheDocument()
  })
  test('should call function on click', async () => {
    const button = userEvent.setup()
    const mockClick = jest.fn()
    render(
      <Button onClick={mockClick} >
        Test
      </Button>
    )
    await button.click(screen.getByRole('button', { name: 'Test' }))
    expect(mockClick).toHaveBeenCalled()
  })
})