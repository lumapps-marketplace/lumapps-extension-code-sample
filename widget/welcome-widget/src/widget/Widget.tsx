import React, { useMemo } from 'react'; // react gérer les composants react 
import { FormattedMessage, IntlProvider } from 'react-intl'; // Bibliotheque gestion de l'internationalisation (translation) // 
import { Theme } from '@lumx/react'; // Composant de design // 

import { NotificationsProvider, PredefinedErrorBoundary, useLanguage, useCurrentUser } from 'lumapps-sdk-js'; // importer du SDK lumapps javascript // 

import messagesEn from '../translations/en.json'; // traduction EN // 
import messagesFr from '../translations/fr.json'; // traduction FR // 
import messagesDe from '../translations/de.json'; // traduction DE // 
import messagesEs from '../translations/es.json'; // traduction ES // 
import messagesJp from '../translations/jp.json'; // traduction JP // 
import messagesIt from '../translations/it.json'; // traduction IT // 
import messagesCh from '../translations/ch.json'; // traduction CH // 
import messagesNl from '../translations/nl.json'; // traduction NL // 

type Widget = import('lumapps-sdk-js').ContentComponent<
    import('./types').SampleAppGlobalParams,
    import('./types').SampleAppParams >;

const Widget: Widget = ({ value = {}, globalValue = {}, theme = Theme.light }) => {
    const { displayWelcome } = value;
    const { firstName } = useCurrentUser();
    const hour = new Date().getHours();

    let welcomeId = '';
    if (hour < 12) welcomeId = 'good_morning';
    else if (hour < 18) welcomeId = 'good_afternoon';
    else welcomeId = 'good_evening';

    return (
        <div className="widget-welcome" style={ theme === Theme.dark ? { color: 'white' } : { color: 'black' }}>
            {displayWelcome ? <FormattedMessage id={welcomeId}></FormattedMessage> : <FormattedMessage id="welcome"></FormattedMessage>}
            <span>, {firstName} </span>
        </div>
    );
};

const NotificationAwareWidget: Widget = (props) => {
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

    };
    const lang = useMemo(() => (Object.keys(messages).includes(displayLanguage) ? displayLanguage : 'en'), [
        displayLanguage,
        messages,
    ]);

    return (
        <IntlProvider locale={lang} messages={messages[lang]}>
            <NotificationsProvider>
                <PredefinedErrorBoundary>
                    <Widget {...props} />
                </PredefinedErrorBoundary>
            </NotificationsProvider>
        </IntlProvider>
    );
};

export { NotificationAwareWidget as Widget };
