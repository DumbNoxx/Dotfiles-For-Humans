export const getData = async <T>(url: string): Promise<T> => {
    const data: T = await fetch(url).then(res => res.json()).then(data => data).catch(err => console.error(err))
    return data
}