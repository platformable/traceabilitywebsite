"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import DataTable from "react-data-table-component";
import { CSVLink } from "react-csv";
import { getEcosystemTraceabilityTableData } from "../app/lib/nocodb-traceability-table-filtered";
import axios from 'axios'
import { useTransition } from "react";
import Loader from "./Loader";
const navigationOptions = [
  {
    id: 1,
    name: "Standards Body",
    db_label: 'Standards body',
    bgColor: "#3423C5",
   /*  tableHeaders:columns */
  },
  {
    id: 2,
    name: "Data Governance models",
    db_label: 'Government, Regulatory Authority, Regulation',
    bgColor: "#3423C5",
   /*  tableHeaders:columnsDataGovernanceModels */
  },
  {
    id: 3,
    name: "Standards & Protocols",
    db_label: '',
    bgColor: "#3423C5",
    /* tableHeaders:columnsStandardsProtocols */
  },
  {
    id: 4,
    name: "Governments, Regulators and Policies, strategies and regulations",
    db_label: 'Policy',
    bgColor: "#3423C5",
    /* tableHeaders:columns */
  },
  {
    id: 5,
    name: "Digital tools providers and Consultants",
    db_label: 'Tools provider',
    bgColor: "#3423C5",
   /*  tableHeaders:columns */
  },
  {
    id: 6,
    name: "Data Protection, Sustainability and Community Advocates",
    db_label: 'Advocates',
    bgColor: "#3423C5",
  },
  {
    id: 7,
    name: "End Users",
    db_label: 'Collectives, Industry associations, Supply chain, Academia, Media, Social beneficiaries',
    bgColor: "#3423C5",
   /*  tableHeaders:columns */
  },
  {
    id: 8,
    name: "Indirect Beneficiaries",
    db_label: 'Social beneficiaries, Economic beneficiaries, Environment beneficiaries',
    bgColor: "#3423C5",
   /*  tableHeaders:columns */
  },
];

