const averageSalaries = db.employees.aggregate([
    {
        $group: {
            _id: "$department",
            averageSalary: { $avg: "$salary" }
        }
    }
]);
const departmentStats = db.employees.aggregate([
    {
        $group: {
            _id: "$department",
            averageSalary: { $avg: "$salary" },
            employeeCount: { $sum: 1 }
        }
    }
]);
