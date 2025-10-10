import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default function BaseBlog() {
  return <h1>We are in the Blog Page</h1>;
}
