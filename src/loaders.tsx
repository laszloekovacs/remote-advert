
export const jsonFetch = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()

    return data;
}

export const blobFetch = async (url: string) => {
    const res = await fetch(url)
    const data = await res.blob()

    return data
}