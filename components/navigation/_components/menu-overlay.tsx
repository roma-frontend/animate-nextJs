import NavLink, { navLinks } from "./nav-links";

export const MenuOverlay = ({ links: [] }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {navLinks.map((link) => (
        <li key={link.title}>
          <NavLink href={link.href} title={link.title} src={link.src} />
        </li>
      ))}
    </ul>
  );
};
