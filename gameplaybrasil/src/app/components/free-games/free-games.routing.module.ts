import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeGamesComponent } from './free-games.component';


const routes: Routes = [
    { path: '', component: FreeGamesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FreeGamesRoutingModule { }
