
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import styles from './module.modifier.css'
import ButtonBackMain from '../../components/ButtonBackMain'

const Modifier = () => {

	const { reset, register, handleSubmit, formState: { errors } } = useForm()
	const [ taskId, setTaskId ] = useState([])
	const { state } = useLocation()
	const { ident } = state

	const idx = ident._id

	const date = new Date(taskId.limit).toLocaleDateString('en-GB').split('/').reverse().join('-')

useEffect(() => {
	fetch(`http://localhost:3000/task/${idx}`)
	.then(res => {
		return res.json()
	})
	.then(res => {
		return setTaskId(res)
	})
	.catch((error) =>{
		console.log('ERROR', error)
	})
	let defaultValues = {}
		defaultValues.title = taskId.title
		defaultValues.task = taskId.task
		defaultValues.limit = date
		reset({ ...defaultValues })
}, [ idx, reset, taskId.title, taskId.task, date])

const onSubmit = result => {
	console.log('cambio', result)
	fetch(`http://localhost:3000/task/${idx}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(result)
	})
	.then(res => res.json())
	.then(res => window.location())
	.catch((error) => {
		console.log(error)
	})
}

	return (
		<div>

			<form className='formModifier' onSubmit={ handleSubmit(onSubmit) }>

				<h2>Tarea</h2>

					<input type='text' placeholder='tituloPrueba'
					className={styles.containerModifierTitle}
					{...register('title', {
						//value: titleCard,
						required: {
							value: true,
							message: 'Debe de mantener el titutlo'
						}
					})}
					/>

				{ errors.title && <span className='errors'> { errors.title.message }</span> }

				<h2>Descripción</h2>

				<input type='text' placeholder={ taskId.task }
				className='containerModifierTask'
				{...register('task', {
					required: {
						value: true,
						message: 'Debe de haber una descripción'
					}
				})}
				/>
				{ errors.task && <span className='errors'>{ errors.task.message }</span> }

				<h2>Fecha</h2>

				<p>
					<input type='date' className='containerModifierDate'
					{...register('limit', {
						requiered: {
							value: true,
							message: 'Debe de tener una fecha límite'
						}
					})}
					/>
					{ errors.date && <span className='errors'>{ errors.date.message }</span> }
				</p>

				<button className='buttonModifier'>Modifier task</button>

			</form>

			<ButtonBackMain />

		</div>
	)
}

export default Modifier