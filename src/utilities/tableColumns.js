export const columnsMultilateralOrgs = [
    {
      name: `Entity`,
      selector: (row) => row?.EntityName,
      width: "45%",
      wrap: true,
      sortable: true,
    },

    {
      name: "Entity type",
      // selector: (row) => row.EntityTypeDetailed?.replaceAll('{"','').replaceAll('"}',''),
      selector: (row) => row.EntityType?.replaceAll(';',', '),
      sortable: true,
      width: "45%",
      wrap: true,
    },
    {
      name: "Entity description",
      selector: (row) => row.Description,
      width: "60%",
      wrap: true,
    },
    {
      name: "Entity link",
      selector: (row) => row.Link,
      cell: (row) => {
        return (
          <a href={row.Link} className="px-5 cursor-pointer py-2 rounded bg-[#90E5FF]" target="_blank">
            Visit site
          </a>
        );
      },
      width: "10%",
      wrap: true,
      classNames: ["py-5 text-xs", "text-xs"],
    },
  ];

  export const columnsStandardBodies = [
    {
      name: `Entity`,
      selector: (row) => row?.EntityName,
      width: "45%",
      wrap: true,
      sortable: true,
    },

    {
      name: "Entity type",
      // selector: (row) => row.EntityTypeDetailed?.replaceAll('{"','').replaceAll('"}',''),
      selector: (row) => row.EntityType?.replaceAll(';',', '),
      sortable: true,
      width: "45%",
      wrap: true,
    },
    {
      name: "Entity description",
      selector: (row) => row.Description,
      width: "60%",
      wrap: true,
    },
    {
      name: "Entity link",
      selector: (row) => row.Link,
      cell: (row) => {
        return (
          <a href={row.Link} className="px-5 cursor-pointer py-2 rounded bg-[#90E5FF]" target="_blank">
            Visit site
          </a>
        );
      },
      width: "10%",
      wrap: true,
      classNames: ["py-5 text-xs", "text-xs"],
    },
  ];

  export const columnsStandardsProtocolsAndPolicies = [
    {
      name: `Country`,
      selector: (row) => row?.Name,
      width: "15%",
      wrap: true,
      sortable: true,
    },

    {
      name: "Document name",
      selector: (row) => row.Description,
      /* sortable: true, */
      width: "30%",
      wrap: true,
    },
    {
      name: "Document type",
      selector: (row) => row.Notes,
      /*       sortable: true, */
      width: "30%",
      wrap: true,
    },

    {
      name: "Summary",
      selector: (row) => row.Entities,
      
      /* width: "500px", */
      wrap: true,
      classNames: ["py-5 text-xs", "text-xs"],
    },

    {
      name: "Link",
      selector: (row) => row.Link,
      cell: (row) => {
        return (
          <a href={row.Link} className="text-white px-5 py-2 rounded bg-[#3423C5]" target="_blank">
            Visit site
          </a>
        );
      },
      width: "10%", 
      wrap: true,
      classNames: ["py-5 text-xs", "text-xs"],
    },
    {
      name: "Entity",
      selector: (row) => row.Entities,
      
      /* width: "500px", */
      wrap: true,
      classNames: ["py-5 text-xs", "text-xs"],
    },
    {
      name: "Entity link",
      selector: (row) => row.Link,
      cell: (row) => {
        return (
          <a href={row.Link} className="text-white px-5 py-2 rounded bg-[#3423C5]" target="_blank">
            Visit site
          </a>
        );
      },
      width: "10%", 
      wrap: true,
      classNames: ["py-5 text-xs", "text-xs"],
    },
  ];

  export const columnsRegulations = [
    {
      name: `Country`,
      selector: (row) => row?.Name,
      width: "15%",
      wrap: true,
      sortable: true,
    },

    {
      name: "Regualtion name",
      selector: (row) => row.Description,
      /* sortable: true, */
      width: "30%",
      wrap: true,
    },
    {
      name: "Regulation scope",
      selector: (row) => row.Notes,
      /*       sortable: true, */
      width: "30%",
      wrap: true,
    },

    {
      name: "Regulation status",
      selector: (row) => row.Entities,
      
      /* width: "500px", */
      wrap: true,
      classNames: ["py-5 text-xs", "text-xs"],
    },

    
    {
      name: "One-line summary",
      selector: (row) => row.Entities,
      
      /* width: "500px", */
      wrap: true,
      classNames: ["py-5 text-xs", "text-xs"],
    },
    
  ];

 export const columnsDataGovernanceModels = [
      {
        name: `Country`,
        selector: (row) => row?.Name,
        width: "15%",
        wrap: true,
        sortable: true,
      },
  
      {
        name: "Entity",
        selector: (row) => row.Entities,
        
        /* width: "500px", */
        wrap: true,
        classNames: ["py-5 text-xs", "text-xs"],
      },
      {
        name: "Entity Link",
        selector: (row) => row.Link,
        cell: (row) => {
          return (
            <a href={row.Link} className="text-white px-5 py-2 rounded bg-[#3423C5]" target="_blank">
              Visit site
            </a>
          );
        },
        width: "8%", 
        wrap: true,
        classNames: ["py-5 text-xs", "text-xs"],
      },
    ];
