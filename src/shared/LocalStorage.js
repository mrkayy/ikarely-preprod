const WebStorage = {
    save:(key, value) => {
        localStorage.setItem(key, value);
    },
    get:(key) => {
        return localStorage.getItem(key);
    },
    clear:() => {
        localStorage.clear();
    },
    remove:(key) => {
        localStorage.removeItem(key);
    },
     logout: () => {
        localStorage.removeItem('user_token');  
        window.location.href = '/sign-in'; 
    }
}
module.exports = WebStorage;
