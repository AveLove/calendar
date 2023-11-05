import React from 'react';
import { css } from 'emotion';
import { useTheme } from 'emotion-theming';

export default ({ width = 24 }: { width?: number }): JSX.Element => {
    const theme = useTheme();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={width}
            viewBox="0 0 24 24"
            fill="none"
            className={css`
                stroke: ${theme.colours.primary};
            `}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
    );
};
