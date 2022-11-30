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
import Pages from './Pages';
import PrivacyPolicyPage from './PrivacyPolicyPage';
import TermsOfUse from './TermsOfUse';
import BusinessPage from './BusinessPage';
import ProductWebsitePage from './ProductWebsitePage';
import ProductBlogPage from './ProductBlogPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Pages/>}>
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
       
    
    
    </Routes>
   
    <ToastContainer position="top-left"
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
