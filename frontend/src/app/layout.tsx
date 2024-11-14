import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/lib/redux/provider";

export const metadata: Metadata = {
  title: "X1 Real Estate",
  description: "Crafted by Jarvis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
