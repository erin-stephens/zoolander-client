/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>📚 Zoolander&apos;s Kids 📚</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <a className="nav-link">Home</a>
            </Link>
            <Link passHref href="/classrooms">
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
            <Link passHref href="/userprofile">
              <a className="nav-link">User Profile</a>
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
