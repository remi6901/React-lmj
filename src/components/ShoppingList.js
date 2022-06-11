import {plantList} from '../data/PlantList' 
import '../styles/ShoppingList.css'


function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul className='lmj-plant-list'>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id} className="lmj-plant-item">{plant.isBestSale ? <span>{plant.name}🔥</span> : <span>{plant.name}</span> 
                    && plant.isSpecialOffer ? <span className='lmj-sales'>{plant.name} - Solde</span> : <span>{plant.name}</span>}</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList