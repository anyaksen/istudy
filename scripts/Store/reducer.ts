import {User} from 'firebase/app';
import {combineReducers} from 'small-redux';
import Actions, {Action} from './Actions';
import State, {StateWord, StateVisibilityFilter} from './State';
/**
 * Initial app state.
 */
const initialState: State = {
	words: [],
	visibilityFilter: 'SHOW_AND_ADD',
	index: 0,
	typeTest: true,
	user: null,
};

function words(
	state: StateWord[] = initialState.words,
	action: Action,
): StateWord[]
{
	switch ( action.type )
	{
		case Actions.ADD_WORD:
			return [
				...state,
				action.payload,
			];
		
		case Actions.SET_WORDS:
				return action.payload.words;

		default:
			return state;

	}
}

function visibilityFilter(
	state: StateVisibilityFilter = initialState.visibilityFilter,
	action: Action,
): StateVisibilityFilter
{
	switch ( action.type )
	{
		case Actions.SET_VISIBILITY_FILTER:
			return action.payload.visibilityFilter;
		
		default:
			return state;
	}
}

function user(
	state: User | null = initialState.user,
	action: Action,
): User | null
{
	switch ( action.type )
	{
		case Actions.SET_USER:
			return action.payload.user;
		
		default:
			return state;
	}
}



function index(
	state: number = initialState.index,
	action: Action,
)
{
	switch ( action.type )
	{
		case Actions.STUDY_WORD:
			return action.payload;		
		default:
			return state;
	}
}

function typeTest(
	state: boolean = initialState.typeTest,
	action: Action,
)
{
	switch ( action.type )
	{
		case Actions.TYPE_TEST:
			return action.payload;
		default:
			return state;
	}
}

const reducer = combineReducers<State, Action>(
	{
		words,
		visibilityFilter,
		user,
		index,
		typeTest,
	},
);
/**
 * Module.
 */
export {
	reducer as default,
};
