import Navbar from "../../components/navbar/Navbar";
import NavbarUniversityContent from "../../components/navbar/NavbarUniversityContent";

export default function Layout({ params, children }: { params: any, children: React.ReactNode }) {
  return (
    <section>
      <Navbar title={params.university}><NavbarUniversityContent universityName={params.university} /></Navbar>
      <main>{children}</main>
    </section>
  );
}
