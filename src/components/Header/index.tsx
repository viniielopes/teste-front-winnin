import { ButtonChangeTheme } from "../ButtonChangeTheme";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-center bg-primary">
      <div className="w-16"></div>
      <h1 className="py-6 text-4xl font-bold text-white">
        REACT<span className="text-feedback-warning">JS</span>
      </h1>
      <div className="w-16 pl-8">
        <ButtonChangeTheme />
      </div>
    </div>
  );
};
export default Header;
