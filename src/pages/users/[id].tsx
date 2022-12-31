import { useSession } from "next-auth/react";
import Head from "next/head";
import SignIn from "../../components/signin";

const User = () => {
  const { data: session } = useSession();

  if (!session) {
    // Handle unauthenticated state, e.g. render a SignIn component
    return <SignIn />
  }

  return <p>Welcome</p>;
};

export default User;