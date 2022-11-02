import React from 'react';
interface AKAVProps {
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
/**
 * Actual Keyboard Avoiding View
 * @param children
 * @param background
 * @param pl
 * @param pr
 * @param needsSTB
 * @param submitButton
 * @param offset
 * @param scrollOffset
 * @param testID
 * @constructor
 */
declare const AKAV: ({ children, background, pl, pr, needsSTB, submitButton, offset, scrollOffset, testID, }: AKAVProps) => any;
export { AKAV };
