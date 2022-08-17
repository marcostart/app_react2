import { useState } from 'react'
import { plantList } from '../datas/plantlist'
import PlantItem from './PlantItem.js'
import Categories from './Categories.js'
import '../styles/ShoppingList.css'

function ShoppingList({cart, updateCart}) {
	const [selectedCat, setSelectedCat] = useState('All')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				selectedCat={selectedCat}
				setSelectedCat={setSelectedCat}/>

			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					selectedCat === 'All' || selectedCat === category ?
					( <div key={id}>
						<PlantItem
							id={id}
							cover={cover}
							name={name}
							water={water}
							light={light}
							price= {price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				): null)}
			</ul>
		</div>
	)
}

export default ShoppingList
