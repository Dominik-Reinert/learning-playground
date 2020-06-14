import { css, jsx } from '@emotion/core';
import * as React from 'react';
/** @jsx jsx */

interface SubPageComponentProps {
    SubPage: string;
}

export const SubPageComponent: React.FunctionComponent<React.PropsWithChildren<SubPageComponentProps>> = (props: React.PropsWithChildren<SubPageComponentProps>) => {
    const SubPageStyle = useSubPageStyle();
    return 
}

const useSubPageStyle = () => {
    return css`
        label: subpage-style;
    `;
};