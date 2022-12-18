import ShortyRegisterStep from "./ShortyRegisterStep";

interface Props {}

const ShortyRegisterSteps = ({}: Props) => {
  return (
    <div className="hidden lg:flex gap-12 mb-0 lg:mb-10">
      <ShortyRegisterStep label="1" isActive={true} />
      <ShortyRegisterStep label="2" isActive={false} />
      <ShortyRegisterStep label="3" isActive={false} />
    </div>
  );
};

export default ShortyRegisterSteps;
