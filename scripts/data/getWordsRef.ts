import {database} from 'firebase/app';
import {getState} from '../Store/index';

function getWordsRef( uid: string ): database.Reference;
function getWordsRef(): database.Reference | null;
function getWordsRef( uid?: string ): database.Reference | null
{
	if ( !uid )
	{
		const stateUser = getState().user;
		
		if ( !stateUser )
		{
			return null;
		}
		
		uid = stateUser.uid;
	}
	
	
	return database().ref( `/users/${uid}/words` );
}

/**
 * Module.
 */
export {
	getWordsRef as default,
};
