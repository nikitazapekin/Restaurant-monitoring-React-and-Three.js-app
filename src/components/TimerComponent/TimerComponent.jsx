import { useEffect } from "react";

const TimerComponent = ({ isConfirmed, refetch, time, handleRemove, item }) => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const end = new Date();
    end.setHours(hours);
    end.setMinutes(minutes + 1);
    end.setSeconds(seconds);
    function update() {
        const currentTime = new Date();
        if (isConfirmed) {
            clearInterval(intervalId);
        } else {
            if (currentTime >= end) {
                handleRemove(item);
                clearInterval(intervalId);
            }
        }
    }
    useEffect(() => {
        let intervalId;
        if (!isConfirmed) {
            intervalId = setInterval(update, 1000);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isConfirmed]);
    return (
        <div>
   {isConfirmed ? "" : "You must confirm reservation"}
        </div>
    );
};
export default TimerComponent