const URL = "htpps://localhost:3000/find/All/Produit", 
const getProduct = () => {

const params = {
    method : "GET",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": URL,
    },

}
fetch(URL,params).then(res => {
    res.json().then(json =>{
        console.log(json)
    })
})

export default getProduct;