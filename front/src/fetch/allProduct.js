const URL = "http://localhost:3001/All/Produit"
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
        console.log(json);
            document.getElementById('container-carte').innerHTML=json.TitreAnnonce;
            console.log(json.Message.length)
            for(let h=0;h<json.Message.length;h++){
                const ann=document.getElementsByClassName('carte');
                const span=document.createElement('span');
                const image=document.createElement('img');
                const nom=document.createElement('h1');
                const description = document.createElement('p');
                const prix = document.createElement('p');
                ann.appendChild(carte);
                ann.appendChild(span);
                ann.appendChild(image);
                ann.appendChild(nom);
                ann.appendChild(description);
                ann.appendChild(prix);
                const idann=document.getElementById('idAnn');

                document.getElementById('Receveur').value=json.receveur;

                document.getElementById('envoyeur').value=json.envoyeur;
                idann.value=json.IdAnn;

                nom.innerHTML=json.Message[h].Nom;
                description.innerHTML=json.Message[h].Description;
                prix.innerHTML=json.Message[h].Prix
                

            }

    })
})
}
export default getProduct;