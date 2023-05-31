import LinkButton from "../components/LinkButton";
import Layout from "@/app/layout";

export default function Navigation() {
  return (
    <nav className="flex sm:justify-center space-x-4">
    {[
      ['Home', '/'],
      ['Food', '/Food'],
      ['Drinks', './Drinks'],
      ['Book', './book'],
      ['Recept', './Recept'],
    ].map(([title, url]) => (
      
      <a href={url}className="rounded-lg px-3 py-2 text-maingreen font-medium hover:bg-maingreen hover:text-mainred">{title}</a>
      
    ))}
   
      </nav>
      );
      }
      