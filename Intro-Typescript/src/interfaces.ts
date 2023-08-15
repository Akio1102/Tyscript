interface Song{
    id:number,
    name:string,
    year:number,
    album?: string
}

const love:Song ={
    id:1,
    name: "Love",
    year: 1998
}

const confianza:Song={
    id: 2,
    name: "trust",
    year: 2016
}

console.log(love.year,confianza.year);


