import { ProcessedEvent } from "../../types";
interface TodayEventsProps {
    todayEvents: ProcessedEvent[];
    today: Date;
    startHour: number;
    step: number;
    minuteHeight: number;
    cellHeight: number;
    direction: string;
    onClickFunc?(e: ProcessedEvent): any;
}
declare const TodayEvents: ({ todayEvents, today, startHour, step, minuteHeight, cellHeight, direction, onClickFunc }: TodayEventsProps) => JSX.Element;
export default TodayEvents;
