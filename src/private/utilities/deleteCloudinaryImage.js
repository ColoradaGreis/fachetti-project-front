import axios from 'axios'
import { cloudinaryKeys } from './'

export default function deleteCloudinaryImage (token) {
  // No espero respuesta ni manejo errores ya que por ahora no me interesa si se elimina o no
  try {
    axios.post(`https://api.cloudinary.com/v1_1/${cloudinaryKeys.cloud_name}/delete_by_token`, {
      token
    })
  } catch (error) {
    console.log(error)
  }
}
