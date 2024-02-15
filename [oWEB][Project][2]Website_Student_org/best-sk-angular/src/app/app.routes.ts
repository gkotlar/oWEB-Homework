import { Routes } from '@angular/router';
import { IndexComponent } from './components/pages/index/index.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { MembersComponent } from './components/pages/members/members.component';
import { MembersAlumniComponent } from './components/pages/members-alumni/members-alumni.component';
import { PartnersComponent } from './components/pages/partners/partners.component';
import { AboutUsLocalComponent } from './components/pages/about-us-local/about-us-local.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { DocumentsComponent } from './components/pages/documents/documents.component';
import { ContactCompaniesComponent } from './components/pages/contact-companies/contact-companies.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogPostComponent } from './components/pages/blog-post/blog-post.component';


export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home' },
    {path:'home', component:IndexComponent},

    {path:'projects', component:ProjectsComponent},

    {path:'aboutUs', component:AboutUsLocalComponent},
    {path:'partners', component:PartnersComponent},
    {path:'members', component:MembersComponent},
    {path:'alumni', component:MembersAlumniComponent},
    {path:'documents', component:DocumentsComponent},

    {path:'blog', component:BlogComponent},
    {path:'blog/:id', component:BlogPostComponent},

    {path:'contact', component:ContactComponent},
    {path:'contact-companies', component:ContactCompaniesComponent},

    { path: '**', redirectTo: 'home' },
    
];
