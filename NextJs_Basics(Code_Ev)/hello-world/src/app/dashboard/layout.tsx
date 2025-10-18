export default function DashboardLayout({
  children,
  analytics,
  noti,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  noti: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div>
        <h1>{analytics}</h1>
      </div>
      <div>
        <h1>{noti}</h1>
      </div>
    </>
  );
}
