import { useEffect, useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("hello world", count);
  }, []);
  return count;
};
export default useCounter;
