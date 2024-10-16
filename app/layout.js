import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sprint Helper",
  description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AppRouterCacheProvider>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <section className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    {children}
                </section>
            </main>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
