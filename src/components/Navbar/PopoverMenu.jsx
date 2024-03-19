import { HomeIcon, DocumentIcon, UsersIcon } from '@heroicons/react/20/solid';
import { Popover } from '@headlessui/react';

const navigation = [
    {
        name: 'Home',
        href: '#',
        current: true,
        icon: <HomeIcon className="h-5" />
    },
    {
        name: 'Articels',
        href: '#',
        current: false,
        icon: <DocumentIcon className="h-5" />
    },
    {
        name: 'Lecturers',
        href: '#',
        current: false,
        icon: <UsersIcon className="h-5" />
    }
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const PopoverMenu = () => {
    <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
        <div className="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
            {navigation.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                        item.current
                            ? 'bg-blue-900 text-white'
                            : 'hover:bg-gray-50',
                        'block rounded-md py-2 px-3 text-base font-medium'
                    )}
                >
                    <div className="flex gap-2 items-center">
                        {item.icon} {item.name}
                    </div>
                </a>
            ))}
        </div>
    </Popover.Panel>;
};

export default PopoverMenu;
