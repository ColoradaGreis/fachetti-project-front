import React from 'react'
import { screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import Clients from './Clients'

describe('Clients', () => {
  it('should render Clients', () => {
    render(
      <BrowserRouter>
        <Clients />
      </BrowserRouter>
    )
    expect(screen.getByText('Clientes')).toBeInTheDocument()
  })
})
