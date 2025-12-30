/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useMemo, useState, useRef, useCallback, useEffect } from 'react';
import { FormattedMessage, IntlProvider, useIntl } from 'react-intl';
import {
    Dialog,
    Toolbar,
    Emphasis,
    TextField,
    FlexBox,
    Orientation,
    Size,
    Thumbnail,
    AspectRatio,
    UserBlock,
    IconButton,
    Icon,
} from '@lumx/react';
import { mdiCropLandscape, mdiCropPortrait, mdiCropSquare, mdiPencil, mdiTrashCan, mdiMagnify } from '@lumx/icons';
import { PredefinedErrorBoundary, useDebounce, useExportProps, useLanguage } from 'lumapps-sdk-js';
import { searchPhotos } from '../api/api';
import { InfiniteScroll } from './InfiniteScroll';

import emptySearch from '../empty-search.png';
import error from '../error.png';

import messagesEn from '../translations/en.json';
import messagesFr from '../translations/fr.json';

type WidgetSettings = import('lumapps-sdk-js').SettingsComponent<
    import('./types').SampleAppGlobalParams,
    import('./types').SampleAppParams
>;

const WithIntlSettings: WidgetSettings = ({ properties = {}, globalValue = {}, globalProperties = {}, exportProp }) => {
    const intl = useIntl();
    const buttonRef = useRef(null);

    const { clientId } = globalProperties;

    const [isOpen, setOpen] = useState(false);
    const close = useCallback(() => setOpen(false), []);
    const toggle = useCallback(() => setOpen(!isOpen), [isOpen]);

    const [filter, setFilter] = useState<string>();
    const [totalPages, setTotalPages] = useState<number>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [images, setImages] = useState<any[]>([]);
    const [selectedImage, setSelectedImage] = useState<any>(properties.selectedImage);
    const [selectedRatio, setSelectedRatio] = useState(properties.selectedRatio);
    const [apiError, setApiError] = useState();

    const debouncedFilter = useDebounce(filter, 800);

    useEffect(() => {
        const loadImages = async () => {
            if (clientId) {
                const result = await searchPhotos(clientId, debouncedFilter, 1);

                if (result.error) {
                    setApiError(result);
                } else {
                    setApiError(undefined);
                }

                setImages(result.results);
                setTotalPages(result.total_pages);
            }
        };

        loadImages();
    }, [debouncedFilter, clientId]);

    const fetchImages = async () => {
        if (filter && clientId) {
            const result = await searchPhotos(clientId, filter, currentPage + 1);

            if (result.error) {
                setApiError(result);
            } else {
                setApiError(undefined);
            }

            setImages(images.concat(result.results));
            setTotalPages(result.total_pages);
            setCurrentPage(currentPage + 1);
        }
    };

    const handleImageClick = useCallback(
        (image: any) => () => {
            setSelectedImage(image);
            setOpen(false);
        },
        [],
    );

    const removeSelectedImage = () => {
        setSelectedImage(undefined);
    };

    const editSelectedImage = () => {
        setOpen(true);
    };

    const selectRatio = (ratio: string) => {
        if (ratio === selectedRatio) {
            setSelectedRatio(undefined);
        } else {
            setSelectedRatio(ratio);
        }
    };

    useExportProps(selectedImage, 'selectedImage', properties, exportProp);
    useExportProps(selectedRatio, 'selectedRatio', properties, exportProp);

    return (
        <div style={{ marginTop: 8 }}>
            {!selectedImage && (
                <div
                    style={{ padding: 8, backgroundColor: 'rgb(233 233 233)', borderRadius: 5, cursor: 'pointer' }}
                    onClick={toggle}
                >
                    <FlexBox
                        style={{ minHeight: 48 }}
                        orientation={Orientation.horizontal}
                        fillSpace
                        hAlign="center"
                        gap="big"
                    >
                        <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#E1E1E1' }} />
                        <p className="lumx-typography-subtitle1">
                            <FormattedMessage id="settings.choose_image" />
                        </p>
                    </FlexBox>
                </div>
            )}

            {selectedImage && (
                <div style={{ marginTop: 16 }}>
                    <p className="lumx-typography-subtitle2">
                        <FormattedMessage id="settings.selected_image" />
                    </p>
                    <div style={{ padding: 8, backgroundColor: '#E1E1E1', borderRadius: 5 }}>
                        <FlexBox orientation={Orientation.horizontal} fillSpace hAlign="center" gap="big">
                            <UserBlock
                                style={{ flex: 1 }}
                                name={selectedImage.user.name}
                                fields={[selectedImage.description]}
                                avatarProps={{ image: selectedImage.urls.thumb, alt: selectedImage.alt_description }}
                                size={Size.l}
                            />
                            <IconButton
                                label={intl.formatMessage({ id: 'settings.selected_image.edit' })}
                                emphasis={Emphasis.medium}
                                icon={mdiPencil}
                                onClick={editSelectedImage}
                            />
                            <IconButton
                                label={intl.formatMessage({ id: 'settings.selected_image.delete' })}
                                emphasis={Emphasis.medium}
                                icon={mdiTrashCan}
                                onClick={removeSelectedImage}
                            />
                        </FlexBox>
                    </div>
                </div>
            )}

            <div style={{ marginTop: 16 }}>
                <p className="lumx-typography-subtitle2">
                    <FormattedMessage id="settings.ratio" />
                </p>
                <FlexBox orientation={Orientation.horizontal} fillSpace gap="big">
                    <div
                        style={{
                            flex: 1,
                            padding: 8,
                            backgroundColor: selectedRatio === 'vertical' ? '#E1E1E1' : 'rgb(233 233 233)',
                            borderRadius: 5,
                            cursor: 'pointer',
                        }}
                        onClick={() => selectRatio('vertical')}
                    >
                        <FlexBox orientation={Orientation.vertical} hAlign="center" vAlign="center">
                            <Icon icon={mdiCropPortrait} size={Size.xs} />
                            <p>
                                {' '}
                                <FormattedMessage id="settings.ratio.portrait" />
                            </p>
                        </FlexBox>
                    </div>
                    <div
                        style={{
                            flex: 1,
                            padding: 8,
                            backgroundColor: selectedRatio === 'square' ? '#E1E1E1' : 'rgb(233 233 233)',
                            borderRadius: 5,
                            cursor: 'pointer',
                        }}
                        onClick={() => selectRatio('square')}
                    >
                        <FlexBox orientation={Orientation.vertical} hAlign="center" vAlign="center">
                            <Icon icon={mdiCropSquare} size={Size.xs} />
                            <p>
                                {' '}
                                <FormattedMessage id="settings.ratio.square" />
                            </p>
                        </FlexBox>
                    </div>
                    <div
                        style={{
                            flex: 1,
                            padding: 8,
                            backgroundColor: selectedRatio === 'horizontal' ? '#E1E1E1' : 'rgb(233 233 233)',
                            borderRadius: 5,
                            cursor: 'pointer',
                        }}
                        onClick={() => selectRatio('horizontal')}
                    >
                        <FlexBox orientation={Orientation.vertical} hAlign="center" vAlign="center">
                            <Icon icon={mdiCropLandscape} size={Size.xs} />
                            <p>
                                <FormattedMessage id="settings.ratio.landscape" />
                            </p>
                        </FlexBox>
                    </div>
                </FlexBox>
            </div>

            <Dialog isOpen={isOpen} parentElement={buttonRef} onClose={close}>
                <header>
                    <Toolbar label={<span className="lumx-typography-title">Unsplash images</span>} />
                </header>
                <div style={{ padding: 16 }}>
                    {!clientId && (
                        <FlexBox orientation={Orientation.vertical} hAlign="center" vAlign="center" gap="big">
                            <img src={error} alt="Error" />
                            <p
                                className="lumx-typography-body"
                                style={{ fontSize: 18, marginBottom: 8, textAlign: 'center' }}
                            >
                                <FormattedMessage id="settings.no_client_id" />
                            </p>
                        </FlexBox>
                    )}
                    {apiError && (
                        <FlexBox orientation={Orientation.vertical} hAlign="center" vAlign="center" gap="big">
                            <img src={error} alt="Error" />
                            <p
                                className="lumx-typography-body"
                                style={{ fontSize: 18, marginBottom: 8, textAlign: 'center' }}
                            >
                                <FormattedMessage id="settings.rate_limit" />
                            </p>
                        </FlexBox>
                    )}
                    {clientId && !apiError && (
                        <>
                            <FlexBox>
                                <TextField
                                    placeholder={intl.formatMessage({ id: 'settings.search' })}
                                    value={filter}
                                    icon={mdiMagnify}
                                    onChange={setFilter}
                                    clearButtonProps={{ label: 'Clear' }}
                                />
                            </FlexBox>
                            <FlexBox
                                orientation={Orientation.horizontal}
                                gap={Size.regular}
                                style={{ padding: 16 }}
                                wrap
                                marginAuto="left"
                                vAlign="center"
                            >
                                {images &&
                                    images.length > 0 &&
                                    images.map((image: any, index: number) => (
                                        <div
                                            key={image.id}
                                            style={{ width: 220, cursor: 'pointer' }}
                                            onClick={handleImageClick(image)}
                                        >
                                            <Thumbnail
                                                image={image.urls.regular}
                                                alt={image.alt_description}
                                                aspectRatio={AspectRatio.square}
                                            />
                                            {totalPages && currentPage < totalPages && index === images.length - 1 && (
                                                <InfiniteScroll callback={() => fetchImages()} />
                                            )}
                                        </div>
                                    ))}

                                {filter && (!images || images.length === 0) && (
                                    <FlexBox orientation={Orientation.vertical} hAlign="center" vAlign="center">
                                        <img src={emptySearch} alt="Empty Search" />
                                        <p className="lumx-typography-body" style={{ fontSize: 18, marginBottom: 8 }}>
                                            <FormattedMessage id="settings.no_match" /> <b>{filter}</b>
                                        </p>
                                        <p className="lumx-typography-caption">
                                            <FormattedMessage id="settings.try_another_term" />
                                        </p>
                                    </FlexBox>
                                )}
                            </FlexBox>
                        </>
                    )}
                </div>
            </Dialog>
        </div>
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
