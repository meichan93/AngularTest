import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//COMPONENTES
import { CrudComponent } from './pages/crud/crud.component';
import { CreateComponent } from './pages/crud/create/create.component';
import { ReadComponent } from './pages/crud/read/read.component';
import { UpdateComponent } from './pages/crud/update/update.component';
import { DeleteComponent } from './pages/crud/delete/delete.component';

const Approutes: Routes = [
	{ path: '', redirectTo: 'crud', pathMatch: 'full' },
	{
		path: 'crud',
		component: CrudComponent, children: [
			{ path: 'create', component: CreateComponent },
			{ path: 'read', component: ReadComponent },
			{ path: 'update', component: UpdateComponent },
			{ path: 'delete', component: DeleteComponent }
		]
	},
	{ path: '**', component: CrudComponent }

];

@NgModule({
	imports: [
		CommonModule, RouterModule.forRoot(Approutes, {})
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class AppRoutingModule { }