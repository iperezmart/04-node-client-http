/**
 * http://127.0.0.1:8000?option=1
 *  -> header: "APIkey": "QWERTY123456789="
 * 
 * // Inicialización de Axios con Headers
 * var instance = axios.create({
 *  baseURL: 'http://...',
 *  timeout: 1000,
 *  headers: { 'Header-Value': 'Value1' }
 * });
 * 
 */

//const axios = require('axios');
const options = require('./logic/options');
const optionsExtraData = require('./logic/options-extradata');

const argv = require('yargs')
    .options({
        option: {
            alias: 'o',
            desc: 'Option test',
            demand: true
        }
    })
    .argv;

////////////////////////////
// Ejemplo sin async/await
//

// const getInfo = (option) => {
//     options.getOption(argv.option)
//         .then(resp => {
//             return optionsExtraData.getOptionExtraData(resp.lat, resp.lon);
//         })
//         .then(resp => {
//             console.log(`[Option '${option}'] => [Temperature: ${resp.temp}, Min: ${resp.min}, Max: ${resp.max}]`);
//         })
//         .catch(err => {
//             console.log(`No information for option '${option}', error message: '${err.message}'`);
//         });
// };

////////////////////////////
// Ejemplo con async/await
//

const getInfo = async (option) => {
    try {
        let resp = await options.getOption(argv.option);
        let data = await optionsExtraData.getOptionExtraData(resp.lat, resp.lon);
        console.log(`[Option '${option}'] => [Temperature: ${data.temp}, Min: ${data.min}, Max: ${data.max}]`);
    }
    catch(err) {
        console.log(`No information for option '${option}', error message: '${err.message}'`);
    }
};

getInfo(argv.option);
