import { SearchResultsSmartComponent } from './components/search-results/search-results.component';
import { ArtistFullSmartComponent } from './components/artist-full/artist-full.component';
import { UserTopArtistsGridComponent } from './components/user-top-artists-grid/user-top-artists-grid.component';
import { ArtistsGridComponent } from './components/artists-grid/artists-grid.component';
import { SpotifyAuthenticationValidGuard } from './guards/spotifyAuthenticationValid.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpotifyAuthenticationRedirectGuard } from './guards/spotifyAuthenticationRedirect.guard';
import { LoginComponent } from './components/login/login.component';
import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [SpotifyAuthenticationValidGuard],
        children: [
            {
                path: '',
                component: UserTopArtistsGridComponent
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
        component: LoginComponent,
        canActivate: [SpotifyAuthenticationRedirectGuard]
    }
];
