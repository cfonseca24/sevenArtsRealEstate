import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button, Box } from "@pankod/refine-mui";

import { logoOne, artsRe } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={logoOne} alt="7 Arts" width="150px" />
                ) : (
                    <img src={artsRe} alt="7 Arts Real Estate" width="200px" />
                )}
            </Link>
        </Button>
        
    );
};
