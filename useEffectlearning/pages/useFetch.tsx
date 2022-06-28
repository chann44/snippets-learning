import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

const useCallbackRef = (callback: Function) => {
    const callbackRef = useRef(callback);
    useLayoutEffect(() => {
        callbackRef.current = callback;
    }, [callback]);
    return callbackRef;
};

const useFetch = (options: any) => {
    const [data, setData] = useState(null);

    const savedOnSuccess = useCallbackRef(options.onSuccess);

    useEffect(() => {
        console.log("useFetch useEffect ");
        if (options.url) {
            let isCancelled = false;
            fetch(options.url)
                .then((response) => response.json())
                .then((json) => {
                    if (!isCancelled) {
                        savedOnSuccess.current?.(json);
                        setData(json);
                    }
                });
            return () => {
                isCancelled = true;
            };
        }
    }, [options.url]);

    return {
        data,
    };
};

export default useFetch;