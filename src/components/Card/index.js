import React from 'react'
import { useNavigate} from 'react-router-dom'

import trash from '../Imagenes/trash.png'
import pencil from '../Imagenes/pencil.png'

import styles from './card.module.css'

const Card = ({ taskData }) => {

	const { title, limit, _id } = taskData

	const navigate = useNavigate()

	const handleClick = (_id) => {
		fetch(`http://localhost:3000/task/${_id}`, {
			method: 'DELETE'
		})
		.then(res => {
			window.location.reload()
			return res.json()
		})
		.then(res => {
			console.log(res)
		})
	}

	const handleId = () => {
		navigate('modifier', {
			state: { ident: { _id } }
		})
	}

	/*

	este es el formato de como debe de declararse una función

	const handleClick = (_id) => {
		getAll()
		.then...
	}
	*/

	const date = new Date(limit).toLocaleDateString('en-GB').split('/').join('-')

	return (
		<div className={styles.mainCard}>

			<section className={styles.buttonContainer}>
				<button className={styles.containerTrash} onClick={ () => handleClick	(_id) } >
					<img src={ trash } alt='Imagen trash' />
				</button>

				<button className={styles.containerPencil} onClick={handleId}>
						<img src={ pencil } alt='Imagen pencil modificacion' />
				</button>
			</section>
			<section className={styles.textContainer}>
				<h3 className={styles.containerTittleTrash}>{ title }</h3>
				<p className={styles.containerLimitTrash}>{ date }</p>
			</section>

		</div>
	)
}

export default Card
