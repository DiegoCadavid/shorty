import React from "react";
import Dropdown from "../forms/Dropdown";
import InputText from "../forms/InputText";
import Switch from "../forms/Switch";
import ShortyRegisterSteps from "./ShortyRegisterSteps";

interface Props {}

const ShortyRegisterForm = ({}: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 grow justify-between">
      <div>
        <div className="grid lg:grid-cols-2 gap-7 ">
          <InputText label="First Name" type="text" placeholder="Ex: Diego" />
          <InputText
            label="Last Name"
            type="text"
            placeholder="Ex: Cadavid Martinez"
          />
        </div>
        <p className="input-message">
          Already have an account?{" "}
          <a href="#" className="text-secondary-500 font-bold hover:underline">
            Login
          </a>
        </p>
      </div>

      <InputText
        label="Email address"
        type="text"
        placeholder="Ex: diego@xyz.com"
        message={
          <p className="input-message">
            This will be your username and you&apos;ll receive emails about the
            Shorty Awards at this address.
          </p>
        }
      />
      <InputText label="Password" type="password" placeholder="Ex: ********" />

      <InputText label="Entry Title" type="password" placeholder="Ex: Entry" />

      <div className="grid xl:grid-cols-2 gap-7">
        <div className="flex items-center gap-4 w-full">
          <p className="whitespace-nowrap">I&apos;m Representing:</p>
          <Switch
            options={[
              { name: "Agency", value: "agency" },
              { name: "Brand", value: "brand" },
            ]}
          />
        </div>
        <Dropdown />
      </div>

      <div className="grid lg:grid-cols-2 gap-7">
        <InputText
          label="Agency name"
          type="text"
          placeholder="Ex: AgencyOne"
        />
        <InputText label="Client name" type="text" placeholder="Ex: Jhon" />
      </div>
      <div className="text-xs text-primary-500 flex flex-col gap-1">
        <p>
          You will have an opportunity to edit and add copy, images and video
          after payment. Entries are open for editing until the late deadline.
        </p>
        <p>
          By signing up with your email address or social media accounts, you
          agree to the Shorty Awards Terms of Service and Privacy Policy.
        </p>
      </div>

      <button
        type="submit"
        className="uppercase p-3 font-black font-primary text-white bg-primary-300 hover:bg-primary-400">
        {" "}
        Continue to select categories{" "}
      </button>
    </form>
  );
};

export default ShortyRegisterForm;
