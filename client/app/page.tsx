import SignUp from "@/components/signup";
import Navbar from "@/components/nav";
export default function Home() {
  return (
    <main >
      <Navbar head={"Registration"}/>
      <SignUp/>
    </main>
  );
}
