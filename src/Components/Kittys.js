import React, { useState, useEffect } from 'react'
import { getApi } from '../FetchApi'

function Kittys() {

  const [fetchedData, setFetchedData] = useState([])

  useEffect(() => {
    getApi().then(({ cats }) => setFetchedData(cats));

  }, [])


  return (
    <div>
      <pre>{JSON.stringify(fetchedData, null, 2)}</pre>
    </div>

  )
}

export default Kittys