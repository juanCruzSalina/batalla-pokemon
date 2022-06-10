import React from 'react'
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonForm from './PokemonForm';
import { UIProvider } from '../../../context/ui/UIProvider';

describe('Pokemon form component tests', () => {
  test('should render properly', () => {
    render(
      <UIProvider>
        <PokemonForm />
      </UIProvider>
    )
    expect(screen.getByText(/nuevo pokemon/i)).toBeInTheDocument()
  })
})