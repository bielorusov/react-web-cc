import React, {useContext} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {AlertContext} from "../context/alert/alertContext";

export const Notes = ({notes, onRemove}) => {
  const alert = useContext(AlertContext)

  const onRemoveHandler = (note_id) => {
    onRemove(note_id).then(() => {
      alert.show('Заметка была удалена', 'info')
    }).catch(() => {
      alert.show('Что-то пошло не так', 'danger')
    })
  }

  if(notes.length == 0) { return(<p className="text-center">Заметок пока нет!</p>) }

  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map(note => (
        <CSSTransition
          key={note.id}
          classNames={'note'}
          timeout={800}
        >
          <li className="list-group-item note">
            <div>
              <strong>{note.title}</strong>
              <small>{note.date}</small>
            </div>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => onRemoveHandler(note.id)}
            >
              &times;
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}