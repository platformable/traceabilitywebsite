import Nav from "@/components/Header";

export default async function Layout({ children }) {

  return (
    <>
      <Nav  />

      <main className="px-5 md:px-7 xl:px-0">{children}</main>
    </>
  );
}
