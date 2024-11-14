import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-page',
    pathMatch: 'full'
  },
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then( m => m.MainPagePageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'local-game',
    loadChildren: () => import('./local-game/local-game.module').then( m => m.LocalGamePageModule)
  },
  {
    path: 'learn-more',
    loadChildren: () => import('./learn-more/learn-more.module').then( m => m.LearnMorePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [authGuard],
  },
  {
    path: 'online-game',
    loadChildren: () => import('./online-game/online-game.module').then( m => m.OnlineGamePageModule),
    canActivate: [authGuard],
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: 'feline-forum',
    loadChildren: () => import('./feline-forum/feline-forum.module').then( m => m.FelineForumPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
