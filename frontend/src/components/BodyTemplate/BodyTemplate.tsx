import { Divider } from "antd";
import React from "react";

interface IBodyTemplateProps {
    headerSession: React.ReactNode;
    formSession: React.ReactNode;
    mapSession: React.ReactNode;
}

const BodyTemplate: React.FunctionComponent<IBodyTemplateProps> = ({
    headerSession,
    formSession,
    mapSession,
}: IBodyTemplateProps) => (
<div
    style={{
        maxWidth: '1600px',
        margin: '0px auto'
    }}
>
    <div
        style={{
            display: 'flex',
            alignItems: 'center',
            margin: '0px',
            padding: '6px'
        }}>
        {headerSession}
    </div>
    <Divider />
    <div>{formSession}</div>
    <div>{mapSession}</div>
</div>
);

export default BodyTemplate;