const Api = {}

Api.url = ''

Api.post = async (path, input) => {

    try {

        let res = await fetch(`${Api.url}/${path}`, {
            method: 'POST',
            headers: {
                "Content-type": 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(input)
        })

        res = await res.json()
        
        return res.status

    } catch (e) {
        return false
    }

}

export default Api;