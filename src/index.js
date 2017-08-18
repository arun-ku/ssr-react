import React from 'react';
import { render }  from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './Components/App';

render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('app')
)

if (module.hot) {
    module.hot.accept('./Components/App', () => {
        const NextApp = require('./Components/App').default;
        render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            document.getElementById('app')
        );
    })
}