import React, { useTransition, useState, useEffect } from "react";
import AdvertListItem from "./AdvertListItem";


interface IImageCache {
    fullpath: string;
    buffer: Blob;
}



function AdvertList({ images }: { images: string[] }) {

    const [imageBlobs, setImageBlobs] = useState<IImageCache[]>([])
    const [isPending, setPending] = useState(true)

    async function fetchImages(onDone?: () => {}) {
        return () => { };
    }

    useEffect(() => {
        for (let img of images) {

            fetchImages()
        }

        return () => {
            // TODO: go trough all blobs, and dump them
        }
    }, [images])

    return (
        <>
            <ul>
                {images.map(v => <AdvertListItem key={v} src={v} />)}
            </ul>
        </>
    )
}

export default AdvertList;