import React, { useMemo, useState } from 'react';
import { FormattedMessage, IntlProvider, useIntl } from 'react-intl';
import { Switch, Select, List, ListItem, Size } from '@lumx/react';
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
    const intl = useIntl();
    const FONT_SIZES = [{
        label: '16px',
        value: 16
    },{
        label: '18px',
        value: 18
    },{
        label: '24px',
        value: 24
    },{
        label: '32px',
        value: 32
    }];

    const [displayWelcome, setDisplayWelcome] = useState(properties.displayWelcome || false);
    const [isOpen, setOpen] = useState(false);
    const [fontSize, setFontSize] = React.useState<any>(properties.fontSize || FONT_SIZES[0]);
    
    const closeSelect = () => setOpen(false);
    const toggleSelect = () => setOpen(!isOpen);
    const selectItem = (item: any) => () => {
        setFontSize(item);
        closeSelect();
    };

    useExportProps(displayWelcome, 'displayWelcome', properties, exportProp);
    useExportProps(fontSize, 'fontSize', properties, exportProp);

    return (
        <>
            <Switch isChecked={displayWelcome} onChange={setDisplayWelcome}>
                <FormattedMessage id="settings.time_of_day"></FormattedMessage>
            </Switch>

            <Select
                className="lumx-spacing-margin-top-huge"
                style={{ width: '100%' }}
                isOpen={isOpen}
                value={fontSize.label}
                label={intl.formatMessage({ id: 'settings.font_size' })}
                onInputClick={toggleSelect}
                onDropdownClose={closeSelect}
            >
                <List>
                    {FONT_SIZES.map((size, index) => (
                            <ListItem
                                isSelected={fontSize.value === size.value}
                                key={index}
                                onItemSelected={selectItem(size)}
                                size={Size.tiny}
                            >
                                {size.label}
                            </ListItem>
                        ))}
                </List>
            </Select>
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
        "pt-BR": messagesPtBr,
        "pt-br": messagesPtBr,
    };

    const lang = useMemo(() => (Object.keys(messages).includes(displayLanguage.replace('_', '-')) ? displayLanguage.replace('_', '-') : 'en'), [
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
