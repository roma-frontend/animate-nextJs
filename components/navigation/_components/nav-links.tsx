import Image from "next/image";
import Link from "next/link";

export type NavLinkProps = {
  href: string;
  onClick?: () => void;
  target?: "_blank";
  title: string;
  src: string;
};

export const navLinks = [
  {
    href: "https://www.facebook.com",
    title: "Facebook",
    src: "/facebook.png",
  },
  {
    href: "https://www.instagram.com",
    title: "Instagram",
    src: "/instagram.png",
  },
  {
    href: "https://www.youtube.com",
    title: "Youtube",
    src: "/youtube.png",
  },
  {
    href: "https://www.telegram.me",
    title: "Telegram",
    src: "/telegram.png",
  },
];

const NavLink = ({ href, title, src, target }: NavLinkProps) => {
  return (
    <Link href={href} className="inline-block" target={target} title={title}>
      <Image
        src={src}
        alt={title}
        width={24}
        height={24}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </Link>
  );
};

export default NavLink;
