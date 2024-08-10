import type { Metadata } from "next";
import "./globals.css";
import { firaSans } from '@/app/ui/fonts';
import Header from '@/app/ui/header';

export const metadata: Metadata = {
  title: {
    template: "%s | myNotes",
    default: "myNotes"
  },
  description: "myNotes is a cloud notes app that is created in NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
