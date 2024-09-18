import { Button, Menu as AntDMenu } from "antd";
import React, { useState } from "react";
import { MenuOutlined } from '@ant-design/icons';
import { MENU_OPTIONS } from "./constants/menuOptions";

const Menu: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }
    const handleMouseLeave = () => {
        setCollapsed(false)
    }

    return (
        <div>
            <p>Schedule a Trip</p>
            <div
                onMouseLeave={handleMouseLeave}
                style={{
                    width: '100%'
                }}
            >
                <Button
                type="default"
                onClick={toggleCollapsed}
                >
                    <MenuOutlined />
                </Button>
                {collapsed && (
                    <AntDMenu
                    items={MENU_OPTIONS}
                    />
                )}
            </div>
        </div>
    );
};

export default Menu;