export default function EcosystemParticipantTable() {

  const [newData,setNewData]=useState([])
  const [selectedOption, setSelectedOption] = useState(navigationOptions[0]);
  const [selectedTable, setSelectedTable] = useState(navigationOptions[0]);

  
  const [isPending, startTransition] = useTransition();

  const selectTable = (participant) => {
    const tablesToSelect = {
      'Standards & Protocols': 'Standardsprotocols',
      'Data Governance models': 'Datagovernancemodels'
    }
    const result = tablesToSelect[participant] ? tablesToSelect[participant] : 'Entities' 
    return result
  }


   useEffect(()=>{
    const getData = async ()=>{
      const response = await getEcosystemTraceabilityTableData(selectedOption)
      if (response.errors) return; 
      setNewData(response.data)
    
      console.log("newData",response)
      
    
      
    }

    const tableSelected = selectTable(selectedOption?.name)
    setSelectedTable(tableSelected)

    startTransition(getData)
    },[selectedOption]) 

  const todaysDate = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    timezone: "America/New_York",
  });
  const data = [
    {
      standards: "standards Name",
      standardBody: "Fair trade international",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, atque! Neque, fugiat, quisquam molestias quibusdam illo expedita unde accusamus maiores assumenda rerum incidunt tenetur optio quod exercitationem officia fugit dolore earum obcaecati delectus non, reprehenderit voluptatem ullam atque. Consequatur optio deleniti labore, alias officia eligendi nostrum commodi dolores sed? Placeat impedit porro laudantium ut asperiores, exercitationem quia ullam provident eum eaque rerum, facere totam nobis deleniti delectus ducimus ratione. Quae hic fugiatm dolore quo voluptates, similique adipisci recusandae vero eos ex non, veritatis tempore itaque eum voluptate! Ipsum?",
      notes:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, atque! Neque, fugiat, quisquam molestias quibusdam illo expedita unde accusamus maiores assumenda rerum incidunt tenetur optio",
      mandatory: "12-2-2024",
      traceability: "-",
      link: "http://wwww.platformable.com",
    },
    {
      standards: "standards Name",
      standardBody: "Fair trade international",
      description:
        "Placeat impedit porro laudantium ut asperiores, exercitationem quia ullam provident eum eaque rerum, facere totam nobis deleniti delectus ducimus ratione. Quae hic fugiat, illum placeat amet vero animi aspernatur error? Molestias quae doloribus ad consectetur aperiam dolorem quos numquam animi vitae. Saepe quam ullam laborum unde vel blanditiis eligendi fuga animi distinctio voluptatum inventore numquam dolore quo voluptates, similique adipisci recusandae vero eos ex non, veritatis tempore itaque eum voluptate! Ipsum?",
      notes:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, atque! Neque, fugiat, quisquam molestias quibusdam illo expedita unde accusamus maiores assumenda rerum incidunt tenetur optio",
      mandatory: "12-2-2024",
      traceability: "-",
      link: "http://wwww.platformable.com",
    },
    {
      standards: "standards Name",
      standardBody: "Fair trade international",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, atque! Neque, fugiat, quisquam molestias quibusdam illo expedita unde accusamus maiores assumenda rerum incidunt tenetur optio quod exercitationem officia fugit dolore earum obcaecati delectus non, reprehenderit voluptatem ullam atque. Consequatur optio deleniti labore, alias officia eligendi nostrum commodi dolores sed? Placeat impedit porro laudantium ut asperiores, exercitationem quia ullam provident eum eaque rerum, facere totam nobis deleniti delectus ducimus ratione. Quae hic fugiat",
      notes:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, atque! Neque, fugiat, quisquam molestias quibusdam illo expedita unde accusamus maiores assumenda rerum incidunt tenetur optio",
      mandatory: "12-2-2024",
      traceability: "-",
      link: "http://wwww.platformable.com",
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#CCE8FF",
        color: "#2E1DC4",
        paddingTop: "10px",
        paddingBottom: "10px",
        fontWeight: "bold",
        opacity: "1",
        wordWrap: "breakWord",
        borderTop: "1px solid #2C8AF5",
        borderLeft: "1px solid #2C8AF5",
        borderBottom: "1px solid #2C8AF5",
        "&:last-child": {
          borderRight: "1px solid #2C8AF5",
        },
      },
      headerMod: "multiline",
    },

    cells: {
      style: {
        padding: "5px 16px",
        borderLeft: "1px solid #2C8AF5",
        borderBottom: "1px solid #2C8AF5",
        "&:last-child": {
          borderRight: "1px solid #2C8AF5",
        },

        fontSize: "12px",
      },
    },
    pagination: {
      style: {
        color: "black",
      },
    },
  };

  const columns = [
    {
      name: `Entity`,
      selector: (row) => row?.EntityName,
      width: "15%",
      wrap: true,
      sortable: true,
    },

    {
      name: "Entity Type",
      selector: (row) => row.EntityTypeDetailed?.replaceAll('{"','').replaceAll('"}',''),
      sortable: true,
      width: "15%",
      wrap: true,
    },
    {
      name: "Description",
      selector: (row) => row.Description,
      /*       sortable: true, */
      width: "60%",
      wrap: true,
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
      /* width: "500px", */
      wrap: true,
      classNames: ["py-5 text-xs", "text-xs"],
    },
  ];
  const columnsStandardsProtocols = [
    {
      name: `Name`,
      selector: (row) => row?.Name,
      width: "15%",
      wrap: true,
      sortable: true,
    },

    {
      name: "Description",
      selector: (row) => row.Description,
      /* sortable: true, */
      width: "30%",
      wrap: true,
    },
    {
      name: "Notes",
      selector: (row) => row.Notes,
      /*       sortable: true, */
      width: "30%",
      wrap: true,
    },

    {
      name: "Entity",
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
  ];


  const columnsDataGovernanceModels = [
    {
      name: `Name`,
      selector: (row) => row?.Name,
      width: "15%",
      wrap: true,
      sortable: true,
    },

    {
      name: "Description",
      selector: (row) => row.Description,
      /* sortable: true, */
      width: "30%",
      wrap: true,
    },
    {
      name: "Notes",
      selector: (row) => row.Notes,
      /*       sortable: true, */
      width: "30%",
      wrap: true,
    },

    {
      name: "Entity",
      selector: (row) => row.Entities,
      
      /* width: "500px", */
      wrap: true,
      classNames: ["py-5 text-xs", "text-xs"],
    },
    {
      name: "Publicaction Date",
      selector: (row) => row.PublicationDate,
      
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
      width: "8%", 
      wrap: true,
      classNames: ["py-5 text-xs", "text-xs"],
    },
  ];

  const csvHeaders = [
    { label: "Standard", key: "Standards" },
    { label: "Standard body", key: "standardBody" },
    { label: "Description", key: "Description" },
    { label: "Notes", key: "Notes" },
    { label: "Mandatory (from when)?", key: "mandatory" },
    // { label: "Description", key: "Description" },
    {
      label: "How traceability and geolocation is standardized",
      key: "traceability",
    },
    { label: "Link", key: "Link" },
  ];

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
    
  };

  const returnTableHeaders = (selectedOption) =>{

   if(selectedOption ==='Data Governance models') {
    return columnsDataGovernanceModels
   }else if(selectedOption ==='Standards & Protocols') {
    return columnsStandardsProtocols
  } else {

    return columns
    
  }

  }
  return (
    <section className="container mx-auto">
      <div className="grid grid-rows-4 grid-cols-2 md:grid-rows-1 md:grid-cols-8 gap-x-5 gap-y-5 my-10 md:px-0 px-5">
      {navigationOptions?.map((option, index) => {
          return (
         
            <button 
            key={index}
            className={`relative dark-purple-border px-3 py-2 rounded-md text-xs text-[#3423C5] font-bold ${
              selectedOption.id === option.id
                ? `bg-[${option.bgColor}] text-white`
                : ""
            }`}
            onClick={() => {
              handleSelectedOption(option)
            }}
           >{option?.name}</button>

            
          );
        })}
      </div>
        
       
      <div className="my-5  md:px-0 px-5" id="cosystem-participant-table-content">
      {/*   <div className="bg-[#3423C5] my-5 rounded-t-md py-2 px-5">
          <img src="" alt="" />
          <h3 className="text-white font-bold">{selectedOption?.name}</h3>
        </div> */}
        <div
          className="flex gap-x-5 mb-5 items-center place-content-between md:px-0 px-5"
          id="cosystem-participant-table"
        >
          <div className="flex gap-2  items-center">
            {/* <img
            src="/Analytics-data-per-country-icon.svg"
            alt="cog icon"
            className="self-start"
          /> */}
            {/* <div>
              <h3 className="font-bold text-[#2E1DC4] font-bold">Standards & Protocols</h3>
            </div> */}
          </div>
          <div className="">
            {/* <CSVLink
              data={data}
              filename={`EcosystemParticipation_${todaysDate}.csv`}
              className="flex items-center gap-2 py-1 px-3 border border-[var(--button-dwnld-border)] bg-[#2E1DC4] rounded text-xs text-white"
              target="_blank"
              headers={csvHeaders}
              separator="|"
            >
              <img src="/download-icon.svg" alt="" width={26}/>
              Download table with additional fields per each country
            </CSVLink> */}

         {/*    <div>
              <p className="text-[12px] italic mt-2">
                Consult the{" "}
                <Link
                  target="_blank"
                  href="/data-dictionary"
                  className="underline font-bold"
                >
                  methodology
                </Link>{" "}
                for an explanation of the additional fields
              </p>
            </div> */}
            {/* <button className="rounded-md border px-5 py-2 shadow-md bg-white">Downdload table</button> */}
          </div>
        </div>

        <div id="ecosystem-participant-table" className="md:px-0 px-5">
          <DataTable
            columns={returnTableHeaders(selectedOption?.name)}
            data={newData}
            pagination
            paginationPerPage={15}
            paginationRowsPerPageOptions={[15]}
            paginationComponentOptions={{
              selectAllRowsItem: true,
              selectAllRowsItemText: "ALL",
            }}
            highlightOnHover={true}
            // dense={true}
            customStyles={customStyles}
            // defaultSortFieldId={1}
              progressPending={isPending}
              progressComponent={<Loader />}
          />
        </div>
      </div>
    </section>
  );
}
