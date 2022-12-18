import ShortyRegisterForm from "./ShortyRegisterForm";
import ShortyRegisterSteps from "./ShortyRegisterSteps";

interface Props {}

const ShortyRegister = (props: Props) => {
  return (
    <div className=" flex flex-col p-8 lg:p-10">
      <ShortyRegisterSteps />
      <ShortyRegisterForm />
    </div>
  );
};

export default ShortyRegister;
