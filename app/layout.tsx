import type { Metadata } from "next";

import { Montserrat } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./_store/StoreProvider";
import { ReactQueryProvider } from "./_utils/QueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "./_components/navigation/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "500", "400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <ReactQueryProvider>
            <ReactQueryDevtools initialIsOpen={false} />
            <Header />
            <main>{children}</main>
          </ReactQueryProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
