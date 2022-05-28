export const onScroll = (scrollState, id) => {
	const scrollTop = document.getElementById(id).scrollTop;
	scrollState(scrollTop);
};

export const getWidth = () => {
	if (window.innerWidth >= 1024) {
		return true;
	} else {
		return false;
	}
};
