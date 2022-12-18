interface Props {}

interface ILink {
  url: string;
  name: string;
}

const links: ILink[] = [
  {
    url: "#",
    name: "Rules",
  },
  {
    url: "#",
    name: "About",
  },
  {
    url: "#",
    name: "Archive",
  },
  {
    url: "#",
    name: "Downloads",
  },
];

const ShortyInfoNav = ({}: Props) => {
  return (
    // lg:text 27px -> 18px & 
    <nav className="text-white font-semibold text-ssm lg:text-lg | flex mt-11 justify-between px-4 lg:mt-0 lg:px-0 lg:flex-col lg:items-end lg:gap-2.5 ">
      {links.map((link) => {
        return (
          <a key={link.name} href={link.url} className="hover:underline">
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default ShortyInfoNav;
