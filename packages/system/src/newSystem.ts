import { css } from 'styled-components';
import { toPx } from './unit';

const allowedSpacing = [
    'marginBottom',
    'marginTop',
    'marginRight',
    'marginLeft',
    'marginHorizontal',
    'marginVertical',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingHorizontal',
    'paddingVertical',
    'width',
    'maxWidth',
    'minWidth',
    'height',
    'maxHeight',
    'minHeight',
    'top',
    'bottom',
    'left',
    'right',
    'gap',
];

const allowedBorder = [
    'borderTop',
    'borderRight',
    'borderBottom',
    'borderLeft',
    'borderWidth',
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderRadius',
];

const allowedRadii = [
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
];

const allowedBackground = [
    'backgroundColor',
    'color',
    'borderColor',
    'borderTopColor',
    'borderRightColor',
    'borderBottomColor',
    'borderLeftColor',
];

const allowedElevation = ['elevation'];

const allowedLineHeight = ['lineHeight'];

const allowedFontSize = ['fontSize'];

const allowedFontWeight = ['fontSize'];

const allowedCss = [
    'textAlign',
    'textTransform',
    'position',
    'display',
    'zIndex',
    'flex',
    'flexBasis',
    'flexFlow',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'flexDirection',
    'alignItems',
    'alignContent',
    'alignSelf',
    'justifyContent',
    'justifySelf',
    'order',
];

function translate(prop) {
    const props = {
        mb: 'marginBottom',
        mt: 'marginTop',
        ml: 'marginLeft',
        mr: 'marginRight',
        pb: 'paddingBottom',
        pt: 'paddingTop',
        pl: 'paddingLeft',
        pr: 'paddingRight',
        bg: 'backgroundColor',
        bgColor: 'backgroundColor',
        elevation: 'boxShadow',
        c: 'color',
        fs: 'fontSize',
        lh: 'lineHeight',
        ta: 'textAlign',
        tt: 'textTransform',
        d: 'display',
        of: 'overflow',
        ox: 'overflowX',
        oy: 'overflowY',
        p: 'position'
    };

    return props[prop] || prop;
}

const transformBorder = value => {
    if (Number(value) && value !== 0) {
        return `${toPx(value)} solid`;
    }

    if (Number(value) === 0) {
        return 'none';
    }

    return value;
};

function transform(variant, key, value) {
    if (['spacing', 'lineHeights'].indexOf(variant) !== -1) return toPx(value);
    if (
        ['borderTop', 'borderRight', 'borderBottom', 'borderLeft'].indexOf(key) !==
        -1
    )
        return transformBorder(value);
    if (variant === 'borders') return toPx(value);
    return value;
}

function apply(yoga, variant, key, value) {
    const valueToApply = transform(variant, key, yoga[variant][value]);

    if (key === 'marginHorizontal')
        return {
            marginLeft: valueToApply,
            marginRight: valueToApply,
        };

    if (key === 'marginVertical')
        return {
            marginTop: valueToApply,
            marginBottom: valueToApply,
        };

    return { [key]: valueToApply };
}

export function newSystem(props) {
    // console.log({ props });
    const keys = Object.keys(props);

    let innerCss = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const key of keys) {
        let newCss;
        const translated = translate(key);

        // console.log(key, allowedSpacing.indexOf(translated) !== -1);

        if (allowedSpacing.indexOf(translated) !== -1) {
            newCss = apply(props.theme.yoga, 'spacing', translated, props[key]);
            innerCss = {
                ...innerCss,
                ...newCss,
            };
            // eslint-disable-next-line no-continue
            continue;
        }

        if (allowedBorder.indexOf(translated) !== -1) {
            newCss = apply(props.theme.yoga, 'borders', translated, props[key]);
            innerCss = {
                ...innerCss,
                ...newCss,
            };
            // eslint-disable-next-line no-continue
            continue;
        }

        if (allowedBackground.indexOf(translated) !== -1) {
            newCss = apply(props.theme.yoga, 'colors', translated, props[key]);
            innerCss = {
                ...innerCss,
                ...newCss,
            };
            // eslint-disable-next-line no-continue
            continue;
        }

        if (allowedElevation.indexOf(translated) !== -1) {
            newCss = apply(props.theme.yoga, 'elevations', translated, props[key]);
            innerCss = {
                ...innerCss,
                ...newCss,
            };
            // eslint-disable-next-line no-continue
            continue;
        }

        if (allowedFontWeight.indexOf(translated) !== -1) {
            newCss = apply(props.theme.yoga, 'fontWeights', translated, props[key]);
            innerCss = {
                ...innerCss,
                ...newCss,
            };
            // eslint-disable-next-line no-continue
            continue;
        }

        if (allowedFontSize.indexOf(translated) !== -1) {
            newCss = apply(props.theme.yoga, 'fontSizes', translated, props[key]);
            innerCss = {
                ...innerCss,
                ...newCss,
            };
            // eslint-disable-next-line no-continue
            continue;
        }

        if (allowedLineHeight.indexOf(translated) !== -1) {
            newCss = apply(props.theme.yoga, 'lineHeights', translated, props[key]);
            innerCss = {
                ...innerCss,
                ...newCss,
            };
            // eslint-disable-next-line no-continue
            continue;
        }

        if (allowedRadii.indexOf(translated) !== -1) {
            newCss = apply(props.theme.yoga, 'radii', translated, props[key]);
            innerCss = {
                ...innerCss,
                ...newCss,
            };
            // eslint-disable-next-line no-continue
            continue;
        }

        if (allowedCss.indexOf(translated) !== -1) {
            innerCss = {
                ...innerCss,
                ...{ [translated]: props[key] },
            };
            // eslint-disable-next-line no-continue
            continue;
        }
    }



    console.log({ innerCss });

    if (Object.keys({}).length === 0) return;

    return css({ innerCss });
}