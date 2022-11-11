import Navbar from "../../components/navbar/Navbar";
import NavbarUniversityListContent from "../../components/navbar/NavbarUniversityListContent";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar title='Universities'><NavbarUniversityListContent /></Navbar>
      <main>{children}</main>
    </section>
  );
}
