import React from 'react'
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Input from './Input'

describe('Input Component tests', () => {
  const handleChange = jest.fn()

  test('should render properly', () => {
    render(
      <Input placeholder={'test'} onChange={handleChange} name={'test'}/>
      )
    expect(screen.getByPlaceholderText(/test/i)).toBeInTheDocument()
  })
  test('should change value', async () => {
    const input = userEvent.setup()
    render(
      <Input placeholder={'test'} onChange={handleChange} name={'test'}/>
    )
    await input.type(screen.getByPlaceholderText(/test/i), 'testing')
    expect(screen.getByPlaceholderText(/test/i)).toHaveValue('testing')
  })
  test('should allow to erase', async () => {
    const input = userEvent.setup()
    render(
      <Input placeholder={'test'} onChange={handleChange} name={'test'}/>
    )
    await input.type(screen.getByPlaceholderText(/test/i), 'testing')
    expect(screen.getByPlaceholderText(/test/i)).toHaveValue('testing')
    await input.clear(screen.getByPlaceholderText(/test/i))
    expect(screen.getByPlaceholderText(/test/i)).toHaveValue('')
  })
})