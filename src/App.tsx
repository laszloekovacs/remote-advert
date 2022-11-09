import React, { useEffect, useState } from "react";
import AdvertList from "./AdvertList";


const requestUrl = './list.json'
const path = 'content/'



function App() {

  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    async function getImages() {
      try {

        const res = await fetch(requestUrl)
        const data: string[] = await res.json()

        const list = data.map(i => `${window.location.href}${path}${i}`)

        setImages(list)
        console.log(list)

      } catch (error: unknown) {
        console.log("error")
        if (error instanceof Error) {
          console.log(error.message)
        }
      }
    }

    getImages()

    return () => { setImages([]) }
  }, [])

  return (
    <div>
      <AdvertList images={images}></AdvertList>
    </div>
  )
}

export default App
