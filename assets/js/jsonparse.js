
function visualizeStarWarsPeople(){


    let starWarsPeople = fetch('https://swapi.dev/api/people').then( 
    // adesso lavoreremo sul risultato
    (risultato)=>{ 

            console.log("la promise ha finito!!! abbiamo il risultato")
            // qui avro il jason e lo potro lavarare cn javascript
           
            risultato.json().then
            (  
                    (ResponseText) =>{ 
                    let starWarsPeople=ResponseText.results

                    document.querySelector('body').innerHTML="";

                for(let starWarsPerson of starWarsPeople){
                    document.querySelector('body').innerHTML+=`<li>${starWarsPerson.name}   è alto:${starWarsPerson.height} cm</li>`
                
                }
              }

                
            ).catch(
                (errore)=>{
                    console.log("fine della richiesta")
                    console.log(errore)
                })
            })
}

//inseriamo il metodo dentro onload

onload=()=>{
//caricamento, 
    document.querySelector('body').innerHTML= ` <div class="progress"><div class="color"></div></div>`
//finito il caricamento
    visualizeStarWarsPeople()
}
   