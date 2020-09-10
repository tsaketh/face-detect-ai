import React from 'react';

const Rank = ({user}) => {
    return (
        <div className="tc pa3">
            <p className="f4">{`${user.name}, your current rank among the other users is`}</p>
            <p className="f1">{`#${user.entries}`}</p>
        </div>
    )
}
export default Rank;