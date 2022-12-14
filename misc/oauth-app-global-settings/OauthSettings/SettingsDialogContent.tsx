import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
    ProgressTracker,
    ProgressTrackerProvider,
    ProgressTrackerStep,
    ProgressTrackerStepPanel,
    Message,
    Kind,
} from '@lumx/react';

import { SettingsDialogContentParams } from '../widget/types';

export const SettingsDialogContent = ({ steps, setActiveStep, activeStep, error }: SettingsDialogContentParams) => {
    const getErrorMessage = () => {
        if (error.message === 'INVALID_EMAIL') {
            return 'global_settings.error.invalid_email';
        }
        if (error.message === 'PASSWORD_BAD_FORMAT') {
            return 'global_settings.error.password_bad_format';
        }
        return 'global_settings.error.generic_error';
    };

    return (
        <div>
            <ProgressTrackerProvider activeStepIndex={activeStep} onChange={setActiveStep}>
                <ProgressTracker aria-label="Steps">
                    {steps.map((step, index) => (
                        <ProgressTrackerStep key={`step-${index + 1}`} {...step} />
                    ))}
                </ProgressTracker>

                <div style={{ overflowX: 'auto' }}>
                    {error && (
                        <Message kind={Kind.error} hasBackground className="lumx-spacing-margin-huge">
                            <p>
                                <FormattedMessage id={getErrorMessage()} />
                            </p>
                        </Message>
                    )}
                    {steps.map((step) => (
                        <ProgressTrackerStepPanel key={`${step.label}-content`} className="lumx-spacing-margin-huge">
                            {step.component}
                        </ProgressTrackerStepPanel>
                    ))}
                </div>
            </ProgressTrackerProvider>
        </div>
    );
};
