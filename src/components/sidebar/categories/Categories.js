import React from 'react';
import { CategoriesContainer, Category, CategoryHeader, CategoryIcon } from './Categories-css';

const Categories = () => {
	const categories = [
		{ name: 'vehicles', icon: 'fas fa-car' },
		{ name: 'apparel', icon: 'fas fa-tshirt' },
		{ name: 'classifieds', icon: 'fas fa-tags' },
		{ name: 'electronics', icon: 'fas fa-mobile-alt' },
		{ name: 'entertainment', icon: 'fas fa-gamepad' },
		{ name: 'furniture', icon: 'fas fa-couch' },
		{ name: 'free stuff', icon: 'fas fa-hand-holding-heart' },
		{ name: 'home goods', icon: 'fas fa-house' },
		{ name: 'musical instruments', icon: 'fas fa-guitar' },
		{ name: 'pets', icon: 'fas fa-paw' },
		{ name: 'sports goods', icon: 'fas fa-skiing-nordic' },
	];
	return (
		<CategoriesContainer>
			<CategoryHeader>Categories</CategoryHeader>
			{categories.map((item) => (
				<Category>
					<CategoryIcon>
						<i className={item.icon}></i>
					</CategoryIcon>
					{item.name}
				</Category>
			))}
		</CategoriesContainer>
	);
};

export default Categories;
