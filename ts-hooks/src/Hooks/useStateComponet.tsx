import { useEffect, useState } from "react";

type Employee = {
  name: string;
  salary: number;
};
type Employee2 = {
  [key: string]: any;
  age?: number;
  tasks?: string[];
};

const UseStateComponet = () => {
  const [arr, setArr] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [employee, setEmployee] = useState<Employee2>({});

  useEffect(() => {
    setEmployee({
      name: "vikash",
      salary: 3000,
    });
    return () => {
      console.log("componet unmounted");
    };
  }, []);

  return (
    <>
      <h1>useState</h1>
      <div>
        <div>array of numbers</div>
        <button
          onClick={() => {
            console.log([...arr]);
            setArr((prev: number[]) => [...prev, arr.length + 1]);
          }}
        >
          add ITem
        </button>
        {JSON.stringify(arr)}
      </div>

      <div>
        <div>
          <h2>strings with state</h2>
        </div>
        <button
          onClick={() => {
            setName("jack");
          }}
        >
          add name
        </button>
        {name}
      </div>

      <div>
        <h2>Array of objects</h2>
        <button
          onClick={() =>
            setEmployees((prevEmployees: Employee[]) => [
              ...prevEmployees,
              { salary: 100, name: "Bob" },
            ])
          }
        >
          Add employee
        </button>

        {employees.map((employee, index) => {
          return (
            <div key={index}>
              <h2>
                salary: {employee.salary} / name: {employee.name}
              </h2>
            </div>
          );
        })}
      </div>

      <div>
        <h2>Typing objects with usestae</h2>
        {JSON.stringify(employee)}
      </div>
    </>
  );
};

export default UseStateComponet;
