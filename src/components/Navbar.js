import React from 'react'
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
    <>
        <Link to="/">
        <button variant="outlined">
            Home
        </button>
        </Link>

        <Link to="/signup">
        <button variant="outlined">
            Sign Up
        </button>
        </Link>
    </>
    )}