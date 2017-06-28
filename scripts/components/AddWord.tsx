import {Component, h} from 'preact';
import addWord from '../data/addWord';

/**
 * Component Properties.
 */
interface AddWordProps
{
	[key: string]: void;
}

/**
 * Component State.
 */
type AddWordState = object;

/**
 * Форма для добавления слов в словарь
 */
class AddWord extends Component<AddWordProps, AddWordState>
{
	/**
	 * Элементы поля ввода.
	 */
	private inputWord: HTMLInputElement;
	private inputTrans: HTMLInputElement;
	/**
	 * Render component.
	 */
	public render(): JSX.Element
	{
		return (
			<form>
				<label>
					Слово:
				</label>
				<input
					ref={this.refInputWord}
				/>
				<label>
					Перевод:
				</label>
				<input
					ref={this.refInputTrans}
				/>
				<button
					type="button"
					onClick={this.onClick}
				>
					Add
				</button>
			</form>
		);
	}
	
	/**
	 * Сохраняет ссылку на элемент поля ввода (inputWord) .
	 */
	private refInputWord = ( element: HTMLInputElement ): void =>
	{
		this.inputWord = element;
	}
	/**
	 * Сохраняет ссылку на элемент поля ввода (inputTrans).
	 */
	private refInputTrans = ( element: HTMLInputElement ): void =>
	{
		this.inputTrans = element;
	}
	/**
	 * При нажатии на кнопку.
	 */
	private onClick = (): void =>
	{

		if (this.inputWord.value !='' && this.inputTrans.value != '' )
		{
			addWord( this.inputWord.value,  this.inputTrans.value );
			this.inputWord.value = '';
			this.inputTrans.value = '';
		}
	}
}

/**
 * Module.
 */
export {
	AddWord as default,
	AddWordProps,
	AddWordState,
};
