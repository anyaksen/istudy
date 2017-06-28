import {h} from 'preact';
import { SubscribedComponent} from '../Store/index';
import State, {StateWord, StateVisibilityFilter} from '../Store/State';
import AddWord from './AddWord';
import WordList from './WordList';
import Test from './Test';
import selectWord from '../data/selectWord';
/**
 * Component Properties.
 */
type StudyWordProps = object;

/**
 * Component State.
 */
interface StudyWordState
{
	words: StateWord[];
	visibilityFilter: StateVisibilityFilter;
}

/**
 * Вкладки приложения: словарь или тест.
 */
class StudyWord extends SubscribedComponent<State, StudyWordProps, StudyWordState>
{
	/**
	 * Render component.
	 */
	public render(): JSX.Element
	{
		const words = this.state.words;
		const task = this.getVisibile();
		switch ( task )
		{
			case 'SHOW_AND_ADD':
			default:
			return (
            <div class="content show">
				<h2> Добавить слово </h2>
				<AddWord />
				<h2> Словарь </h2>
				<WordList />
            </div>
		);
			
			case 'TEST':
			{
				selectWord(words)
				return	(
				<div  class="content test">
				
					<Test />
				</div>
				);
			}
		}
	}
	protected storeStateChanged( { visibilityFilter, words}: State ): void
	{
		if ( visibilityFilter === this.state.visibilityFilter && words === this.state.words)
		{
			return;
		}
		this.setState( {words} );
		this.setState( {visibilityFilter} );
	}
	
	private getVisibile(): string
	{
		const { visibilityFilter} = this.state;
		
		switch ( visibilityFilter )
		{
			case 'SHOW_AND_ADD':
			default:
				return 'SHOW_AND_ADD';
			
			case 'TEST':
				return 'TEST';
		}
	}
}

/**
 * Module.
 */
export {
	StudyWord as default,
	StudyWordProps,
	StudyWordState,
};
