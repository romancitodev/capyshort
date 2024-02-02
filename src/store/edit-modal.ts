import { create } from 'zustand';

interface ModalState {
	showModal: boolean;
	id: string;
	toggleState: (id?: string) => void;
}

export const useModal = create<ModalState>(set => ({
	showModal: false,
	id: '',
	toggleState: id =>
		set(state => ({ ...state, id, showModal: !state.showModal })),
}));
