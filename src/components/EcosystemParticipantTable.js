"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import DataTable from "react-data-table-component";
// import { CSVLink } from "react-csv";
import { getEcosystemTraceabilityTableData } from "../app/lib/nocodb-traceability-table-filtered";
import { useTransition } from "react";
import Loader from "./Loader";
import { Tooltip } from "react-tooltip";
import { useUser } from "@auth0/nextjs-auth0/client";
import { columnsMultilateralOrgs,
        columnsStandardsProtocolsAndPolicies,
        columnsRegulations,
        columnsStandardBodies,
        columnsDataGovernanceModels,
        columnsDataAndDigitalToolsProviders } from "../utilities/tableColumns";


const navigationOptions = [
  {
    id: 2,
    name: "Governments",
    db_label: 'governments',
     bgColor: "#F2EBFF",
    borderColor:'#8751EF',
  },
  {
    id: 1,
    name: "Standards bodies / sustainability systems",
    db_label: 'standard-bodies',
    bgColor: "#F2EBFF",
    borderColor:'#8751EF',
  },
 
  {
    id: 3,
    name: "Standards/Policies",
    db_label: 'policies',
     bgColor: "#C7F8FF",
    borderColor:'#3FDEF8',
  },
  {
    id: 4,
    name: "Regulations",
    db_label: 'regulations',
    bgColor: "#C7F8FF",
    borderColor:'#3FDEF8',
  },
  {
    id: 5,
    name: "Multilateral organisations",
    db_label: 'multilateral',
    bgColor: "#E8FFF3",
    borderColor:'#36D77F',
  },
  {
    id: 6,
    name: "Data and digital tools providers",
    db_label: 'digital-data',
     bgColor: "#E8FFF3",
    borderColor:'#36D77F',
    isDisabled: true,
  }
  
 
];


export default function EcosystemParticipantTable() {
  const { user } = useUser();
  const [tableData,setTableData]=useState([])
  const [selectedOption, setSelectedOption] = useState(navigationOptions[0]);
  const [isPending, startTransition] = useTransition();
  const borderColor = selectedOption.borderColor
  const bgColor = selectedOption.bgColor
  console.log("tableData",tableData)
  useEffect(()=>{
    const getData = async ()=>{
      const response = await getEcosystemTraceabilityTableData(selectedOption, user?.APIToken)
      if (response.errors) return; 

      setTableData(response.data)
    
    }
    if (user?.APIToken) {
      startTransition(getData)

    }
  },[selectedOption, user?.APIToken]) 
  const handleSelectedOption = (option) => {
    setSelectedOption(option);
    
  };

  const todaysDate = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    timezone: "America/New_York",
  });

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: bgColor,
        /* color: "#2E1DC4", */
        paddingTop: "10px",
        paddingBottom: "10px",
        fontWeight: "bold",
        opacity: "1",
        wordWrap: "breakWord",
        borderTop: `1px solid ${borderColor}`,
        borderLeft: `1px solid ${borderColor}`,
        borderBottom: `1px solid ${borderColor}`,
        "&:last-child": {
          borderRight: `1px solid ${borderColor}`,
        },
      },
      headerMod: "multiline",
    },

    cells: {
      style: {
        padding: "5px 16px",
        borderLeft: `1px solid ${borderColor}`,
        borderBottom: `1px solid ${borderColor}`,
        "&:last-child": {
          borderRight: `1px solid ${borderColor}`,
        },
        "& a": {
          backgroundColor: bgColor,
          border: `1px solid ${borderColor}`,
          width: "100%",
          textAlign: "center", 
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

  const returnTableHeaders = (selectedOptionName) =>{
    if(selectedOptionName ==='Regulations') {
      return columnsRegulations
    } else if(selectedOptionName ==='Multilateral organisations') {
      return columnsMultilateralOrgs
    }else if(selectedOptionName ==='Standards bodies / sustainability systems') {
      return columnsStandardBodies
    }else if(selectedOptionName ==='Governments') {
      return columnsDataGovernanceModels
     }else if(selectedOptionName ==='Standards/Policies') {
      return columnsStandardsProtocolsAndPolicies
    }else if(selectedOptionName ==='Data and digital tools providers') {
      return columnsDataAndDigitalToolsProviders
    } 
  
  }

  return (
    <section className="container mx-auto bg-white rounded-b-md shadow-md">
        <div className="py-2 px-5 bg-[#90E5FF] border-b  border-b-[#000000] mb-5 ">
        <div className="flex items-center gap-x-5">
        <Tooltip id="my-tooltip" />
         <img src="/mini-traceability-ecosystem-icon.svg" alt="traceability-icon" />
        <p className="font-bold">TRACEABILITY ECOSYSTEM TABLE</p>
        <img
              src="/info-icon.svg"
              alt=""
              width={15}
              data-tooltip-id="my-tooltip"
              data-tooltip-content="The map shows the implementation approaches based on the filters above."
            />
        </div>
      </div>
      <div className="grid grid-rows-4 grid-cols-2 md:grid-rows-1 md:grid-cols-6 gap-x-5 gap-y-5 my-10 md:px-5 px-5">
       
      {navigationOptions?.map((option, index) => {
          return (
         
            <button
            key={option.id} // Use a stable key if available (id is best)
            className={`relative px-3 py-2 rounded-md text-xs font-bold border ${option.isDisabled ? 'bg-[#ad595936]' : ''} `}
            disabled={option.isDisabled}
            onClick={() => handleSelectedOption(option)}
            style={{ 
              borderColor: option.isDisabled ? '#f0f0f0' :  option.borderColor,
              backgroundColor:selectedOption.id===option.id ? option.bgColor:'' 
              
            }} 
          >
            {option?.name}
          </button>

            
          );
        })}
      </div>
        
       
      <div className="my-2  md:px-2 px-5 relative" id="cosystem-participant-table-content">

        <div
          className="flex gap-x-5 mb-5 items-center place-content-between "
          id="cosystem-participant-table"
        >
          <div className="flex gap-2  items-center">
            {/* <img
            src="/Analytics-data-per-country-icon.svg"
            alt="cog icon"
            className="self-start"
          /> */}
            <div>
              <h3 className="font-bold  font-bold"> {selectedOption.name}</h3>
            </div>
          </div>
          <div className="">
            {/* <CSVLink
              data={data}
              filename={`EcosystemParticipation_${todaysDate}.csv`}
              className="flex items-center gap-2 py-1 px-3  bg-[#90E5FF] rounded text-xs shadow"
              target="_blank"
              headers={csvHeaders}
              separator="|"
            >
              <img src="/download-icon-black.svg" alt="" width={26}/>
              Download table with additional fields
            </CSVLink> */}

            <div>
              <p className="text-[9px] italic mt-2">
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
            </div>
            {/* <button className="rounded-md border px-5 py-2 shadow-md bg-white">Downdload table</button> */}
          </div>
        </div>

        <div id="ecosystem-participant-table" className="relative md:px-0 px-5">
          <DataTable
            columns={returnTableHeaders(selectedOption?.name)}
            data={tableData}
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
          
        <div className="absolute  bottom-3 left-0 gap-2 cursor-pointer w-full " onClick={()=>window.scrollTo(0,0)}>
         <Link href="#ecosystem-svg" className="flex items-center gap-2 font-bold">
           <img src="/arrow_top_icon.svg" alt="back to ecosystem" className="text-xs flex justify-center" width={20} height={20} />
            
            Back to ecosystem

         </Link>
         

        </div>

        </div>
      </div>
      
    </section>
  );
}
