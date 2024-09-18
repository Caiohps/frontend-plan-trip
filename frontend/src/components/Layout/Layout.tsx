import React from 'react';
import { Layout as AntLayout, Flex } from 'antd';
import './styles.css';

interface ILayoutProps {
    header: React.ReactElement;
    children: React.ReactElement;
}

const { Content } = AntLayout;

/**
 * 
 * @param header receives any header
 * @param children receives any content
 */

const Layout: React.FC<ILayoutProps> = ({
    header,
    children,
}) => (
    <Flex style={{ minHeight: '100vh' }}>
        <AntLayout
            style={{
                minWidth: '100vw',
                minHeight: '100vh',
                overflowX: 'hidden',
                overflowY: 'hidden'
            }}>
            <div
            style={{
                backgroundColor: "yellow"
            }}
            className='menu-header-container'
            >
                {header}
            </div>
            <Content>{children}</Content>
        </AntLayout>
    </Flex>
);

export default Layout;