/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-underscore-dangle */
import React, { useMemo, useRef, useState } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import {
    Alignment,
    Button,
    Emphasis,
    FlexBox,
    LinkPreview,
    Orientation,
    Size,
    TextField,
    Theme,
    Thumbnail,
    ThumbnailVariant,
    Toolbar,
    UserBlock,
} from '@lumx/react';
import { NotificationsProvider, PredefinedErrorBoundary, useLanguage } from 'lumapps-sdk-js';
import { useReactToPrint } from 'react-to-print';

import { QRCode } from 'react-qrcode-logo';

import messagesEn from '../translations/en.json';
import messagesFr from '../translations/fr.json';

interface ShareProps {
    link: string;
    onClose(): void;
    title: string;
    uid: string;
}

const Share: import('lumapps-sdk-js').ContentComponent<undefined, ShareProps> = ({
    value = {},
    theme = Theme.light,
}) => {
    const { link = 'https://google.com', onClose, title = 'Google application'} = value;
    const componentRef = useRef(null);

    const handlePrint = useReactToPrint({
        documentTitle: title,
        content: () => componentRef.current,
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
                            title={title}
                            description="Description"
                            link={link}
                            theme={theme}
                            thumbnailProps={{
                                image:
                                    'https://images.unsplash.com/photo-1549492423-400259a2e574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=554&q=80',
                                alt: 'Landscape',
                            }}
                        />
                    </div>
                </FlexBox>
                <FlexBox style={{ backgroundColor: 'white', padding: 12 }}>
                    <FlexBox fillSpace orientation={Orientation.vertical}>
                        <h5 className="lumx-typography-subtitle1 lumx-spacing-margin-bottom-big">
                            <FormattedMessage id="share.code-overview" />
                        </h5>
                        <div style={{ margin: 'auto' }} ref={componentRef}>
                            <QRCode
                                value={link}
                                size={140}
                                fgColor={theme === Theme.dark ? '#FFFFFF' : '#000000'}
                                bgColor="rgba(0,0,0,0)"
                                qrStyle="squares"
                            />
                        </div>
                    </FlexBox>
                </FlexBox>

                <Toolbar
                    style={{ paddingRight: 0 }}
                    after={
                        <FlexBox orientation={Orientation.horizontal}>
                            <Button
                                onClick={onClose}
                                emphasis={Emphasis.medium}
                                className="lumx-spacing-margin-right-regular"
                            >
                                <FormattedMessage id="share.cancel" />
                            </Button>
                            <Button onClick={handlePrint} emphasis={Emphasis.high}>
                                <FormattedMessage id="share.generate" />
                            </Button>
                        </FlexBox>
                    }
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
