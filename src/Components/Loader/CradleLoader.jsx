import React from 'react';
import Loader from 'react-loader-spinner';

import { Label, SpinerWrapper } from './Components';

const CradleLoader = props => (
    props.loading ? (
        <SpinerWrapper>
            <Loader type="Oval" color="#ffffff" height="40" width="40" />
            <Label>{props.label || ''}</Label>
        </SpinerWrapper>
    ) : (
        <>
           {props.children}
        </>
    )
)

export default CradleLoader;