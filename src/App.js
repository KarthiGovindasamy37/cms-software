import './App.css';
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer,Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupPage from './SignupPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import TemporaryPasswordPage from './TemporaryPasswordPage';
import PasswordChangePage from './PasswordChangePage';
import PlanCardPage from './PlanCardPage';
import PageLayout from './PageLayout';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import TermsOfUse from './TermsOfUse';
import BusinessPage from './BusinessPage';
import ProductWebsitePage from './ProductWebsitePage';
import ProductBlogPage from './ProductBlogPage';
import Portal from './Portal';
import PortalHomePage from './Portal pages/PortalHomePage';
import WebHomePage from './Portal pages/WebHomePage';
import WebAboutPage from './Portal pages/WebAboutPage';
import WebContactPage from './Portal pages/WebContactPage';
import BlogPage1 from './Portal pages/BlogPage1';
import BlogPage2 from './Portal pages/BlogPage2';

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<PageLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='plans' element={<PlanCardPage/>}/>
        <Route path='business' element={<BusinessPage/>}/>
        <Route path='privacy' element={<PrivacyPolicyPage/>}/>
        <Route path='terms' element={<TermsOfUse/>}/>
        <Route path='productweb' element={<ProductWebsitePage/>}/>
        <Route path='productblog' element={<ProductBlogPage/>}/>
        </Route>
       <Route path='/signup' element={<SignupPage/>}/>
       <Route path='/forgot' element={<ForgotPasswordPage/>}/>
       <Route path='/templogin' element={<TemporaryPasswordPage/>}/>
       <Route path='/passwordchange' element={<PasswordChangePage/>}/>
       <Route path='/portal' element={<Portal/>}>
        <Route index element={<PortalHomePage/>}/>
        <Route path='home' element={<WebHomePage/>}/>
        <Route path='about' element={<WebAboutPage/>}/>
        <Route path='contact' element={<WebContactPage/>}/>
        <Route path='myblog1' element={<BlogPage1/>}/>
        <Route path='myblog2' element={<BlogPage2/>}/>
       </Route>
       
    
    
    </Routes>
   
    <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Flip}/>  
       
    </BrowserRouter>
  );
}

export default App;
