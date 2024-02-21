import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const SearchBar = () => {
    return (
        <div className="min-w-0 md:px-8 lg:px-0 xl:col-span-6 flex w-5/6 md:w-2/6">
            <div className="flex items-center px-6 py-4 w-full md:mx-auto lg:mx-auto md:w-[30rem] xl:px-0">
                <div className="w-full">
                    <label htmlFor="search" className="sr-only">
                        Search Lecturer...
                    </label>
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </div>
                        <input
                            id="search"
                            name="search"
                            className="block w-full rounded-full border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            placeholder="Search Lecturer..."
                            type="search"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
