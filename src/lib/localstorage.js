// Define a function to save data to local storage
export const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Define a function to retrieve data from local storage
export const getFromLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

};

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key)
};

