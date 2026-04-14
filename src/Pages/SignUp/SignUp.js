import React, { useContext, useEffect } from 'react';
import { MyContext } from '../../App';
import img_logo from '../../assets/images/logo.png';
import gg from '../../assets/images/gg.png';
import { IoIosArrowRoundBack } from "react-icons/io";
import { HiMiniEnvelope } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";
import '../auth.css';


// MUI Components for inner elements
import { 
  Typography, 
  TextField, 
  Button, 
  InputAdornment, 
  Link
} from '@mui/material';
 
// React Icons (Added FaPhone for the new input)
import { FaUser, FaLock } from 'react-icons/fa';

const SignUp = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setisHeaderFooterShow(false);
  });

  // --- Configuration ---
  const bgImage = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"; 
  const accentColor = "#5b5bf0"; 
  const darkBg = "#0e1324"; 

  // Custom CSS objects
  const styles = {
    leftColumn: {
      backgroundImage: `linear-gradient(rgba(14, 19, 36, 0.6), rgba(14, 19, 36, 0.9)), url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    inputField: {
      bgcolor: '#f8f9fa', 
      borderRadius: 2, 
      '& fieldset': { borderColor: '#e0e0e0' }
    }
  };

  return (
    <div className="container-fluid signpageui" >
      
      <div className="row h-100 g-0">
        
        {/* ================= LEFT SIDE (Banner) ================= */}
        <div 
          className="col-lg-8 col-md-7 d-none d-md-flex flex-column justify-content-between p-5 text-white"
          style={styles.leftColumn}
        >
          {/* Top Logo Area */}
          <div className='row'>
           <div className="col-lg-2 logowrapper d-flex align-items-center">
               <Link href={'/'}>
               <img src={img_logo} alt="logo1" className="img-fluid"/>
               </Link> 
            </div>
          </div>

          {/* Hero Content */}
          <div className="mb-4" >
            <Typography variant="h3" fontWeight="bold" className="mb-3">
              Powering the Next <br />
              Generation of <span style={{ color: accentColor }}>Learners</span>
            </Typography>
            
            <p className="text-light opacity-75 mb-4" style={{ fontSize: '1.1rem' }}>
              Log in to manage School College courses, track student progress, 
              and organize your educational content efficiently.
            </p>
          </div>
        </div>

        {/* ================= RIGHT SIDE (Form) ================= */}
        <div className="col-lg-4 col-md-5 col-12 bg-white d-flex flex-column justify-content-center align-items-center p-4 shadow-lg">
          
          <div className="w-100 container" >
            
            {/* Mobile/Form Logo */}
            <div className="mb-4">
             <div className="  d-flex justify-content-between  align-items-center">
             <div className='logowrapperlogin'>
              <Link href={'/'}>
               <img src={img_logo} alt="logo1" className="img-fluid"/>
               </Link> 
             </div>
               
                <div>
                 <Link href={'/'} className='text-dark text-decoration-none text-sm'><IoIosArrowRoundBack></IoIosArrowRoundBack> Home
               </Link> 
                </div>
            </div>
            </div>

            {/* Header Text */}
            <h5 className="fw-bold mb-1" style={{ color: darkBg }}>Welcome back</h5>
            <p className="text-muted mb-4 small">
              Enter your School College credentials to access your dashboard.
            </p>

            {/* --- FORM --- */}
            <form>
              
              {/* NEW: Name Input */}
              <div className="mb-3">
                <TextField 
                  id="name" 
                  label="Full Name" 
                  type="text" 
                  required 
                  fullWidth 
                  variant="outlined" 
                  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><FaUser color="#aaa" /></InputAdornment>,
                    sx: styles.inputField 
                  }} 
                />
              </div>

              {/* NEW: Phone Number Input */}
              <div className="mb-3">
                <TextField 
                  id="phone" 
                  label="Phone Number" 
                  type="tel" 
                  required 
                  fullWidth 
                  variant="outlined" 
                  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><BsFillTelephoneFill color="#aaa" /></InputAdornment>,
                    sx: styles.inputField 
                  }} 
                />
              </div>

              {/* Existing Username/Email Input */}
              <div className="mb-3">
              <TextField id="outlined-basic" type='email' label="Email" required fullWidth variant="outlined"  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start" ><HiMiniEnvelope color="#aaa" /></InputAdornment>,
                    sx: styles.inputField 
                  }} />
              </div>

              {/* Existing Password Input */}
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                
                </div>
                <TextField id="outlined-basic" type='password' label="password" required fullWidth variant="outlined"  size="small"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><FaLock color="#aaa" /></InputAdornment>,
                    sx: styles.inputField
                  }} />
              </div>

             
              {/* Submit Button */}
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  bgcolor: darkBg,
                  py: 1.5,
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  borderRadius: 2,
                  '&:hover': { bgcolor: '#000' }
                }}
              >
                Sign Up 
              </Button>
                 <div className="text-center d-flex flex-column mt-3">
                   <Link href="#" className='my-2' underline="hover" sx={{ fontSize: '0.75rem',  color: accentColor, fontWeight: 'bold' }}>
                    Forgot Password?np
                  </Link>
              <small className="text-muted mb-2">
                Don't have an account?{' '}
                <Link href="/signUp" underline="hover" sx={{ color: accentColor, fontWeight: 'bold' }}>
                  Sign In
                </Link>
              </small>
              <span><img className='google-logo' src={gg} alt="google"/>
              
              </span>
            </div>
            </form>



            {/* Footer */}
            <div className="text-center mt-4">
              <small className="text-muted">© 2025 ecommerce website.</small>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
