/// <reference types="react" />
interface CellProps {
    height: number;
    start: Date;
    end: Date;
    resourceKey: string;
    resourceVal: string | number;
    children?: JSX.Element;
    cellClickFunc(b: boolean, p: {
        [p: string]: Date | string | number;
        start: Date;
        end: Date;
    }): any;
}
declare const Cell: ({ height, start, end, resourceKey, resourceVal, children, cellClickFunc }: CellProps) => JSX.Element;
export { Cell };
