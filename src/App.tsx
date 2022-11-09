import React, { useEffect, useMemo, useState } from "react";
import ImageRotator from "./ImageRotator";
import { jsonFetch } from "./loaders";
import Preview from "./Preview";
import "./style.css"


const imageListPath = '/list.json'
const contentPath = 'content/'
const basePath = window.location.href

const previewClearDelay = 2000

function App() {

  const [objectUrls, setObjectUrls] = useState<string[]>([])
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [isPending, setPending] = useState(true)


  function loadedHandler(urls: string[]) {
    setObjectUrls(urls)
    console.log('finished')

    // dont flash away the preview even if we load it in very fast
    setTimeout(() => {
      setPending(false)
    }, previewClearDelay)

  }

  useEffect(() => {

    jsonFetch(basePath + imageListPath)
      .then(images => {
        const list = images.map((data: string) => basePath + contentPath + data)
        setImageUrls(list)
      })

    return () => { setImageUrls([]) }
  }, [])


  return (
    <>
      {isPending && imageUrls.length != 0 && <Preview images={imageUrls} onLoaded={loadedHandler}></Preview>}
      {!isPending && objectUrls.length != 0 && <ImageRotator urls={objectUrls}></ImageRotator>}
    </>
  )
}

export default App