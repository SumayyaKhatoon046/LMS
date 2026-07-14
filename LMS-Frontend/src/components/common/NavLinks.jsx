import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className="font-medium hover:text-blue-600 transition"
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;