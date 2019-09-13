const axios = require('axios');

const getOption = async (option) => {
    const encodedUrl = encodeURI(option);

    const instance =  axios.create({
        baseURL: `http://127.0.0.1:8000/api1/options?option=${encodedUrl}`,
        headers: { 
            'APIkey': 'QWERTY123456789=' 
        }
    });
    
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No results for ${option}`);
    }

    const data = resp.data.Results[0];
    const name = data.name;
    const lon = data.lon;
    const lat = data.lat;

    return {
        name,
        lon,
        lat
    };
};

module.exports = {
    getOption
};
