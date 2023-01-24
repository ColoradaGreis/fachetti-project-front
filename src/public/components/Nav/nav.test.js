// import React from 'react'
// import { render, screen, fireEvent } from '@testing-library/react'
// import { BrowserRouter } from 'react-router-dom'
// import '@testing-library/jest-dom'
// // import userEvent from '@testing-library/user-event'
// import Nav from './Nav'
// import { PrivateNameRoutes, PublicNameRoutes } from '../../routes/routes.name' // eslint-disable-line

// const rend = () => render(<BrowserRouter><Nav /></BrowserRouter>)
// const getLinks = () => {
//   const linkInicio = screen.getByRole('link', { name: /inicio/i })
//   const linkNoticias = screen.getByRole('link', { name: /noticias/i })
//   const linkProductos = screen.getByRole('link', { name: /productos/i })
//   const linkClientes = screen.getByRole('link', { name: /clientes/i })
//   const linkObras = screen.getByRole('link', { name: /obras/i })
//   const linkContacto = screen.getByRole('link', { name: /contacto/i })
//   return ({ linkClientes, linkContacto, linkInicio, linkNoticias, linkObras, linkProductos })
// }

// describe('Nav Links', () => {
//   test('renders nav component', () => {
//     rend()
//     const { linkClientes, linkContacto, linkInicio, linkNoticias, linkObras, linkProductos } = getLinks()

//     expect(linkInicio).toBeInTheDocument()
//     expect(linkNoticias).toBeInTheDocument()
//     expect(linkProductos).toBeInTheDocument()
//     expect(linkClientes).toBeInTheDocument()
//     expect(linkObras).toBeInTheDocument()
//     expect(linkContacto).toBeInTheDocument()
//   })
//   test('when press link, should redirect to the correct path', () => {
//     rend()
//     const { linkClientes, linkContacto, linkInicio, linkNoticias, linkObras, linkProductos } = getLinks()
//     fireEvent.click(linkInicio)
//     expect(window.location.pathname).toBe(PublicNameRoutes.HOME)
//     fireEvent.click(linkNoticias)
//     expect(window.location.pathname).toBe(PublicNameRoutes.NEWS)
//     fireEvent.click(linkProductos)
//     expect(window.location.pathname).toBe(PublicNameRoutes.PRODUCTS)
//     fireEvent.click(linkClientes)
//     expect(window.location.pathname).toBe(PublicNameRoutes.CLIENTS)
//     fireEvent.click(linkObras)
//     expect(window.location.pathname).toBe(PublicNameRoutes.WORKS)
//     fireEvent.click(linkContacto)
//     expect(window.location.pathname).toBe(PublicNameRoutes.CONTACT)
//     // window.history.back()
//     // window.history.pushState({}, '', `/private${PrivateNameRoutes.ADMIN}`)
//     // expect(window.location.pathname).not.toBe(`/private${PrivateNameRoutes.ADMIN}`)
//   })
// })
