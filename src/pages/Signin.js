import Header from "../components/Login/Header";
import Signin from "../components/Login/Signin";

export default function SigninPage() {
  return (
    <>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
    <Signin />
    </>
  );
}
