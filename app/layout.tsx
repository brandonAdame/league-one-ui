import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { ApolloWrapper } from "./ApolloWrapper";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "LeagueOne",
  description: "Football league management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          montserrat.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
