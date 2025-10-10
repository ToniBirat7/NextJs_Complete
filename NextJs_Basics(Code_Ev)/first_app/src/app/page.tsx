import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>We are in the Home Page</h1>
      <Link href="/blog">Go To Blog</Link>
    </>
  );
}
