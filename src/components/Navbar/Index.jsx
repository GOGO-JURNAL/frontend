import { Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';
import SearchBar from './SearchBar';
import PopoverMenu from './PopoverMenu';
import Menu from './Menu';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
    return (
        <>
            <Popover
                as="header"
                className={({ open }) =>
                    classNames(
                        open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
                        'bg-white shadow rounded-b-xl lg:static lg:overflow-y-visible'
                    )
                }
            >
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                            <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                                <Logo />

                                <SearchBar />

                                <Menu />

                                <div className="flex items-center md:absolute md:inset-y-0 md:right-0 md:hidden">
                                    {/* Mobile menu button */}
                                    <Popover.Button className="relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">
                                            Open menu
                                        </span>
                                        {open ? (
                                            <XMarkIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <Bars3Icon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <PopoverMenu />
                    </>
                )}
            </Popover>
        </>
    );
};

export default Navbar;
