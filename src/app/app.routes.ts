import { Routes } from '@angular/router';
import { AuthLayoutComponent, BlogLayoutComponent, DefaultLayoutComponent, HeaderLayoutComponent } from './layouts';
import { BlogComponent, BlogNotFoundComponent, BlogsPageComponent, CheckoutComponent, ContactUsComponent, HomeComponent, NotFoundComponent, PrivacyPolicyComponent, ShoppingCartComponent, SuccessPageComponent, TermsOfServiceComponent } from './pages';
import { ForgotComponent, SigninComponent, SignupComponent } from './auth';
import { AddBlogPostComponent, AddCommentsComponent, AddCouponsComponent, AddCustomerComponent, AddOrderComponent, AddProductComponent, AddShippingComponent, AddTransactionComponent, BlogPostsComponent, CommentsComponent, CouponsDiscountsComponent, CustomersComponent, DashboardLayoutComponent, DashboardLoginComponent, EditBlogPostComponent, EditCommentsComponent, EditCouponsComponent, EditCustomerComponent, EditOrderComponent, EditProductComponent, EditShippingComponent, EditTransactionComponent, NotificationsComponent, OrdersComponent, OverviewComponent, ProductsComponent, ShippingComponent, TransactionsComponent } from './pages/dashboard';


export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', component: HomeComponent, title: 'TRIN | Home' },
      { path: 'home', redirectTo: '', pathMatch: 'full' },
      { path: 'contact-us', component: ContactUsComponent, title: 'TRIN | Contact Us' },
      { path: 'cart', component: ShoppingCartComponent, title: 'TRIN | Shopping Cart' },
      { path: 'privacy-policy', component: PrivacyPolicyComponent, title: 'TRIN | Privacy Policy' },
      { path: 'terms-of-service', component: TermsOfServiceComponent, title: 'TRIN | Terms of Service' },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'signup', component: SignupComponent, title: 'TRIN | Sign Up' },
      { path: 'signin', component: SigninComponent, title: 'TRIN | Sign In' },
      { path: 'forgot', component: ForgotComponent, title: 'TRIN | Forgot Password' },
    ],
  },
  {
    path: 'blog',
    component: BlogLayoutComponent,
    children: [
      { path: '', component: BlogComponent, title: 'TRIN | Blog' },
      { path: 'posts', component: BlogsPageComponent, title: 'TRIN | Blog Posts' },
      { path: 'not-found', component: BlogNotFoundComponent, title: 'TRIN | Blog Not Found' },
      { path: '**', redirectTo: 'not-found' },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent, title: 'TRIN Admin | Overview' },
      { path: 'notifications', component: NotificationsComponent, title: 'TRIN Admin | Notifications' },
      { path: 'orders', component: OrdersComponent, title: 'TRIN Admin | Orders' },
      { path: 'products', component: ProductsComponent, title: 'TRIN Admin | Products' },
      { path: 'shipping', component: ShippingComponent, title: 'TRIN Admin | Shipping' },
      { path: 'transactions', component: TransactionsComponent, title: 'TRIN Admin | Transactions' },
      { path: 'blog-posts', component: BlogPostsComponent, title: 'TRIN Admin | Blog Posts' },
      { path: 'comments', component: CommentsComponent, title: 'TRIN Admin | Comments' },
      { path: 'coupons', component: CouponsDiscountsComponent, title: 'TRIN Admin | Coupons' },
      { path: 'customers', component: CustomersComponent, title: 'TRIN Admin | Customers' },
      { path: 'add-product', component: AddProductComponent, title: 'TRIN Admin | Add Product' },
      { path: 'edit-product/:id', component: EditProductComponent, title: 'TRIN Admin | Edit Product' },
      { path: 'add-order', component: AddOrderComponent, title: 'TRIN Admin | Add Order' },
      { path: 'edit-order/:id', component: EditOrderComponent, title: 'TRIN Admin | Edit Order' },
      { path: 'add-shipping', component: AddShippingComponent, title: 'TRIN Admin | Add Shipping' },
      { path: 'edit-shipping/:id', component: EditShippingComponent, title: 'TRIN Admin | Edit Shipping' },
      { path: 'add-blog-post', component: AddBlogPostComponent, title: 'TRIN Admin | Add Blog Post' },
      { path: 'edit-blog-post/:id', component: EditBlogPostComponent, title: 'TRIN Admin | Edit Blog Post' },
      { path: 'add-transaction', component: AddTransactionComponent, title: 'TRIN Admin | Add Transaction' },
      { path: 'edit-transaction/:id', component: EditTransactionComponent, title: 'TRIN Admin | Edit Transaction' },
      { path: 'add-comments', component: AddCommentsComponent, title: 'TRIN Admin | Add Comments' },
      { path: 'edit-comments/:id', component: EditCommentsComponent, title: 'TRIN Admin | Edit Comments' },
      { path: 'add-coupons', component: AddCouponsComponent, title: 'TRIN Admin | Add Coupons' },
      { path: 'edit-coupons/:id', component: EditCouponsComponent, title: 'TRIN Admin | Edit Coupons' },
      { path: 'add-customer', component: AddCustomerComponent, title: 'TRIN Admin | Add Customer' },
      { path: 'edit-customer/:id', component: EditCustomerComponent, title: 'TRIN Admin | Edit Customer' },
    ],
  },
  {
    path: 'checkout',
    component: HeaderLayoutComponent,
    children: [{ path: '', component: CheckoutComponent, title: 'TRIN | Checkout' }],
  },
  {
    path: 'success',
    component: SuccessPageComponent,
    title: 'TRIN | Order Success'
  },
  {
    path: 'admin',
    children: [
      {
        path: 'login',
        component: DashboardLoginComponent,
        title: 'TRIN Admin | Login'
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'TRIN | Page Not Found'
  },
];
