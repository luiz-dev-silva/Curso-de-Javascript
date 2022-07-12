//criar um metodo para ler propriedades de um objeto e exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo : 'Spider-Man: Into the Spider-Verse',
    ano : 2019,
    diretor : 'Peter Ramsey',
    protagonista : 'Miles Morales'
}
exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}