import "./globals.css";
import Navbar from "../components/Navbar";
import ConditionalFooter from "../components/ConditionalFooter";
import { Outfit as FontSans } from "next/font/google";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Santhoshini | Full Stack Software Engineer",
    description:
        "Full Stack Software Engineer skilled in React, Node.js, Java, and building end-to-end web applications.",
    openGraph: {
        title: "Potnuru Santhoshini – Full Stack Software Engineer",
        description:
            "Full Stack Software Engineer | React | Node.js | Java",
        url: "https://santhoshini-portfolio.vercel.app",
        siteName: "Santhoshini Portfolio",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={fontSans.variable}>
            <body className="font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-700 min-h-screen flex flex-col">
                <div className="w-full relative flex flex-col min-h-screen">
                    <Navbar />
                    <main className="w-full flex-grow">{children}</main>
                </div>
                <ConditionalFooter />
            </body>
        </html>
    );
}
