import React from 'react'
import { useNavigate } from 'react-router-dom'

import style from './buttonBackMain.module.css'

const ButtonBackMain = () => {

	const navigate = useNavigate()

	const handleBack = () => {
		navigate('/')
	}

	return (
		<>
			<button className={style.buttonBack} onClick={ handleBack }>Back</button>
		</>
	)
}

export default ButtonBackMain