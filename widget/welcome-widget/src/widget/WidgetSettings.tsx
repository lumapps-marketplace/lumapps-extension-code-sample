import React, { useMemo, useState } from 'react';
import { FormattedMessage, IntlProvider} from 'react-intl';
import { Switch } from '@lumx/react';
import { PredefinedErrorBoundary, useExportProps, useLanguage } from 'lumapps-sdk-js';

import messagesEn from '../translations/en.json'; // traduction EN // 
import messagesFr from '../translations/fr.json'; // traduction FR // 
import messagesDe from '../translations/de.json'; // traduction DE // 
import messagesEs from '../translations/es.json'; // traduction ES // 
import messagesJp from '../translations/jp.json'; // traduction JP // 
import messagesIt from '../translations/it.json'; // traduction IT // 
import messagesCh from '../translations/ch.json'; // traduction CH // 
import messagesNl from '../translations/nl.json'; // traduction NL // 

type WidgetSettings = import('lumapps-sdk-js').SettingsComponent<
    import('./types').SampleAppGlobalParams,
    import('./types').SampleAppParams
>;

const WithIntlSettings: WidgetSettings = ({ properties = {}, exportProp }) => {
    
    const [displayWelcome, setDisplayWelcome] = useState(properties.displayWelcome || false );

    useExportProps(displayWelcome, 'displayWelcome', properties, exportProp);

    return (
        <>
            <Switch isChecked={displayWelcome} onChange={setDisplayWelcome}>
                <FormattedMessage id="time_of_day"></FormattedMessage>
            </Switch>
        </>
    );
};

export const WidgetSettings: WidgetSettings = (props) => {
    const { displayLanguage } = useLanguage();
    const messages: Record<string, Record<string, string>> = {
        en: messagesEn,
        fr: messagesFr,
        de: messagesDe,
        es: messagesEs,
        jp: messagesJp,
        it: messagesIt,
        ch: messagesCh,
        nl: messagesNl
        
    };
    const lang = useMemo(() => (Object.keys(messages).includes(displayLanguage) ? displayLanguage : 'en'), [
        displayLanguage,
        messages,
    ]);

    return (
        <IntlProvider locale={lang} messages={messages[lang]}>
            <PredefinedErrorBoundary>
                <WithIntlSettings {...props} />
            </PredefinedErrorBoundary>
        </IntlProvider>
    );
};
