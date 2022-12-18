import ShortyInfoNav from "./ShortyInfoNav";

interface Props {}

const ShortyInfoFooter = ({}: Props) => {
  return (
    <footer className="hidden lg:block">
      <a href="#" className="text-secondary-50 text-xs font-primary font-black hover:underline">
        Back to shortyawards.com
      </a>
    </footer>
  );
};

export default ShortyInfoFooter;
