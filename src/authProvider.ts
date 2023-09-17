import { AuthProvider } from "react-admin";

import Cookie from 'js-cookie';

export const authProvider: AuthProvider = {
    // called when the user attempts to log in
    login: ({ username }) => {
        // localStorage.setItem("username", username);
        // accept all username/password combinations
        return Promise.resolve();
    },
    // called when the user clicks on the logout button
    logout: () => {
        Cookie.remove('access_token');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }: { status: number }) => {
        if (status === 401 || status === 403) {
            Cookie.remove('access_token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        if(Cookie.get('access_token')){
            return Promise.resolve();
        }else{
            //redirect to login page
            return Promise.reject();
        }
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};