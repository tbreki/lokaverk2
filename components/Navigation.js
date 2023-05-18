import LinkButton from "../components/LinkButton";

export default function Navigation() {
  return (
    <nav className="flex sm:justify-center space-x-4">
      <LinkButton textButton={"Home"} linkHref={"/"} />
      <LinkButton textButton={"Food"} linkHref={"/Food"} />
      <LinkButton textButton={"Drinks"} linkHref={"/Drinks"} />
      <LinkButton textButton={"Book"} linkHref={"/book"} />
      <LinkButton textButton={"Recept"} linkHref={"/Recept"} />
      </nav>
      );
      }
      