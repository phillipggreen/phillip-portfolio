import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Phillip Green | Portfolio",
  description:
    "Portfolio and resume site for Phillip Green, an engineer transitioning into software engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}