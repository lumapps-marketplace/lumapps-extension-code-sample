import React, { useMemo, useState } from 'react';
import { FormattedMessage, IntlProvider} from 'react-intl';
import { Switch } from '@lumx/react';
import { PredefinedErrorBoundary, useExportProps, useLanguage } from 'lumapps-sdk-js';

import messagesEn from '../translations/en.json';
import messagesFr from '../translations/fr.json';
import messagesDe from '../translations/de.json';
import messagesEs from '../translations/es.json';
import messagesJp from '../translations/jp.json';
import messagesIt from '../translations/it.json';
import messagesCh from '../translations/ch.json';
import messagesNl from '../translations/nl.json'; 
import messagesPt from '../translations/pt.json';
import messagesPtBr from '../translations/pt-br.json';
import messagesPl from '../translations/pl.json';

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
        nl: messagesNl,
        pl: messagesPl,
        pt: messagesPt,
        "pt-BR":messagesPtBr,
        "pt-br":messagesPtBr,
    };

    const lang = useMemo(() => (Object.keys(messages).includes(displayLanguage.replace('_','-')) ? displayLanguage.replace('_','-') : 'en'), [
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
