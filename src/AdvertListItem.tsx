import React, { useTransition } from "react";


function AdvertListItem({ src }: { src: string }) {

    const [] = useTransition()


    return (
        <li>
            <img src={src}></img>
        </li>
    )
}


export default AdvertListItem