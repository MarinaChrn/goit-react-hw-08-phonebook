import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
margin-right: 20px;
text-decoration: none;
color: black;
font-weight: 500;
font-size: 20px;
&:hover, &:focus {
    color: teal
}
`