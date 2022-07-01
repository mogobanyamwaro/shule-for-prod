import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import Page404 from '../pages/page.404';
import {
  PrivateAdminRoute,
  PrivateInstitutionRoute,
  PrivateParentRoute,
  PrivateRoute,
} from './private.public.routes';
//Ecommerce
import Addresspayment from '../pages/e-commerce/address.payment';
import Cart from '../pages/e-commerce/cart';
import Checkout from '../pages/e-commerce/checkout';
import EcommerceDashboard from '../pages/e-commerce/ecommerce.dashboard';
import OderConfirmation from '../pages/e-commerce/order.confirmation';
import ProductDetails from '../pages/e-commerce/product.details';
import OrderSucces from '../pages/e-commerce/order.success';
import AdminCreateProduct from '../pages/e-commerce/create.product';

//Blog
import AdminCreateBlog from '../pages/blog/admin.create.blog';
import AdminUpdateBlog from '../pages/blog/admin.update.blog';
import Blogs from '../pages/blog/blogs';
import BlogDetails from '../pages/blog/blog.details';
//Profile
import SchoolProfile from '../pages/profile/create.school.profile';
import CreateUserProfile from '../pages/profile/create.user.profile';
import EditSchoolProfile from '../pages/profile/edit.school.profile';
import UpdateUserProfile from '../pages/profile/update.user.profile';
import ViewScholDetails from '../pages/profile/view.school.profil';
import ViewSchools from '../pages/profile/view.schools.profile';
import { Route, Routes } from 'react-router-dom';

//Admin
import AdminHome from '../pages/admin/admin.home';
import AdminEditSchools from '../pages/admin/admin.edit.schools';

export const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/view-school-details/:id" element={<ViewScholDetails />} />
    <Route path="/view-schools" element={<ViewSchools />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/blog-details/:id" element={<BlogDetails />} />
    <Route path="/product-details/:id" element={<ProductDetails />} />
    <Route path="/ecommerce-dashboard" element={<EcommerceDashboard />} />

    <Route path="/" element={<PrivateRoute />}>
      <Route path="/address-payment" element={<Addresspayment />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-confirmation" element={<OderConfirmation />} />
      <Route path="/order-success" element={<OrderSucces />} />
    </Route>

    <Route path="/" element={<PrivateInstitutionRoute />}>
      <Route path="/create-school-profile" element={<SchoolProfile />} />
      <Route path="/edit-school-profile" element={<EditSchoolProfile />} />
    </Route>

    <Route path="/" element={<PrivateParentRoute />}>
      <Route path="/create-user-profile" element={<CreateUserProfile />} />
      <Route path="/update-user-profile" element={<UpdateUserProfile />} />
    </Route>

    <Route path="/" element={<PrivateAdminRoute />}>
      <Route path="/admin-home" element={<AdminHome />} />
      <Route path="/admin-edit-schools" element={<AdminEditSchools />} />
      <Route path="/create-product" element={<AdminCreateProduct />} />
      <Route path="/admin-create-blog" element={<AdminCreateBlog />} />
      <Route path="/admin-update-blog/:id" element={<AdminUpdateBlog />} />
    </Route>

    <Route path="*" element={<Page404 />} />
  </Routes>
);
