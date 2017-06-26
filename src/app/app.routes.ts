import { SearchResultsSmartComponent } from './components/search-results/search-results.component';
import { ArtistFullSmartComponent } from './components/artist-full/artist-full.component';
import { UserTopArtistsGridSmartComponent } from './components/user-top-artists-grid/user-top-artists-grid.component';
import { SpotifyAuthenticationValidGuard } from './guards/spotifyAuthenticationValid.guard';
import { DashboardSmartComponent } from './components/dashboard/dashboard.component';
import { SpotifyAuthenticationRedirectGuard } from './guards/spotifyAuthenticationRedirect.guard';
import { LoginSmartComponent } from './components/login/login.component';
import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        component: DashboardSmartComponent,
        canActivate: [SpotifyAuthenticationValidGuard],
        children: [
            {
                path: '',
                component: UserTopArtistsGridSmartComponent
            },
            {
                path: 'artist/:id',
                component: ArtistFullSmartComponent
            },
            {
                path: 'search',
                component: SearchResultsSmartComponent,
                canActivate: [SpotifyAuthenticationRedirectGuard]
            }
        ]
    },
    {
        path: 'login',
        component: LoginSmartComponent,
        canActivate: [SpotifyAuthenticationRedirectGuard]
    }
];
