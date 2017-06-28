import {User} from 'firebase/app';
import Actions, {Action} from './Actions';
import {StateWord, StateVisibilityFilter} from './State';


function addWord( text: string, trans: string ): Action
{
	return {
		type: Actions.ADD_WORD,
		payload: {
			text,
			trans,
		} as StateWord,
	};
}

function setVisibilityFilter( visibilityFilter: StateVisibilityFilter ): Action
{
	return {
		type: Actions.SET_VISIBILITY_FILTER,
		payload: {visibilityFilter},
	};
}

function setWords( words: StateWord[] ): Action
{
	return {
		type: Actions.SET_WORDS,
		payload: {words},
	};
}

function setUser( user: User | null ): Action
{
	return {
		type: Actions.SET_USER,
		payload: {user},
	};
}

function setIndex( index: number): Action
{
	return {
		type: Actions.STUDY_WORD,
		payload: index,
	} ;
}

function setType( typeTest: boolean): Action
{
	return {
		type: Actions.TYPE_TEST,
		payload: typeTest,
	} ;
}

/**
 * Module.
 */
export {
	addWord,
	setVisibilityFilter,
	setWords,
	setUser,
	setIndex,
	setType,
};
