interface setWindowWidthI {
	windowWidth: number,
	type: string
};

interface toggleModalI {
	id: string,
	type: string
};


export const setWindowWidth = (windowWidth: number): setWindowWidthI => ({
	type: 'SET_WIDTH',
	windowWidth
});

export const toggleModal = (id?: string): toggleModalI => ({
	type: 'TOGGLE_MODAL',
	id
})