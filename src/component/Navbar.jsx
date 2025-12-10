import NavItem from "./NavItem";

const Navbar = () => {
    const navItems = ["Home", "About", "Services", "Contact"];
    return ( 
        <nav>
            <ul>
                {navItems.map(item => (
                    <NavItem 
                    key={item}
                    label={item} 
                    className="text-white"
                    />
                ))}


            </ul>
        </nav>
     );
}
 
export default Navbar;