import React, { useMemo, useState } from 'react';
import { FormattedMessage, IntlProvider, useIntl } from 'react-intl';
import { TextField, Select, List, ListItem, Size, Switch } from '@lumx/react';
import { PredefinedErrorBoundary, useDebounce, useExportProps, useLanguage } from 'lumapps-sdk-js';

import messagesEn from '../translations/en.json';
import messagesFr from '../translations/fr.json';

type WidgetSettings = import('lumapps-sdk-js').SettingsComponent<
    import('./types').SampleAppGlobalParams,
    import('./types').SampleAppParams
>;
const STYLES = ['squares', 'dots'];
const LOGO_SIZES = [
    {
        label: 'S',
        value: 20,
    },
    {
        label: 'M',
        value: 40,
    },
    {
        label: 'L',
        value: 60,
    },
    {
        label: 'XL',
        value: 70,
    },
];

const SIZES = [
    {
        label: 'S',
        value: 100,
    },
    {
        label: 'M',
        value: 150,
    },
    {
        label: 'L',
        value: 200,
    },
    {
        label: 'XL',
        value: 220,
    },
];

const WithIntlSettings: WidgetSettings = ({ properties = {}, exportProp }) => {
    const intl = useIntl();
    const [qrCodeUrl, setQRCodeUrl] = useState(properties.qrCodeUrl);
    const [size, setSize] = React.useState<any>(properties.size || SIZES[1]);
    const [logoURL, setLogoURL] = useState(properties.logoURL);
    const [style, setStyle] = React.useState<string>(properties.style || STYLES[0]);
    const [logoSize, setLogoSize] = React.useState<any>(properties.logoSize || LOGO_SIZES[0]);
    const [displayLogo, setDisplayLogo] = React.useState<boolean>(properties.displayLogo || false);

    const debouncedQrCodeUrl = useDebounce(qrCodeUrl, 800);
    const debouncedLogoURL = useDebounce(logoURL, 800);

    useExportProps(debouncedQrCodeUrl, 'qrCodeUrl', properties, exportProp);
    useExportProps(size, 'size', properties, exportProp);
    useExportProps(debouncedLogoURL, 'logoURL', properties, exportProp);
    useExportProps(style, 'style', properties, exportProp);
    useExportProps(displayLogo, 'displayLogo', properties, exportProp);
    useExportProps(logoSize, 'logoSize', properties, exportProp);

    const [isStyleOpen, setStyleOpen] = useState(false);
    const closeStyleSelect = () => setStyleOpen(false);
    const toggleStyleSelect = () => setStyleOpen(!isStyleOpen);

    const selectStyle = (item: string) => () => {
        if (style === item) {
            setStyle('');
        } else {
            setStyle(item);
        }
        closeStyleSelect();
    };

    const [isLogoSizeOpen, setLogoSizeOpen] = useState(false);
    const closeLogoSizeSelect = () => setLogoSizeOpen(false);
    const toggleLogoSizeSelect = () => setLogoSizeOpen(!isLogoSizeOpen);

    const selectLogoSize = (item: any) => () => {
        if (style === item) {
            setLogoSize(LOGO_SIZES[0]);
        } else {
            setLogoSize(item);
        }
        closeStyleSelect();
    };

    const [isSizeOpen, setSizeOpen] = useState(false);
    const closeSizeSelect = () => setSizeOpen(false);
    const toggleSizeSelect = () => setSizeOpen(!isSizeOpen);

    const selectSize = (item: any) => () => {
        if (style === item) {
            setSize(SIZES[1]);
        } else {
            setSize(item);
        }
        closeStyleSelect();
    };

    return (
        <>
            <TextField
                className="mt0 ml lumx-spacing-margin-vertical-big"
                label={(<FormattedMessage id="settings.content" />) as any}
                value={qrCodeUrl}
                onChange={setQRCodeUrl}
            />

            <Select
                className="mt0 ml lumx-spacing-margin-vertical-big"
                style={{ width: '100%' }}
                isOpen={isSizeOpen}
                value={size.label}
                selectedValueRender={(choice) => <FormattedMessage id={`size.${choice}`} />}
                label={intl.formatMessage({ id: 'settings.size' })}
                placeholder={intl.formatMessage({ id: 'settings.size' })}
                onInputClick={toggleSizeSelect}
                onDropdownClose={closeSizeSelect}
            >
                <List>
                    {SIZES.length > 0
                        ? SIZES.map((choice) => (
                              <ListItem
                                  isSelected={size.label === choice.label}
                                  key={choice.label}
                                  onItemSelected={selectSize(choice)}
                                  size={Size.tiny}
                              >
                                  <FormattedMessage id={`size.${choice.label}`} />
                              </ListItem>
                          ))
                        : [
                              <ListItem key={0} size={Size.tiny}>
                                  No data
                              </ListItem>,
                          ]}
                </List>
            </Select>

            <Select
                className="mt0 ml lumx-spacing-margin-vertical-big"
                style={{ width: '100%' }}
                isOpen={isStyleOpen}
                value={style}
                selectedValueRender={(choice) => <FormattedMessage id={`shape.${choice}`} />}
                label={intl.formatMessage({ id: 'settings.style' })}
                placeholder={intl.formatMessage({ id: 'settings.style' })}
                onInputClick={toggleStyleSelect}
                onDropdownClose={closeStyleSelect}
                helper={(<FormattedMessage id="settings.style.helper" />) as any}
            >
                <List>
                    {STYLES.length > 0
                        ? STYLES.map((choice) => (
                              <ListItem
                                  isSelected={style === choice}
                                  key={choice}
                                  onItemSelected={selectStyle(choice)}
                                  size={Size.tiny}
                              >
                                  <FormattedMessage id={`shape.${choice}`} />
                              </ListItem>
                          ))
                        : [
                              <ListItem key={0} size={Size.tiny}>
                                  No data
                              </ListItem>,
                          ]}
                </List>
            </Select>

            <Switch className="lumx-spacing-margin-vertical-huge" isChecked={displayLogo} onChange={setDisplayLogo}>
                <FormattedMessage id="settings.add_logo" />
            </Switch>

            {displayLogo && (
                <>
                    <TextField
                        className="mt0 ml lumx-spacing-margin-vertical-big"
                        label={(<FormattedMessage id="settings.logo_url" />) as any}
                        value={logoURL}
                        onChange={setLogoURL}
                        helper={(<FormattedMessage id="settings.logo_url.helper" />) as any}
                    />

                    <Select
                        style={{ width: '100%' }}
                        isOpen={isLogoSizeOpen}
                        value={logoSize.label}
                        selectedValueRender={(choice) => <FormattedMessage id={`logo_size.${choice}`} />}
                        label={intl.formatMessage({ id: 'settings.logo_size' })}
                        placeholder={intl.formatMessage({ id: 'settings.logo_size' })}
                        onInputClick={toggleLogoSizeSelect}
                        onDropdownClose={closeLogoSizeSelect}
                    >
                        <List>
                            {LOGO_SIZES.length > 0
                                ? LOGO_SIZES.map((choice) => (
                                      <ListItem
                                          isSelected={logoSize.label === choice.label}
                                          key={choice.label}
                                          onItemSelected={selectLogoSize(choice)}
                                          size={Size.tiny}
                                      >
                                          <FormattedMessage id={`logo_size.${choice.label}`} />
                                      </ListItem>
                                  ))
                                : [
                                      <ListItem key={0} size={Size.tiny}>
                                          No data
                                      </ListItem>,
                                  ]}
                        </List>
                    </Select>
                </>
            )}
        </>
    );
};

export const WidgetSettings: WidgetSettings = (props) => {
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
            <PredefinedErrorBoundary>
                <WithIntlSettings {...props} />
            </PredefinedErrorBoundary>
        </IntlProvider>
    );
};
