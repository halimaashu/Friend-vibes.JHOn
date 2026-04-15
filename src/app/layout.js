import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Banner from "@/components/Banner";
import FriendBox from "@/components/FrindBox";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FriEndS VIbe ! ",
  description: "that is a friendship  apps",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div>
          <NavBar></NavBar>
          <Banner/>
          <FriendBox></FriendBox>
        </div>

        <div>  {children}</div>
      </body>
    </html>
  );
}
