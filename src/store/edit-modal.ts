import { create } from 'zustand';

interface ModalState {
	showModal: boolean;
	toggleState: () => void;
}

export const useModal = create<ModalState>(set => ({
	showModal: false,
	toggleState: () => set(state => ({ showModal: !state.showModal })),
}));
