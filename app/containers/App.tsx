import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import Pullable from 'react-pullable';
import ScrollRestoration from 'components/ScrollRestoration/ScrollRestoration';
import 'styles/reset.css';
import ZoomControl from 'components/ZoomControl/ZoomControl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Plugins } from '@capacitor/core';
import { useSetRecoilState } from 'recoil';
import pendingUpdateState from 'state/pendingUpdateState';
import checkVersion from 'checkVersion';
import precache from 'precache';
import isDarkMode from 'utils/isDarkMode';
import { AuthProvider } from 'oidc-react';

import Routes from '../Routes';

const oidcConfig = {
    onSignIn: async (response: any) => {
        console.log(response);
        alert(`You logged in :${response.profile.given_name} ${response.profile.family_name}`);
        window.location.hash = '';
    },
    authority: 'http://localhost:8080',
    clientId: '201235497572433922@пб',
    responseType: 'code',
    redirectUri: 'http://localhost:3000',
    scope: 'openid profile email',
    autoSignIn: true,
    automaticSilentRenew: true,
};

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        },
    },
});

export default () => {
    const setPendingUpdate = useSetRecoilState(pendingUpdateState);
    useEffect(() => {
        const loader = document.getElementById('loader');
        const reactRoot = document.getElementById('react-root');
        if (loader && reactRoot) {
            loader.style.display = 'none';
            reactRoot.style.display = 'block';
        }
        Plugins.SplashScreen.hide();
    }, []);
    const dark = isDarkMode();
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider
                {...oidcConfig}
                scope="openid profile email urn:zitadel:iam:user:metadata urn:zitadel:iam:org:id:201235384292605954"
            >
                <HashRouter>
                    <ScrollRestoration />
                    <Pullable
                        spinnerColor={dark ? '#fff' : '#000'}
                        onRefresh={async () => {
                            const newVersion = await checkVersion();
                            if (newVersion) {
                                setPendingUpdate(newVersion);
                            }
                            await precache(true);
                            await queryClient.refetchQueries();
                        }}
                        shouldPullToRefresh={() => window.scrollY <= 0 && !window.pullDownDisabled}
                    >
                        <Routes />
                    </Pullable>
                </HashRouter>
            </AuthProvider>
            <ZoomControl />
        </QueryClientProvider>
    );
};
