/**
 author : Menaka Lakshan
 created : 28/07/2023
 */
import axios from "../axios";

const getAllProducts = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const {data} = await axios.get('api/products');
            resolve(data)
            console.log(data)
        } catch (e) {
            reject(e)
        }
    })
}

const saveProduct = (payload) => {
    return new Promise(async (resolve, reject) =>{
        try {
            const {data} = await axios.post("api/products", payload);
            resolve(data);
        }
        catch (e) {
            reject(e)
        }

    })
}

module.exports = {getAllProducts,saveProduct}
