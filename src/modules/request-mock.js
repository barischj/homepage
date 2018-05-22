const mockData = {

    // Languages.

    'https://api.github.com/repos/barischrooneyj/flask-access/languages': {
        Python: 20, Haskell: 70},
    'https://api.github.com/repos/barischrooneyj/homepage/languages': {
        Python: 20, Haskell: 70},
    'https://api.github.com/repos/barischrooneyj/dotfiles/languages': {
        Python: 20, Haskell: 70},
    'https://api.github.com/repos/barischrooneyj/threepenny-gui-flexbox/languages': {
        Python: 20, Haskell: 70},
    'https://api.github.com/repos/barischrooneyj/threepenny-gui-contextmenu/languages': {
        Python: 20, Haskell: 70},

    // Descriptions.

    'https://api.github.com/repos/barischrooneyj/flask-access': {
        description: 'I am a test description.'},
    'https://api.github.com/repos/barischrooneyj/homepage': {
        description: 'I am a test description.'},
    'https://api.github.com/repos/barischrooneyj/dotfiles': {
        description: 'I am a test description.'},
    'https://api.github.com/repos/barischrooneyj/threepenny-gui-flexbox': {
        description: 'I am a test description.'},
    'https://api.github.com/repos/barischrooneyj/threepenny-gui-contextmenu': {
        description: 'I am a test description.'},
};

// A mock of the request library import.
// Returns old data for some github api calls.
const request = {
    get: (repoUrl => {
            return { end: (f => {
                const langResponse = {text: JSON.stringify(mockData[repoUrl])};
                f(false, langResponse);
            })};
        })
};

export default request;
