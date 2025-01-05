// Define a function to save data to session storage
export const saveToSessionStorage = (key, data) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};


export const getFromSessionStorage = (key) => {
  if(typeof window !== 'undefined'){
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  
};

export const removeFromSessionStorage = (key) => {
  sessionStorage.removeItem(key)
};
