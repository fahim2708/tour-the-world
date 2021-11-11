import { useEffect, useState } from "react";

const useOffers = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch("https://safe-journey-85901.herokuapp.com/offers")
            .then((res) => res.json())
            .then((data) => setOffers(data));
    }, []);
    return [offers];
};
export default useOffers;
