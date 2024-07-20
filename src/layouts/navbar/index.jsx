import { navItems } from "@/nav-items";
import { Outlet } from "react-router-dom";
import { DesktopNavbar } from "./_components/DesktopNavbar";
import { MobileSheet } from "./_components/MobileSheet";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <DesktopNavbar navItems={navItems} />
        <MobileSheet navItems={navItems} />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-blue-600 hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Terms of Service</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-500">Facebook</a>
                <a href="#" className="text-gray-600 hover:text-pink-500">Instagram</a>
                <a href="#" className="text-gray-600 hover:text-blue-400">Twitter</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">Contact Us</h3>
              <p>123 Flower Street, Blossom City</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@bloomexpress.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;