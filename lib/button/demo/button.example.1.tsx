import React from 'react'
import Button from '../button'
import './button.example.scss'

export default function () {
	return (
		<div>
			<Button type="primary">Primary</Button>
			<Button>Default</Button>
			<Button type="dashed">Dashed</Button>
			<Button type="danger">Danger</Button>
			<Button icon="facebook">facebook</Button>
		</div>
	)
};

