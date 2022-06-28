import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { json } from 'stream/consumers'

import useFetch from './useFetch'

const Home: NextPage = () => {
  const [url, setUrl] = useState('')
  console.log(" App is rendring ")
  const { data } = useFetch({
    url: url
  })

  return (
    <div>
      <h1>UseEffect learning it </h1>
      <p>{JSON.stringify(data)}</p>
      <button onClick={() => setUrl("/vikash.json")}>vikash</button>
      <button onClick={() => setUrl("/Rin.json")}>rin</button>
    </div>

  )
}

export default Home
