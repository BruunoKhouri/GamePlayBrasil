import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmphasisComponent } from './emphasis.component';


const routes: Routes = [
    { path: '', component: EmphasisComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmphasisRoutingModule { }
