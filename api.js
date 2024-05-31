const btn = document.getElementById('btn');
const pgr = document.getElementById('pgr');

btn.addEventListener('click', async () => {

    try{
        const fetchimg = await fetch("https://dog.ceo/api/breeds/image/random");

        const json = await fetchimg.json();

        console.log(json);

        getİmg(json.message);
    }

    catch(err){
        console.log(err);
    }
  

    
})


const getİmg = (img) => {
    const html = ` <img class="one" src="${img}"> `;

    pgr.insertAdjacentHTML("beforeend",html);
    
}