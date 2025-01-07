import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderLayoutComponent } from './layouts/header-layout/header-layout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { BlogComponent } from './blog/blog.component';
import { BlogLayoutComponent } from './layouts/blog-layout/blog-layout.component';
import { BlogNotFoundComponent } from './blog-not-found/blog-not-found.component';
import { BlogsPageComponent } from './blogs-page/blogs-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', redirectTo: '', pathMatch: 'full' },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'cart', component: ShoppingCartComponent },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'forgot', component: ForgotComponent },
    ],
  },
  {
    path: 'blog',
    component: BlogLayoutComponent,
    children: [
      { path: '', component: BlogComponent },
      { path: 'posts', component: BlogsPageComponent },
      { path: 'not-found', component: BlogNotFoundComponent },
      { path: '**', redirectTo: 'not-found' }
    ],
  },
  {
    path: 'checkout',
    component: HeaderLayoutComponent,
    children: [
      { path: '', component: CheckoutComponent }
    ],
  },
  {
    path: 'success',
    component: SuccessPageComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
