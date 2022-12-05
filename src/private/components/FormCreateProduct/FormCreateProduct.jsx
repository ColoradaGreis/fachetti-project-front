import React from 'react'
import { useFormik } from 'formik'
import { useGetAllCategories } from '$Hooks'
import { Loading } from '$Public/components'
// import {Loading} from '$Public/components'

export default function FormCreateProduct () {
  const { data, error, loading } = useGetAllCategories()

  const { values, handleChange } = useFormik({
    initialValues: {
      name: '',
      categoryId: '',
      description: '',
      image: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <form>
      <label htmlFor='name'>Name</label>
      <input
        id='name'
        name='name'
        type='text'
        onChange={handleChange}
        value={values.name}
      />
      {loading
        ? <Loading /> // Si esta cargando muestra el espiner
        : error
          ? <p>{error}</p>// Si hay un error muestra el error
          : ( // Si no hay error ni esta cargando muestra el select
              (
                <select
                  name='categoryId'
                  id='categoryId'
                  onChange={handleChange}
                  value={values.categoryId}
                >
                  <option value=''>Select a category</option>
                  {data.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              ))}
      <button>enviar</button>
    </form>
  )
}
