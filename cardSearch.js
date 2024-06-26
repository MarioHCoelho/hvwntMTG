async function fetchData (){
    try {
        const cardName = document.getElementById('cardSearch').value;
        const r = await fetch (`https://api.scryfall.com/cards/named?exact=${cardName}`)

        if(!r.ok){
            throw new Error ("Couldn't Fetch")
        }
        const data = await r.json ();
        console.log(data);

        const cardIMG = data.image_uris.png;
        const imgElement = document.getElementById("cardImg")

        imgElement.src = cardIMG;
        
    }

    catch(error) {
        console.error(error);

    }
}



var inputOnClick = document.getElementById('submitOnClick'); // Funcionamento do botão
inputOnClick.addEventListener('click',function(event){
    event.preventDefault();


})
var genSubmit = document.getElementById('gencollection'); // Funcionamento do botão
genSubmit.addEventListener('click',function(event){
    event.preventDefault();
    alert("FILHO DA PUTA")


})
// /cards/${id}?format=image - retorna a imagem da carta
// /cards/name/?fuzzy=${nomecarta} - fuzzy recebe um nome pra procurar
// https://api.scryfall.com/cards/named?exact=Phyrexian

/**
 * a api do scryfall pega a imagem da carta pelo id delas
 */

/**
 * 1 - criar o input de pesquisa
2 - criar o botão de envio
3 - criar a função de execução do form
    um form sempre tem um botão type submit, ao clicar nesse botão, ele chamaria essa função de submissão do form
    procurar como fazer isso
4 - na função do form, resgatar o valor de pesquisa que está no input, mandar ele para a função que faz a busca na API
5 - com o resultado do retorno da API, atualizar os valores do html da carta para exibir as imagens e nomes de acordo
 */