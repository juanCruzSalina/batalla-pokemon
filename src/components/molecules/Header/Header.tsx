import React, { useContext } from 'react'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { UIContext } from '../../../context/ui/UIContext'
import { useForm } from '../../../hooks/useForm'
import Input from '../../atoms/Input/Input'
import Text from '../../atoms/Text/Text'
import Button from '../../atoms/Button/Button'
import { getPokemonByName } from '../../../services/pokedex'
import { EntryContext } from '../../../context/entry/EntryContext'

const Header = () => {

  const { toggleShow } = useContext(UIContext)
  const { getEntries } = useContext(EntryContext)
  const { formValues, handleChange, reset } = useForm({
    name: ''
  })

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const data = await getPokemonByName(formValues.name)
    getEntries(data)
    reset()
  }

  const handleClick = () => {
    toggleShow()
  }

  return (
    <header className='header__main'>
      <div className='header__search'>
        <Text>Listado de Pokemon</Text>
        <form onSubmit={handleSubmit} autoComplete={'off'}>
          <Input
            icon={faSearch}
            placeholder={'Buscar'}
            name={'name'}
            onChange={handleChange}
          />
          <button type='submit' className='form__submit'>
            Submit
          </button>
        </form>
      </div>
      <Button onClick={handleClick} icon={faPlus}>
        Nuevo
      </Button>
    </header>
  )
}

export default Header