export const getMunicipalities = async () => {
    const res = await fetch("https://psgc.gitlab.io/api/municipalities", {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })

    console.log(res.json())
    return await res.json()
}