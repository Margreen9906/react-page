const NavItem = (props) => {
    return (  
        <li>
            <a href="#" className={props.className}>{props.label}</a>
        </li>
    );
}
 
export default NavItem;