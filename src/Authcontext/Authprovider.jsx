import React from 'react';
import Authcontext  from './Authcontext';

const Authprovider = ({children}) => {
    return (
        <Authcontext.Provider>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;




