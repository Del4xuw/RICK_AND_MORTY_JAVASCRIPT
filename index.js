const url='https://rickandmortyapi.com/api/character/'
fetch(url)
.then(response=>response.json())
.then(dato=>{
    console.log(dato)
    let elementos= document.getElementById('elemento')
    elementos.innerHTML= dato.results.map(
        dato=>`
        <div class="col mx-auto" > 
        <div class="card shadow-sm">
            <img src="${dato.image}"class="mb-4">
            <h4 class="text-center">${dato.name}</h4>
            <div class="card-body">
                <p class="text-center pb-3">
                    <span class="fs-4">${dato.status} </span>
                    <br>
                    <span class="fs-5"> ${dato.gender}</span>
                </p>
             </div>
             <div class="d-flex justify-content-center align-items-center pb-5">
                <div class="btn-group">
                    <button type="button" class="fs-5 btn btn-sm btn-outline-dark">Ver mas</button>
                </div>
             </div>
    </div>        
</div> `
    )
})
.catch(error => console.log(error))