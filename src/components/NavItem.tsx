import { Link } from "react-router-dom";
export const NavItem = (props: {item: string, tolink: any, activeItem: any}) => {
    return (
        <li id={props.item}>
            <Link to={props.tolink} onClick={() => props.activeItem(props.item)}>
                {props.item}
            </Link>
        </li>
    )
}