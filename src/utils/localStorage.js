export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            console.log('previous state could not be found in local storage. starting fresh...');
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.log('error loading state from local storage: ' + e);
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log('error saving state to local storage: ' + e);
    }
};