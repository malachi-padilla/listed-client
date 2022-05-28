import React, { useState } from 'react';
import { onScroll } from '../../../util/functions';
import {
	Header,
	HeaderButtonBox,
	HeaderTag,
	HeaderTextBox,
	ListItemSidebarContainer,
	ListItemSidebarHeaderContainer,
	ListItemSidebarContent,
	ListItemSidebarForm,
	ProfileInfo,
	ProfileImageSidebar,
	ProfileName,
	ListItemSidebarInput,
	PhotoUpload,
	PhotoUploadBtn,
} from './ListItemSidebar-css';
import { SaveDraftBtn } from '../../../theme/btns';
import { useSelector } from 'react-redux';

const ListItemSidebar = () => {
	const [scroll, setScroll] = useState(0);
	const { mongoUser } = useSelector((state) => state);
	return (
		<ListItemSidebarContainer>
			<ListItemSidebarHeaderContainer scroll={scroll}>
				<HeaderTextBox>
					<HeaderTag>Listed Marketplace</HeaderTag>
					<Header>Item For Sale</Header>
				</HeaderTextBox>
				<HeaderButtonBox>
					<SaveDraftBtn>Save Draft</SaveDraftBtn>
				</HeaderButtonBox>
			</ListItemSidebarHeaderContainer>
			<ListItemSidebarContent>
				<ProfileInfo>
					<ProfileImageSidebar>
						<i className='fas fa-user'></i>
					</ProfileImageSidebar>
					<ProfileName>
						{!mongoUser ? null : mongoUser && mongoUser.username}
						<br />
						<span>
							Listing to Marketplace &#8226; <i className='fa-solid fa-earth-americas'></i> public
						</span>
					</ProfileName>
				</ProfileInfo>
				<ListItemSidebarForm id='listItemSidebarForm' onScroll={() => onScroll(setScroll, 'listItemSidebarForm')}>
					<PhotoUpload type='file' required={true} multiple={true}>
						<PhotoUploadBtn>
							<i className='fa-solid fa-file-image'></i>
						</PhotoUploadBtn>
						<h3>Add Photos</h3>
						<p>or drag and drop</p>
						<input type='file' multiple accept='image/*' />
					</PhotoUpload>
					<ListItemSidebarInput placeholder='Title' type='text' required={true} />
					<ListItemSidebarInput placeholder='Price' type='text' required={true} />
				</ListItemSidebarForm>
			</ListItemSidebarContent>
		</ListItemSidebarContainer>
	);
};

export default ListItemSidebar;
