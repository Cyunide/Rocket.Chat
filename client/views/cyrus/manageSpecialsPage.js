import React from 'react';

function manageSpecialsPage() {
    console.log("CYRUS:", Meteor.user());
    return (
        <>
        Welcome {Meteor.user().username}
        <br/><br/>
        Channels you own: 
        </>
    )
}

export default manageSpecialsPage;