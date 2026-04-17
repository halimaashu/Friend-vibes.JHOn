import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./Loading";

import ContextProvider from "@/provider/ContextProvider";
import { ToastContainer } from "react-toastify";

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
        </div>

        <Suspense fallback={<Loading></Loading>}>
          <div>
            <ContextProvider>{children}</ContextProvider>
          </div>
        </Suspense>
        <div>
          <ToastContainer />
          <Footer />
        </div>
      </body>
    </html>
  );
}
