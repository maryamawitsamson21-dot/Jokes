document.getElementById("btn").addEventListener("click",function(e){
   whole();
})
 const main=document.getElementById("main");
        main.innerHTML=JSON.parse(localStorage.getItem("key"));
async function whole(){
     try{ 
       
        
        const jokes= await fetch(import.meta.env.VITE_APIKEY);
        const json= await jokes.json()
        localStorage.setItem("key",JSON.stringify(json.value))
       main.innerHTML=json.value;
      
     }
catch(error){
    console.log(error)
}
}
