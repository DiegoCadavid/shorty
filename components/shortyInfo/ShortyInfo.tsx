import ShortyInfoFooter from "./ShortyInfoFooter";
import ShortyInfoHeader from "./ShortyInfoHeader";
import ShortyInfoNav from "./ShortyInfoNav";

interface Props {}

const ShortyInfo = ({}: Props) => {
  return (
    <aside className="uppercase text-white font-primary | bg-secondary-500/90 lg:bg-secondary-500/80 | relative p-4.2 lg:p-10 flex flex-col justify-between ">
      {/* Background image */}
      <div className="bg-red-100 bg-shorty bg-right bg-cover | absolute inset-0 -z-10" />

      <ShortyInfoHeader />

      <div className="lg:flex lg:justify-between lg:items-end">
        <ShortyInfoFooter />
        <ShortyInfoNav />
      </div>
    </aside>
  );
};

export default ShortyInfo;
