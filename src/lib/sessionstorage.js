// Define a function to save data to session storage
export const saveToSessionStorage = (key, data) => {
  if(typeof window !== 'undefined'){
    sessionStorage.setItem(key, JSON.stringify(data));
  }
};


export const getFromSessionStorage = (key) => {
  if(typeof window === 'undefined') return null
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null; 
  
};

export const removeFromSessionStorage = (key) => {
  sessionStorage.removeItem(key)
};
