const axios = require('axios');

const getOptionExtraData = async (lat, lon) => {
    let url = `http://127.0.0.1:8000/api2/data?lat=${lat}&lon=${lon}`;
    
    const resp = await axios.get(url);
    if (!resp.data.coord) {
        throw new Error(`No results for coord [${lat}, ${lon}]`);
    }

    let d = resp.data.data;
    return {
        temp: d.temp,
        min: d.tempMin,
        max: d.tempMax
    };
};

module.exports = {
    getOptionExtraData
};
