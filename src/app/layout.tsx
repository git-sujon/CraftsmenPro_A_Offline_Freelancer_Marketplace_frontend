import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/lib/Providers";


export const metadata: Metadata = {
  title: "CraftsmenPro - Where Online Meets Onsite",
  description:
    "CraftsmenPro connects you with skilled professionals for a wide range of face-to-face services. From home repairs to maintenance tasks, we make your life easier. Book now!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body>
          {children}
        </body>
      </Providers>
    </html>
  );
}
