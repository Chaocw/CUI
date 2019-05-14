import React, { useState } from 'react'
import Dialog from "../dialog"
import Button from "../../button/button"

export default function () {
	const [x, setX] = useState(false)

	return (
		<div>
			<Button type={ 'primary' } onClick={ () => setX(!x) }>open Dialog</Button>
			<Dialog visible={ x } buttons={
				[
					<button onClick={ () => {
						setX(false)
					} }>1</button>,
					<button onClick={ () => {
						setX(false)
					} }>2</button>
				]
			} onClose={ () => {
				setX(false)
			} }>
				<strong>hi</strong>
			</Dialog>
		</div>
	)
}