type params = {
  params: {
    slug: string[];
  };
};

export default async function page({ params }: params) {
  const { slug } = await Promise.resolve(params);
  console.log("Slug", slug);
  if (slug?.length === 2) {
    return (
      <h1>
        Viewing Docs for Feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing Docs for feature {slug[0]}</h1>;
  }

  return <h1>Welcome to the Docs Home Page</h1>;
}