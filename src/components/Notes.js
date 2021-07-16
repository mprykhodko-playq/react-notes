import React, {useContext} from "react"
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {AlertContext} from "../context/alert/alertContext";

export const Notes = ({notes, onRemove}) => {

    const alert = useContext(AlertContext);

    const deleteHandler = id => {
        onRemove(id).then(() => {
            alert.show('Заметка была удалена', 'success');
        }).catch(() => {
            alert.show('Что-то пошло не так', 'danger');
        });
    };

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
                            onClick={() => deleteHandler(note.id)}
                        >
                            &times;
                        </button>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
};


