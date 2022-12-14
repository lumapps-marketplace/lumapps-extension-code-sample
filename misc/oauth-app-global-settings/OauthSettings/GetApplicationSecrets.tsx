import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, FlexBox, Size, Orientation } from '@lumx/react';

import { GetApplicationSecretsParams } from '../widget/types';

export const GetApplicationSecret = ({ getApplicationSecrets, secret, applicationId }: GetApplicationSecretsParams) => {
    const loadApplicationSecrets = () => {
        getApplicationSecrets();
    };

    return (
        <div>
            <FlexBox orientation={Orientation.horizontal} vAlign="right" />

            <FlexBox
                fillSpace
                orientation="vertical"
                gap="medium"
                className="lumx-spacing-margin-regular lumx-spacing-padding-regular"
                style={{ border: 'solid 1px' }}
            >
                <FlexBox fillSpace orientation={Orientation.horizontal}>
                    <h4 style={{ minWidth: 250 }} className="lumx-typography-subtitle2">
                        <FormattedMessage id="global_settigns.application_secret.application_id" />
                    </h4>
                    <FlexBox fillSpace vAlign="right">
                        {applicationId}
                    </FlexBox>
                </FlexBox>
                <FlexBox fillSpace orientation={Orientation.horizontal} vAlign="left">
                    <h4 style={{ minWidth: 250 }} className="lumx-typography-subtitle2">
                        <FormattedMessage id="global_settigns.application_secret.application_secret" />
                    </h4>
                    <FlexBox fillSpace vAlign="right">
                        {secret ? (
                            <span>{secret}</span>
                        ) : (
                            <Button size={Size.s} onClick={loadApplicationSecrets}>
                                <FormattedMessage id="global_settigns.application_secret.get_secret" />
                            </Button>
                        )}
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </div>
    );
};
