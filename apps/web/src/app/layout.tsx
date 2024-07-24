import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "../components/layout";
import { ApolloWrapper } from "../apollo-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js with Apollo",
  description: "Next.js example with Apollo GraphQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <Layout>{children}</Layout>
        </ApolloWrapper>
      </body>
    </html>
  );
}