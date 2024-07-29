import { SignIn } from '@clerk/clerk-react';
import './signlnpage.css'
const SignlnPage = () => {

    return (
       <div className='signInPage'>
         <SignIn path="/sign-in" signUpUrl='/sign-up' />
       </div>
    )
}

export default SignlnPage;
