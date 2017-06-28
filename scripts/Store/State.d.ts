import {User} from 'firebase/app';

/**
 * Состояние приложения.
 */
interface State
{
	/** Задачи */
	words: StateWord[];
	/** Фильтр видимости */
	visibilityFilter: StateVisibilityFilter;
	/** Данные пользователя */
	user: User | null;
	/** Текущее слово */
	index: number;
	/** Тип теста */
	typeTest: boolean;

}

/**
 * Задача.
 */

interface StateWord
{
	/** Идентификатор */
	id: string;
	/** Слово на английском */
	text: string;
	/** Перевод */
	trans: string;
}

/**
 * Фильтр видимости.
 */
type StateVisibilityFilter = 'SHOW_AND_ADD' | 'TEST';

/**
 * Module.
 */
export {
	State as default,
	StateWord,
	StateVisibilityFilter,
};
