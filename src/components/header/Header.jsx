import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <header
      className="bg-bg-dark flex flex-col sm:flex-row items-center justify-between p-4 shadow-md"
      id="header"
    >
      <div className="flex flex-col">
        <Link to="/" className="no-underline">
          <div className="flex items-center">
            <div className="logo">
              <img
                src="https://ck1ia2fn07.ufs.sh/f/ee1C2z5l9wQiZNkYtaL7wdpVcXR46LUyvgT102MlOxmhYeqA"
                alt="House with tree icons created by IconBaandar - Flaticon"
                className="h-16"
              />
            </div>
            <div className="title">
              <h1 className="font-heading font-semibold text-3xl text-tertiary">
                MyHomeImpact
              </h1>
            </div>
          </div>
        </Link>
        <p className="italic font-semibold text-md text-secondary ">
          Explore your home's impact on the planet.
        </p>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <nav className="flex gap-6">
          <HashLink
            to="/about"
            className="text-tertiary bg-transparent py-2 px-4 rounded-md font-body font-medium tracking-wide transition-all duration-200 border border-secondary hover:bg-button-hover hover:translate-y-[-2px] hover:shadow-sm"
          >
            about
          </HashLink>
          <HashLink
            to="/#resources"
            className="text-tertiary bg-transparent py-2 px-4 rounded-md font-body font-medium tracking-wide transition-all duration-200 border border-secondary hover:bg-button-hover hover:translate-y-[-2px] hover:shadow-sm"
          >
            resources
          </HashLink>
          <Link
            to="/contact"
            className="text-tertiary bg-transparent py-2 px-4 rounded-md font-body font-medium tracking-wide transition-all duration-200 border border-secondary hover:bg-button-hover hover:translate-y-[-2px] hover:shadow-sm"
          >
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
