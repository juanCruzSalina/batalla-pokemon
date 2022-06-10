import React from 'react'
import '@testing-library/jest-dom'
import { screen, render } from "@testing-library/react";
import Image from './Image';

describe('Image component test', () => {
  test('should render properly', () => {
    render(
      <Image url='https://bmeditores.mx/wp-content/uploads/2019/12/WQHZA3YTYZE7TLW734FJ5AGPDI-696x375.jpg' />
    )
    expect(screen.getByAltText('alt-pokemon')).toBeInTheDocument()
  })

  test('should render alt image with no url provided', () => {
    render(
      <Image />
    )
    expect(screen.queryByAltText('alt-image')).not.toBeInTheDocument()
  })
})