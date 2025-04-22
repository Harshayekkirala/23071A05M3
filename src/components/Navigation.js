import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'blue',
  };

  return (
    <nav style={{ marginBottom: '20px' }}>
      <NavLink to="/catalogue" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Catalogue</NavLink> |{' '}
      <NavLink to="/kart" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Kart</NavLink> |{' '}
      <NavLink to="/registration" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Registration</NavLink> |{' '}
      <NavLink to="/login" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Login</NavLink> |{' '}
      <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Contact</NavLink> |{' '}
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>About</NavLink>
    </nav>
  );
};

export default Navigation;
