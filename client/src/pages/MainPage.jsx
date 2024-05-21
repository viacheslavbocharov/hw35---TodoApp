import axios from "axios";
import SignUpForm from "../components/SIgnUpForm/SignUpForm";
import SignInForm from "../components/SignInForm/SignInForm";
import { API_SIGN_IN, API_SIGN_UP, API_URL } from "../urls";
import './MainPage.scss';

export default function MainPage({handleAuth}) {
  const handleSignUp = async ({login: username, password}) => {
    const { data } = await axios.post(API_URL + API_SIGN_UP, {
      username,
      password
    });
    
    console.log(data);
  }

  const handleSignIn = async ({login: username, password}) => {
    const { data } = await axios.post(API_URL + API_SIGN_IN, {
      username,
      password
    });
    handleAuth(data.token);
    console.log(data);
  }

  return (
    <div className="mainpage">
      <SignInForm handleSignIn={handleSignIn} />
      <SignUpForm handleSignUp={handleSignUp} />
    </div>
  )
}