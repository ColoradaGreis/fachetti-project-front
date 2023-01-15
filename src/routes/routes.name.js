export const PublicNameRoutes = {
  HOME: '/',
  CLIENTS: 'clients',
  CATEGORIES: 'categories',
  NEWS: 'news',
  CONTACT: 'contact',
  WORKS: 'works',
  DETAIL: 'categories/:category/detail/:id',
  PRODUCTS: 'categories/:category',
  LOGIN: 'login'

}

export const PrivateNameRoutes = {
  PRIVATE: 'admin',
  CONSULTS: 'consults',
  PUBLICATIONS: 'publications',
  PRODUCTS: 'products',
  SETTINGS: 'settings',
  EDIT_CATEGORIES: '/all/categories',
  EDIT_PRODUCTS: '/all/products/:categoryName',
  EDIT_PUBLICATIONS: '/all/publications',

  EDIT_CATEGORIES_FORM: '/put/categories/:id',
  EDIT_PRODUCTS_FORM: '/put/products/:categoriId/:id',
  EDIT_PUBLICATIONS_FORM: '/put/publications/:id'
}
