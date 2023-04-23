const Display = (props) => {
    const {pokemonCard} = props

    var log = console.log.bind(console)
    log("Disply Props: " , pokemonCard)
    log(Array.isArray(pokemonCard))

    return(
        <div className="poke-party">
            {pokemonCard.map((card,index) => (
                <div id="cards" key={index}>
                    <h4>{card.pokemon}</h4>
                </div>
            ))}
        </div>
    )
}

export default Display