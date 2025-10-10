export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>We are inside Auth page</h1>
      {children}
    </>
  );
}
