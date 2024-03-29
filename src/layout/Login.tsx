import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { authProvider } from '../authProvider';

import Cookie from 'js-cookie';

import Logo from './Logo';

import {
    Card,
    CardActions,
    CircularProgress,
} from '@mui/material';

import {
    Form,
    required,
    TextInput,
    useTranslate,
    useLogin,
    useNotify,
} from 'react-admin';

import Box from '@mui/material/Box';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const translate = useTranslate();

    const notify = useNotify();
    const login = useLogin();
    const location = useLocation();

    React.useEffect(() => {
        // fetch(import.meta.env.VITE_BACK_END_URL+'/user', { method: 'GET'})
        // .then(response => response.json())
        // .then((data) => {
        //     authProvider.login(data.username);
        //     login( {username: data.username} ).catch(() =>
        //         notify('Invalid email or password')
        //     );
        //     console.log(data)
        // })
        // .catch((e) => {
        //     console.log(e)
        // });

        if(Cookie.get('access_token')){
            window.location.href = '/';
        }

    }, []);

    const handleSubmit = (auth: FormValues) => {
        setLoading(true);



        // login(
        //     auth,
        //     location.state ? (location.state as any).nextPathname : '/'
        // ).catch((error: Error) => {
        //     setLoading(false);
        //     notify(
        //         typeof error === 'string'
        //             ? error
        //             : typeof error === 'undefined' || !error.message
        //             ? 'ra.auth.sign_in_error'
        //             : error.message,
        //         {
        //             type: 'error',
        //             messageArgs: {
        //                 _:
        //                     typeof error === 'string'
        //                         ? error
        //                         : error && error.message
        //                         ? error.message
        //                         : undefined,
        //             },
        //         }
        //     );
        // });
    };

    return (
        <Form onSubmit={handleSubmit} noValidate>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    background:
                        'url(https://source.unsplash.com/featured/1600x900)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <Card sx={{ minWidth: 300, marginTop: '10em' }}>
                    <Box
                        sx={{
                            margin: '1em',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Logo />
                    </Box>
                    <Box
                        height={20}
                    ></Box>
                    {/* <Box
                        sx={{
                            marginTop: '1em',
                            display: 'flex',
                            justifyContent: 'center',
                            color: theme => theme.palette.grey[500],
                        }}
                    >
                        
                    </Box>
                    <Box sx={{ padding: '0 1em 1em 1em' }}>
                        <Box sx={{ marginTop: '1em' }}>
                            <TextInput
                                autoFocus
                                source="username"
                                label={translate('ra.auth.username')}
                                disabled={loading}
                                validate={required()}
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ marginTop: '1em' }}>
                            <TextInput
                                source="password"
                                label={translate('ra.auth.password')}
                                type="password"
                                disabled={loading}
                                validate={required()}
                                fullWidth
                            />
                        </Box>
                    </Box>
                    <CardActions sx={{ padding: '0 1em 1em 1em' }}>
                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            disabled={loading}
                            fullWidth
                        >
                            {loading && (
                                <CircularProgress size={25} thickness={2} />
                            )}
                            {translate('ra.auth.sign_in')}
                        </Button>
                    </CardActions> */}
                    
                    <CardActions sx={{ padding: '0 1em 1em 1em' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            type="submit"
                            startIcon={<MicrosoftIcon />}
                            onClick={() => {
                                fetch(import.meta.env.VITE_BACK_END_URL+'/api/v1/login', {
                                    method: 'GET'
                                })
                                .then(response => response.json())
                                .then((data) => {
                                    window.location.href = data.url;
                                })
                                .catch((e) => {
                                    console.log(e)
                                }
                                );
                            }}
                        >
                            {"Sign In with Microsoft"}
                        </Button>
                    </CardActions>
                    <Box
                        height={50}
                    ></Box>
                </Card>
            </Box>
        </Form>
    );
};

Login.propTypes = {
    authProvider: PropTypes.func,
    previousRoute: PropTypes.string,
};

export default Login;

interface FormValues {
    username?: string;
    password?: string;
}

function MicrosoftIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 23 23"><path fill="#f35325" d="M1 1h10v10H1z"/><path fill="#81bc06" d="M12 1h10v10H12z"/><path fill="#05a6f0" d="M1 12h10v10H1z"/><path fill="#ffba08" d="M12 12h10v10H12z"/></svg>)
}