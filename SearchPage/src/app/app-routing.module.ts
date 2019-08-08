import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownSplitComponent } from './dropdown-split/dropdown-split.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { AddSkillsToAssociateComponent } from './add-skills-to-associate/add-skills-to-associate.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';

const routes: Routes = [
  // {
  //   path: 'star/:id',
  //   component: StarRatingComponent,
  //   pathMatch:'full'
  // },
  
  
  {
    path: 'loginPage', 
    component: LoginPageComponent,
    pathMatch:'full'
  },
  {
    path: 'searchPage', 
    component: DropdownSplitComponent,
    children : [
      {
        path: 'star/:id',
        component: StarRatingComponent,
        children: [
          {
            path: 'displaySkills/:id',
            component: AddSkillsComponent,
          }
        ]

      }
    ]
  },
  {path: '', redirectTo: '/loginPage', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
