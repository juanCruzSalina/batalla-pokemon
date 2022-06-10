import React, { useContext } from 'react'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './PokemonTable.css'
import { EntryContext } from '../../../context/entry/EntryContext'
import Image from '../../atoms/Image/Image'
import { deletePokemon } from '../../../services/pokedex'
import { UIContext } from '../../../context/ui/UIContext'

const PokemonTable: React.FC = () => {

  const { entryState, removeActive, setEdit } = useContext(EntryContext)
  const { toggleShow, toggleEdit } = useContext(UIContext)
  const { entries } = entryState

  const handleEdit = (e: React.SyntheticEvent) => {
    setEdit(e.currentTarget.id)
    toggleEdit()
    toggleShow()
  }
  const handleDelete = async (e: React.SyntheticEvent) => {
    removeActive(e.currentTarget.id)
    await deletePokemon(e.currentTarget.id)
  }

  return (
    <table className='table__main'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Ataque</th>
          <th>Defensa</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          entries.map(entry => (
            <tr key={entry.id}>
              <td>{entry.name}</td>
              <td>
                <Image url={entry.image}/>
              </td>
              <td>{entry.attack}</td>
              <td>{entry.defense}</td>
              <td>
                <div className='entry__actions'>
                  <FontAwesomeIcon className={'actions__icon'} id={`${entry.id}`} icon={faPencil} onClick={handleEdit}/>
                  <FontAwesomeIcon className={'actions__icon'} id={`${entry.id}`} icon={faTrash} onClick={handleDelete}/>
                </div>
              </td>
            </tr>
          ))
        }

      </tbody>
    </table>
  )
}

export default PokemonTable