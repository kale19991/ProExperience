import { Routes } from '@angular/router';
import path from 'path';
import { AlunosComponent } from './components/alunos/AlunosComponent';
import { ProfessoresComponent } from './components/professores/professores.component';

export const routes: Routes = [{ path: 'alunos', component: AlunosComponent},
{ path: 'professores', component: ProfessoresComponent}];
