/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>📚 Zoolander Kids 📚</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <a className="nav-link">Home</a>
            </Link>
            <Link passHref href="/classes">
              <a className="nav-link">Classes</a>
            </Link>
            <Link passHref href="/assignments">
              <a className="nav-link">Assignments</a>
            </Link>
            <Link passHref href="/students">
              <a className="nav-link">Students</a>
            </Link>
            <Link passHref href="/remembrance">
              <a className="nav-link">Remembrance</a>
            </Link>
            <button type="button" className="btn btn-danger" onClick={signOut}>
              Sign Out
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
  }).isRequired,
};
