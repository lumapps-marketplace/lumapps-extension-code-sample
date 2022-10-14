import React, { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import { Theme } from '@lumx/react';

import { QRCode } from 'react-qrcode-logo';

import { NotificationsProvider, PredefinedErrorBoundary, useLanguage } from 'lumapps-sdk-js';

import messagesEn from '../translations/en.json';
import messagesFr from '../translations/fr.json';

type Widget = import('lumapps-sdk-js').ContentComponent<
    import('./types').SampleAppGlobalParams,
    import('./types').SampleAppParams
>;

const Widget: Widget = ({ value = {}, theme = Theme.light }) => {
    const { qrCodeUrl, logoURL, style, logoSize, size, displayLogo }: Widget = value;

    return (
        <div className="widget-picsum">
            {qrCodeUrl && (
                <QRCode
                    value={qrCodeUrl}
                    size={size.value}
                    fgColor={theme === Theme.dark ? '#FFFFFF' : '#000000'}
                    logoImage={displayLogo ? logoURL : ''}
                    logoOpacity={1}
                    logoWidth={logoSize.value}
                    logoHeight={logoSize.value}
                    bgColor="rgba(0,0,0,0)"
                    qrStyle={style}
                />
            )}
        </div>
    );
};

const NotificationAwareWidget: Widget = (props) => {
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
            <NotificationsProvider>
                <PredefinedErrorBoundary>
                    <Widget {...props} />
                </PredefinedErrorBoundary>
            </NotificationsProvider>
        </IntlProvider>
    );
};

export { NotificationAwareWidget as Widget };
