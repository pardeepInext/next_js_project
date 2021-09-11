import React from 'react'
import Link from 'next/link';

const Card = (details) => {

    const { type, figure } = details;

    return (
        <div className="col-6 col-lg-3">
            <div className="app-card app-card-stat shadow-sm h-100">
                <div className="app-card-body p-3 p-lg-4">
                    <h4 className="stats-type mb-1">{type}</h4>
                    <div className="stats-figure">{figure}</div>
                </div>
                <Link href={'/'}><a className="app-card-link-mask" /></Link>
            </div>
        </div>

    )
}

export default Card
