/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-underscore-dangle */
import React, { useMemo, useRef } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { useReactToPrint } from 'react-to-print';
import { QRCode } from 'react-qrcode-logo';

import {
    Button,
    Emphasis,
    FlexBox,
    LinkPreview,
    Orientation,
    Theme,
    Toolbar,
} from '@lumx/react';
import { NotificationsProvider, PredefinedErrorBoundary, useLanguage } from 'lumapps-sdk-js';

import messagesEn from '../translations/en.json';
import messagesFr from '../translations/fr.json';

interface ShareProps {
    link: string;
    title: string;
    uid: string;
    onClose(): void;
}

const Share: import('lumapps-sdk-js').ContentComponent<undefined, ShareProps> = ({
    theme = Theme.light,
    value = {},
}) => {
    const { link = 'https://google.com', title = 'Google application', onClose} = value;
    const componentRef = useRef(null);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: title,
    });

    return (
        <div>
            <FlexBox orientation={Orientation.vertical}>
                <FlexBox style={{ backgroundColor: 'white', padding: 12, marginBottom: 12 }}>
                    <div>
                        <h5 className="lumx-typography-subtitle1 lumx-spacing-margin-bottom-big">
                            <FormattedMessage id="share.link-details" />
                        </h5>

                        <LinkPreview
                            description="Description"
                            link={link}
                            theme={theme}
                            thumbnailProps={{
                                image:
                                    'https://images.unsplash.com/photo-1549492423-400259a2e574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=554&q=80',
                                alt: 'Landscape',
                            }}
                            title={title}
                        />
                    </div>
                </FlexBox>

                <FlexBox style={{ backgroundColor: 'white', padding: 12 }}>
                    <FlexBox orientation={Orientation.vertical} fillSpace>
                        <h5 className="lumx-typography-subtitle1 lumx-spacing-margin-bottom-big">
                            <FormattedMessage id="share.code-overview" />
                        </h5>

                        <div ref={componentRef} style={{ margin: 'auto' }}>
                            <QRCode
                                bgColor="rgba(0,0,0,0)"
                                fgColor={theme === Theme.dark ? '#FFFFFF' : '#000000'}
                                qrStyle="squares"
                                size={140}
                                value={link}
                            />
                        </div>
                    </FlexBox>
                </FlexBox>

                <Toolbar
                    after={
                        <FlexBox orientation={Orientation.horizontal}>
                            <Button
                                className="lumx-spacing-margin-right-regular"
                                emphasis={Emphasis.medium}
                                onClick={onClose}
                            >
                                <FormattedMessage id="share.cancel" />
                            </Button>

                            <Button emphasis={Emphasis.high} onClick={handlePrint}>
                                <FormattedMessage id="share.generate" />
                            </Button>
                        </FlexBox>
                    }
                    style={{ paddingRight: 0 }}
                />
            </FlexBox>
        </div>
    );
};

const NotificationAwareContent: typeof Share = (props) => {
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
                    <Share {...props} />
                </PredefinedErrorBoundary>
            </NotificationsProvider>
        </IntlProvider>
    );
};

export { NotificationAwareContent as Share };
