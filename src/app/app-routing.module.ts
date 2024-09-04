import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
{path:"contacts", component:ContactsComponent},
{path:"skills",component:SkillsComponent},
{path:"home", component: HomeComponent},
{path:"about", component:AboutComponent},
{ path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
{path:"projects", component:ProjectsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
