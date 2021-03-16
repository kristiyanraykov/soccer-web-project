const request = async (method, url, body) => {
    let opitons = {
        method,
        headers: {
            "x-rapidapi-key": "9b7c1bfa01msh19f8fa7f59bdd62p17f5ebjsn890b607466e2",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
    }
    };
    if (body){
        Object.assign(opitons, {
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({...body, returnSecureToken: true})
        })
    }
    let response = await fetch(url, opitons);
    let data = await response.json();

    return data;

}

export default {
    get: request.bind(this, 'GET'),
    post: request.bind(this, 'POST'),
    put: request.bind(this, 'PUT'),
    patch: request.bind(this, 'PATCH'),
    delete: request.bind(this, 'DELETE'),
}