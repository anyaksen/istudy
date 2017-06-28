import {h} from 'preact';
import {setVisibilityFilter, setIndex} from '../Store/creators';
import {dispatch, SubscribedComponent} from '../Store/index';
import State, {StateVisibilityFilter, StateWord} from '../Store/State';
import Link from './Link';

/**
 * Component Properties.
 */
type HeaderProps = object;

/**
 * Component State.
 */
interface HeaderState
{
	visibilityFilter: StateVisibilityFilter;
	words: StateWord[];
}

/**
 * Шапка приложения.
 */
class Header extends SubscribedComponent<State, HeaderProps, HeaderState>
{
	/**
	 * Render component.
	 */
	public render(
		_props: HeaderProps,
		{visibilityFilter}: HeaderState,
	): JSX.Element
	{
		const {words} = this.state;
		return (
			<header>
				<Link
					active={visibilityFilter === 'SHOW_AND_ADD'}
					onClick={this.onShowClick}
				>
					Show & Add
				</Link>
				{(words.length != 0)? 
				<Link
					onClick={this.onTestClick}
					active={visibilityFilter === 'TEST'}
				>
					Test
				</Link>
				:<div class='button'
				>
					Test
				</div>
				}
			</header>
		);
	}
	
	protected storeStateChanged( {visibilityFilter, words}: State ): void
	{
		if ( visibilityFilter === this.state.visibilityFilter && words === this.state.words)
		{
			return;
		}
		this.setState( {visibilityFilter} );
		this.setState( { words} );
	}
	
	private onShowClick = ( event: Event ): void =>
	{
        event.preventDefault();
		dispatch( setVisibilityFilter( 'SHOW_AND_ADD' ) );
	}
	

	
	private onTestClick = ( event: Event ): void =>
	{
        event.preventDefault();
		dispatch(setIndex(2));
		dispatch( setVisibilityFilter( 'TEST' ) );
	}
}

/**
 * Module.
 */
export {
	Header as default,
	HeaderProps,
	HeaderState,
};
