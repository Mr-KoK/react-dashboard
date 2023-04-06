const api = {
    get: async () => {
        await asyncTimeout(2000);
        return true
    }
}

export const asyncTimeout = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

export { api };