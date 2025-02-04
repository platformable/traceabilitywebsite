export const columnsMultilateralOrgs = [
    {
      name: `Entity`,
      selector: (row) => row?.EntityName,
      width: "25%",
      wrap: true,
      sortable: true,
    },

    {
      name: "Entity type",
      // selector: (row) => row.EntityTypeDetailed?.replaceAll('{"','').replaceAll('"}',''),
      selector: (row) => row.EntityType?.replaceAll(';',', '),
      sortable: true,
      width: "15%",
      wrap: true,
    },
    {
      name: "Entity description",
      selector: (row) => row.EntityDescription,
      width: "50%",
      wrap: true,
    },
    {
      name: "Entity link",
      selector: (row) => row.EntityURL,
      cell: (row) => {
        return (
          <a href={row.EntityURL} className="px-5 cursor-pointer py-2 rounded bg-[#90E5FF]" target="_blank">
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
      width: "20%",
      wrap: true,
      sortable: true,
    },

    {
      name: "Entity type",
      selector: (row) => row.EntityType?.replaceAll(';',', '),
      sortable: true,
      width: "15%",
      wrap: true,
    },
    {
      name: "Entity description",
      selector: (row) => row.EntityDescription,
      width: "55%",
      wrap: true,
    },
    {
      name: "Entity link",
      selector: (row) => row.EntityURL,
      cell: (row) => {
        return (
          <a href={row.EntityURL} className="px-5 cursor-pointer py-2 rounded bg-[#F2EBFF]" target="_blank">
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
      selector: (row) => row?.countryname,
      width: "10%",
      wrap: true,
      sortable: true,
    },

    {
      name: "Document name",
      selector: (row) => row?.documentname,
      /* sortable: true, */
      width: "15%",
      wrap: true,
    },
    {
      name: "Document type",
      selector: (row) => row?.["Document Type"],
      /*       sortable: true, */
      width: "15%",
      wrap: true,
    },

    {
      name: "Summary",
      selector: (row) => row?.OnelineSummaryPolicy,
      
      width: "20%",
      wrap: true,
      classNames: ["py-5 text-xs", "text-xs"],
    },

    {
      name: "Link",
      selector: (row) => row?.policylink,
      cell: (row) => {
        return (
          <a href={row.policylink} className=" px-5 py-2 rounded bg-[#C7F8FF]" target="_blank">
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
      selector: (row) => row?.EntityName,
      
      width: "20%", 
      wrap: true,
      classNames: ["py-5 text-xs", "text-xs"],
    },
    {
      name: "Entity link",
      selector: (row) => row?.EntityURL,
      cell: (row) => {
        return (
          <a href={row.EntityURL} className=" px-5 py-2 rounded bg-[#C7F8FF]" target="_blank">
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
      name: "Regulation name",
      selector: (row) => row?.NameRegulation,
      /* sortable: true, */
      width: "15%",
      wrap: true,
    },
    {
      name: "Regulation scope",
      selector: (row) => row?.NameScope,
      /*       sortable: true, */
      width: "15%",
      wrap: true,
    },

    {
      name: "Regulation status",
      selector: (row) => row?.NameStatusRegulation,
      width: "15%",
      wrap: true,
      classNames: ["py-5 text-xs", "text-xs"],
    },

    
    {
      name: "One-line summary",
      selector: (row) => row?.OnelineSummary,
      width: "40%",
      wrap: true,
      classNames: ["py-5 text-xs", "text-xs"],
    },
    
  ];

 export const columnsDataGovernanceModels = [
      {
        name: `Country`,
        selector: (row) => row?.CountryNameText,
        width: "20%",
        wrap: true,
        sortable: true,
      },
  
      {
        name: "Entity",
        selector: (row) => row.EntityName,
        
        // width: "65%",
        wrap: true,
        classNames: ["py-5 text-xs", "text-xs"],
      },
      {
        name: "Entity Link",
        selector: (row) => row.EntityURL,
        cell: (row) => {
          return (
            <a href={row.EntityURL} className="px-5 py-2 rounded bg-red-400" target="_blank">
              Visit site
            </a>
          );
        },
        width: "10%", 
        wrap: true,
        // classNames: ["py-5 text-xs", "text-xs"],
      },
    ];


    export const columnsDataAndDigitalToolsProviders = [
      {
        name: `Entity`,
        selector: (row) => row?.EntityName,
        width: "15%",
        wrap: true,
        sortable: true,
      },
  
      {
        name: "Entity cluster",
        selector: (row) => row.Description,
        /* sortable: true, */
        width: "15%",
        wrap: true,
      },
      {
        name: "Entity category",
        selector: (row) => row.Notes,
        /*       sortable: true, */
        width: "15%",
        wrap: true,
      },
  
      {
        name: "Entity subcategory",
        selector: (row) => row.Entities,
        width: "15%",
        wrap: true,
        classNames: ["py-5 text-xs", "text-xs"],
      },
  
      
      {
        name: "Description",
        selector: (row) => row.Entities,
        width: "20%",
        wrap: true,
        classNames: ["py-5 text-xs", "text-xs"],
      },
      
      {
        name: "Entity link",
        selector: (row) => row.Entities,
        width: "10%",
        wrap: true,
        classNames: ["py-5 text-xs", "text-xs"],
      },
      {
        name: "Developer portal link",
        selector: (row) => row.Entities,
        width: "10%",
        wrap: true,
        classNames: ["py-5 text-xs", "text-xs"],
      },
      
    ];