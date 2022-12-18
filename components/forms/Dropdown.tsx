interface Props {}

const Dropdown = (props: Props) => {
  return (
    <button
      type="button"
      className=" w-full border border-brd font-secondary text-primary-500 text-left p-3 relative">
      Industry

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 absolute right-4 top-dropdown-icon">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
  );
};

export default Dropdown;
