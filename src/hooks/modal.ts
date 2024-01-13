import { useState } from 'react';

export function useModal() {
	const [modal, toggleModal] = useState(false);

	const toggleState = () => toggleModal(state => !state);

	return { state: modal, toggleState };
}
