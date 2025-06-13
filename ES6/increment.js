function updateSalary(employees) {
    return employees.map(employee => {
        if (employee.grade === 10) {
            employee.salary += employee.salary * 0.10; 
        }
        return employee;
    });
}

const employees = [
    { name: "Alice", regNum: "EMP001", grade: 10, salary: 5000 },
    { name: "Bob", regNum: "EMP002", grade: 8, salary: 4500 },
    { name: "Charlie", regNum: "EMP003", grade: 10, salary: 5500 },
    { name: "David", regNum: "EMP004", grade: 9, salary: 4700 }
];

let updatedEmployees = updateSalary(employees);
updatedEmployees.forEach(employee => console.log(`${employee.name}: ${employee.salary}`));