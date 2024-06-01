import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { Storyblok } from 'infrastructure/storyblok';

import App from './App';

import Page from 'ui/components/Page';
import Feature from 'ui/components/Feature';
import Teaser from 'ui/components/Teaser';
import Grid from 'ui/components/Grid';

Storyblok.init({
    components: {
        page: Page,
        teaser: Teaser,
        grid: Grid,
        feature: Feature,
    }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
