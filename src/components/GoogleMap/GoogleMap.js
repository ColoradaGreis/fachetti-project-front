import React from 'react'
import { GoogleApiWrapper, Map } from 'google-maps-react'

function GoogleMap ({ google }) {
  return (
    <Map
      google={google}
      style={{ width: '100px', height: '100px' }}
      zoom={10}
      initialCenter={
        {
          lat: -34.658990,
          lng: -58.438840
        }
    }
    />
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAq3RBe-8oeV6NnDKsYC8149c_LqyJ7fEc'
})(GoogleMap)
