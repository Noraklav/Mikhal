import React, { useEffect, useState } from 'react'


export const FetchHook = ({url}) => {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  
  useEffect( () => {
    fetch(url)
    .then( resp => {
      console.log(resp);
      if(!resp.ok){
        throw new Error(`Error detectado: ${error}`)
      }
    })
    .then(datos => {
      console.log(datos);
      setData(datos)
    })
    .catch(error => {
      console.log(error);
      setError(error)
    })
  }, [url])

  return {data, error}

}