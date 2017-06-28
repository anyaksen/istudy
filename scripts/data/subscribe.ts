import * as Firebase from 'firebase/app';
import {StateWord} from '../Store/State';
import {setWords, setUser, setIndex} from '../Store/creators';
import {dispatch} from '../Store/index';
import getWordsRef from './getWordsRef';

function subscribe(): void
{
	Firebase.auth().onAuthStateChanged(
		( user: Firebase.User | null ) =>
		{
			if ( user )
			{
				subscribeToWords( user.uid );
			}
			else
			{
				unsubscribeFromWords();
			}
			dispatch( setUser( user ) );
		}
	);
}

function subscribeToWords( uid: string ): void
{
	const wordsRef = getWordsRef( uid );
	
	wordsRef.on(
		'value',
		( snapshot ) =>
		{
			dispatch( setIndex( 1 ) );
			const value = (
				snapshot
				? snapshot.val()
				: null
			);
			
			if ( !value )
			{
				dispatch( setIndex( 2 ) );
				dispatch( setWords( [] ) );
				return;
			}
			
			const keys = Object.keys( value );
			const words: StateWord[] = [];
			
			for ( const key of keys )
			{
				const {text} = value[key] as StateWord;
				const {trans} = value[key] as StateWord;
				
				words.push(
					{
						id: key,
						text,
						trans,
					},
				);
			}
			dispatch( setIndex( 3 ) );
			dispatch( setWords( words ) );

		},
	);
}

function unsubscribeFromWords(): void
{
	const todosRef = getWordsRef();
	
	todosRef && todosRef.off();
}

/**
 * Module.
 */
export {
	subscribe as default,
};
