import React from 'react'
import styles from './main.module.css'

import Header from '../Header'
import Forms from '../Forms'
import ListItems from '../ListItems';

const Main = () => {

	return (
		<div className={styles.containerMain}>

			<Header />
			<Forms />
			<ListItems />

		</div>
	)
}

export default Main