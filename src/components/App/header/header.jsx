import React from 'react'
import { Link } from 'react-router-dom';

export default function header() {
    return (
        <div>
            <Link to="/">Home | </Link>
            <Link to="/solver">Solver</Link>
        </div>
    )
}
