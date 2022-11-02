import React from "react";

export interface IStylingProps {
    background?: string;
    pl?: number;
    pr?: number;
}

export interface AKAVProps {
    children?: React.ReactNode;
    background?: string;
    pl?: number;
    pr?: number;
    needsSTB?: false | true;
    submitButton: React.ReactNode;
    offset?: number;
    scrollOffset?: number;
    testID?: string;
}