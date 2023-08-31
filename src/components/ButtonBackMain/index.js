import React from 'react'
import { useNavigate } from 'react-router-dom'

import style from './module.buttonbackmain.css'

const ButtonBackMain = () => {

	const navigate = useNavigate()

	const handleBack = () => {
		navigate('/')
	}

	return (
		<>
			<button className='buttonBack' onClick={ handleBack }>Back</button>
		</>
	)
}

export default ButtonBackMain