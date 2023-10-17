import defaultsDeep from 'lodash.defaultsdeep';
import {defineMessages} from 'react-intl';

import {
    blockColors as darkModeBlockColors,
    extensions as darkModeExtensions
} from './dark';
import {
    blockColors as highContrastBlockColors,
    extensions as highContrastExtensions
} from './high-contrast';
import {
    blockColors as scratch2BlockColors
} from './scratch2';
import {blockColors as defaultColors} from './default';

import defaultIcon from './default/icon.svg';
import highContrastIcon from './high-contrast/icon.svg';
import scratch2Icon from './scratch2/icon.svg';

const DEFAULT_THEME = 'default';
const HIGH_CONTRAST_THEME = 'high-contrast';
const DARK_THEME = 'dark';
const SCRATCH2_THEME = 'scratch2';

const mergeWithDefaults = colors => defaultsDeep({}, colors, defaultColors);

const messages = defineMessages({
    [DEFAULT_THEME]: {
        id: 'gui.theme.default',
        defaultMessage: 'Original',
        description: 'label for original theme'
    },
    [DARK_THEME]: {
        id: 'gui.theme.dark',
        defaultMessage: 'Dark',
        description: 'label for dark mode theme'
    },
    [HIGH_CONTRAST_THEME]: {
        id: 'gui.theme.highContrast',
        defaultMessage: 'High Contrast',
        description: 'label for high theme',
    },
    [SCRATCH2_THEME]: {
        id: 'gui.theme.scratch2',
        defaultMessage: 'Scratch 2',
        description: 'label for Scratch 2.0 theme'
    }
});

const themeMap = {
    [DEFAULT_THEME]: {
        blocksMediaFolder: 'blocks-media/default',
        colors: defaultColors,
        extensions: {},
        label: messages[DEFAULT_THEME],
        icon: defaultIcon
    },
    [DARK_THEME]: {
        blocksMediaFolder: 'blocks-media/default',
        colors: mergeWithDefaults(darkModeBlockColors),
        extensions: darkModeExtensions,
        label: messages[DARK_THEME]
    },
    [HIGH_CONTRAST_THEME]: {
        blocksMediaFolder: 'blocks-media/high-contrast',
        colors: mergeWithDefaults(highContrastBlockColors),
        extensions: highContrastExtensions,
        label: messages[HIGH_CONTRAST_THEME],
        icon: highContrastIcon
    },
    [SCRATCH2_THEME]: {
        blocksMediaFolder: 'blocks-media/default',
        colors: mergeWithDefaults(scratch2BlockColors),
        extensions: {},
        label: messages[SCRATCH2_THEME],
        icon: scratch2Icon
    }
};

const getColorsForTheme = theme => {
    const themeInfo = themeMap[theme];

    if (!themeInfo) {
        throw new Error(`Undefined theme ${theme}`);
    }

    return themeInfo.colors;
};

export {
    DEFAULT_THEME,
    DARK_THEME,
    HIGH_CONTRAST_THEME,
    SCRATCH2_THEME,
    defaultColors,
    getColorsForTheme,
    themeMap
};
