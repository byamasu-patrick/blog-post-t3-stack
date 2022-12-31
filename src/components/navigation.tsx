import Link from "next/link";
import { useState } from "react";
// import MenuDropdown from "./widgets/menu-dropdown";
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navigation = () => {
    const [id, setId] = useState<number>(2);
    const { data: sessionData } = useSession();

    console.log(sessionData && sessionData.user?.image);
    return (
        
    <nav className="absolute top-0 z-30 flex flex-wrap items-center justify-between w-full px-4 py-2 mt-6 mb-4 shadow-none lg:flex-nowrap lg:justify-start">
    <div className="container flex items-center justify-between py-0 flex-wrap-inherit">
      <Link className="py-2.375 text-2xl mr-4 ml-4 whitespace-nowrap font-bold text-white lg:ml-0" href="/"> BI IntelliSoft </Link>
      <button navbar-trigger className="px-3 py-1 ml-2 leading-none transition-all bg-transparent border border-transparent border-solid rounded-lg shadow-none cursor-pointer text-lg ease-soft-in-out lg:hidden" type="button" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span className="inline-block mt-2 align-middle bg-center bg-no-repeat bg-cover w-6 h-6 bg-none">
          <span className="w-5.5 rounded-xs duration-350 relative my-0 mx-auto block h-px bg-white transition-all"></span>
          <span className="w-5.5 rounded-xs mt-1.75 duration-350 relative my-0 mx-auto block h-px bg-white transition-all"></span>
          <span className="w-5.5 rounded-xs mt-1.75 duration-350 relative my-0 mx-auto block h-px bg-white transition-all"></span>
        </span>
      </button>
      <div navbar-menu className="items-center flex-grow transition-all ease-soft duration-350 lg-max:bg-white lg-max:max-h-0 lg-max:overflow-hidden basis-full rounded-xl lg:flex lg:basis-auto">
        <ul className="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
          <li>
            <Link className="flex items-center px-4 py-2 mr-2 font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75" aria-current="page" href={`users/dashboard`}>
              <i className="mr-1 text-white lg-max:text-slate-700 fa fa-chart-pie opacity-60"></i>
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 mr-2 font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75" href={`users/${id}`}>
              <i className="mr-1 text-white lg-max:text-slate-700 fa fa-user opacity-60"></i>
              Profile
            </Link>
          </li>
          {
            !sessionData && (
              <>
                 <li>
                  <Link className="block px-4 py-2 mr-2 font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75" href="signup">
                    <i className="mr-1 text-white lg-max:text-slate-700 fas fa-user-circle opacity-60"></i>
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link className="block px-4 py-2 mr-2 font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75" href="signin">
                    <i className="mr-1 text-white lg-max:text-slate-700 fas fa-key opacity-60"></i>
                    Sign In
                  </Link>
                </li>
              </>
            )
          }
        </ul>
        
        <ul className="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
            <li>
              <div className="text-right">
                {
                  sessionData && (
                    <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button 
                      className="
                      leading-pro hover:scale-102 hover:shadow-soft-xs 
                      active:opacity-85 ease-soft-in text-xs tracking-tight-soft 
                      shadow-soft-md bg-gradient-to-tl from-gray-400 to-gray-100 
                      rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer 
                      border-0 bg-transparent pl-8 pr-2 py-2 text-center align-middle 
                      font-bold text-slate-800 transition-all">
                      <div className="flex content-center">
                        {sessionData && <span className="text-md pt-[8px]">{sessionData.user?.email}</span>}
                        <Image 
                          width={30}
                          height={30}
                          className="rounded-3.5xl ml-2"
                          src={`${sessionData && sessionData.user?.image}`} alt="profile"/>
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/post"}
                              className={`${
                                active ? 'bg-[#2e026d] text-white' : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              New Post
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active ? 'bg-[#2e026d] text-white' : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Profile
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active ? 'bg-[#2e026d] text-white' : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Notifications
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active ? 'bg-[#2e026d] text-white' : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Settings
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={ () => signOut()}
                              className={`${
                                active ? 'bg-[#2e026d] text-white' : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Sign Out
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                  )
                }
              </div>
              {/* <Link 
                href="" 
                target="_blank" 
                className="
                  leading-pro hover:scale-102 hover:shadow-soft-xs 
                  active:opacity-85 ease-soft-in text-xs tracking-tight-soft 
                  shadow-soft-md bg-gradient-to-tl from-gray-400 to-gray-100 
                  rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer 
                  border-0 bg-transparent px-8 py-2 text-center align-middle 
                  font-bold text-slate-800 transition-all">
                    Sign Out
              </Link> */}
            </li>
          </ul>
      </div>
    </div>
  </nav>
    
    )
}

export default Navigation;