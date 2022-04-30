import React from 'react';
import { ExitBtn } from '../../../theme/btns';
import Categories from '../../sidebar/categories/Categories';
import {
	CategoryModalList,
	CategoryModalContainer,
	CategoryModalHeader,
	CategoryHeaderText,
} from './CategoryModal-css';

const CategoryModal = ({ open }) => {
	return (
		<CategoryModalContainer>
			<CategoryModalHeader>
				<CategoryHeaderText>Select Category</CategoryHeaderText>
				<ExitBtn onClick={() => open(false)}>
					<i className='fas fa-times'></i>
				</ExitBtn>
			</CategoryModalHeader>
			<Categories />
		</CategoryModalContainer>
	);
};

export default CategoryModal;
