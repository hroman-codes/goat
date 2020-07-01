 
export const initGA = () => {
    const trackingID = 'UA-164057002-1';
    console.log('GA init');

    ReactGA.initialize(trackingID); 
}

export const logPageView = () => {
    console.log(`Logging preview for ${window.location.pathname}`);
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
}

