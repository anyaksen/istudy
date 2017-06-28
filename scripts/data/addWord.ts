import {StateWord} from '../Store/State';
import getTodosRef from './getWordsRef';

function addWord( text: string, trans: string ): void
{
	const todosRef = getTodosRef();
	
	if ( !todosRef )
	{
		return;
	}
	
	todosRef.push()
		.set(
			{
				text,
				trans,
			} as Partial<StateWord>,
		);
}

/**
 * Module.
 */
export {
	addWord as default,
};
