import {database} from 'firebase/app';
import {getState} from '../Store/index';

function removeWord( id: string ): void
{
	const stateUser = getState().user;
	if (stateUser)
	{
		const todoRef =  database().ref(`/users/${stateUser.uid}/words/${id}`);
		todoRef.remove();
	}
}

/**
 * Module.
 */
export {
	removeWord as default,
};
