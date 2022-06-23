import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
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

export const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    {/* Ecommerce */}

    <Route path="/address-payment" element={<Addresspayment />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/ecommerce-dashboard" element={<EcommerceDashboard />} />
    <Route path="/order-confirmation" element={<OderConfirmation />} />
    <Route path="/product-details/:id" element={<ProductDetails />} />
    <Route path="/order-success" element={<OrderSucces />} />
    <Route path="/create-product" element={<AdminCreateProduct />} />

    {/* Blog */}

    <Route path="/admin-create-blog" element={<AdminCreateBlog />} />
    <Route path="/admin-update-blog/:id" element={<AdminUpdateBlog />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/blog-details/:id" element={<BlogDetails />} />

    {/* Profile */}

    <Route path="/create-school-profile" element={<SchoolProfile />} />
    <Route path="/create-user-profile" element={<CreateUserProfile />} />
    <Route path="/edit-school-profile" element={<EditSchoolProfile />} />
    <Route path="/update-user-profile" element={<UpdateUserProfile />} />
    <Route path="/view-school-details/:id" element={<ViewScholDetails />} />
    <Route path="/view-schools" element={<ViewSchools />} />

    {/* Admin */}
    <Route path="/admin-home" element={<AdminHome />} />
  </Routes>
);
