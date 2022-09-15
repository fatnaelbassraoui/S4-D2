
/*function apri(url){
    fetch(url)
}*/
fetch("data.json").then(res=>res.json()).then(
    (res)=>{
        let data = res

        data.forEach((x)=>{
           
            //creo la card
            let div = document.getElementById("card")
            let card= document.createElement("div")
            card.classList.add("card"),
            card.style.width = "18rem"
            let img = document.createElement("img")
            img.classList.add("card-img-top")
            let cardBody= document.createElement("div")
            cardBody.classList.add("card-body")
            let cardText = document.createElement("p")
            cardText.classList.add("card-text")
            //creo il button della card
            let TuttiGliAlbum = document.createElement("button")
            TuttiGliAlbum.classList.add("btn","btn-primary")
            //assemblo la mia card
           
            cardBody.appendChild(cardText)
            cardBody.appendChild(TuttiGliAlbum)
            card.appendChild(img)
            card.appendChild(cardBody)
            div.appendChild(card)
            card.style.marginLeft ="20px"

            //inserisco i miei elementi

            img.src= x.img_src
            console.log(x.img_src);
            cardText.innerText = x.nome
            TuttiGliAlbum.innerText ="Tutti gli album"
    
            
           //applico le funzioni ai button
            TuttiGliAlbum.addEventListener("click", ()=>{
                
                /*data.forEach((x)=>{*/
                let modal = document.getElementById("modalButton")
                modal.classList.add("modal-dialog")
                let modalDialog = document.createElement
                ("div")
                modalDialog.classList.add("modal-dialog")
                let modalBody= document.createElement("div")
                modalBody.classList.add("modal-body")
                let paragraph = document.createElement("p")
                
                
                //assemblo il modal
                modal.innerHTML= ""
                modalBody.appendChild(paragraph)
                modalDialog.appendChild(modalBody)
                modal.appendChild(modalDialog)
               

                //inserisco gi elementi

                paragraph.innerText = x.titolo
                paragraph.style.color= "white"
                /*})*/
            })
       });

    

}).catch(err=> console.error(err));



