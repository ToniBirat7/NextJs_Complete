import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "My Page Title",
  description: "This is my page description",
  keywords: ["keyword1", "keyword2", "keyword3"],
  openGraph: {
    title: "My Page Title",
    description: "This is my page description",
    url: "https://www.example.com/my-page",
    type: "website",
    images: [
      {
        url: "https://www.example.com/my-image.jpg",
        width: 800,
        height: 600,
        alt: "My Image Alt Text",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <h1>Me Root Layout</h1>
        {children}
      </body>
    </html>
  );
}
