import { useState, useReducer, useMemo } from "react";

const SortedList = ({ list, sortFunc }) => {
    console.log("SortedList render");
    const [names] = useState(["John", "Paul", "George", "Ringo"]);

    const sortedList = useMemo(() => {
        console.log("Running sort");
        return [...list].sort(sortFunc);
    } , [list,sortFunc]);
    return (
        <div>
            {sortedList.join(", ")}
        </div>
    )
}

export default SortedList;

