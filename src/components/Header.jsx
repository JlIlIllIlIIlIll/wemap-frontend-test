import wemapLogo from "../assets/wemap.svg";

const Header = () => {
  return (
    <header className="w-full py-4 border-b border-slate-300 flex items-center">
      <a href="/">
        <img src={wemapLogo} alt="Wemap Logo" className="h-24 w-auto ml-4" />
      </a>

      <h1 className="text-3xl sm:text-5xl font-blod text-slate-700 dark:text-slate-300 ml-4">
        Les derniers pinpoint de Wemap
      </h1>
    </header>
  );
};

export default Header;
