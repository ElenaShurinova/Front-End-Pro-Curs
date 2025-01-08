import React from 'react'
import s from './index.module.css'
import {useDispatch} from 'react-redux'
import{deleteUserAction} from '../../store/reducers/usersReducer'


export default function UserCard({ id, firstname, age }) {
  const dispatch =useDispatch();
  return (
    <div className={s.user} onClick ={() =>dispatch (deleteUserAction(id))}>
        <p>Name: { firstname }</p>
        <p>Age: { age }</p>
    </div>
  )
}
