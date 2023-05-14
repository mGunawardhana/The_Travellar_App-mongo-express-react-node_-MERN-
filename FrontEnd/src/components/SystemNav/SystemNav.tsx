import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import myAvater from "../../assets/gal/100486080.jpeg";
import {styled} from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from '@mui/icons-material/Mail';
const SystemNav = () => {

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  return (
    <nav>
      <ul className="flex gap-x-12">
        <NavLink to={"/customer"}>Customer</NavLink>
        <NavLink to={"/package"}>Package</NavLink>
        <NavLink to={"/jeep"}>Vehicle</NavLink>
        <NavLink to={"/driver"}>Driver</NavLink>
        <NavLink to={"/booking"}>PlaceBooking</NavLink>
        <NavLink to={"/payment"}>Payments</NavLink>
        <NavLink to={"/details"}>BookingDetails</NavLink>
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            style={{marginLeft:120}}
        >
          <Avatar
              sx={{ width: 35, height: 35 }}
              alt="Remy Sharp" src={myAvater} />
        </StyledBadge>
      </ul>
    </nav>
  );
};

export default SystemNav;
