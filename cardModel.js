async function createMagicCardObject(cardName) {
    try {
        const cardData = await getCardData(cardName);
        const magicCard = {
            name: cardData.name,
            manaCost: cardData.mana_cost,
            type: cardData.type_line,
            oracleText: cardData.oracle_text,
            power: cardData.power,
            toughness: cardData.toughness,
            imageUrl: cardData.image_uris.normal
        };
        return magicCard;
    } catch (error) {
        console.error('Erro:', error);
        return null;
    }
}
var input = document.getElementById('cardsearch');
input.addEventListener('keypress',function(event){
    
    if (event.key === 'Enter'){
        event.preventDefault();
        
    }
    const cardName = document.getElementById ('csearch').value.toLowerCase();
})