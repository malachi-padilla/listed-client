export const onScroll = (scrollState) => {
	const scrollY = window?.scrollY;
	const scrollTop = document.getElementById('sideBarOptions').scrollTop;
	scrollState(scrollTop);
};

export const getWidth = () => {
	if (window.innerWidth >= 1100) {
		return true;
	} else {
		return false;
	}
};