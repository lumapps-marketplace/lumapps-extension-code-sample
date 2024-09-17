import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Playground, store } from '@lumapps-extensions-playground/devenv';

import '@lumx/core/lumx.css';

import { Widget } from './widget/Widget';
import { WidgetSettings } from './widget/WidgetSettings';

import config from './config.js';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Playground
                config={config as import('lumapps-sdk-js').ExtensionConfig}
                ContentComponent={Widget}
                SettingsComponent={WidgetSettings}
            />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
