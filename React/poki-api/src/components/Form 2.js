import { useState } from "react"
import axios from 'axios'

    const Form = (props) => {


    const {pokemonCard, setPokemonCard} = props
        var log = console.log.bind(console)
        log( "From Props:" , pokemonCard, setPokemonCard)

    const [pokeName, setPokeName] = useState("")

    const changeHandler = (e) => {
        log(e)
        setPokeName({...pokeName,[e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios
        // https://pokeapi.co/api/v2/pokemon/ditto
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName.pokeSearch}`)
            .then((res) => {
                console.log(res.data)
                setPokemonCard([...pokemonCard, {
                    'pokemon' : res.data.name,
                    'sprites' : res.data.sprites.front_default,
                    'type' : res.data.types[0].type.name
                }])
            })
            .catch((err) => console.log("Something Went Wrong:", err))
    }

return (
    <form onSubmit={submitHandler} id="poke-form">
        <h1>I Choose You!</h1>
        <div className="form-group">
            <label htmlFor="pokeSearch">Search: </label>
            <input type="text" name="pokeSearch" placeholder='...awaiting pokemon name' onChange={changeHandler}/>
            <input type="submit" value="Generate Pokemon Card"/>
        </div>
    </form>
    )
}

export default Form