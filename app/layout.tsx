import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LIVELOOM - usefull video calling app",
  description:
    "Liveloom - a lite version of ZOOM, which has the same functionality for private communication!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${roboto.className} bg-dark-2`}>
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
