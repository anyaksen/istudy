import {h} from 'preact';
import { SubscribedComponent} from '../Store/index';
import State, {StateWord} from '../Store/State';
import selectWord from '../data/selectWord';
/**
 * Component Properties.
 */
type TestProps = object;

/**
 * Component State.
 */
interface TestState
{
    words: StateWord[];
    index: number;
	typeTest: boolean;
}

/**
 * Тест
 */
class Test extends SubscribedComponent<State,  TestProps,  TestState>
{
	/**
	 * Элемент поля ввода.
	 */
	private inputTrans: HTMLInputElement;
	/**
	 * Блок для вывода результата
	 */
	private divResult: HTMLInputElement;
	/**
	 * Render component.
	 */
	public render(): JSX.Element
	{
		const {words} = this.state;
		const {index} = this.state;
		const {typeTest} = this.state;
        return (
			<form>
				{(typeTest)? <div>{words[index].text}</div>:<div>{words[index].trans}</div>}
                <input 
					ref={this.refInputTrans} value=""
				/>
				<button
					type="button"
					onClick={() => (typeTest)? this.onCheckClick(words[index].trans):this.onCheckClick(words[index].text)}
				>
					Check
				</button>
                <button
					type="button"
					onClick={() => this.onNextClick(words)}
				>
					Next
				</button>
				<div ref={this.refResult}>
					
				</div>
			</form>
		);
	}
   	protected storeStateChanged( {words, index, typeTest}: State,  ): void
	{
		if ( words === this.state.words && index === this.state.index && typeTest === this.state.typeTest)
		{
			return;
		}
		this.setState( { index} );
		this.setState( { typeTest} );
		this.setState( {words} );
	}


	/**
	 * Сохраняет ссылку на элемент поля ввода.
	 */
	private refInputTrans = ( element: HTMLInputElement ): void =>
	{
		this.inputTrans = element;
	}
	/**
	 * Сохраняет ссылку на блок с результатом.
	 */
	private refResult = ( element: HTMLInputElement ): void =>
	{
		this.divResult = element;
	}
	
	/**
	 * При нажатии на кнопку Check.
	 */
	private onCheckClick = ( trans: string): void =>
	{
		if (this.inputTrans.value !='')
		{
            if (trans === this.inputTrans.value)
            {
                this.divResult.innerHTML = "<p>Правильно</p></p>";
            }
            else
            {
				this.divResult.innerHTML = "<p>Не правильно</p> <p>Правильный ответ: "+trans+"</p>";
            }
		}
	}
	/**
	 * При нажатии на кнопку Next.
	 */
    private onNextClick = (words: StateWord[]): void =>
	{
		selectWord(words);
		this.inputTrans.value = '';
		this.divResult.innerHTML = '';
	}

   
}

/**
 * Module.
 */
export {
	Test as default,
	TestProps,
	TestState,
};
