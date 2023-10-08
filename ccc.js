


function firstprint(callback){
    setTimeout( ()=>{
        console.log('first')
        callback()
    } )
}

function secondprint(){
    console.log('second')
}


firstprint(secondprint)
