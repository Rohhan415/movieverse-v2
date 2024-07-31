import LoginNavigation from "./LoginNavigation";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
    return (
        <header className="relative left-0 right-0  h-16 z-40 bg-base-black ">
            <div className="grid grid-cols-[auto,1fr,1fr] justify-center h-full items-center mx-10 ">
                <Logo/>
                <Navigation/>
                <LoginNavigation/>
            </div>
        </header>
    );
}

export default Header;
