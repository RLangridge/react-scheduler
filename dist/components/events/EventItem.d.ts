import { ProcessedEvent } from "../../types";
interface EventItemProps {
    event: ProcessedEvent;
    multiday: boolean;
    hasPrev?: boolean;
    hasNext?: boolean;
    showdate?: boolean;
    canDrag?: boolean;
    onClickFunc?(e: ProcessedEvent): any;
}
declare const EventItem: {
    ({ event, multiday, hasPrev, hasNext, showdate, canDrag, onClickFunc }: EventItemProps): JSX.Element;
    defaultProps: {
        multiday: boolean;
        showdate: boolean;
    };
};
export default EventItem;
