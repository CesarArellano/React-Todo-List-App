import { useForm } from '../hooks/useForm';
import { useTodos } from '../hooks/useTodos';
import { SyntheticEvent } from 'react';

import '../../index.css'

export const TaskForm = () => {
  
  const { addTodo, toggleView, todoSelected, editTodo, setCurrentTodo } = useTodos();
  const isTodoSelected =  ( todoSelected != null );

  const { formValues, handleOnChange } = useForm({
    'desc': isTodoSelected ? todoSelected.desc : ''
  });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    
    if( formValues.desc.length === 0) {
      return;
    }
    
    toggleView()
    
    if( isTodoSelected ) {
      editTodo({
        ...todoSelected,
        desc: formValues.desc
      })
      return setCurrentTodo(null)
    }

    addTodo({
      id: Date.now().toString(),
      desc: formValues.desc,
      completed: false
    })
  }

  return (
    <form className="task__form" onSubmit={ handleSubmit}>
      <label>Task</label>
      <input 
        type="text"
        value={ formValues.desc }
        onChange={({target}) => handleOnChange("desc", target.value)}
        required
      />
      
      <button 
        type='submit'
        style={{
          marginTop: 10,
          height: 40
        }}
      >
        { 
          isTodoSelected ? 'Edit' : 'Add'
        }
      </button>
    </form>
  )
}
