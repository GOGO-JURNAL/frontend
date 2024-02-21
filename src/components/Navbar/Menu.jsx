import { HomeIcon, DocumentIcon, UsersIcon } from '@heroicons/react/20/solid';

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

const Menu = () => {
    return (
        <div className="hidden md:flex flex-row items-center gap-3 w-2/6 mx-auto px-2 pb-3 pt-2 sm:px-4">
            {navigation.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                        item.current ? 'text-blue-900' : 'hover:bg-gray-50',
                        'block rounded-md py-2 px-3 text-base font-medium'
                    )}
                >
                    <div className="flex gap-2 items-center">
                        {item.icon} {item.name}
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Menu;
