import "./globals.css"; // important!

function getRandInt(num: number) {
  return Math.floor(Math.random() * num);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rand = getRandInt(2);
  console.log("Rnad in Root Layout", rand);
  if (rand === 1) {
    throw new Error("1 is from Root Layout");
  }
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
