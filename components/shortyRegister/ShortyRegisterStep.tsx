interface Props {
  label: string;
  isActive: boolean;
}

const ShortyRegisterStep = ({ label, isActive }: Props) => {
  return (
    <div className="w-full">
      <div
        className={` ${
          isActive ? "bg-secondary-50" : "bg-secondary-500/20"
        }  | h-2 w-full rounded`}
      />
      <p
        className={`font-primary font-black ${
          isActive ? "text-secondary-500" : "text-muted"
        } uppercase |  mt-3`}>
        step {label}
      </p>
    </div>
  );
};

export default ShortyRegisterStep;
