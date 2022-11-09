import React, { useEffect, useState } from 'react'
import { blobFetch } from './loaders'

type props = {
    images: string[];
    onLoaded: (urls: string[]) => void
}

function Preview({ images, onLoaded }: props) {

    const [loadList, setLoadList] = useState<string[]>(images)
    const [urls, setUrls] = useState<string[]>([])


    useEffect(() => {

        const copy = JSON.parse(JSON.stringify(loadList))
        const next = copy.pop();

        if (next != undefined) {
            console.log(next)


            blobFetch(next)
                .then(blob => {
                    setUrls([...urls, URL.createObjectURL(blob)])
                    setLoadList(copy)
                })

        } else {
            onLoaded(urls)
        }
    }, [loadList])


    return (
        <div className='preview_container'>
            {urls.map(i => <img key={i} src={i}></img>)}
        </div>
    )
}

export default Preview