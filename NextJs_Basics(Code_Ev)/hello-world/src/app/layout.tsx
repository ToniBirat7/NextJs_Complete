// src/app/layout.tsx (RootLayout)
import "./globals.css";
import ClientRand from "@/_components/ClientRand";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        
        <ClientRand />
        {children}
      </body>
    </html>
  );
}
