import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const abortCtrl = new AbortController();

        fetch(url, { signal: abortCtrl.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error("could fetch data from `" + url + "`") ;
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
            })
            .catch(err => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            });

        return () => abortCtrl.abort();
    }, [url]);
    return { data, isPending, error };
}

export default useFetch;
