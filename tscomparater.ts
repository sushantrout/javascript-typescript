const employees = [
  { id: 1, name: "John Doe", department: "Legal" },
  { id: 2, name: "Alice Smith", department: "Engineering" },
  { id: 3, name: "Bob Johnson", department: "Marketing" },
  { id: 4, name: "Eva Williams", department: "Marketing" },
  { id: 5, name: "Mike Brown", department: "Marketing" },
  { id: 6, name: "Sarah Davis", department: "Engineering1" },
  { id: 7, name: "Chris Wilson", department: "Marketing" },
  { id: 8, name: "Olivia Lee", department: "Engineering" },
  { id: 9, name: "Daniel Anderson", department: "Marketing" },
  { id: 10, name: "Emily Martinez", department: "Legal" },
];

const departments = ["Legal", "Engineering", "Marketing"];

// Define a custom comparator function for sorting by department
const customDepartmentSort = (a: any, b: any) => {
  // Get the indices of the departments in the custom order
  const indexA = departments.indexOf(a.department);
  const indexB = departments.indexOf(b.department);

  // Handle cases where the department is not found in the 'departments' array
  if (indexA === -1 && indexB === -1) {
    // Both departments are not in the list; no change in order.
    return 0;
  } else if (indexA === -1) {
    // 'a' is not in the list; place it after 'b'.
    return 1;
  } else if (indexB === -1) {
    // 'b' is not in the list; place it before 'a'.
    return -1;
  }

  // Sort by the custom order
  return indexA - indexB;
};

// Sort the employees array using the custom comparator
employees.sort(customDepartmentSort);

// Output the sorted employees
console.log(employees);
