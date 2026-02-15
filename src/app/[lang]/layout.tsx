export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  return <>{children}</>;
}
