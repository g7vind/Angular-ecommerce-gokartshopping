import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SingleComponent } from './pages/single/single.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductComponent },
  {path: 'products/:id', component: SingleComponent},
  { path: '**', component: PageNotFoundComponent },
];
