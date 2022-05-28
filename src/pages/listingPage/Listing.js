import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import {
	ListingPageContainer,
	ListingPageContent,
	ListingPageHeader,
	ListingType,
	ListingTypeImage,
} from './Listing-css';
import ItemIcon from '../../assets/item-icon.png';
import CarIcon from '../../assets/car-icon.png';
import HomeIcon from '../../assets/home-icon.png';

const Listing = () => {
	return (
		<ListingPageContainer>
			<ListingPageHeader>Choose Listing Type</ListingPageHeader>
			<ListingPageContent>
				<ListingType as={Link} to={generatePath('/create/item')}>
					<ListingTypeImage Image={ItemIcon}></ListingTypeImage>
					<h2>Item For Sale</h2>
					<p>Create a single listing for one or more items to sell.</p>
				</ListingType>
				<ListingType>
					<ListingTypeImage Image={CarIcon}></ListingTypeImage>
					<h2>Vehicle For Sale</h2>
					<p>Sell a car, truck or other type of vehicle</p>
				</ListingType>
				<ListingType>
					<ListingTypeImage Image={HomeIcon}></ListingTypeImage>
					<h2>Home For Sale</h2>
					<p>List a house or apartment for sale or rent</p>
				</ListingType>
			</ListingPageContent>
		</ListingPageContainer>
	);
};

export default Listing;
