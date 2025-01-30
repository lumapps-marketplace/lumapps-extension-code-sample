import React, { useState } from 'react';
import { TextField } from '@lumx/react';
import { useDebounce, useExportProps } from 'lumapps-sdk-js';

type WidgetGlobalSettings = import('lumapps-sdk-js').GlobalSettingsComponent<import('./types').SampleAppGlobalParams>;

/**
 * Render the widget Picsum settings form.
 *
 * @param {Object} props The settings component properties.
 */
export const WidgetGlobalSettings: WidgetGlobalSettings = ({ properties = {}, exportProp }) => {
    return null;
};
