import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
// import userEvent from '@testing-library/user-event'
import Nav from './Nav'

const rend = () => render(<BrowserRouter><Nav /></BrowserRouter>)
const getLinks = () => {
  const linkInicio = screen.getByRole('link', { name: /inicio/i })
  const linkNoticias = screen.getByRole('link', { name: /noticias/i })
  const linkProductos = screen.getByRole('link', { name: /productos/i })
  const linkClientes = screen.getByRole('link', { name: /clientes/i })
  const linkObras = screen.getByRole('link', { name: /obras/i })
  const linkContacto = screen.getByRole('link', { name: /contacto/i })
  return ({ linkClientes, linkContacto, linkInicio, linkNoticias, linkObras, linkProductos })
}

describe('Nav Links', () => {
  test('renders nav component', () => {
    rend()
    const { linkClientes, linkContacto, linkInicio, linkNoticias, linkObras, linkProductos } = getLinks()

    expect(linkInicio).toBeInTheDocument()
    expect(linkNoticias).toBeInTheDocument()
    expect(linkProductos).toBeInTheDocument()
    expect(linkClientes).toBeInTheDocument()
    expect(linkObras).toBeInTheDocument()
    expect(linkContacto).toBeInTheDocument()
  })
  test('when press link, should redirect to the correct path', () => {
    rend()
    const { linkClientes, linkContacto, linkInicio, linkNoticias, linkObras, linkProductos } = getLinks()
    fireEvent.click(linkInicio)
    expect(window.location.pathname).toBe('/')
    fireEvent.click(linkNoticias)
    expect(window.location.pathname).toBe('/noticias')
    fireEvent.click(linkProductos)
    expect(window.location.pathname).toBe('/productos')
    fireEvent.click(linkClientes)
    expect(window.location.pathname).toBe('/clientes')
    fireEvent.click(linkObras)
    expect(window.location.pathname).toBe('/obras')
    fireEvent.click(linkContacto)
    expect(window.location.pathname).toBe('/contacto')
  })
})
