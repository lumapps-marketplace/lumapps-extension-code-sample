import React, { useState, useMemo } from 'react';
import { TextField } from '@lumx/react';
import { useDebounce, useExportProps, useLanguage } from 'lumapps-sdk-js';
import { IntlProvider, useIntl } from 'react-intl';

import messagesEn from '../translations/en.json';
import messagesFr from '../translations/fr.json';

type WidgetGlobalSettings = import('lumapps-sdk-js').GlobalSettingsComponent<import('./types').SampleAppGlobalParams>;

/**
 * Render the widget Picsum settings form.
 *
 * @param {Object} props The settings component properties.
 */
const WidgetGlobalSettingsWithIntl: WidgetGlobalSettings = ({ properties = {}, exportProp }) => {
    const intl = useIntl();
    const [clientId, setClientId] = useState(properties.clientId);
    const debouncedClientId = useDebounce(clientId, 800);

    useExportProps(debouncedClientId, 'clientId', properties, exportProp);

    return (
        <div>
            <TextField
                className="mt0 ml"
                label={intl.formatMessage({ id: 'global_settings.client_id' })}
                value={clientId}
                onChange={setClientId}
                helper={intl.formatMessage(
                    { id: 'global_settings.client_id.helper' },
                    {
                        a: (value: any) => <a href="https://unsplash.com/developers">{value}</a>
                    },
                )}
            />
        </div>
    );
};

export const WidgetGlobalSettings: WidgetGlobalSettings = (props) => {
    const { displayLanguage } = useLanguage();
    const messages: Record<string, Record<string, string>> = {
        en: messagesEn,
        fr: messagesFr,
    };
    const lang = useMemo(() => (Object.keys(messages).includes(displayLanguage) ? displayLanguage : 'en'), [
        displayLanguage,
        messages,
    ]);

    return (
        <IntlProvider locale={lang} messages={messages[lang]}>
            <WidgetGlobalSettingsWithIntl {...props} />
        </IntlProvider>
    );
};
