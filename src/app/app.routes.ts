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
import { DashboardLoginComponent } from './dashboard/auth/dashboard-login/dashboard-login.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { DashboardLayoutComponent } from './dashboard/layouts/dashboard-layout/dashboard-layout.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { ShippingComponent } from './dashboard/shipping/shipping.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { CustomersComponent } from './dashboard/customers/customers.component';
import { TransactionsComponent } from './dashboard/transactions/transactions.component';
import { BlogPostsComponent } from './dashboard/blog-posts/blog-posts.component';
import { CommentsComponent } from './dashboard/comments/comments.component';
import { CouponsDiscountsComponent } from './dashboard/coupons-discounts/coupons-discounts.component';
import { AddProductComponent } from './dashboard/actions/add-product/add-product.component';
import { AddOrderComponent } from './dashboard/actions/add-order/add-order.component';
import { AddShippingComponent } from './dashboard/actions/add-shipping/add-shipping.component';
import { AddBlogPostComponent } from './dashboard/actions/add-blog-post/add-blog-post.component';
import { AddTransactionComponent } from './dashboard/actions/add-transaction/add-transaction.component';
import { AddCommentsComponent } from './dashboard/actions/add-comments/add-comments.component';
import { AddCouponsComponent } from './dashboard/actions/add-coupons/add-coupons.component';
import { AddCustomerComponent } from './dashboard/actions/add-customer/add-customer.component';
import { EditProductComponent } from './dashboard/actions/edit-product/edit-product.component';
import { EditOrderComponent } from './dashboard/actions/edit-order/edit-order.component';
import { EditShippingComponent } from './dashboard/actions/edit-shipping/edit-shipping.component';
import { EditBlogPostComponent } from './dashboard/actions/edit-blog-post/edit-blog-post.component';
import { EditTransactionComponent } from './dashboard/actions/edit-transaction/edit-transaction.component';
import { EditCommentsComponent } from './dashboard/actions/edit-comments/edit-comments.component';
import { EditCouponsComponent } from './dashboard/actions/edit-coupons/edit-coupons.component';
import { EditCustomerComponent } from './dashboard/actions/edit-customer/edit-customer.component';

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
