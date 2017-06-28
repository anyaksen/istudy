import {h} from 'preact';

import Auth from './Auth';

function TodoApp(): JSX.Element
{
	return (
		<section>
			<h1>I Study</h1>
			<Auth/>	
		</section>
	);
}

/**
 * Корень приложения.
 */
const AppRoot = <TodoApp />;

/**
 * Module.
 */
export {
	AppRoot as default,
	TodoApp,
};
