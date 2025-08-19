import React from 'react';
import { useIntl } from 'react-intl';
import { TextField } from '@lumx/react';
import { CreateApplicationParams } from '../widget/types';

export const CreateApplication = ({ name, setName }: CreateApplicationParams) => {
    const intl = useIntl();

    return (
        <div className="lumx-spacing-padding-horizontal-huge">
            <TextField
                className="mt0 ml lumx-spacing-margin-vertical-big"
                label={intl.formatMessage({ id: 'global_settigns.application.name' })}
                value={name}
                isRequired
                onChange={setName}
            />
        </div>
    );
};
