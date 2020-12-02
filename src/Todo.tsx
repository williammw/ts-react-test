import React from 'react'
import styles from './Todo.module.css'


interface Props {
  title:string
}

function Todo( {title} : Props ) {
  return (
    <div className="todo">
      <p className="todo__title">{title}</p>
      <h3 className={styles.error}>Error in TOdo has occured</h3>
    </div>
  )
}

export default Todo
