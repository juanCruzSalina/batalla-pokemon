import React, { useContext } from 'react'
import { faSave, faXmark } from '@fortawesome/free-solid-svg-icons'
import './PokemonForm.css'

import { UIContext } from '../../../context/ui/UIContext'
import { useForm } from '../../../hooks/useForm'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import Slider from '../../atoms/Slider/Slider'
import Text from '../../atoms/Text/Text'
import { addPokemon, updatePokemon } from '../../../services/pokedex'
import { EntryContext } from '../../../context/entry/EntryContext'

export type PokemonData = {
  name: string;
  url: string;
  type: string
  attack: number;
  defense: number;
}

const PokemonForm: React.FC = () => {

  const { toggleShow, uiState, toggleEdit } = useContext(UIContext)
  const { entryState } = useContext(EntryContext)
  const { active } = entryState

  const { formValues, handleChange, reset } = useForm({
    name: '',
    url:  '',
    type: 'fire',
    attack: 50,
    defense: 50
  })

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    await addPokemon(formValues)
    reset()
  }

  const handleUpdate = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    await updatePokemon(formValues, active!.id.toString())
    toggleEdit()
    reset()
  }
  const handleClose = () => {
    toggleShow()
  }

  return (
    <form
      className={`form__main${uiState.show ? ' visible' : ''}`}
      onSubmit={uiState.edit ? handleUpdate : handleSubmit}
      autoComplete='off'>
      <div className='form__title'>
        <Text>
          Nuevo Pokemon
        </Text>
      </div>
      <div className='form__inputs'>
        <label>
          Nombre:
          <Input placeholder='Nombre' name='name' value={uiState.edit ? active?.name : formValues.name} onChange={handleChange}/>
        </label>
        <label>
          Imagen:
          <Input placeholder='Url' name='url' value={uiState.edit ? active?.image : formValues.url} onChange={handleChange}/>
        </label>
      </div>
      <div className='form__sliders'>
        <label>
          Ataque:
          <Slider name='attack' onChange={handleChange} />
        </label>
        <label>
          Defensa:
          <Slider name='defense' onChange={handleChange} />
        </label>
      </div>
      <div className='form__buttons'>
        <Button onClick={handleClose} isSubmit icon={faSave}>Guardar</Button>
        <Button onClick={handleClose} icon={faXmark}>Cancelar</Button>
      </div>
    </form>
  )
}

export default PokemonForm