import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'destaque',
    loadChildren: () => import('./components/emphasis/emphasis.module').then(m => m.EmphasisModule)
  },
  {
    path: 'artigo/:id',
    loadChildren: () => import('./components/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'sobre/:id',
    loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule)
  },
  // {
  //   path: 'Jogos',
  //   loadChildren: () => import('./free-games/free-games.module').then(m => m.FreeGamesModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
