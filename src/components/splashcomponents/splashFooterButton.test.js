import React from 'react';
import ReactDOM from 'react-dom';
import SplashFooterButton from '../splashcomponents/splashFooterButton';

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SplashFooterButton></SplashFooterButton>, div);
})