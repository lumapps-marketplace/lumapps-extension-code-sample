import React, { useMemo } from 'react'; // react gérer les composants react 
import { FormattedMessage, IntlProvider } from 'react-intl'; // Bibliotheque gestion de l'internationalisation (translation) // 
import { Theme } from '@lumx/react'; // Composant de design // 

import { NotificationsProvider, PredefinedErrorBoundary, useLanguage, useCurrentUser } from 'lumapps-sdk-js'; // importer du SDK lumapps javascript // 

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

type Widget = import('lumapps-sdk-js').ContentComponent<
    import('./types').SampleAppGlobalParams,
    import('./types').SampleAppParams >;

const Widget: Widget = ({ value = {}, globalValue = {}, theme = Theme.light }) => {
    const { displayWelcome, fontSize } = value;
    const { firstName } = useCurrentUser();
    const hour = new Date().getHours();

    let welcomeId = '';
    if (hour < 12) welcomeId = 'good_morning';
    else if (hour < 18) welcomeId = 'good_afternoon';
    else welcomeId = 'good_evening';

    const getStyle = () => {
        return {
            color: theme === Theme.dark ? 'wihte' : 'black',
            fontSize: fontSize
        }
    }

    return (
        <div className="widget-welcome" style={getStyle()}>
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
            <NotificationsProvider>
                <PredefinedErrorBoundary>
                    <Widget {...props} />
                </PredefinedErrorBoundary>
            </NotificationsProvider>
        </IntlProvider>
    );
};

export { NotificationAwareWidget as Widget };
