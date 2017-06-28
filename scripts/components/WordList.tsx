import {h} from 'preact';
import {SubscribedComponent} from '../Store/index';
import State, {StateWord} from '../Store/State';
import removeWord from '../data/removeWord';
/**
 * Component Properties.
 */
type WordListProps = object;

/**
 * Component State.
 */
interface WordListState
{
	words: StateWord[];
}

/**
 * Словарь
 */
class WordList extends SubscribedComponent<State, WordListProps, WordListState>
{
	/**
	 * Render component.
	 */
	public render(): JSX.Element
	{
		const words = this.state.words;
		return (
			(words.length == 0)?
			<div> Добавьте слова в свой словарь</div>
			:
			<ul>
				{
					words.map(
						( word: StateWord ) => (
							<li>{word.text} - {word.trans}
								<button type="button"
									onClick={()=>this.onRemClick(word.id)}
								>
									del
								</button>
							</li>
						),
					)
				}
			</ul>
		);
	}
	
	protected storeStateChanged( {words}: State ): void
	{
		if ( words === this.state.words )
		{
			return;
		}
		this.setState( {words} );
	}

	private onRemClick = ( id: string): void =>
	{
		removeWord( id);
	}
}

/**
 * Module.
 */
export {
	WordList as default,
	WordListProps,
	WordListState,
};
