window.sr = ScrollReveal();
sr.reveal(
    '.site-title', {
        duration: 1000,
        origin: 'top',
        distance: '500px'
    });
sr.reveal(
    '.cv-1', {
        duration: 1000,
        delay: 1000,
        origin: 'left',
        distance: '500px'

    });
sr.reveal(
    '.banner-image', {
        duration: 1000,
        origin: 'top',
        distance: '500px'
    });
sr.reveal(
    '.about-image', {
        duration: 1000,
        origin: 'left',
        distance: '100px',
        viewFactor: 0.2
    });
sr.reveal(
    '.about-title', {
        duration: 1000,
        delay: 1200,
        origin: 'right',
        distance: '100px',
        viewFactor: 0.2
    });
sr.reveal(
    '.cv-2', {
        duration: 1000,
        delay: 1300,
        origin: 'bottom',
        viewFactor: 0.3

    });
sr.reveal(
    '.single-service', {
        duration: 1000,
        origin: 'bottom',
        distance: '100px',
        viewFactor: 0.2
    });
sr.reveal(
    '.our-project', {
        duration: 2000,
        origin: 'bottom',
        distance: '100px',
        viewFactor: 0.9
    });

sr.reveal(
    '#contact-btn', {
        duration: 1600,
        origin: 'bottom',
        viewFactor: 0.6
    });

sr.reveal('.site-title', { mobile: false });