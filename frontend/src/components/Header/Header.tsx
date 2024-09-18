import React from 'react';

interface IHeaderProps {
    children: React.ReactElement;
}

/**
 * @description this is a generic header for using in different pages
 * @param children accepts a componentfor makes the header switable
 */

const Header: React.FC<IHeaderProps> = ({children}) => (
    <div
    style={{
        maxWidth: '1600px',
        margin: '10px auto',
    }}>
        {children}
    </div>
);

export default Header;