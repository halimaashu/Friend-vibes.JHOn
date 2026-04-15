import Banner from "@/components/Banner";
import FriendBox from "@/components/FrindBox";
import NavBar from "@/components/NavBar";
import AllFriend from "@/pages/AllFriend";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-11/12 mx-auto">
    
    <Banner/>
    <FriendBox/>
    <AllFriend/>

    </div>
  );
}
