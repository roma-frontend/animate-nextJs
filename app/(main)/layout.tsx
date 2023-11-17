import Navbar from "@/components/navigation/navbar";
import ContactSection from "./(routes)/contacts/contact-section";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="min-h-full flex flex-col">{children}</main>
      <ContactSection id="Services" />
    </>
  );
};

export default MainLayout;
