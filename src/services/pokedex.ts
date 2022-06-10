import axios from "axios"
import { PokemonData } from "../components/molecules/PokemonForm/PokemonForm"
import { Entry } from "../context/entry/EntryProvider"

const url = 'https://pokemon-pichincha.herokuapp.com/pokemons/'

export const getPokemonByName = async (name: string) => {
  const { data } = await axios.get(`${url}?name=${name}`)
  console.log(data)
  return data
}

export const addPokemon = async (entry: PokemonData) => {
  const res = await axios.post(`${url}`, entry)
  // Couldn't make the post request, always returned 400
}

export const deletePokemon = async (id: string) => {
  await axios.delete(`${url}${id}`)
}

export const updatePokemon = async (entry: Entry, id: string) => {
  await axios.put(`${url}${id}`, entry)
}