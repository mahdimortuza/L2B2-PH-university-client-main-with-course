const adminPaths2 = [
    {
      name: "Admin Dashboard",
      path: "/admin/dashboard",
      element: "AdminDashboard",
    },
    {
      name: "User Management",
      children: [
        {
          name: "Create Admin",
          path: "/admin/create-admin",
          element: "CreateAdmin",
        },
        {
          name: "Create Faculty",
          path: "/admin/create-faculty",
          element: "CreateFaculty",
        },
        {
          name: "Create Student",
          path: "/admin/create-student",
          element: "CreateStudent",
        },
      ],
    },
  ];
  const newArray = adminPaths2.reduce((acc, item) => {
    if(item.path && item.name){
        acc.push({
            key: item.name,
            label: "NAVLINK",
        })
    }
    if(item.children) {
         acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map(child => ({
                key:  child.name,
                label: "NAVLINK"
            }))
         })
    }
    return acc
  }, [])

//   const newArray = adminPaths2.reduce((acc, item) => {
//     if(item.path && item.element){
//         acc.push({
//             path: item.path,
//             element: item.element,
//         })
//     }
//     if(item.children) {
//         item.children.forEach((child)=> {
//             acc.push({
//                 path: child.path,
//                 element: child.element
//             })
//         })
//     }
//     return acc
//   }, [])

  console.log(JSON.stringify(newArray))