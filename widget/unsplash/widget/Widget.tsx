import React, { useMemo } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { ImageBlock, ImageBlockCaptionPosition, Theme, AspectRatio, FlexBox, Orientation } from '@lumx/react';

import { NotificationsProvider, PredefinedErrorBoundary, useLanguage, useContext } from 'lumapps-sdk-js';

import messagesEn from '../translations/en.json';
import messagesFr from '../translations/fr.json';

type Widget = import('lumapps-sdk-js').ContentComponent<
    import('./types').SampleAppGlobalParams,
    import('./types').SampleAppParams
    >;

const Widget: Widget = ({ value = {}, globalValue = {}, theme = Theme.light }) => {
    const { selectedImage, selectedRatio }: any = value;
    const { clientId } = globalValue;
    const { isDesignerMode }: any = useContext();

    return (
        <div className="widget-picsum">
            {!clientId && isDesignerMode && (
                <FlexBox
                    fillSpace
                    style={{ paddingTop: 24, paddingBottom: 24 }}
                    vAlign="center"
                    hAlign="center"
                    orientation={Orientation.vertical}
                >
                    <p className="lumx-typography-title">
                        <FormattedMessage id="extension_name" />
                    </p>
                    <p className="lumx-typography-subtitle2">
                        <FormattedMessage id="no_client_id" />
                    </p>
                </FlexBox>
            )}
            {!selectedImage && isDesignerMode && clientId && (
                <FlexBox
                    fillSpace
                    style={{ paddingTop: 24, paddingBottom: 24 }}
                    vAlign="center"
                    hAlign="center"
                    orientation={Orientation.vertical}
                >
                    <p className="lumx-typography-title">
                        <FormattedMessage id="extension_name" />
                    </p>
                    <p className="lumx-typography-subtitle2">
                        <FormattedMessage id="empty_state" />
                    </p>
                </FlexBox>
            )}
            {selectedImage && (
                <ImageBlock
                    alt={selectedImage.alt_description}
                    captionPosition={ImageBlockCaptionPosition.over}
                    theme={theme}
                    image={selectedImage.urls.full as string}
                    thumbnailProps={{
                        aspectRatio: selectedRatio || AspectRatio.original,
                    }}
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
