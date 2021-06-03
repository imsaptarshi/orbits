import CustomButton from "../Custom/custombutton.component";
import { usePopup } from "../../utils/providers/popup.provider";
import { useAuth } from "../../utils/providers/auth.provider";
import { Bell } from "react-feather";
import SearchBar from "../Custom/searchbar.component";
import { Search } from "react-feather";

const Navbar = ({ className, loginText }) => {
  const { isOpen, setIsOpen } = usePopup();
  const { user } = useAuth();

  return (
    <div className={`flex justify-between ${className || ""}`}>
      <div className="logo mt-2">
        <a href="/">
          <div className="flex">
            <img
              src="/favicon.png"
              alt="logo"
              width="250px"
              className="inline mr-3 w-10"
            />
            <div className="font-black mt-1 text-2xl">orbits</div>
          </div>
        </a>
      </div>
      <div>
        <ul className="navbar ml-auto h-12 mt-2 font-semibold text-xl text-accent">
          {!!user ? (
            <li className="hidden lg:inline">
              <div className="inline-flex mr-6 text-primary">
                <SearchBar />
              </div>
            </li>
          ) : (
            <></>
          )}
          {!!user ? (
            <li className="inline lg:hidden">
              <div className="inline-flex mr-6 text-primary">
                <Search
                  className="relative inline text-primary duration-300 cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                  size="38"
                />
              </div>
            </li>
          ) : (
            <></>
          )}
          <li className="inline">
            {!!user ? (
              <div className="relative inline-flex mr-6">
                <Bell
                  className="relative inline text-primary duration-300 cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                  size="38"
                />
                {user.ping || true ? (
                  <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                    <span className="absolute inline-flex rounded-full w-2 h-2 bg-secondary"></span>
                    <span className="relative inline-flex animate-ping rounded-full w-2 h-2 bg-secondary"></span>
                  </span>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <CustomButton
                onClick={() => {
                  setIsOpen(true);
                }}
                title="Login"
                className={`login bg-transparent border-2 border-gray-300 lg:mr-8 md:mr-8 ${
                  loginText ? loginText : "text-primary"
                } hover:border-gray-500`}
              />
            )}
          </li>
          <li class="inline">
            {!!user ? (
              <div class="inline-flex">
                <img
                  class="rounded-full inline h-10 duration-300 hover:bg-gray-200 p-1 cursor-pointer"
                  src={user.display_picture}
                />
              </div>
            ) : (
              <CustomButton
                onClick={() => {
                  setIsOpen(true);
                }}
                title="Sign up"
                className="sign-up lg:inline md:inline hidden bg-secondary text-white hover:text-white hover:bg-blue-700"
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
