import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";

const Post: NextPage = () => {
    // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
    const router = useRouter();
    const { data: session } = useSession();
  
    useEffect(() => {
      if (!session) {
        // Handle unauthenticated state, e.g. render a SignIn component
        router.push('/signin');
      }
    }, []);
  
    return (
      <>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 pb-16 ">
            <Navigation />           
          </div>
          <div className="flex flex-col items-center w-full">                
            <section className="bg-white mt-6 h-[900px]">
                <div className="py-8 w-full lg:py-16 lg:px-6">
                    <div className="mx-auto w-full text-center lg:mb-16 mb-8">
                        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
                    </div> 
                </div>
            </section>
            {/* <Blog /> */}
            {/* <AuthShowcase /> */}
            <Footer />
            </div>
        </main>
      </>
    );
  };

  export default Post;