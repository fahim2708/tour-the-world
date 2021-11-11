import { useEffect, useState } from "react";

const useTourList = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch("https://safe-journey-85901.herokuapp.com/tours")
            .then((res) => res.json())
            .then((data) => setTours(data));
    }, []);
    return [tours];
};
export default useTourList;
