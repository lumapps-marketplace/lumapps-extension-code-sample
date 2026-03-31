import { Kind, Message, Text } from '@lumx/react';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ApplicationDetailsParams } from '../widget/types';

export const ApplicationDetails = ({ application }: ApplicationDetailsParams) => {
    return (
        <div className="lumx-spacing-padding-horizontal-huge">
            <Message kind={Kind.warning} hasBackground>
                <p>
                    <FormattedMessage id="global_settings.app_detail.message" />
                </p>
            </Message>
            <div className="lumx-spacing-padding-vertical-regular">
                <code>
                    <FormattedMessage id="global_settings.app_detail.name" />
                </code>
                <Text as="p" typography="body2" nowrap>
                    {application.name}
                </Text>
            </div>
            <div className="lumx-spacing-padding-vertical-regular">
                <code>
                    <FormattedMessage id="global_settings.app_detail.id" />
                </code>
                <Text as="p" typography="body2" nowrap>
                    {application.id}
                </Text>
            </div>
            <div className="lumx-spacing-padding-vertical-regular">
                <code>
                    <FormattedMessage id="global_settings.app_detail.secret" />
                </code>
                <Text as="p" typography="body2" nowrap>
                    {application.clientSecret}
                </Text>
            </div>
        </div>
    );
};
