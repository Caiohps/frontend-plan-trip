import { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import {  SwapOutlined, ScheduleOutlined } from '@ant-design/icons';


export const MENU_OPTIONS: MenuProps['items'] = [
    {
    label: <Link to='/plan-trip'>Plan Trip</Link>,
    icon: <SwapOutlined />,
    key: 'plan',
    },
    {
        label: <Link to="/planned-trips">Planned Trips</Link>,
        key: 'planned',
        icon: <ScheduleOutlined />
    }
];