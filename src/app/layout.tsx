import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Pragmatic Digital, Melbourne, Australia | Custom Software and Web Development",
  description:
    "Melbourne based, specializing in high performance and pragmatic digital solutions.",
  keywords: [
    "Software Development",
    "Software Engineering",
    "Full Stack Software Engineering",
    "Wordpress",
    "Square space",
    "Next.js",
    "React",
    "Node.js",
    "PostgreSQL",
    "Melbourne Tech",
    "Narre Warren",
    "Geelong",
    "South Eastern Suburbs",
    "Web Design",
  ],
  openGraph: {
    title: "Pragmatic Digital",
    description: "Pragmatic solutions for a digital world.",
    url: "https://pragmaticdigital.au",
    siteName: "Pragmatic Digital",
    locale: "en_AU",
    type: "website",
  },
};

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
