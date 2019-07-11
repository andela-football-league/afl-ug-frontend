import { action, observable } from 'mobx';

export class ModalStore {
	status = observable(false);

	@action openModal = () => {
		this.status = true;
	};

	@action closeModal = () => {
		this.status = false;
	};
}

export default new ModalStore();
