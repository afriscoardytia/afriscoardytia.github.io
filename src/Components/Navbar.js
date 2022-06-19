import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex px-10 py-2.5 font-semibold text-sm border-b border-gray-200 items-center bg-white sticky top-0 z-50">
        <div className="w-full flex justify-start md:justify-center">
          <NavLink to="/">@afriscoar</NavLink>
        </div>
        <div className="w-full">
          <div className="hidden md:block">
            <div className="flex justify-center space-x-10">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-gray-400 hover:text-gray-500"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/my-project"
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-gray-400 hover:text-gray-500"
                }
              >
                My Project
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-gray-400 hover:text-gray-500"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
          <div className="flex md:hidden justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden bg-gray-100" id="mobile-menu">
            <div
              ref={ref}
              className="p-4 sm:px-4 flex flex-col text-sm space-y-3"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-gray-400 hover:text-gray-500"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/my-project"
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-gray-400 hover:text-gray-500"
                }
              >
                My Project
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-gray-400 hover:text-gray-500"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};
