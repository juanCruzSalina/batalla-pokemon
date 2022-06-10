import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from "@testing-library/react";
import PokemonTable from './PokemonTable';
import { EntryProvider } from '../../../context/entry/EntryProvider';

describe('Pokemon table component test', () => {
  test('should render properly', () => {
    render(
      <EntryProvider>
        <PokemonTable />
      </EntryProvider>
    )
    expect(screen.getByText(/nombre/i)).toBeInTheDocument()
  })
})