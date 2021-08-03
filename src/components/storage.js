const STORAGE_KEY = true;

const isLogged = () => !!localStorage.getItem(STORAGE_KEY);

export { STORAGE_KEY, isLogged };
