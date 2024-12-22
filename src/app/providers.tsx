// app/providers.tsx
'use client';

import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {StyledEngineProvider} from '@mui/material/styles';
import {ApolloProvider} from '@apollo/client';
import client from '@/lib/apollo-client';
import theme from '@/app/theme';

export default function Providers({children}: { children: React.ReactNode }) {
    return (
        <ApolloProvider client={client}>
            <StyledEngineProvider injectFirst>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        {children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </StyledEngineProvider>
        </ApolloProvider>
    );
}