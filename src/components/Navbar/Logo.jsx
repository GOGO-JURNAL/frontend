import logo from '/public/logo.png';
import logoBrand from '/public/logo-brand.png';

const Logo = () => {
    return (
        <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2 w-1/6 md:w-2/6">
            <div className="flex flex-shrink-0 items-center">
                <a href="#">
                    <img
                        className="h-8 w-auto hidden md:block"
                        src={logo}
                        alt="Gogo Journal"
                    />
                    <img
                        className="h-8 w-auto block md:hidden"
                        src={logoBrand}
                        alt="Gogo Journal"
                    />
                </a>
            </div>
        </div>
    );
};

export default Logo;
