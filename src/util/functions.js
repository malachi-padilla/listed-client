export const onScroll = (scrollState) => {
	const scrollTop = document.getElementById('sideBarOptions').scrollTop;
	scrollState(scrollTop);
};

export const getWidth = () => {
	if (window.innerWidth >= 1024) {
		return true;
	} else {
		return false;
	}
};
