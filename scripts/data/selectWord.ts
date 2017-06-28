import {StateWord} from '../Store/State';
import {setIndex, setType} from '../Store/creators';
import {dispatch} from '../Store/index'; 
function selectWord (words: StateWord[] ) : number
    {
        const l = Object.keys(words).length;
		const rand = Math.round(Math.random() * (l-1));
        dispatch( setIndex( rand ) );
        const type = Math.random();
        if(type>=0.5) 
        {
            const res = false;
            dispatch( setType( res ) );
        }
        else
        {
            const res = true;
            dispatch( setType( res ) );
        }
        
        return rand;
    }

/**
 * Module.
 */
export {
	selectWord as default,
};
