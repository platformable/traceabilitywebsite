"use client";

import { Tooltip } from "react-tooltip";

export default function EcosystemParticipantSVGCopy({ ecosystemViewData }) {
  let data = Object?.fromEntries(
    ecosystemViewData?.data?.map((item) => [item?.EntityType, item?.Count])
  );
  // ecosystemViewData?.data?.list?.forEach(element => {
  //   console.log("element.EntityType",element.EntityType)
  //    data[element.EntityType]=element.Count
  // })
  const standardBodies = data?.['Standards body']; 
  const sustainabilitySystems = data?.['Sustainability systems']; 
  const multilateralOrgs = data?.['Multilateral organisations']; 
  const digitalData = data?.['Digital tools providers and Consultants']; 

  return (
    <section className="container mx-auto mb-10 bg-white rounded-b-md shadow-md">
      <div className="py-2 px-5 bg-[#90E5FF] border-b  border-b-[#000000] ">
        <div className="flex items-center gap-x-5">
          <Tooltip id="my-tooltip" />
          <img
            src="/mini-traceability-ecosystem-icon.svg"
            alt="traceability-icon"
          />
          <p className="font-bold">TRACEABILITY ECOSYSTEM</p>
          <img
            src="/info-icon.svg"
            alt="traceability-icon"
            width={15}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="The map shows the implementation approaches based on the filters above."
          />
        </div>
      </div>
      <div className="p-5">
        <img src="/ecosystem-diagram-legend.svg" alt="ecosystem diagram legend" className="mb-5"/>
        <svg
          id="traceability_ecosystem_diagram"
          data-name="traceability_ecosystem diagram"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1812 910.689"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Rectangle_5677"
                data-name="Rectangle 5677"
                width="1812"
                height="910.689"
                fill="none"
              />
            </clipPath>
            <clipPath id="clip-path-3">
              <rect
                id="Rectangle_5652"
                data-name="Rectangle 5652"
                width="206.687"
                height="722.575"
                transform="translate(73.572 35.859)"
                fill="none"
              />
            </clipPath>
            <clipPath id="clip-path-4">
              <path
                id="Path_23852"
                data-name="Path 23852"
                d="M262.5,418.769a44.906,44.906,0,0,1,0-49.229,108.34,108.34,0,0,0,0-118.86,44.842,44.842,0,0,1-.039-49.171,107.584,107.584,0,0,0,17.792-60.252C279.868,84.807,235.91,38.124,181,35.94,122.163,33.6,73.573,82.09,73.573,142.02a107.567,107.567,0,0,0,17.754,59.431,44.906,44.906,0,0,1,0,49.229,108.345,108.345,0,0,0,0,118.86,44.842,44.842,0,0,1,.038,49.17,107.583,107.583,0,0,0-17.79,60.252q.011,1.594.07,3.177-.07,1.973-.072,3.963a107.567,107.567,0,0,0,17.754,59.431,41.77,41.77,0,0,1,.038,47.25,107.582,107.582,0,0,0-17.79,60.252c0,.128,0,.255.005.382.583,56.278,44.464,102.756,99.252,104.936,58.46,2.325,106.807-45.536,107.419-104.939,0-.38.007-.76.007-1.141A107.558,107.558,0,0,0,262.5,592.842a41.776,41.776,0,0,1-.039-47.252,107.578,107.578,0,0,0,17.792-60.251q-.011-1.593-.07-3.177.07-1.973.072-3.962A107.557,107.557,0,0,0,262.5,418.769"
                fill="none"
              />
            </clipPath>
            <linearGradient
              id="linear-gradient"
              x1="-0.355"
              y1="1.206"
              x2="-0.35"
              y2="1.206"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stopColor="#8751ef" />
              <stop offset="0.012" stopColor="#8751ef" />
              <stop offset="1" stopColor="#8751ef" />
            </linearGradient>
            <clipPath id="clip-path-5">
              <path
                id="Path_23853"
                data-name="Path 23853"
                d="M203.1,378.727a100.46,100.46,0,0,0-50.3,13.448c31.516,18.143,52.82,52.806,52.82,92.587s-21.3,74.445-52.82,92.587A100.451,100.451,0,0,0,203.1,590.8c56.952,0,77.159-46.9,77.159-105.459S260.049,378.727,203.1,378.727"
                fill="none"
              />
            </clipPath>
            <clipPath id="clip-path-6">
              <rect
                id="Rectangle_5657"
                data-name="Rectangle 5657"
                width="201.5"
                height="481.063"
                transform="translate(1519.26 115.059)"
                fill="none"
              />
            </clipPath>
            <clipPath id="clip-path-7">
              <rect
                id="Rectangle_5658"
                data-name="Rectangle 5658"
                width="384.025"
                height="384.021"
                transform="translate(855.295 71.702)"
                fill="none"
              />
            </clipPath>
            <clipPath id="clip-path-8">
              <rect
                id="Rectangle_5659"
                data-name="Rectangle 5659"
                width="341.01"
                height="318.556"
                transform="translate(362.887 129.884)"
                fill="none"
              />
            </clipPath>
            <clipPath id="clip-path-9">
              <rect
                id="Rectangle_5661"
                data-name="Rectangle 5661"
                width="214.72"
                height="331.745"
                transform="translate(1209.72 202.663)"
                fill="none"
              />
            </clipPath>
            <clipPath id="clip-path-10">
              <rect
                id="Rectangle_5662"
                data-name="Rectangle 5662"
                width="497.297"
                height="177.875"
                transform="translate(409.4 494.339)"
                fill="none"
              />
            </clipPath>
          </defs>
          <g id="Group_9075" data-name="Group 9075">
            <g
              id="Group_9074"
              data-name="Group 9074"
              clipPath="url(#clip-path)"
            >
              <g id="Group_9073" data-name="Group 9073">
                <g
                  id="Group_9072"
                  data-name="Group 9072"
                  clipPath="url(#clip-path)"
                >
                  <path
                    id="Path_23845"
                    data-name="Path 23845"
                    d="M1791.049,910.689h-211.4L1361.531,0h429.518A20.952,20.952,0,0,1,1812,20.952V889.738a20.951,20.951,0,0,1-20.951,20.951"
                    fill="#d9f7f4"
                  />
                  <path
                    id="Path_23846"
                    data-name="Path 23846"
                    d="M1676.976,433.032l43.786-75.839-.926-1.6.926-1.6-43.786-75.838,43.786-75.839-50.375-87.251H1569.638l-50.374,87.251,43.786,75.839-43.786,75.839.925,1.6-.925,1.6,43.786,75.839-43.786,75.839,50.374,87.251h100.749l50.375-87.251Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_23847"
                    data-name="Path 23847"
                    d="M508.089,910.689H20.951A20.951,20.951,0,0,1,0,889.738V20.952A20.952,20.952,0,0,1,20.951,0H289.973Z"
                    fill="#ecfcd9"
                  />
                  <path
                    id="Path_23848"
                    data-name="Path 23848"
                    d="M262.5,418.769a44.906,44.906,0,0,1,0-49.229,108.34,108.34,0,0,0,0-118.86,44.842,44.842,0,0,1-.039-49.171,107.581,107.581,0,0,0,17.792-60.251C279.868,84.807,235.91,38.124,181,35.941,122.163,33.6,73.573,82.09,73.573,142.02a107.562,107.562,0,0,0,17.754,59.431,44.906,44.906,0,0,1,0,49.229,108.345,108.345,0,0,0,0,118.86,44.842,44.842,0,0,1,.038,49.17,107.586,107.586,0,0,0-17.79,60.253q.011,1.593.07,3.176-.07,1.974-.072,3.963a107.567,107.567,0,0,0,17.754,59.431,41.77,41.77,0,0,1,.038,47.25,107.586,107.586,0,0,0-17.79,60.253c0,.127,0,.254.005.382.583,56.278,44.464,102.755,99.252,104.935,58.46,2.325,106.807-45.536,107.419-104.939,0-.38.007-.76.007-1.141A107.56,107.56,0,0,0,262.5,592.842a41.774,41.774,0,0,1-.039-47.251,107.583,107.583,0,0,0,17.792-60.251q-.011-1.594-.07-3.177.07-1.973.072-3.963A107.56,107.56,0,0,0,262.5,418.769"
                    fill="#fff"
                  />
                  <path
                    id="Path_23849"
                    data-name="Path 23849"
                    d="M1591.043,910.689H982.287L764.17,0h608.757Z"
                    fill="#daeae0"
                  />
                  <path
                    id="Path_23850"
                    data-name="Path 23850"
                    d="M997.327,910.689H485.8L267.683,0H779.211Z"
                    fill="#d4dde5"
                  />
                  <g id="Group_9056" data-name="Group 9056" opacity="0.35">
                    <g id="Group_9055" data-name="Group 9055">
                      <g
                        id="Group_9054"
                        data-name="Group 9054"
                        clipPath="url(#clip-path-3)"
                      >
                        <path
                          id="Path_23851"
                          data-name="Path 23851"
                          d="M262.5,418.769a44.906,44.906,0,0,1,0-49.229,108.34,108.34,0,0,0,0-118.86,44.842,44.842,0,0,1-.039-49.171,107.581,107.581,0,0,0,17.792-60.251C279.868,84.807,235.91,38.124,181,35.941,122.163,33.6,73.573,82.09,73.573,142.02a107.562,107.562,0,0,0,17.754,59.431,44.906,44.906,0,0,1,0,49.229,108.345,108.345,0,0,0,0,118.86,44.842,44.842,0,0,1,.038,49.17,107.586,107.586,0,0,0-17.79,60.253q.011,1.593.07,3.176-.07,1.974-.072,3.963a107.567,107.567,0,0,0,17.754,59.431,41.77,41.77,0,0,1,.038,47.25,107.586,107.586,0,0,0-17.79,60.253c0,.127,0,.254.005.382.583,56.278,44.464,102.755,99.252,104.935,58.46,2.325,106.807-45.536,107.419-104.939,0-.38.007-.76.007-1.141A107.56,107.56,0,0,0,262.5,592.842a41.774,41.774,0,0,1-.039-47.251,107.583,107.583,0,0,0,17.792-60.251q-.011-1.594-.07-3.177.07-1.973.072-3.963A107.56,107.56,0,0,0,262.5,418.769"
                          fill="#fff"
                        />
                        <g id="Group_9051" data-name="Group 9051">
                          <g
                            id="Group_9050"
                            data-name="Group 9050"
                            clipPath="url(#clip-path-4)"
                          >
                            <rect
                              id="Rectangle_5650"
                              data-name="Rectangle 5650"
                              width="206.99"
                              height="727.079"
                              transform="translate(73.42 33.599)"
                              fill="url(#linear-gradient)"
                            />
                          </g>
                        </g>
                        <g id="Group_9053" data-name="Group 9053">
                          <g
                            id="Group_9052"
                            data-name="Group 9052"
                            clipPath="url(#clip-path-5)"
                          >
                            <image
                              id="Rectangle_5651"
                              data-name="Rectangle 5651"
                              width="129"
                              height="213"
                              transform="translate(152 378.689)"
                              xlinkHref="data:image/png;base64,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"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <path
                    id="Path_23854"
                    data-name="Path 23854"
                    d="M251.115,139.946A74.418,74.418,0,1,1,176.7,65.528a74.417,74.417,0,0,1,74.418,74.418"
                    fill="#fff"
                  />
                  <circle
                    id="Ellipse_693"
                    data-name="Ellipse 693"
                    cx="74.417"
                    cy="74.417"
                    r="74.417"
                    transform="translate(71.456 139.946) rotate(-45)"
                    fill="none"
                    stroke="#8751ef"
                    strokeMiterlimit="10"
                    strokeWidth="2.415"
                  />
                  <path
                    id="Path_23855"
                    data-name="Path 23855"
                    d="M139.307,139.665a3.066,3.066,0,0,1-1.834-2.855h2.158a1.565,1.565,0,0,0,.438,1.061,1.481,1.481,0,0,0,1.086.39,1.579,1.579,0,0,0,1.107-.367,1.234,1.234,0,0,0,.4-.959,1.166,1.166,0,0,0-.273-.8,1.925,1.925,0,0,0-.683-.491,11.019,11.019,0,0,0-1.129-.4,11.436,11.436,0,0,1-1.589-.616,2.831,2.831,0,0,1-1.05-.92,2.781,2.781,0,0,1-.439-1.646,3.128,3.128,0,0,1,.446-1.685,2.9,2.9,0,0,1,1.251-1.1,4.258,4.258,0,0,1,1.841-.382,3.781,3.781,0,0,1,2.524.819,3.126,3.126,0,0,1,1.071,2.285H142.42a1.286,1.286,0,0,0-.438-.928,1.569,1.569,0,0,0-1.086-.366,1.33,1.33,0,0,0-.942.327,1.237,1.237,0,0,0-.352.952,1.025,1.025,0,0,0,.266.725,2.005,2.005,0,0,0,.661.468,11.181,11.181,0,0,0,1.115.414,11.11,11.11,0,0,1,1.6.624,2.925,2.925,0,0,1,1.064.936,2.759,2.759,0,0,1,.446,1.638,3.279,3.279,0,0,1-.417,1.622,3.041,3.041,0,0,1-1.222,1.193,3.894,3.894,0,0,1-1.913.445,4.444,4.444,0,0,1-1.891-.39"
                  />
                  <path
                    id="Path_23856"
                    data-name="Path 23856"
                    d="M148.835,133.1v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.654.2h.935v1.84h-1.265q-2.545,0-2.546-2.683V133.1h-.949V131.3h.949v-2.137h2.028V131.3h1.783V133.1Z"
                  />
                  <path
                    id="Path_23857"
                    data-name="Path 23857"
                    d="M152.034,133.269a3.735,3.735,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983V131.3h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.83,3.83,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.481-2.348,5.359,5.359,0,0,1,.481-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.949,1.949,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_23858"
                    data-name="Path 23858"
                    d="M168.536,132.154a3.926,3.926,0,0,1,.877,2.722v5.07H167.4v-4.773a2.363,2.363,0,0,0-.475-1.584,1.614,1.614,0,0,0-1.294-.554,1.655,1.655,0,0,0-1.316.554,2.344,2.344,0,0,0-.482,1.584v4.773H161.82V131.3h2.013v1.076a2.84,2.84,0,0,1,1.029-.881,3.168,3.168,0,0,1,3.674.655"
                  />
                  <path
                    id="Path_23859"
                    data-name="Path 23859"
                    d="M171.29,133.269a3.72,3.72,0,0,1,1.316-1.56,3.314,3.314,0,0,1,1.855-.546,3.175,3.175,0,0,1,1.482.367,3.017,3.017,0,0,1,1.121.975v-4.1h2.042v11.544h-2.042v-1.279a2.815,2.815,0,0,1-1.05,1.03,3.088,3.088,0,0,1-1.567.39,3.23,3.23,0,0,1-1.841-.562,3.814,3.814,0,0,1-1.316-1.583,5.451,5.451,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.949,1.949,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_23860"
                    data-name="Path 23860"
                    d="M181.04,133.269a3.735,3.735,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983V131.3h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.647,1.4,3.193,3.193,0,0,1-1.833-.562,3.83,3.83,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.959,1.959,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.951,1.951,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_23861"
                    data-name="Path 23861"
                    d="M193.854,131.569a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.938,1.938,0,0,0-1.431.484,2.353,2.353,0,0,0-.482,1.685v4.3h-2.013V131.3h2.013v1.341a2.959,2.959,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_23862"
                    data-name="Path 23862"
                    d="M196.6,133.269a3.72,3.72,0,0,1,1.316-1.56,3.314,3.314,0,0,1,1.855-.546,3.175,3.175,0,0,1,1.482.367,3.017,3.017,0,0,1,1.121.975v-4.1h2.042v11.544h-2.042v-1.279a2.815,2.815,0,0,1-1.05,1.03,3.085,3.085,0,0,1-1.567.39,3.23,3.23,0,0,1-1.841-.562,3.814,3.814,0,0,1-1.316-1.583,5.451,5.451,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.135,2.135,0,0,0-.778-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.949,1.949,0,0,0,1.049-.3,2.126,2.126,0,0,0,.778-.873,3.39,3.39,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_23863"
                    data-name="Path 23863"
                    d="M207.681,139.7a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.445,1.445,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.15,7.15,0,0,0-1.258-.46,9.975,9.975,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.246,3.246,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.893,5.893,0,0,0,1.251.461,10.106,10.106,0,0,1,1.424.483,2.542,2.542,0,0,1,.97.772,2.238,2.238,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.559,2.559,0,0,1-1.092.928,3.872,3.872,0,0,1-1.661.335,3.918,3.918,0,0,1-1.755-.382"
                  />
                  <path
                    id="Path_23864"
                    data-name="Path 23864"
                    d="M156.083,150.772a3.088,3.088,0,0,1,1.56-.39,3.282,3.282,0,0,1,1.848.546,3.75,3.75,0,0,1,1.309,1.552,5.349,5.349,0,0,1,.481,2.333,5.447,5.447,0,0,1-.481,2.347,3.855,3.855,0,0,1-1.309,1.584,3.219,3.219,0,0,1-1.848.561,3.062,3.062,0,0,1-2.632-1.373v1.233H153V147.621h2.013v4.165a2.964,2.964,0,0,1,1.072-1.014m2.847,2.691a2.141,2.141,0,0,0-.777-.866,1.956,1.956,0,0,0-1.042-.3,1.888,1.888,0,0,0-1.028.3,2.185,2.185,0,0,0-.777.881,3.271,3.271,0,0,0,0,2.715,2.179,2.179,0,0,0,.777.881,1.893,1.893,0,0,0,2.07-.008,2.244,2.244,0,0,0,.777-.889,2.989,2.989,0,0,0,.3-1.372,2.909,2.909,0,0,0-.3-1.35"
                  />
                  <path
                    id="Path_23865"
                    data-name="Path 23865"
                    d="M164.215,158.752a3.836,3.836,0,0,1-1.445-1.568,5.006,5.006,0,0,1-.525-2.34,4.9,4.9,0,0,1,.539-2.34,3.915,3.915,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0A3.922,3.922,0,0,1,169.9,152.5a4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.083,4.083,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.03,2.03,0,0,0,.769-.866,3.115,3.115,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.895,1.889,1.889,0,0,0-1.46-.663,1.846,1.846,0,0,0-1.445.663,2.785,2.785,0,0,0-.582,1.895,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_23866"
                    data-name="Path 23866"
                    d="M171.887,152.488a3.72,3.72,0,0,1,1.316-1.56,3.314,3.314,0,0,1,1.855-.546,3.175,3.175,0,0,1,1.482.367,3.017,3.017,0,0,1,1.121.975v-4.1H179.7v11.544h-2.042v-1.279a2.815,2.815,0,0,1-1.05,1.03,3.088,3.088,0,0,1-1.567.39,3.23,3.23,0,0,1-1.841-.562,3.814,3.814,0,0,1-1.316-1.583,5.451,5.451,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_23867"
                    data-name="Path 23867"
                    d="M181.81,149.127a1.36,1.36,0,0,1,0-1.826,1.252,1.252,0,0,1,1.769,0,1.36,1.36,0,0,1,0,1.826,1.252,1.252,0,0,1-1.769,0m1.877,10.038h-2.013v-8.643h2.013Z"
                  />
                  <path
                    id="Path_23868"
                    data-name="Path 23868"
                    d="M193.02,155.5H187.2a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.948,3.948,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.763,3.763,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.227,5.227,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.395,1.505,4.871,4.871,0,0,1,.5,2.239,5.622,5.622,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.508,1.745,1.745,0,0,0-1.259.492,2.23,2.23,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_23869"
                    data-name="Path 23869"
                    d="M195.839,158.923a3.154,3.154,0,0,1-1.231-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.445,1.445,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.149,7.149,0,0,0-1.258-.46,9.917,9.917,0,0,1-1.459-.484,2.541,2.541,0,0,1-.979-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.246,3.246,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.161,1.161,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.883,5.883,0,0,0,1.252.461,10.133,10.133,0,0,1,1.423.483,2.542,2.542,0,0,1,.97.772,2.245,2.245,0,0,1,.426,1.381,2.433,2.433,0,0,1-.383,1.342,2.553,2.553,0,0,1-1.092.928,4.25,4.25,0,0,1-3.415-.047"
                  />
                  <path
                    id="Path_23870"
                    data-name="Path 23870"
                    d="M251.108,310.655a74.417,74.417,0,1,1-74.418-74.418,74.418,74.418,0,0,1,74.418,74.418"
                    fill="#fff"
                  />
                  <circle
                    id="Ellipse_694"
                    data-name="Ellipse 694"
                    cx="74.418"
                    cy="74.418"
                    r="74.418"
                    transform="translate(101.529 384.321) rotate(-89.424)"
                    fill="none"
                    stroke="#8751ef"
                    strokeMiterlimit="10"
                    strokeWidth="2.415"
                  />
                  <path
                    id="Path_23914"
                    data-name="Path 23914"
                    d="M251.108,487.154a74.417,74.417,0,1,1-74.418-74.418,74.418,74.418,0,0,1,74.418,74.418"
                    fill="#fff"
                  />
                  <circle
                    id="Ellipse_695"
                    data-name="Ellipse 695"
                    cx="74.418"
                    cy="74.418"
                    r="74.418"
                    transform="translate(102.273 412.736)"
                    fill="none"
                    stroke="#8751ef"
                    strokeMiterlimit="10"
                    strokeWidth="2.415"
                  />
                  <path
                    id="Path_23915"
                    data-name="Path 23915"
                    d="M134.629,467.1a5,5,0,0,1,1.826-1.981,4.885,4.885,0,0,1,7.313,2.816h-2.315a2.54,2.54,0,0,0-.971-1.17,2.675,2.675,0,0,0-1.445-.39,2.8,2.8,0,0,0-1.561.444,2.96,2.96,0,0,0-1.064,1.256,4.926,4.926,0,0,0,0,3.8,2.945,2.945,0,0,0,1.064,1.263,2.8,2.8,0,0,0,1.561.445,2.637,2.637,0,0,0,1.445-.4,2.588,2.588,0,0,0,.971-1.178h2.315a4.967,4.967,0,0,1-7.313,2.816,5.016,5.016,0,0,1-1.826-1.973,6.51,6.51,0,0,1,0-5.749"
                  />
                  <path
                    id="Path_23916"
                    data-name="Path 23916"
                    d="M146.961,475.022a3.836,3.836,0,0,1-1.445-1.568,5.006,5.006,0,0,1-.525-2.34,4.9,4.9,0,0,1,.539-2.34A3.915,3.915,0,0,1,147,467.206a4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.083,4.083,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.03,2.03,0,0,0,.769-.866,3.115,3.115,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.9,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.785,2.785,0,0,0-.582,1.9,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.972,1.972,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_23917"
                    data-name="Path 23917"
                    d="M166.929,467.643a3.868,3.868,0,0,1,.9,2.722v5.07h-2.014v-4.773a2.28,2.28,0,0,0-.474-1.553,1.641,1.641,0,0,0-1.294-.538,1.662,1.662,0,0,0-1.3.538,2.257,2.257,0,0,0-.482,1.553v4.773h-2.013v-4.773a2.275,2.275,0,0,0-.475-1.553,1.638,1.638,0,0,0-1.294-.538,1.679,1.679,0,0,0-1.316.538,2.256,2.256,0,0,0-.481,1.553v4.773h-2.014v-8.642h2.014v1.045a2.715,2.715,0,0,1,1-.858,2.914,2.914,0,0,1,1.345-.312,3.242,3.242,0,0,1,1.668.429,2.9,2.9,0,0,1,1.136,1.225,3.1,3.1,0,0,1,2.732-1.654,3.066,3.066,0,0,1,2.366.975"
                  />
                  <path
                    id="Path_23918"
                    data-name="Path 23918"
                    d="M172.825,467.05a3.033,3.033,0,0,1,1.56-.4,3.282,3.282,0,0,1,1.848.546,3.751,3.751,0,0,1,1.309,1.552,5.347,5.347,0,0,1,.481,2.332,5.448,5.448,0,0,1-.481,2.348,3.845,3.845,0,0,1-1.309,1.583,3.212,3.212,0,0,1-1.848.562,3.012,3.012,0,0,1-1.546-.39,3.388,3.388,0,0,1-1.086-.983v5.351H169.74V466.792h2.013v1.248a3.138,3.138,0,0,1,1.072-.99m2.847,2.683a2.141,2.141,0,0,0-.777-.866,1.956,1.956,0,0,0-1.042-.3,1.888,1.888,0,0,0-1.028.3,2.185,2.185,0,0,0-.777.881,3.271,3.271,0,0,0,0,2.715,2.179,2.179,0,0,0,.777.881,1.893,1.893,0,0,0,2.07-.008,2.244,2.244,0,0,0,.777-.889,2.99,2.99,0,0,0,.295-1.373,2.905,2.905,0,0,0-.295-1.349"
                  />
                  <path
                    id="Path_23919"
                    data-name="Path 23919"
                    d="M186.839,471.769h-5.825a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045H186.7a3.948,3.948,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.763,3.763,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.227,5.227,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.395,1.5,4.871,4.871,0,0,1,.5,2.239,5.623,5.623,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.23,2.23,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_23920"
                    data-name="Path 23920"
                    d="M190.708,468.587v4.181a.872.872,0,0,0,.193.632.9.9,0,0,0,.654.2h.935v1.84h-1.265q-2.544,0-2.546-2.683v-4.165h-.949v-1.794h.949v-2.137h2.029v2.137h1.782v1.794Z"
                  />
                  <path
                    id="Path_23921"
                    data-name="Path 23921"
                    d="M201.292,471.769h-5.825a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.947,3.947,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.763,3.763,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.227,5.227,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.5,4.871,4.871,0,0,1,.5,2.239,5.623,5.623,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.23,2.23,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_23922"
                    data-name="Path 23922"
                    d="M209.532,467.643a3.926,3.926,0,0,1,.877,2.722v5.07H208.4v-4.773a2.362,2.362,0,0,0-.475-1.584,1.614,1.614,0,0,0-1.294-.554,1.655,1.655,0,0,0-1.316.554,2.342,2.342,0,0,0-.482,1.584v4.773h-2.013v-8.642h2.013v1.076a2.84,2.84,0,0,1,1.029-.881,3.168,3.168,0,0,1,3.674.655"
                  />
                  <path
                    id="Path_23923"
                    data-name="Path 23923"
                    d="M214.666,468.587v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.654.2h.935v1.84h-1.265q-2.546,0-2.546-2.683v-4.165h-.949v-1.794h.949v-2.137h2.028v2.137h1.783v1.794Z"
                  />
                  <path
                    id="Path_23924"
                    data-name="Path 23924"
                    d="M136.333,487.977a3.735,3.735,0,0,1,1.309-1.56,3.28,3.28,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.647,1.4,3.193,3.193,0,0,1-1.833-.562,3.83,3.83,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.959,1.959,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.951,1.951,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_23925"
                    data-name="Path 23925"
                    d="M153.641,486.012v8.642h-2.028v-1.091a2.713,2.713,0,0,1-1.014.881,2.944,2.944,0,0,1-1.359.32,3.162,3.162,0,0,1-1.653-.429,2.919,2.919,0,0,1-1.129-1.264,4.457,4.457,0,0,1-.41-1.989v-5.07h2.013v4.758a2.365,2.365,0,0,0,.475,1.584,1.615,1.615,0,0,0,1.294.553,1.634,1.634,0,0,0,1.309-.553,2.37,2.37,0,0,0,.474-1.584v-4.758Z"
                  />
                  <path
                    id="Path_23926"
                    data-name="Path 23926"
                    d="M157.969,487.806v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.654.2h.935v1.84h-1.265q-2.546,0-2.546-2.683v-4.165h-.949v-1.794h.949v-2.137h2.028v2.137h1.783v1.794Z"
                  />
                  <path
                    id="Path_23927"
                    data-name="Path 23927"
                    d="M167.3,486.316a2.868,2.868,0,0,1,1.1,1.264,4.639,4.639,0,0,1,.4,2v5.07h-2.014V489.88a2.366,2.366,0,0,0-.474-1.583,1.618,1.618,0,0,0-1.295-.554,1.652,1.652,0,0,0-1.315.554,2.336,2.336,0,0,0-.482,1.583v4.774h-2.014V483.11h2.014v3.978a2.674,2.674,0,0,1,1.035-.881,3.206,3.206,0,0,1,1.438-.32,3.037,3.037,0,0,1,1.611.429"
                  />
                  <path
                    id="Path_23928"
                    data-name="Path 23928"
                    d="M172.178,494.241a3.836,3.836,0,0,1-1.445-1.568,5.006,5.006,0,0,1-.525-2.34,4.9,4.9,0,0,1,.539-2.34,3.916,3.916,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.083,4.083,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.03,2.03,0,0,0,.769-.866,3.115,3.115,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.9,1.89,1.89,0,0,0-1.46-.663,1.846,1.846,0,0,0-1.445.663,2.785,2.785,0,0,0-.582,1.9,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_23929"
                    data-name="Path 23929"
                    d="M182.913,486.277a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.352,2.352,0,0,0-.482,1.684v4.306h-2.013v-8.642H181.9v1.341a2.959,2.959,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_23930"
                    data-name="Path 23930"
                    d="M185.832,484.616a1.36,1.36,0,0,1,0-1.826,1.252,1.252,0,0,1,1.769,0,1.36,1.36,0,0,1,0,1.826,1.252,1.252,0,0,1-1.769,0m1.877,10.038H185.7v-8.642h2.013Z"
                  />
                  <path
                    id="Path_23931"
                    data-name="Path 23931"
                    d="M192.038,487.806v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.654.2h.935v1.84h-1.265q-2.546,0-2.546-2.683v-4.165h-.949v-1.794h.949v-2.137h2.028v2.137h1.783v1.794Z"
                  />
                  <path
                    id="Path_23932"
                    data-name="Path 23932"
                    d="M195.41,484.616a1.357,1.357,0,0,1,0-1.826,1.252,1.252,0,0,1,1.769,0,1.36,1.36,0,0,1,0,1.826,1.252,1.252,0,0,1-1.769,0m1.876,10.038h-2.013v-8.642h2.013Z"
                  />
                  <path
                    id="Path_23933"
                    data-name="Path 23933"
                    d="M206.62,490.988h-5.825a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.948,3.948,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.763,3.763,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.227,5.227,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.505,4.871,4.871,0,0,1,.5,2.239,5.62,5.62,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.23,2.23,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_23934"
                    data-name="Path 23934"
                    d="M209.438,494.412a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.445,1.445,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.15,7.15,0,0,0-1.258-.46,9.973,9.973,0,0,1-1.46-.484,2.546,2.546,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.245,3.245,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.893,5.893,0,0,0,1.251.461,10.1,10.1,0,0,1,1.424.483,2.542,2.542,0,0,1,.97.772,2.238,2.238,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.559,2.559,0,0,1-1.092.928,3.872,3.872,0,0,1-1.661.335,3.918,3.918,0,0,1-1.755-.382"
                  />
                  <path
                    id="Path_23935"
                    data-name="Path 23935"
                    d="M134.184,513.2a15.155,15.155,0,0,1-.769-4.883,15.349,15.349,0,0,1,.805-5.015,9.616,9.616,0,0,1,2.344-3.846h2.028v.2a10.9,10.9,0,0,0-2.409,3.931,13.842,13.842,0,0,0-.827,4.727,13.574,13.574,0,0,0,.784,4.579,11.384,11.384,0,0,0,2.236,3.83v.218h-2.028a9.974,9.974,0,0,1-2.164-3.744"
                  />
                  <path
                    id="Path_23936"
                    data-name="Path 23936"
                    d="M142.87,505.5a2.646,2.646,0,0,1,1.431-.39V507.4h-.533a1.934,1.934,0,0,0-1.431.484,2.352,2.352,0,0,0-.482,1.684v4.306h-2.013v-8.642h2.013v1.341a2.962,2.962,0,0,1,1.015-1.076"
                  />
                  <path
                    id="Path_23937"
                    data-name="Path 23937"
                    d="M153,510.207h-5.825a2.239,2.239,0,0,0,.6,1.467,1.785,1.785,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.948,3.948,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.763,3.763,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.227,5.227,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.395,1.505,4.871,4.871,0,0,1,.5,2.239,5.622,5.622,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.23,2.23,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_23938"
                    data-name="Path 23938"
                    d="M159.213,505.472a2.985,2.985,0,0,1,1.065.991v-1.232H162.3v8.7a4.972,4.972,0,0,1-.445,2.145,3.485,3.485,0,0,1-1.338,1.5,4.011,4.011,0,0,1-2.157.554,4.354,4.354,0,0,1-2.783-.858,3.243,3.243,0,0,1-1.229-2.34h2a1.6,1.6,0,0,0,.683.944,2.236,2.236,0,0,0,1.272.351,1.883,1.883,0,0,0,1.424-.57,2.4,2.4,0,0,0,.547-1.723v-1.342a3.159,3.159,0,0,1-1.072,1.014,3,3,0,0,1-1.56.406,3.23,3.23,0,0,1-1.841-.562,3.815,3.815,0,0,1-1.316-1.583,5.451,5.451,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325,3.735,3.735,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.136,3.136,0,0,1,1.567.382m.777,2.715a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_23939"
                    data-name="Path 23939"
                    d="M171.8,505.231v8.642h-2.028v-1.091a2.713,2.713,0,0,1-1.014.881,2.945,2.945,0,0,1-1.359.32,3.162,3.162,0,0,1-1.653-.429,2.92,2.92,0,0,1-1.129-1.264,4.457,4.457,0,0,1-.41-1.989v-5.07h2.013v4.758a2.365,2.365,0,0,0,.475,1.584,1.615,1.615,0,0,0,1.294.553,1.634,1.634,0,0,0,1.309-.553,2.37,2.37,0,0,0,.474-1.584v-4.758Z"
                  />
                  <rect
                    id="Rectangle_5655"
                    data-name="Rectangle 5655"
                    width="2.013"
                    height="11.544"
                    transform="translate(173.781 502.329)"
                  />
                  <path
                    id="Path_23940"
                    data-name="Path 23940"
                    d="M177.743,507.2a3.735,3.735,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.257,3.257,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027V512.61a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.83,3.83,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.481-2.348,5.359,5.359,0,0,1,.481-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_23941"
                    data-name="Path 23941"
                    d="M189.873,507.025v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.654.2h.935v1.84h-1.265q-2.546,0-2.546-2.683v-4.165H186.9v-1.794h.949v-2.137h2.028v2.137h1.783v1.794Z"
                  />
                  <path
                    id="Path_23942"
                    data-name="Path 23942"
                    d="M194.576,513.46a3.836,3.836,0,0,1-1.445-1.568,5.006,5.006,0,0,1-.525-2.34,4.9,4.9,0,0,1,.539-2.34,3.915,3.915,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.084,4.084,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.03,2.03,0,0,0,.769-.866,3.115,3.115,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.895,1.889,1.889,0,0,0-1.46-.663,1.846,1.846,0,0,0-1.445.663,2.785,2.785,0,0,0-.582,1.895,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.972,1.972,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_23943"
                    data-name="Path 23943"
                    d="M205.311,505.5a2.648,2.648,0,0,1,1.431-.39V507.4h-.532a1.934,1.934,0,0,0-1.431.484,2.351,2.351,0,0,0-.482,1.684v4.306h-2.013v-8.642H204.3v1.341a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_23944"
                    data-name="Path 23944"
                    d="M209.388,513.632a3.158,3.158,0,0,1-1.23-1.037,2.771,2.771,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.444,1.444,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.151,7.151,0,0,0-1.258-.46,9.974,9.974,0,0,1-1.46-.484,2.546,2.546,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.245,3.245,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.894,5.894,0,0,0,1.251.461,10.1,10.1,0,0,1,1.424.483,2.542,2.542,0,0,1,.97.772,2.238,2.238,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.559,2.559,0,0,1-1.092.928,3.874,3.874,0,0,1-1.662.335,3.917,3.917,0,0,1-1.754-.382"
                  />
                  <path
                    id="Path_23945"
                    data-name="Path 23945"
                    d="M215.414,516.947v-.218a11.384,11.384,0,0,0,2.236-3.83,13.574,13.574,0,0,0,.784-4.579,13.842,13.842,0,0,0-.827-4.727,10.887,10.887,0,0,0-2.409-3.931v-.2h2.028a9.616,9.616,0,0,1,2.344,3.846,15.349,15.349,0,0,1,.8,5.015,15.155,15.155,0,0,1-.769,4.883,9.974,9.974,0,0,1-2.164,3.744Z"
                  />
                  <path
                    id="Path_23946"
                    data-name="Path 23946"
                    d="M251.333,653.289a74.417,74.417,0,1,1-74.418-74.418,74.418,74.418,0,0,1,74.418,74.418"
                    fill="#fff"
                  />
                  <circle
                    id="Ellipse_696"
                    data-name="Ellipse 696"
                    cx="74.418"
                    cy="74.418"
                    r="74.418"
                    transform="translate(102.498 578.871)"
                    fill="none"
                    stroke="#8751ef"
                    strokeMiterlimit="10"
                    strokeWidth="2.415"
                  />
                  <path
                    id="Path_23947"
                    data-name="Path 23947"
                    d="M135.156,655.091a2.469,2.469,0,0,0-.949-1.045,2.711,2.711,0,0,0-1.409-.359,2.9,2.9,0,0,0-1.582.437,2.925,2.925,0,0,0-1.079,1.248,4.746,4.746,0,0,0,.007,3.775,2.943,2.943,0,0,0,1.1,1.248,3.05,3.05,0,0,0,1.64.437,2.7,2.7,0,0,0,1.884-.663,3.232,3.232,0,0,0,.963-1.849H132.28v-1.669h5.436v1.9a5.351,5.351,0,0,1-.863,2.106,4.991,4.991,0,0,1-1.7,1.552,4.692,4.692,0,0,1-2.337.585,4.934,4.934,0,0,1-4.465-2.683,6.508,6.508,0,0,1,0-5.748,5.118,5.118,0,0,1,7.4-1.8,4.568,4.568,0,0,1,1.725,2.52Z"
                  />
                  <path
                    id="Path_23948"
                    data-name="Path 23948"
                    d="M140.678,662.291a3.836,3.836,0,0,1-1.445-1.568,5.018,5.018,0,0,1-.525-2.34,4.9,4.9,0,0,1,.539-2.34,3.915,3.915,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.914,4.914,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.084,4.084,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.03,2.03,0,0,0,.769-.866,3.115,3.115,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.9,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.785,2.785,0,0,0-.582,1.9,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.972,1.972,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_23949"
                    data-name="Path 23949"
                    d="M151.708,660.692l2.013-6.63h2.143l-2.948,8.642h-2.445l-2.933-8.642H149.7Z"
                  />
                  <path
                    id="Path_23950"
                    data-name="Path 23950"
                    d="M164.349,659.038h-5.825a2.239,2.239,0,0,0,.6,1.467,1.785,1.785,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.948,3.948,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.763,3.763,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.227,5.227,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.5,4.872,4.872,0,0,1,.5,2.239,5.623,5.623,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.23,2.23,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_23951"
                    data-name="Path 23951"
                    d="M168.9,654.327a2.648,2.648,0,0,1,1.431-.39v2.293H169.8a1.934,1.934,0,0,0-1.431.484,2.352,2.352,0,0,0-.482,1.684V662.7h-2.013v-8.642h2.013V655.4a2.959,2.959,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_23952"
                    data-name="Path 23952"
                    d="M178.4,654.912a3.926,3.926,0,0,1,.877,2.722v5.07h-2.013v-4.773a2.362,2.362,0,0,0-.475-1.584,1.614,1.614,0,0,0-1.294-.554,1.655,1.655,0,0,0-1.316.554,2.342,2.342,0,0,0-.482,1.584V662.7h-2.013v-8.642H173.7v1.076a2.839,2.839,0,0,1,1.029-.881,3.168,3.168,0,0,1,3.674.655"
                  />
                  <path
                    id="Path_23953"
                    data-name="Path 23953"
                    d="M193.449,654.912a3.868,3.868,0,0,1,.9,2.722v5.07h-2.014v-4.773a2.281,2.281,0,0,0-.474-1.553,1.641,1.641,0,0,0-1.294-.538,1.662,1.662,0,0,0-1.3.538,2.257,2.257,0,0,0-.482,1.553V662.7h-2.013v-4.773a2.276,2.276,0,0,0-.475-1.553A1.638,1.638,0,0,0,185,655.84a1.679,1.679,0,0,0-1.316.538,2.257,2.257,0,0,0-.481,1.553V662.7h-2.014v-8.642H183.2v1.045a2.715,2.715,0,0,1,1-.858,2.914,2.914,0,0,1,1.345-.312,3.242,3.242,0,0,1,1.668.429,2.9,2.9,0,0,1,1.136,1.225,3.1,3.1,0,0,1,2.732-1.654,3.066,3.066,0,0,1,2.366.975"
                  />
                  <path
                    id="Path_23954"
                    data-name="Path 23954"
                    d="M203.609,659.038h-5.825a2.239,2.239,0,0,0,.6,1.467,1.785,1.785,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.948,3.948,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.763,3.763,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.227,5.227,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.5,4.872,4.872,0,0,1,.5,2.239,5.621,5.621,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.23,2.23,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_23955"
                    data-name="Path 23955"
                    d="M211.849,654.912a3.926,3.926,0,0,1,.877,2.722v5.07h-2.013v-4.773a2.362,2.362,0,0,0-.475-1.584,1.616,1.616,0,0,0-1.294-.554,1.655,1.655,0,0,0-1.316.554,2.342,2.342,0,0,0-.482,1.584V662.7h-2.013v-8.642h2.013v1.076a2.839,2.839,0,0,1,1.029-.881,3.168,3.168,0,0,1,3.674.655"
                  />
                  <path
                    id="Path_23956"
                    data-name="Path 23956"
                    d="M216.983,655.856v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.654.2h.935v1.84H217.5q-2.546,0-2.546-2.683v-4.165h-.949v-1.794h.949v-2.137h2.028v2.137h1.783v1.794Z"
                  />
                  <path
                    id="Path_23957"
                    data-name="Path 23957"
                    d="M221.513,662.462a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.445,1.445,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.153,7.153,0,0,0-1.258-.46,9.97,9.97,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.834,3.834,0,0,1,1.676-.343,3.245,3.245,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083H224.4a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.894,5.894,0,0,0,1.251.461,10.1,10.1,0,0,1,1.424.483,2.542,2.542,0,0,1,.97.772,2.238,2.238,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.558,2.558,0,0,1-1.092.928,3.871,3.871,0,0,1-1.661.335,3.918,3.918,0,0,1-1.755-.382"
                  />
                  <path
                    id="Path_23958"
                    data-name="Path 23958"
                    d="M176.691,412.737a74.418,74.418,0,1,1,0,148.835"
                    fill="none"
                    stroke="#ffc919"
                    strokeMiterlimit="10"
                    strokeWidth="2.415"
                  />
                  <path
                    id="Path_23959"
                    data-name="Path 23959"
                    d="M269.935,413.861a36,36,0,0,1,0-39.414,117.247,117.247,0,0,0,0-128.675,35.938,35.938,0,0,1-.043-39.351,116.733,116.733,0,0,0-12.337-144.28A112.463,112.463,0,0,0,223.4,37.318a109.556,109.556,0,0,0-86.514-2.808A111.533,111.533,0,0,0,100.2,58.084,114.881,114.881,0,0,0,74.232,95.542a117.433,117.433,0,0,0,9.662,110.816,36,36,0,0,1,0,39.414,117.252,117.252,0,0,0,0,128.675,35.936,35.936,0,0,1,.04,39.351,116.363,116.363,0,0,0-19.266,65.225c.007,1.013.028,2.035.064,3.117-.044,1.335-.066,2.666-.066,3.962A116.392,116.392,0,0,0,83.894,550.44a32.882,32.882,0,0,1,.04,37.431A116.363,116.363,0,0,0,64.668,653.1c0,.1,0,.2,0,.3v.117a116.317,116.317,0,0,0,31.733,78.78,112.486,112.486,0,0,0,34.106,24.726,108.563,108.563,0,0,0,41.965,10.236q2.244.088,4.476.089a108.957,108.957,0,0,0,39.708-7.45A111.529,111.529,0,0,0,253.2,736.615a114.9,114.9,0,0,0,26.042-37.059,116.405,116.405,0,0,0,9.912-46.05q.006-.617.007-1.233a116.388,116.388,0,0,0-19.229-64.339,32.889,32.889,0,0,1-.043-37.431,116.356,116.356,0,0,0,19.27-65.225c-.007-1.012-.028-2.035-.065-3.117.045-1.335.067-2.666.067-3.961a116.388,116.388,0,0,0-19.229-64.339m1.35,68.621c.037,1.027.058,1.981.064,2.918a98.592,98.592,0,0,1-16.315,55.278,53.262,53.262,0,0,0-8.776,27.967l0,.185,0,.186a53.441,53.441,0,0,0,8.814,28.733,98.628,98.628,0,0,1,16.281,54.524c0,.35,0,.7-.006,1.049a98.69,98.69,0,0,1-8.4,39.043,97.17,97.17,0,0,1-22.022,31.343A93.786,93.786,0,0,1,210.2,743.291a91.383,91.383,0,0,1-37.014,6.162,92.642,92.642,0,0,1-63.834-29.4A98.3,98.3,0,0,1,82.485,653.32l0-.347A98.609,98.609,0,0,1,98.793,597.7a53.257,53.257,0,0,0,8.778-27.972l0-.186,0-.186a53.449,53.449,0,0,0-8.814-28.727A98.625,98.625,0,0,1,82.478,486.1c0-1.188.023-2.413.067-3.644l.011-.319-.011-.32c-.037-1.026-.058-1.981-.065-2.918a98.61,98.61,0,0,1,16.313-55.278,53.749,53.749,0,0,0-.034-58.991,99.434,99.434,0,0,1,0-109.045,53.811,53.811,0,0,0,0-59.043,99.618,99.618,0,0,1-8.177-93.934,97.166,97.166,0,0,1,21.962-31.683A93.812,93.812,0,0,1,143.4,51.092a91.211,91.211,0,0,1,33.486-6.327q1.875,0,3.76.075a92.638,92.638,0,0,1,63.947,29.516A99.139,99.139,0,0,1,255.034,196.6a53.749,53.749,0,0,0,.036,58.991,99.434,99.434,0,0,1,0,109.045,53.812,53.812,0,0,0,0,59.044A98.628,98.628,0,0,1,271.351,478.2c0,1.187-.022,2.413-.066,3.643l-.011.32Z"
                    fill="#ecfcd9"
                  />
                  <g
                    id="Group_9097"
                    data-name="Group 9097"
                    transform="translate(0 14.547)"
                  >
                    <path
                      id="Path_23960"
                      data-name="Path 23960"
                      d="M93.394,795.758a5.677,5.677,0,0,1,2.406,2.276,6.845,6.845,0,0,1,.849,3.461,6.688,6.688,0,0,1-.849,3.433,5.606,5.606,0,0,1-2.406,2.229,8.053,8.053,0,0,1-3.629.774H85.53V794.966h4.234a7.9,7.9,0,0,1,3.629.792m-.14,9.207a4.736,4.736,0,0,0,1.213-3.47,4.9,4.9,0,0,0-1.213-3.526,4.6,4.6,0,0,0-3.489-1.268H87.656v9.5h2.108a4.681,4.681,0,0,0,3.489-1.231"
                      transform="translate(0 -0.499)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23961"
                      data-name="Path 23961"
                      d="M104.353,796.677v3.806h4.478v1.735h-4.478v3.974h5.037v1.735h-7.164V794.942h7.164v1.735Z"
                      transform="translate(-3.469 -0.494)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23962"
                      data-name="Path 23962"
                      d="M122.2,794.965V796.7h-5.5v3.825h4.291v1.735h-4.291v5.672h-2.127V794.965Z"
                      transform="translate(-6.033 -0.499)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <rect
                      id="Rectangle_5656"
                      data-name="Rectangle 5656"
                      width="2.127"
                      height="12.966"
                      transform="translate(118.141 794.466)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23963"
                      data-name="Path 23963"
                      d="M143.563,807.927h-2.127l-6.4-9.683v9.683H132.91V794.942h2.127l6.4,9.664v-9.664h2.127Z"
                      transform="translate(-9.844 -0.494)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23964"
                      data-name="Path 23964"
                      d="M152.016,796.677v3.806h4.478v1.735h-4.478v3.974h5.037v1.735h-7.164V794.942h7.164v1.735Z"
                      transform="translate(-13.372 -0.494)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23965"
                      data-name="Path 23965"
                      d="M170.478,796.677v3.806h4.478v1.735h-4.478v3.974h5.037v1.735h-7.164V794.942h7.164v1.735Z"
                      transform="translate(-17.208 -0.494)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23966"
                      data-name="Path 23966"
                      d="M180.682,797.963a6.305,6.305,0,0,1,2.407-2.36,7.077,7.077,0,0,1,7.014.168,5.794,5.794,0,0,1,2.342,2.882H189.89a3.429,3.429,0,0,0-1.4-1.53,4.15,4.15,0,0,0-2.071-.5,4.523,4.523,0,0,0-2.294.578,4.023,4.023,0,0,0-1.577,1.66,5.861,5.861,0,0,0,0,5.038,4.086,4.086,0,0,0,1.577,1.669,4.465,4.465,0,0,0,2.294.588,4.15,4.15,0,0,0,2.071-.5,3.425,3.425,0,0,0,1.4-1.53h2.556a5.742,5.742,0,0,1-2.342,2.873A6.811,6.811,0,0,1,186.419,808a6.7,6.7,0,0,1-3.339-.849,6.319,6.319,0,0,1-2.4-2.36,7.017,7.017,0,0,1,0-6.828"
                      transform="translate(-19.586 -0.455)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23967"
                      data-name="Path 23967"
                      d="M201.292,807.17a6.291,6.291,0,0,1-2.407-2.37,7.036,7.036,0,0,1,0-6.838,6.31,6.31,0,0,1,2.407-2.36,7,7,0,0,1,6.679,0,6.253,6.253,0,0,1,2.4,2.36,7.108,7.108,0,0,1,0,6.838,6.234,6.234,0,0,1-2.4,2.37,7,7,0,0,1-6.679,0m5.625-1.586a4.076,4.076,0,0,0,1.577-1.679,5.391,5.391,0,0,0,.569-2.528,5.336,5.336,0,0,0-.569-2.519,4.022,4.022,0,0,0-1.577-1.66,4.842,4.842,0,0,0-4.589,0,4.023,4.023,0,0,0-1.577,1.66,5.336,5.336,0,0,0-.569,2.519,5.391,5.391,0,0,0,.569,2.528,4.077,4.077,0,0,0,1.577,1.679,4.772,4.772,0,0,0,4.589,0"
                      transform="translate(-23.368 -0.455)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23968"
                      data-name="Path 23968"
                      d="M219.2,807.561a3.853,3.853,0,0,1-1.642-1.3,3.287,3.287,0,0,1-.6-1.958h2.276a2.056,2.056,0,0,0,.662,1.38,2.345,2.345,0,0,0,1.651.541,2.542,2.542,0,0,0,1.717-.532,1.728,1.728,0,0,0,.616-1.371,1.493,1.493,0,0,0-.383-1.063,2.568,2.568,0,0,0-.951-.635,14.5,14.5,0,0,0-1.576-.485,14.693,14.693,0,0,1-2.062-.681,3.4,3.4,0,0,1-1.352-1.073,3.1,3.1,0,0,1-.56-1.94,3.446,3.446,0,0,1,.56-1.958,3.567,3.567,0,0,1,1.567-1.287,5.693,5.693,0,0,1,2.332-.448,4.86,4.86,0,0,1,3.087.943,3.479,3.479,0,0,1,1.335,2.583h-2.352a1.7,1.7,0,0,0-.671-1.212,2.482,2.482,0,0,0-1.623-.5,2.3,2.3,0,0,0-1.493.466,1.628,1.628,0,0,0-.578,1.344,1.361,1.361,0,0,0,.364.979,2.573,2.573,0,0,0,.924.607,14.4,14.4,0,0,0,1.53.485,15.988,15.988,0,0,1,2.1.709,3.493,3.493,0,0,1,1.381,1.091,3.144,3.144,0,0,1,.569,1.969,3.542,3.542,0,0,1-.532,1.866,3.83,3.83,0,0,1-1.549,1.409,5.11,5.11,0,0,1-2.4.532,5.8,5.8,0,0,1-2.35-.457"
                      transform="translate(-27.307 -0.455)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23969"
                      data-name="Path 23969"
                      d="M240.895,794.965,236.6,803.23v4.7h-2.127v-4.7l-4.31-8.265h2.37l3,6.362,3-6.362Z"
                      transform="translate(-30.052 -0.499)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23970"
                      data-name="Path 23970"
                      d="M247.666,807.561a3.856,3.856,0,0,1-1.641-1.3,3.287,3.287,0,0,1-.6-1.958H247.7a2.056,2.056,0,0,0,.662,1.38,2.345,2.345,0,0,0,1.651.541,2.542,2.542,0,0,0,1.717-.532,1.728,1.728,0,0,0,.616-1.371,1.5,1.5,0,0,0-.383-1.063,2.568,2.568,0,0,0-.951-.635,14.47,14.47,0,0,0-1.577-.485,14.714,14.714,0,0,1-2.061-.681,3.393,3.393,0,0,1-1.352-1.073,3.1,3.1,0,0,1-.56-1.94,3.446,3.446,0,0,1,.56-1.958,3.567,3.567,0,0,1,1.567-1.287,5.692,5.692,0,0,1,2.332-.448,4.861,4.861,0,0,1,3.088.943,3.478,3.478,0,0,1,1.334,2.583h-2.351a1.7,1.7,0,0,0-.671-1.212,2.482,2.482,0,0,0-1.623-.5,2.3,2.3,0,0,0-1.493.466,1.626,1.626,0,0,0-.578,1.344,1.361,1.361,0,0,0,.364.979,2.573,2.573,0,0,0,.924.607,14.4,14.4,0,0,0,1.53.485,15.987,15.987,0,0,1,2.1.709,3.493,3.493,0,0,1,1.381,1.091,3.144,3.144,0,0,1,.569,1.969,3.542,3.542,0,0,1-.532,1.866,3.84,3.84,0,0,1-1.549,1.409,5.11,5.11,0,0,1-2.4.532,5.8,5.8,0,0,1-2.351-.457"
                      transform="translate(-33.223 -0.455)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23971"
                      data-name="Path 23971"
                      d="M268.252,794.965V796.7H264.8v11.231h-2.126V796.7H259.2v-1.735Z"
                      transform="translate(-36.085 -0.499)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23972"
                      data-name="Path 23972"
                      d="M275.459,796.677v3.806h4.478v1.735h-4.478v3.974H280.5v1.735h-7.164V794.942H280.5v1.735Z"
                      transform="translate(-39.021 -0.494)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23973"
                      data-name="Path 23973"
                      d="M299.329,794.965v12.966H297.2v-8.881l-3.955,8.881h-1.474l-3.974-8.881v8.881h-2.127V794.965h2.3l4.552,10.167,4.533-10.167Z"
                      transform="translate(-41.585 -0.499)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23974"
                      data-name="Path 23974"
                      d="M313.521,792.563l-.224,3.825h-1.455l-.243-3.825Zm2.817,0-.224,3.825h-1.455l-.243-3.825Z"
                      transform="translate(-46.972)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23975"
                      data-name="Path 23975"
                      d="M326.906,807.931l-2.985-5.187H322.3v5.187h-2.127V794.965h4.478a5.573,5.573,0,0,1,2.528.522,3.63,3.63,0,0,1,1.549,1.4,3.812,3.812,0,0,1,.513,1.958,3.88,3.88,0,0,1-.737,2.3,3.734,3.734,0,0,1-2.267,1.409l3.208,5.374Zm-4.608-6.884h2.351a2.466,2.466,0,0,0,1.8-.6,2.149,2.149,0,0,0,.606-1.6,2.073,2.073,0,0,0-.6-1.577,2.538,2.538,0,0,0-1.809-.569H322.3Z"
                      transform="translate(-48.753 -0.499)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23976"
                      data-name="Path 23976"
                      d="M337.157,794.965v8.264a2.657,2.657,0,0,0,2.929,2.967,3,3,0,0,0,2.174-.746,2.949,2.949,0,0,0,.774-2.221v-8.264h2.127v8.227a4.957,4.957,0,0,1-.691,2.686,4.286,4.286,0,0,1-1.847,1.642,5.963,5.963,0,0,1-2.556.541,5.9,5.9,0,0,1-2.547-.541,4.183,4.183,0,0,1-1.819-1.642,5.066,5.066,0,0,1-.672-2.686v-8.227Z"
                      transform="translate(-51.84 -0.499)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23977"
                      data-name="Path 23977"
                      d="M353.43,806.215h4.384v1.717H351.3V794.966h2.127Z"
                      transform="translate(-55.221 -0.499)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23978"
                      data-name="Path 23978"
                      d="M363.885,796.677v3.806h4.478v1.735h-4.478v3.974h5.037v1.735h-7.164V794.942h7.164v1.735Z"
                      transform="translate(-57.393 -0.494)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23979"
                      data-name="Path 23979"
                      d="M375.937,807.561a3.856,3.856,0,0,1-1.641-1.3,3.287,3.287,0,0,1-.6-1.958h2.276a2.056,2.056,0,0,0,.662,1.38,2.345,2.345,0,0,0,1.651.541A2.542,2.542,0,0,0,380,805.7a1.728,1.728,0,0,0,.616-1.371,1.5,1.5,0,0,0-.383-1.063,2.568,2.568,0,0,0-.951-.635,14.47,14.47,0,0,0-1.577-.485,14.714,14.714,0,0,1-2.061-.681,3.4,3.4,0,0,1-1.352-1.073,3.1,3.1,0,0,1-.56-1.94,3.446,3.446,0,0,1,.56-1.958,3.567,3.567,0,0,1,1.567-1.287,5.691,5.691,0,0,1,2.332-.448,4.861,4.861,0,0,1,3.088.943,3.478,3.478,0,0,1,1.334,2.583h-2.351a1.7,1.7,0,0,0-.671-1.212,2.482,2.482,0,0,0-1.623-.5,2.3,2.3,0,0,0-1.493.466,1.626,1.626,0,0,0-.578,1.344,1.361,1.361,0,0,0,.364.979,2.573,2.573,0,0,0,.924.607,14.4,14.4,0,0,0,1.53.485,15.987,15.987,0,0,1,2.1.709,3.493,3.493,0,0,1,1.381,1.091,3.144,3.144,0,0,1,.569,1.969,3.542,3.542,0,0,1-.532,1.866,3.84,3.84,0,0,1-1.549,1.409,5.11,5.11,0,0,1-2.4.532,5.8,5.8,0,0,1-2.351-.457"
                      transform="translate(-59.874 -0.455)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23980"
                      data-name="Path 23980"
                      d="M389.277,792.563l-.224,3.825H387.6l-.243-3.825Zm2.817,0-.224,3.825h-1.455l-.243-3.825Z"
                      transform="translate(-62.712)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                  </g>
                  <g
                    id="Group_9093"
                    data-name="Group 9093"
                    transform="translate(0 14.256)"
                  >
                    <path
                      id="Path_24024"
                      data-name="Path 24024"
                      d="M1164.226,794.718v8.964a2.882,2.882,0,0,0,3.177,3.218,3.259,3.259,0,0,0,2.358-.809,3.2,3.2,0,0,0,.839-2.409v-8.964h2.307v8.923a5.376,5.376,0,0,1-.749,2.914,4.65,4.65,0,0,1-2,1.781,6.468,6.468,0,0,1-2.772.587,6.4,6.4,0,0,1-2.762-.587,4.538,4.538,0,0,1-1.973-1.781,5.494,5.494,0,0,1-.729-2.914v-8.923Z"
                      transform="translate(0 -0.825)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24025"
                      data-name="Path 24025"
                      d="M1180.22,808.4a4.165,4.165,0,0,1-1.781-1.407,3.56,3.56,0,0,1-.648-2.124h2.469a2.23,2.23,0,0,0,.718,1.5,2.544,2.544,0,0,0,1.791.587,2.755,2.755,0,0,0,1.862-.577,1.871,1.871,0,0,0,.668-1.487,1.623,1.623,0,0,0-.414-1.153,2.79,2.79,0,0,0-1.033-.688,15.608,15.608,0,0,0-1.71-.526,15.965,15.965,0,0,1-2.236-.739,3.679,3.679,0,0,1-1.466-1.163,3.356,3.356,0,0,1-.607-2.1,3.731,3.731,0,0,1,.607-2.124,3.867,3.867,0,0,1,1.7-1.4,6.177,6.177,0,0,1,2.53-.486,5.276,5.276,0,0,1,3.349,1.023,3.772,3.772,0,0,1,1.446,2.8h-2.55a1.846,1.846,0,0,0-.727-1.315,2.7,2.7,0,0,0-1.762-.547,2.5,2.5,0,0,0-1.618.505,1.761,1.761,0,0,0-.628,1.457,1.476,1.476,0,0,0,.4,1.062,2.78,2.78,0,0,0,1,.658,15.7,15.7,0,0,0,1.659.526,17.348,17.348,0,0,1,2.277.769,3.785,3.785,0,0,1,1.5,1.183,3.405,3.405,0,0,1,.617,2.135,3.85,3.85,0,0,1-.576,2.024,4.162,4.162,0,0,1-1.681,1.528,5.54,5.54,0,0,1-2.6.577,6.283,6.283,0,0,1-2.548-.5"
                      transform="translate(-2.234 -0.795)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24026"
                      data-name="Path 24026"
                      d="M1194.722,796.576V800.7h4.857v1.882h-4.857v4.31h5.463v1.882h-7.769V794.694h7.769v1.882Z"
                      transform="translate(-4.292 -0.822)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24027"
                      data-name="Path 24027"
                      d="M1212.2,788.854l-5.5,22.643h-2.267l5.484-22.643Z"
                      transform="translate(-5.982)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24028"
                      data-name="Path 24028"
                      d="M1224.164,808.781l-3.238-5.625h-1.761v5.625h-2.307V794.718h4.856a6.043,6.043,0,0,1,2.742.566,3.932,3.932,0,0,1,1.68,1.518,4.134,4.134,0,0,1,.556,2.124,4.208,4.208,0,0,1-.8,2.5,4.05,4.05,0,0,1-2.458,1.528l3.48,5.828Zm-5-7.467h2.549a2.675,2.675,0,0,0,1.953-.648,2.331,2.331,0,0,0,.657-1.74,2.248,2.248,0,0,0-.648-1.71,2.753,2.753,0,0,0-1.963-.617h-2.549Z"
                      transform="translate(-7.732 -0.825)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24029"
                      data-name="Path 24029"
                      d="M1234.049,796.576V800.7h4.857v1.882h-4.857v4.31h5.463v1.882h-7.77V794.694h7.77v1.882Z"
                      transform="translate(-9.827 -0.822)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24030"
                      data-name="Path 24030"
                      d="M1246.365,794.718v8.964a2.881,2.881,0,0,0,3.176,3.218,3.258,3.258,0,0,0,2.358-.809,3.2,3.2,0,0,0,.84-2.409v-8.964h2.306v8.923a5.384,5.384,0,0,1-.748,2.914,4.656,4.656,0,0,1-2,1.781,6.463,6.463,0,0,1-2.771.587,6.4,6.4,0,0,1-2.763-.587,4.528,4.528,0,0,1-1.973-1.781,5.486,5.486,0,0,1-.729-2.914v-8.923Z"
                      transform="translate(-11.56 -0.825)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24031"
                      data-name="Path 24031"
                      d="M1262.358,808.4a4.171,4.171,0,0,1-1.781-1.407,3.566,3.566,0,0,1-.648-2.124h2.469a2.231,2.231,0,0,0,.718,1.5,2.544,2.544,0,0,0,1.791.587,2.757,2.757,0,0,0,1.862-.577,1.874,1.874,0,0,0,.668-1.487,1.623,1.623,0,0,0-.415-1.153,2.784,2.784,0,0,0-1.032-.688,15.68,15.68,0,0,0-1.71-.526,15.971,15.971,0,0,1-2.236-.739,3.687,3.687,0,0,1-1.467-1.163,3.361,3.361,0,0,1-.607-2.1,3.738,3.738,0,0,1,.607-2.124,3.869,3.869,0,0,1,1.7-1.4,6.172,6.172,0,0,1,2.529-.486,5.273,5.273,0,0,1,3.349,1.023,3.77,3.77,0,0,1,1.447,2.8h-2.55a1.845,1.845,0,0,0-.728-1.315,2.692,2.692,0,0,0-1.761-.547,2.5,2.5,0,0,0-1.619.505,1.763,1.763,0,0,0-.627,1.457,1.476,1.476,0,0,0,.394,1.062,2.793,2.793,0,0,0,1,.658,15.651,15.651,0,0,0,1.659.526,17.334,17.334,0,0,1,2.276.769,3.789,3.789,0,0,1,1.5,1.183,3.41,3.41,0,0,1,.617,2.135,3.842,3.842,0,0,1-.577,2.024,4.165,4.165,0,0,1-1.68,1.528,5.543,5.543,0,0,1-2.6.577,6.291,6.291,0,0,1-2.549-.5"
                      transform="translate(-13.794 -0.795)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24032"
                      data-name="Path 24032"
                      d="M1276.86,796.576V800.7h4.856v1.882h-4.856v4.31h5.463v1.882h-7.77V794.694h7.77v1.882Z"
                      transform="translate(-15.852 -0.822)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24033"
                      data-name="Path 24033"
                      d="M1301.545,795.577a6.157,6.157,0,0,1,2.609,2.469,7.424,7.424,0,0,1,.921,3.754,7.254,7.254,0,0,1-.921,3.723,6.08,6.08,0,0,1-2.609,2.418,8.738,8.738,0,0,1-3.936.839h-4.593V794.718h4.593a8.573,8.573,0,0,1,3.936.859m-.152,9.986a5.136,5.136,0,0,0,1.316-3.764,5.312,5.312,0,0,0-1.316-3.825,4.993,4.993,0,0,0-3.784-1.376h-2.286v10.3h2.286a5.078,5.078,0,0,0,3.784-1.335"
                      transform="translate(-18.45 -0.825)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24034"
                      data-name="Path 24034"
                      d="M1318.055,805.9h-5.888l-1.012,2.873h-2.408l5.039-14.083h2.671l5.039,14.083h-2.428Zm-.648-1.882-2.286-6.536-2.307,6.536Z"
                      transform="translate(-20.664 -0.822)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24035"
                      data-name="Path 24035"
                      d="M1335.092,794.718V796.6h-3.743v12.182h-2.307V796.6h-3.764v-1.882Z"
                      transform="translate(-22.991 -0.825)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24036"
                      data-name="Path 24036"
                      d="M1347.75,805.9h-5.889l-1.012,2.873h-2.408l5.039-14.083h2.671l5.039,14.083h-2.428Zm-.648-1.882-2.286-6.536-2.307,6.536Z"
                      transform="translate(-24.844 -0.822)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                  </g>
                  <g
                    id="Group_9094"
                    data-name="Group 9094"
                    transform="translate(0 13.452)"
                  >
                    <path
                      id="Path_24037"
                      data-name="Path 24037"
                      d="M1612.34,806.429a6.463,6.463,0,0,1-2.475-2.437,7.236,7.236,0,0,1,0-7.033,6.485,6.485,0,0,1,2.475-2.427,7.2,7.2,0,0,1,6.87,0,6.433,6.433,0,0,1,2.466,2.427,7.311,7.311,0,0,1,0,7.033,6.412,6.412,0,0,1-2.466,2.437,7.2,7.2,0,0,1-6.87,0m5.785-1.631a4.194,4.194,0,0,0,1.621-1.727,5.545,5.545,0,0,0,.585-2.6,5.49,5.49,0,0,0-.585-2.591,4.137,4.137,0,0,0-1.621-1.707,4.979,4.979,0,0,0-4.72,0,4.137,4.137,0,0,0-1.621,1.707,5.49,5.49,0,0,0-.585,2.591,5.545,5.545,0,0,0,.585,2.6,4.194,4.194,0,0,0,1.621,1.727,4.909,4.909,0,0,0,4.72,0"
                      transform="translate(0 0)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24038"
                      data-name="Path 24038"
                      d="M1630.475,793.87v8.5a2.732,2.732,0,0,0,3.012,3.052,3.09,3.09,0,0,0,2.236-.768,3.033,3.033,0,0,0,.8-2.284v-8.5h2.188v8.462a5.1,5.1,0,0,1-.71,2.763,4.407,4.407,0,0,1-1.9,1.689,6.133,6.133,0,0,1-2.628.557,6.069,6.069,0,0,1-2.62-.557,4.3,4.3,0,0,1-1.871-1.689,5.209,5.209,0,0,1-.691-2.763V793.87Z"
                      transform="translate(-3.581 -0.039)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24039"
                      data-name="Path 24039"
                      d="M1653.018,793.87v1.784h-3.55v11.552h-2.187V795.655h-3.569V793.87Z"
                      transform="translate(-6.437 -0.039)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24040"
                      data-name="Path 24040"
                      d="M1657.858,796.959a6.486,6.486,0,0,1,2.475-2.427,7.279,7.279,0,0,1,7.214.173,5.958,5.958,0,0,1,2.409,2.964h-2.629a3.527,3.527,0,0,0-1.44-1.573,4.268,4.268,0,0,0-2.13-.517,4.651,4.651,0,0,0-2.36.595,4.137,4.137,0,0,0-1.621,1.707,6.028,6.028,0,0,0,0,5.181,4.2,4.2,0,0,0,1.621,1.717,4.593,4.593,0,0,0,2.36.6,4.269,4.269,0,0,0,2.13-.518,3.523,3.523,0,0,0,1.44-1.573h2.629a5.906,5.906,0,0,1-2.409,2.955,7,7,0,0,1-3.79,1.036,6.888,6.888,0,0,1-3.435-.873,6.5,6.5,0,0,1-2.466-2.427,7.218,7.218,0,0,1,0-7.023"
                      transform="translate(-8.888 0)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24041"
                      data-name="Path 24041"
                      d="M1678.536,806.429a6.47,6.47,0,0,1-2.475-2.437,7.243,7.243,0,0,1,0-7.033,6.492,6.492,0,0,1,2.475-2.427,7.195,7.195,0,0,1,6.869,0,6.422,6.422,0,0,1,2.466,2.427,7.3,7.3,0,0,1,0,7.033,6.4,6.4,0,0,1-2.466,2.437,7.194,7.194,0,0,1-6.869,0m5.785-1.631a4.194,4.194,0,0,0,1.621-1.727,5.545,5.545,0,0,0,.585-2.6,5.49,5.49,0,0,0-.585-2.591,4.137,4.137,0,0,0-1.621-1.707,4.979,4.979,0,0,0-4.72,0,4.137,4.137,0,0,0-1.621,1.707,5.49,5.49,0,0,0-.585,2.591,5.545,5.545,0,0,0,.585,2.6,4.194,4.194,0,0,0,1.621,1.727,4.909,4.909,0,0,0,4.72,0"
                      transform="translate(-12.259 0)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24042"
                      data-name="Path 24042"
                      d="M1708.553,793.87v13.336h-2.188v-9.134l-4.068,9.134h-1.516l-4.087-9.134v9.134h-2.188V793.87h2.36l4.682,10.457,4.662-10.457Z"
                      transform="translate(-15.844 -0.039)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24043"
                      data-name="Path 24043"
                      d="M1717.465,795.631v3.914h4.605v1.784h-4.605v4.087h5.18V807.2h-7.368V793.847h7.368v1.784Z"
                      transform="translate(-19.69 -0.035)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_24044"
                      data-name="Path 24044"
                      d="M1729.52,806.831a3.954,3.954,0,0,1-1.688-1.334,3.381,3.381,0,0,1-.614-2.014h2.341a2.1,2.1,0,0,0,.681,1.419,2.411,2.411,0,0,0,1.7.557,2.614,2.614,0,0,0,1.766-.547,1.776,1.776,0,0,0,.632-1.41,1.539,1.539,0,0,0-.393-1.094,2.64,2.64,0,0,0-.979-.653,14.859,14.859,0,0,0-1.622-.5,15.182,15.182,0,0,1-2.121-.7,3.488,3.488,0,0,1-1.39-1.1,3.187,3.187,0,0,1-.576-2,3.544,3.544,0,0,1,.576-2.014,3.666,3.666,0,0,1,1.611-1.324,5.854,5.854,0,0,1,2.4-.461,5,5,0,0,1,3.176.97,3.578,3.578,0,0,1,1.372,2.657h-2.419a1.748,1.748,0,0,0-.689-1.247,2.557,2.557,0,0,0-1.67-.518,2.368,2.368,0,0,0-1.534.479,1.673,1.673,0,0,0-.6,1.382,1.4,1.4,0,0,0,.375,1.007,2.646,2.646,0,0,0,.949.624,14.883,14.883,0,0,0,1.574.5,16.431,16.431,0,0,1,2.158.729,3.584,3.584,0,0,1,1.419,1.122,3.228,3.228,0,0,1,.585,2.025,3.642,3.642,0,0,1-.546,1.919,3.95,3.95,0,0,1-1.593,1.449,5.257,5.257,0,0,1-2.466.547,5.966,5.966,0,0,1-2.418-.47"
                      transform="translate(-21.901)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                  </g>
                  <g id="Group_9059" data-name="Group 9059" opacity="0.35">
                    <g id="Group_9058" data-name="Group 9058">
                      <g
                        id="Group_9057"
                        data-name="Group 9057"
                        clipPath="url(#clip-path-6)"
                      >
                        <path
                          id="Path_24045"
                          data-name="Path 24045"
                          d="M1676.976,433.032l43.786-75.839-.926-1.6.926-1.6-43.786-75.838,43.786-75.839-50.375-87.251H1569.638l-50.374,87.251,43.786,75.839-43.786,75.839.925,1.6-.925,1.6,43.786,75.839-43.786,75.839,50.374,87.251h100.749l50.375-87.251Z"
                          fill="#fbc6fd"
                        />
                      </g>
                    </g>
                  </g>
                  <path
                    id="Path_24046"
                    data-name="Path 24046"
                    d="M1659.011,289.645h-78l-39,67.547,39,67.548h78l39-67.548Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_24047"
                    data-name="Path 24047"
                    d="M1659.011,289.645h-78l-39,67.547,39,67.548h78l39-67.548Z"
                    fill="none"
                    stroke="#f157ff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.193"
                  />
                  <path
                    id="Path_24048"
                    data-name="Path 24048"
                    d="M1659.011,444.529h-78l-39,67.547,39,67.548h78l39-67.548Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_24049"
                    data-name="Path 24049"
                    d="M1659.011,444.529h-78l-39,67.547,39,67.548h78l39-67.548Z"
                    fill="none"
                    stroke="#f157ff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.193"
                  />
                  <path
                    id="Path_24050"
                    data-name="Path 24050"
                    d="M1589.05,357.639v2.73h3.379V362.1h-3.379v2.886h3.811v1.778h-5.824V355.86h5.824v1.779Z"
                  />
                  <path
                    id="Path_24051"
                    data-name="Path 24051"
                    d="M1594.673,360.1a3.7,3.7,0,0,1,3.437-2.114,3.716,3.716,0,0,1,2.452.8,3.957,3.957,0,0,1,1.3,2.254h-2.171a1.722,1.722,0,0,0-.583-.882,1.736,1.736,0,0,0-2.379.359,3.905,3.905,0,0,0,0,3.838,1.61,1.61,0,0,0,1.366.678,1.538,1.538,0,0,0,1.6-1.185h2.171a4.036,4.036,0,0,1-1.308,2.231,3.657,3.657,0,0,1-2.445.826,3.7,3.7,0,0,1-3.437-2.113,5.721,5.721,0,0,1,0-4.7"
                  />
                  <path
                    id="Path_24052"
                    data-name="Path 24052"
                    d="M1604.812,366.352a3.836,3.836,0,0,1-1.445-1.568,5.018,5.018,0,0,1-.525-2.34,4.9,4.9,0,0,1,.539-2.34,3.916,3.916,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,3.992,3.992,0,0,1-1.495,1.568,4.083,4.083,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.023,2.023,0,0,0,.769-.866,3.116,3.116,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.895,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.785,2.785,0,0,0-.582,1.895,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_24053"
                    data-name="Path 24053"
                    d="M1619.236,358.973a3.926,3.926,0,0,1,.877,2.722v5.07H1618.1v-4.773a2.363,2.363,0,0,0-.475-1.584,1.616,1.616,0,0,0-1.294-.554,1.655,1.655,0,0,0-1.316.554,2.343,2.343,0,0,0-.482,1.584v4.773h-2.013v-8.642h2.013V359.2a2.84,2.84,0,0,1,1.029-.881,3.168,3.168,0,0,1,3.674.655"
                  />
                  <path
                    id="Path_24054"
                    data-name="Path 24054"
                    d="M1623.493,366.352a3.843,3.843,0,0,1-1.445-1.568,5.006,5.006,0,0,1-.525-2.34,4.9,4.9,0,0,1,.539-2.34,3.915,3.915,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.923,3.923,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.086,4.086,0,0,1-2.107.554,3.936,3.936,0,0,1-2.071-.554m3.1-1.638a2.023,2.023,0,0,0,.769-.866,3.115,3.115,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.895,1.889,1.889,0,0,0-1.46-.663,1.846,1.846,0,0,0-1.445.663,2.785,2.785,0,0,0-.582,1.895,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.972,1.972,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_24055"
                    data-name="Path 24055"
                    d="M1643.46,358.973a3.868,3.868,0,0,1,.9,2.722v5.07h-2.014v-4.773a2.28,2.28,0,0,0-.474-1.553,1.64,1.64,0,0,0-1.294-.538,1.662,1.662,0,0,0-1.3.538,2.257,2.257,0,0,0-.482,1.553v4.773h-2.013v-4.773a2.281,2.281,0,0,0-.474-1.553,1.641,1.641,0,0,0-1.3-.538,1.679,1.679,0,0,0-1.316.538,2.257,2.257,0,0,0-.481,1.553v4.773H1631.2v-8.642h2.014v1.045a2.724,2.724,0,0,1,1-.858,2.914,2.914,0,0,1,1.345-.312,3.241,3.241,0,0,1,1.668.429,2.893,2.893,0,0,1,1.136,1.225,3.1,3.1,0,0,1,2.733-1.654,3.065,3.065,0,0,1,2.365.975"
                  />
                  <path
                    id="Path_24056"
                    data-name="Path 24056"
                    d="M1653.894,358.123l-4.933,12.73h-2.143l1.726-4.306-3.192-8.424h2.257l2.057,6.037,2.085-6.037Z"
                  />
                  <path
                    id="Path_24057"
                    data-name="Path 24057"
                    d="M1576.374,511.907v2.73h3.379v1.732h-3.379v2.886h3.811v1.778h-5.825V510.128h5.825v1.779Z"
                  />
                  <path
                    id="Path_24058"
                    data-name="Path 24058"
                    d="M1588.727,513.241a3.926,3.926,0,0,1,.877,2.722v5.07h-2.013V516.26a2.366,2.366,0,0,0-.474-1.584,1.617,1.617,0,0,0-1.295-.554,1.655,1.655,0,0,0-1.316.554,2.342,2.342,0,0,0-.481,1.584v4.773h-2.014v-8.642h2.014v1.076a2.828,2.828,0,0,1,1.028-.881,3.168,3.168,0,0,1,3.674.655"
                  />
                  <path
                    id="Path_24059"
                    data-name="Path 24059"
                    d="M1594.839,519.02l2.013-6.63h2.143l-2.948,8.642H1593.6l-2.934-8.642h2.158Z"
                  />
                  <path
                    id="Path_24060"
                    data-name="Path 24060"
                    d="M1600.268,510.994a1.356,1.356,0,0,1,0-1.825,1.248,1.248,0,0,1,1.768,0,1.356,1.356,0,0,1,0,1.825,1.248,1.248,0,0,1-1.768,0m1.876,10.039h-2.013v-8.642h2.013Z"
                  />
                  <path
                    id="Path_24061"
                    data-name="Path 24061"
                    d="M1607.156,512.656a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.351,2.351,0,0,0-.482,1.684v4.306h-2.013v-8.642h2.013v1.341a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24062"
                    data-name="Path 24062"
                    d="M1611.405,520.619a3.85,3.85,0,0,1-1.445-1.568,5.019,5.019,0,0,1-.525-2.34,4.915,4.915,0,0,1,.539-2.34,3.915,3.915,0,0,1,1.474-1.568,4.211,4.211,0,0,1,4.172,0,3.936,3.936,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.538,2.34,4.8,4.8,0,0,1-.554,2.34,3.992,3.992,0,0,1-1.495,1.568,4.081,4.081,0,0,1-2.107.554,3.942,3.942,0,0,1-2.071-.554m3.1-1.638a2.037,2.037,0,0,0,.769-.866,3.13,3.13,0,0,0,.287-1.4,2.738,2.738,0,0,0-.6-1.9,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.79,2.79,0,0,0-.582,1.9,2.835,2.835,0,0,0,.568,1.9,1.805,1.805,0,0,0,1.431.663,1.978,1.978,0,0,0,1.029-.289"
                  />
                  <path
                    id="Path_24063"
                    data-name="Path 24063"
                    d="M1625.829,513.241a3.926,3.926,0,0,1,.877,2.722v5.07h-2.013V516.26a2.361,2.361,0,0,0-.475-1.584,1.616,1.616,0,0,0-1.294-.554,1.654,1.654,0,0,0-1.316.554,2.341,2.341,0,0,0-.482,1.584v4.773h-2.013v-8.642h2.013v1.076a2.841,2.841,0,0,1,1.029-.881,3.168,3.168,0,0,1,3.674.655"
                  />
                  <path
                    id="Path_24064"
                    data-name="Path 24064"
                    d="M1640.879,513.241a3.868,3.868,0,0,1,.9,2.722v5.07h-2.013V516.26a2.281,2.281,0,0,0-.475-1.553,1.641,1.641,0,0,0-1.294-.538,1.662,1.662,0,0,0-1.3.538,2.257,2.257,0,0,0-.482,1.553v4.773H1634.2V516.26a2.28,2.28,0,0,0-.474-1.553,1.641,1.641,0,0,0-1.295-.538,1.679,1.679,0,0,0-1.316.538,2.256,2.256,0,0,0-.481,1.553v4.773h-2.014v-8.642h2.014v1.045a2.723,2.723,0,0,1,1-.858,2.914,2.914,0,0,1,1.345-.312,3.242,3.242,0,0,1,1.668.429,2.892,2.892,0,0,1,1.136,1.225,3.1,3.1,0,0,1,2.733-1.654,3.065,3.065,0,0,1,2.365.975"
                  />
                  <path
                    id="Path_24065"
                    data-name="Path 24065"
                    d="M1651.039,517.366h-5.825a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.948,3.948,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.064-.554,3.761,3.761,0,0,1-1.423-1.568,5.129,5.129,0,0,1-.511-2.34,5.226,5.226,0,0,1,.5-2.355,3.678,3.678,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.608,3.608,0,0,1,1.4,1.5,4.871,4.871,0,0,1,.5,2.239,5.611,5.611,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.892,1.892,0,0,0-1.337-.507,1.741,1.741,0,0,0-1.258.491,2.226,2.226,0,0,0-.626,1.365Z"
                  />
                  <path
                    id="Path_24066"
                    data-name="Path 24066"
                    d="M1659.279,513.241a3.926,3.926,0,0,1,.877,2.722v5.07h-2.013V516.26a2.361,2.361,0,0,0-.475-1.584,1.615,1.615,0,0,0-1.294-.554,1.655,1.655,0,0,0-1.316.554,2.342,2.342,0,0,0-.482,1.584v4.773h-2.013v-8.642h2.013v1.076a2.844,2.844,0,0,1,1.028-.881,2.979,2.979,0,0,1,1.374-.32,2.949,2.949,0,0,1,2.3.975"
                  />
                  <path
                    id="Path_24067"
                    data-name="Path 24067"
                    d="M1664.413,514.184v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.655.2h.934v1.84h-1.265q-2.546,0-2.546-2.683v-4.165h-.949V512.39h.949v-2.137h2.028v2.137h1.783v1.794Z"
                  />
                  <path
                    id="Path_24068"
                    data-name="Path 24068"
                    d="M1659.011,134.762h-78l-39,67.547,39,67.548h78l39-67.548Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_24069"
                    data-name="Path 24069"
                    d="M1659.011,134.762h-78l-39,67.547,39,67.548h78l39-67.548Z"
                    fill="none"
                    stroke="#f157ff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.193"
                  />
                  <path
                    id="Path_24070"
                    data-name="Path 24070"
                    d="M1596.636,210.158a3.063,3.063,0,0,1-1.833-2.855h2.157a1.57,1.57,0,0,0,.438,1.061,1.481,1.481,0,0,0,1.086.39,1.579,1.579,0,0,0,1.107-.367,1.234,1.234,0,0,0,.4-.959,1.166,1.166,0,0,0-.273-.8,1.924,1.924,0,0,0-.683-.491,11.02,11.02,0,0,0-1.129-.4,11.438,11.438,0,0,1-1.589-.616,2.831,2.831,0,0,1-1.05-.92,2.781,2.781,0,0,1-.439-1.646,3.128,3.128,0,0,1,.446-1.685,2.9,2.9,0,0,1,1.251-1.1,4.258,4.258,0,0,1,1.841-.382,3.781,3.781,0,0,1,2.524.819,3.125,3.125,0,0,1,1.071,2.285h-2.214a1.291,1.291,0,0,0-.439-.928,1.569,1.569,0,0,0-1.086-.366,1.33,1.33,0,0,0-.942.327,1.237,1.237,0,0,0-.352.952,1.025,1.025,0,0,0,.266.725,2,2,0,0,0,.661.468,11.261,11.261,0,0,0,1.115.414,11.11,11.11,0,0,1,1.6.624,2.925,2.925,0,0,1,1.064.936,2.759,2.759,0,0,1,.446,1.638,3.28,3.28,0,0,1-.417,1.622,3.04,3.04,0,0,1-1.222,1.193,3.894,3.894,0,0,1-1.913.445,4.444,4.444,0,0,1-1.891-.39"
                  />
                  <path
                    id="Path_24071"
                    data-name="Path 24071"
                    d="M1605.287,210.025a3.842,3.842,0,0,1-1.445-1.568,5.005,5.005,0,0,1-.525-2.34,4.9,4.9,0,0,1,.539-2.34,3.916,3.916,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.085,4.085,0,0,1-2.107.554,3.937,3.937,0,0,1-2.071-.554m3.1-1.638a2.023,2.023,0,0,0,.769-.866,3.115,3.115,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.9,1.889,1.889,0,0,0-1.46-.663,1.846,1.846,0,0,0-1.445.663,2.784,2.784,0,0,0-.582,1.9,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_24072"
                    data-name="Path 24072"
                    d="M1612.98,203.77a3.7,3.7,0,0,1,3.437-2.114,3.714,3.714,0,0,1,2.452.8,3.963,3.963,0,0,1,1.3,2.254H1618a1.728,1.728,0,0,0-.582-.882,1.737,1.737,0,0,0-2.38.359,3.905,3.905,0,0,0,0,3.838,1.611,1.611,0,0,0,1.366.678,1.538,1.538,0,0,0,1.6-1.185h2.172a4.036,4.036,0,0,1-1.309,2.23,3.653,3.653,0,0,1-2.445.827,3.7,3.7,0,0,1-3.437-2.113,5.732,5.732,0,0,1,0-4.7"
                  />
                  <path
                    id="Path_24073"
                    data-name="Path 24073"
                    d="M1621.789,200.4a1.356,1.356,0,0,1,0-1.825,1.248,1.248,0,0,1,1.768,0,1.356,1.356,0,0,1,0,1.825,1.248,1.248,0,0,1-1.768,0m1.876,10.039h-2.013V201.8h2.013Z"
                  />
                  <path
                    id="Path_24074"
                    data-name="Path 24074"
                    d="M1633,206.772h-5.824a2.227,2.227,0,0,0,.6,1.467,1.78,1.78,0,0,0,1.308.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.947,3.947,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.763,3.763,0,0,1-1.424-1.568,5.141,5.141,0,0,1-.511-2.34,5.228,5.228,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.6,3.6,0,0,1,1.4,1.5,4.872,4.872,0,0,1,.5,2.239,5.627,5.627,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.236,2.236,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_24075"
                    data-name="Path 24075"
                    d="M1636.867,203.59v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.655.2h.934v1.84h-1.265q-2.546,0-2.546-2.683V203.59h-.949V201.8h.949v-2.137h2.028V201.8h1.783v1.794Z"
                  />
                  <path
                    id="Path_24076"
                    data-name="Path 24076"
                    d="M1647.724,201.8l-4.933,12.73h-2.143l1.726-4.306-3.192-8.424h2.257l2.057,6.037,2.085-6.037Z"
                  />
                  <path
                    id="Path_24077"
                    data-name="Path 24077"
                    d="M1239.316,263.713c0,106.045-85.966,192.011-192.011,192.011s-192.01-85.966-192.01-192.011S941.261,71.7,1047.305,71.7s192.011,85.966,192.011,192.011"
                    fill="#fff"
                  />
                  <g id="Group_9062" data-name="Group 9062" opacity="0.35">
                    <g id="Group_9061" data-name="Group 9061">
                      <g
                        id="Group_9060"
                        data-name="Group 9060"
                        clipPath="url(#clip-path-7)"
                      >
                        <path
                          id="Path_24078"
                          data-name="Path 24078"
                          d="M1239.316,263.713c0,106.045-85.966,192.011-192.011,192.011s-192.01-85.966-192.01-192.011S941.261,71.7,1047.305,71.7s192.011,85.966,192.011,192.011"
                          fill="#ffc919"
                        />
                      </g>
                    </g>
                  </g>
                  <path
                    id="Path_24079"
                    data-name="Path 24079"
                    d="M1060.468,210.078a52.367,52.367,0,1,1-62.707,39.4,52.367,52.367,0,0,1,62.707-39.4"
                    fill="#fff"
                  />
                  <path
                    id="Path_24080"
                    data-name="Path 24080"
                    d="M1060.468,210.078a52.367,52.367,0,1,1-62.707,39.4A52.367,52.367,0,0,1,1060.468,210.078Z"
                    fill="none"
                    stroke="#ffc919"
                    strokeMiterlimit="10"
                    strokeWidth="2.421"
                  />
                  <path
                    id="Path_24081"
                    data-name="Path 24081"
                    d="M1188.58,286.727a52.367,52.367,0,1,1,39.4-62.707,52.367,52.367,0,0,1-39.4,62.707"
                    fill="#fff"
                  />
                  <path
                    id="Path_24082"
                    data-name="Path 24082"
                    d="M1188.58,286.727a52.367,52.367,0,1,1,39.4-62.707A52.367,52.367,0,0,1,1188.58,286.727Z"
                    fill="none"
                    stroke="#ffc919"
                    strokeMiterlimit="10"
                    strokeWidth="2.421"
                  />
                  <path
                    id="Path_24083"
                    data-name="Path 24083"
                    d="M1116.913,383.82a52.376,52.376,0,1,1,73.606-8.293,52.376,52.376,0,0,1-73.606,8.293"
                    fill="#fff"
                  />
                  <path
                    id="Path_24084"
                    data-name="Path 24084"
                    d="M1116.913,383.82a52.376,52.376,0,1,1,73.606-8.293A52.376,52.376,0,0,1,1116.913,383.82Z"
                    fill="none"
                    stroke="#ffc919"
                    strokeMiterlimit="10"
                    strokeWidth="2.421"
                  />
                  <path
                    id="Path_24085"
                    data-name="Path 24085"
                    d="M620.37,170.429a101.544,101.544,0,0,1,7.318,15.584,98.071,98.071,0,0,0-45.261-53.079,100.114,100.114,0,0,1,37.943,37.495"
                    fill="#fff"
                  />
                  <path
                    id="Path_24086"
                    data-name="Path 24086"
                    d="M682.513,415.216l.2-.243A85.994,85.994,0,0,0,696.5,393.02a89.15,89.15,0,0,0,6.766-25.068,90.775,90.775,0,0,0-9.463-52.289l-.547-1.067-1.757-3.134c-.231-.414-.458-.82-.691-1.224a91.1,91.1,0,0,0-38.2-36.092,50.671,50.671,0,0,1-27.793-48.14,90.882,90.882,0,0,0-5.484-36.907,92.9,92.9,0,0,0-6.676-14.217,91.468,91.468,0,0,0-34.542-34.155,88.866,88.866,0,0,0-131.126,70.75l-.037.38-.023.163a90.73,90.73,0,0,0-.878,15.382,50.614,50.614,0,0,1-29.244,47.216,90.518,90.518,0,0,0-24.645,16.748,92.336,92.336,0,0,0-15.059,18.7c-.229.375-.462.764-.715,1.192l-2.13,3.617-.288.531a90.949,90.949,0,0,0-9.625,59.688A88.045,88.045,0,0,0,374.494,403.1a84.134,84.134,0,0,0,19.3,23.067c2.136,1.779,4.388,3.471,6.693,5.031a84.675,84.675,0,0,0,49.989,14.574l.294-.008.294.012c1.277.051,2.537.077,3.75.077a91.1,91.1,0,0,0,50.353-15.03,50.438,50.438,0,0,1,25.669-8.268c.716-.031,1.441-.046,2.155-.046A50.5,50.5,0,0,1,557,428.571l.67.363.6.472a88.944,88.944,0,0,0,93.993,10.025,89.747,89.747,0,0,0,30.252-24.215"
                    fill="#fff"
                  />
                  <g id="Group_9065" data-name="Group 9065" opacity="0.35">
                    <g id="Group_9064" data-name="Group 9064">
                      <g
                        id="Group_9063"
                        data-name="Group 9063"
                        clipPath="url(#clip-path-8)"
                      >
                        <path
                          id="Path_24087"
                          data-name="Path 24087"
                          d="M682.513,415.216l.2-.243A85.994,85.994,0,0,0,696.5,393.02a89.15,89.15,0,0,0,6.766-25.068,90.775,90.775,0,0,0-9.463-52.289l-.547-1.067-1.757-3.134c-.231-.414-.458-.82-.691-1.224a91.1,91.1,0,0,0-38.2-36.092,50.671,50.671,0,0,1-27.793-48.14,90.882,90.882,0,0,0-5.484-36.907,92.9,92.9,0,0,0-6.676-14.217,91.468,91.468,0,0,0-34.542-34.155,88.866,88.866,0,0,0-131.126,70.75l-.037.38-.023.163a90.73,90.73,0,0,0-.878,15.382,50.614,50.614,0,0,1-29.244,47.216,90.518,90.518,0,0,0-24.645,16.748,92.336,92.336,0,0,0-15.059,18.7c-.229.375-.462.764-.715,1.192l-2.13,3.617-.288.531a90.949,90.949,0,0,0-9.625,59.688A88.045,88.045,0,0,0,374.494,403.1a84.134,84.134,0,0,0,19.3,23.067c2.136,1.779,4.388,3.471,6.693,5.031a84.675,84.675,0,0,0,49.989,14.574l.294-.008.294.012c1.277.051,2.537.077,3.75.077a91.1,91.1,0,0,0,50.353-15.03,50.438,50.438,0,0,1,25.669-8.268c.716-.031,1.441-.046,2.155-.046A50.5,50.5,0,0,1,557,428.571l.67.363.6.472a88.944,88.944,0,0,0,93.993,10.025,89.747,89.747,0,0,0,30.252-24.215"
                          fill="#36d77f"
                        />
                      </g>
                    </g>
                  </g>
                  <path
                    id="Path_24088"
                    data-name="Path 24088"
                    d="M610.036,218.733a74.418,74.418,0,1,1-74.417-74.417,74.418,74.418,0,0,1,74.417,74.417"
                    fill="#fff"
                  />
                  <path
                    id="Path_24089"
                    data-name="Path 24089"
                    d="M610.036,218.733a74.418,74.418,0,1,1-74.417-74.417A74.418,74.418,0,0,1,610.036,218.733Z"
                    fill="none"
                    stroke="#36d77f"
                    strokeMiterlimit="10"
                    strokeWidth="2.415"
                  />
                  <path
                    id="Path_24090"
                    data-name="Path 24090"
                    d="M491.181,196.97a5,5,0,0,1,1.826-1.981,4.885,4.885,0,0,1,7.313,2.816h-2.315a2.549,2.549,0,0,0-.971-1.171,2.683,2.683,0,0,0-1.445-.389,2.8,2.8,0,0,0-1.561.444,2.96,2.96,0,0,0-1.064,1.256,4.923,4.923,0,0,0,0,3.8,2.942,2.942,0,0,0,1.064,1.264,2.8,2.8,0,0,0,1.561.445,2.637,2.637,0,0,0,1.445-.4,2.589,2.589,0,0,0,.971-1.178h2.315a4.967,4.967,0,0,1-7.313,2.816,5.012,5.012,0,0,1-1.826-1.974,6.508,6.508,0,0,1,0-5.748"
                  />
                  <path
                    id="Path_24091"
                    data-name="Path 24091"
                    d="M503.513,204.9a3.843,3.843,0,0,1-1.445-1.568,5.018,5.018,0,0,1-.525-2.34,4.915,4.915,0,0,1,.539-2.34,3.922,3.922,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.083,4.083,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.024,2.024,0,0,0,.769-.866,3.115,3.115,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.9,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.785,2.785,0,0,0-.582,1.9,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                  />
                  <rect
                    id="Rectangle_5660"
                    data-name="Rectangle 5660"
                    width="6.098"
                    height="1.841"
                    transform="translate(511.249 198.819)"
                  />
                  <path
                    id="Path_24092"
                    data-name="Path 24092"
                    d="M521.072,204.9a3.842,3.842,0,0,1-1.445-1.568,5.018,5.018,0,0,1-.525-2.34,4.915,4.915,0,0,1,.539-2.34,3.922,3.922,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.083,4.083,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.024,2.024,0,0,0,.769-.866,3.115,3.115,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.9,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.785,2.785,0,0,0-.582,1.9,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_24093"
                    data-name="Path 24093"
                    d="M531.865,196.924a3.033,3.033,0,0,1,1.56-.4,3.282,3.282,0,0,1,1.848.546,3.75,3.75,0,0,1,1.309,1.552,5.347,5.347,0,0,1,.481,2.332,5.447,5.447,0,0,1-.481,2.348,3.855,3.855,0,0,1-1.309,1.584,3.219,3.219,0,0,1-1.848.561,3.012,3.012,0,0,1-1.546-.39,3.387,3.387,0,0,1-1.086-.983v5.351H528.78V196.666h2.013v1.248a3.137,3.137,0,0,1,1.072-.99m2.847,2.683a2.14,2.14,0,0,0-.777-.866,1.956,1.956,0,0,0-1.042-.3,1.888,1.888,0,0,0-1.028.3,2.185,2.185,0,0,0-.777.881,3.271,3.271,0,0,0,0,2.715,2.179,2.179,0,0,0,.777.881,1.893,1.893,0,0,0,2.07-.008,2.243,2.243,0,0,0,.777-.889,2.99,2.99,0,0,0,.3-1.373,2.9,2.9,0,0,0-.3-1.349"
                  />
                  <path
                    id="Path_24094"
                    data-name="Path 24094"
                    d="M539.825,205.067a3.162,3.162,0,0,1-1.231-1.037,2.771,2.771,0,0,1-.495-1.451h2.027a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.986.327,1.447,1.447,0,0,0,.9-.249.774.774,0,0,0,.323-.64.676.676,0,0,0-.4-.632,7.119,7.119,0,0,0-1.258-.46,9.959,9.959,0,0,1-1.459-.484,2.548,2.548,0,0,1-.979-.764,2.168,2.168,0,0,1-.409-1.388,2.368,2.368,0,0,1,.381-1.311,2.606,2.606,0,0,1,1.093-.936,3.826,3.826,0,0,1,1.675-.343,3.248,3.248,0,0,1,2.273.772,2.965,2.965,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.667,1.667,0,0,0-1.784-.086.76.76,0,0,0,.108,1.271,5.94,5.94,0,0,0,1.252.461,10.151,10.151,0,0,1,1.424.483,2.547,2.547,0,0,1,.969.772,2.239,2.239,0,0,1,.425,1.381,2.44,2.44,0,0,1-.381,1.342,2.568,2.568,0,0,1-1.093.928,3.868,3.868,0,0,1-1.661.335,3.913,3.913,0,0,1-1.754-.382"
                  />
                  <path
                    id="Path_24095"
                    data-name="Path 24095"
                    d="M549.754,198.631a3.742,3.742,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.259,3.259,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.838,3.838,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.481-2.348,5.358,5.358,0,0,1,.481-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.948,1.948,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.949,1.949,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24096"
                    data-name="Path 24096"
                    d="M566.257,197.516a3.926,3.926,0,0,1,.877,2.722v5.07h-2.013v-4.773a2.363,2.363,0,0,0-.475-1.584,1.616,1.616,0,0,0-1.294-.554,1.654,1.654,0,0,0-1.316.554,2.344,2.344,0,0,0-.482,1.584v4.773h-2.013v-8.642h2.013v1.076a2.84,2.84,0,0,1,1.029-.881,3.168,3.168,0,0,1,3.674.655"
                  />
                  <path
                    id="Path_24097"
                    data-name="Path 24097"
                    d="M569.01,198.631a3.72,3.72,0,0,1,1.316-1.56,3.314,3.314,0,0,1,1.855-.546,3.168,3.168,0,0,1,1.481.367,3.012,3.012,0,0,1,1.122.975v-4.1h2.042v11.544h-2.042v-1.279a2.815,2.815,0,0,1-1.05,1.03,3.088,3.088,0,0,1-1.567.39,3.23,3.23,0,0,1-1.841-.562,3.814,3.814,0,0,1-1.316-1.583,5.452,5.452,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.947,1.947,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.949,1.949,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24098"
                    data-name="Path 24098"
                    d="M504.319,216.143a3.042,3.042,0,0,1,1.56-.4,3.282,3.282,0,0,1,1.848.546,3.75,3.75,0,0,1,1.309,1.552,5.347,5.347,0,0,1,.481,2.332,5.448,5.448,0,0,1-.481,2.348,3.855,3.855,0,0,1-1.309,1.584,3.219,3.219,0,0,1-1.848.561,3.012,3.012,0,0,1-1.546-.39,3.388,3.388,0,0,1-1.086-.983v5.351h-2.013V215.885h2.013v1.248a3.138,3.138,0,0,1,1.072-.99m2.847,2.683a2.141,2.141,0,0,0-.777-.866,1.956,1.956,0,0,0-1.042-.3,1.888,1.888,0,0,0-1.028.3,2.185,2.185,0,0,0-.777.881,3.271,3.271,0,0,0,0,2.715,2.179,2.179,0,0,0,.777.881,1.893,1.893,0,0,0,2.07-.008,2.244,2.244,0,0,0,.777-.889,2.99,2.99,0,0,0,.3-1.373,2.908,2.908,0,0,0-.3-1.349"
                  />
                  <path
                    id="Path_24099"
                    data-name="Path 24099"
                    d="M514.011,216.151a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.352,2.352,0,0,0-.482,1.684v4.306h-2.013v-8.642H513v1.341a2.959,2.959,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24100"
                    data-name="Path 24100"
                    d="M518.261,224.114a3.836,3.836,0,0,1-1.445-1.568,5.007,5.007,0,0,1-.525-2.34,4.9,4.9,0,0,1,.539-2.34A3.922,3.922,0,0,1,518.3,216.3a4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.807,4.807,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.084,4.084,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.03,2.03,0,0,0,.769-.866,3.116,3.116,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.895,1.89,1.89,0,0,0-1.46-.663,1.848,1.848,0,0,0-1.445.663,2.785,2.785,0,0,0-.582,1.895,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_24101"
                    data-name="Path 24101"
                    d="M525.932,217.851a3.72,3.72,0,0,1,1.316-1.56,3.314,3.314,0,0,1,1.855-.546,3.175,3.175,0,0,1,1.482.367,3.017,3.017,0,0,1,1.121.975v-4.1h2.042v11.544h-2.042v-1.279a2.815,2.815,0,0,1-1.05,1.03,3.088,3.088,0,0,1-1.567.39,3.23,3.23,0,0,1-1.841-.562,3.814,3.814,0,0,1-1.316-1.583,5.451,5.451,0,0,1-.481-2.348,5.359,5.359,0,0,1,.481-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.949,1.949,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24102"
                    data-name="Path 24102"
                    d="M543.24,215.885v8.642h-2.028v-1.091a2.713,2.713,0,0,1-1.014.881,2.944,2.944,0,0,1-1.359.32,3.162,3.162,0,0,1-1.653-.429,2.919,2.919,0,0,1-1.129-1.264,4.457,4.457,0,0,1-.41-1.989v-5.07h2.013v4.758a2.363,2.363,0,0,0,.475,1.584,1.615,1.615,0,0,0,1.294.553,1.634,1.634,0,0,0,1.309-.553,2.368,2.368,0,0,0,.474-1.584v-4.758Z"
                  />
                  <path
                    id="Path_24103"
                    data-name="Path 24103"
                    d="M545.21,217.859a3.7,3.7,0,0,1,3.437-2.114,3.716,3.716,0,0,1,2.452.8,3.963,3.963,0,0,1,1.3,2.254h-2.172a1.727,1.727,0,0,0-.582-.882,1.737,1.737,0,0,0-2.38.359,3.905,3.905,0,0,0,0,3.838,1.61,1.61,0,0,0,1.366.678,1.538,1.538,0,0,0,1.6-1.185H552.4a4.036,4.036,0,0,1-1.309,2.23,3.652,3.652,0,0,1-2.445.827,3.7,3.7,0,0,1-3.437-2.113,5.731,5.731,0,0,1,0-4.7"
                  />
                  <path
                    id="Path_24104"
                    data-name="Path 24104"
                    d="M561.231,220.861h-5.825a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.947,3.947,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.763,3.763,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.227,5.227,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.505,4.872,4.872,0,0,1,.5,2.239,5.626,5.626,0,0,1-.057.842M559.2,219.4a1.8,1.8,0,0,0-.561-1.349,1.894,1.894,0,0,0-1.337-.508,1.745,1.745,0,0,0-1.259.492,2.23,2.23,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_24105"
                    data-name="Path 24105"
                    d="M565.782,216.151a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.352,2.352,0,0,0-.482,1.684v4.306h-2.013v-8.642h2.013v1.341a2.959,2.959,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24106"
                    data-name="Path 24106"
                    d="M487.241,243.333a3.834,3.834,0,0,1-1.445-1.567,5.019,5.019,0,0,1-.525-2.34,4.915,4.915,0,0,1,.539-2.34,3.922,3.922,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,3.99,3.99,0,0,1-1.495,1.567,4.074,4.074,0,0,1-2.107.555,3.931,3.931,0,0,1-2.071-.555m3.1-1.638a2.015,2.015,0,0,0,.769-.865,3.118,3.118,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.895,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.785,2.785,0,0,0-.582,1.895,2.823,2.823,0,0,0,.568,1.894,1.8,1.8,0,0,0,1.431.664,1.962,1.962,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_24107"
                    data-name="Path 24107"
                    d="M497.976,235.37a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.351,2.351,0,0,0-.482,1.684v4.306h-2.013V235.1h2.013v1.341a2.959,2.959,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24108"
                    data-name="Path 24108"
                    d="M505.447,235.346a2.985,2.985,0,0,1,1.065.991V235.1h2.027v8.7a4.965,4.965,0,0,1-.445,2.145,3.482,3.482,0,0,1-1.338,1.5,4.011,4.011,0,0,1-2.157.554,4.354,4.354,0,0,1-2.783-.858,3.243,3.243,0,0,1-1.229-2.34h2a1.6,1.6,0,0,0,.683.944,2.236,2.236,0,0,0,1.272.351,1.883,1.883,0,0,0,1.424-.57,2.4,2.4,0,0,0,.547-1.724v-1.341a3.151,3.151,0,0,1-1.072,1.014,3,3,0,0,1-1.56.406,3.23,3.23,0,0,1-1.841-.562,3.815,3.815,0,0,1-1.316-1.583,5.451,5.451,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325,3.742,3.742,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.136,3.136,0,0,1,1.567.382m.777,2.715a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.123,2.123,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24109"
                    data-name="Path 24109"
                    d="M510.473,237.07a3.742,3.742,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983V235.1h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.838,3.838,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.949,1.949,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.378,3.378,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24110"
                    data-name="Path 24110"
                    d="M526.975,235.955a3.926,3.926,0,0,1,.877,2.722v5.07h-2.013v-4.773a2.363,2.363,0,0,0-.475-1.584,1.616,1.616,0,0,0-1.294-.554,1.654,1.654,0,0,0-1.316.554,2.343,2.343,0,0,0-.482,1.584v4.773h-2.013V235.1h2.013v1.076a2.84,2.84,0,0,1,1.029-.881,3.168,3.168,0,0,1,3.674.655"
                  />
                  <path
                    id="Path_24111"
                    data-name="Path 24111"
                    d="M529.9,233.708a1.356,1.356,0,0,1,0-1.825,1.252,1.252,0,0,1,1.769,0,1.359,1.359,0,0,1,0,1.825,1.249,1.249,0,0,1-1.769,0m1.876,10.039h-2.013V235.1h2.013Z"
                  />
                  <path
                    id="Path_24112"
                    data-name="Path 24112"
                    d="M535.057,243.505a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.445,1.445,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.152,7.152,0,0,0-1.258-.46,9.973,9.973,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.169,2.169,0,0,1-.41-1.388,2.377,2.377,0,0,1,.381-1.311,2.613,2.613,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.246,3.246,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.893,5.893,0,0,0,1.251.461,10.107,10.107,0,0,1,1.424.483,2.542,2.542,0,0,1,.97.772,2.238,2.238,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.559,2.559,0,0,1-1.092.928,3.872,3.872,0,0,1-1.661.335,3.918,3.918,0,0,1-1.755-.382"
                  />
                  <path
                    id="Path_24113"
                    data-name="Path 24113"
                    d="M541.565,237.07a3.735,3.735,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.257,3.257,0,0,1,1.072.983V235.1h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.83,3.83,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.959,1.959,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.951,1.951,0,0,0,1.049-.3,2.123,2.123,0,0,0,.777-.873,3.378,3.378,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24114"
                    data-name="Path 24114"
                    d="M553.7,236.9v4.182a.873.873,0,0,0,.194.632.9.9,0,0,0,.654.195h.935v1.84h-1.265q-2.546,0-2.546-2.683V236.9h-.949V235.1h.949v-2.137H553.7V235.1h1.783V236.9Z"
                  />
                  <path
                    id="Path_24115"
                    data-name="Path 24115"
                    d="M557.067,233.708a1.359,1.359,0,0,1,0-1.825,1.252,1.252,0,0,1,1.769,0,1.359,1.359,0,0,1,0,1.825,1.249,1.249,0,0,1-1.769,0m1.877,10.039h-2.013V235.1h2.013Z"
                  />
                  <path
                    id="Path_24116"
                    data-name="Path 24116"
                    d="M562.4,243.333a3.818,3.818,0,0,1-1.444-1.567,5.006,5.006,0,0,1-.526-2.34,4.9,4.9,0,0,1,.539-2.34,3.922,3.922,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.9,4.9,0,0,1,.539,2.34,4.8,4.8,0,0,1-.554,2.34,3.983,3.983,0,0,1-1.495,1.567,4.074,4.074,0,0,1-2.107.555,3.93,3.93,0,0,1-2.071-.555m3.1-1.638a2.019,2.019,0,0,0,.768-.865,3.1,3.1,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.895,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.785,2.785,0,0,0-.582,1.895,2.823,2.823,0,0,0,.568,1.894,1.8,1.8,0,0,0,1.431.664,1.966,1.966,0,0,0,1.029-.289"
                  />
                  <path
                    id="Path_24117"
                    data-name="Path 24117"
                    d="M576.819,235.955a3.926,3.926,0,0,1,.877,2.722v5.07h-2.013v-4.773a2.363,2.363,0,0,0-.475-1.584,1.616,1.616,0,0,0-1.294-.554,1.654,1.654,0,0,0-1.316.554,2.343,2.343,0,0,0-.482,1.584v4.773H570.1V235.1h2.013v1.076a2.84,2.84,0,0,1,1.029-.881,3.168,3.168,0,0,1,3.674.655"
                  />
                  <path
                    id="Path_24118"
                    data-name="Path 24118"
                    d="M580.9,243.505a3.155,3.155,0,0,1-1.231-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.445,1.445,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.148,7.148,0,0,0-1.258-.46,9.918,9.918,0,0,1-1.459-.484,2.541,2.541,0,0,1-.979-.764,2.168,2.168,0,0,1-.409-1.388,2.376,2.376,0,0,1,.38-1.311,2.615,2.615,0,0,1,1.094-.936,3.825,3.825,0,0,1,1.675-.343,3.244,3.244,0,0,1,2.272.772,2.957,2.957,0,0,1,.935,2.083h-1.927a1.161,1.161,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.893,5.893,0,0,0,1.251.461,10.107,10.107,0,0,1,1.424.483,2.55,2.55,0,0,1,.97.772,2.238,2.238,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.559,2.559,0,0,1-1.092.928,3.872,3.872,0,0,1-1.661.335,3.911,3.911,0,0,1-1.754-.382"
                  />
                  <path
                    id="Path_24119"
                    data-name="Path 24119"
                    d="M529.374,355.59a74.418,74.418,0,1,1-74.418-74.418,74.418,74.418,0,0,1,74.418,74.418"
                    fill="#fff"
                  />
                  <circle
                    id="Ellipse_697"
                    data-name="Ellipse 697"
                    cx="74.418"
                    cy="74.418"
                    r="74.418"
                    transform="translate(380.148 429.616) rotate(-89.698)"
                    fill="none"
                    stroke="#36d77f"
                    strokeMiterlimit="10"
                    strokeWidth="2.415"
                  />
                  <path
                    id="Path_24120"
                    data-name="Path 24120"
                    d="M432.234,327.806a2.913,2.913,0,0,1-1.193,1.232,4.062,4.062,0,0,1-2.05.468h-1.682v4.182H425.3V322.8h3.7a4.173,4.173,0,0,1,1.985.437,2.905,2.905,0,0,1,1.23,1.2,3.784,3.784,0,0,1,.028,3.37m-2.092-.476a1.6,1.6,0,0,0,.4-1.162,1.428,1.428,0,0,0-1.64-1.591h-1.6v3.166h1.6a1.655,1.655,0,0,0,1.237-.413"
                  />
                  <path
                    id="Path_24121"
                    data-name="Path 24121"
                    d="M437.067,325.31a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.938,1.938,0,0,0-1.431.484,2.353,2.353,0,0,0-.482,1.685v4.305H434.04v-8.642h2.013v1.341a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24122"
                    data-name="Path 24122"
                    d="M439.986,323.649a1.359,1.359,0,0,1,0-1.825,1.249,1.249,0,0,1,1.769,0,1.359,1.359,0,0,1,0,1.825,1.252,1.252,0,0,1-1.769,0m1.877,10.038H439.85v-8.642h2.013Z"
                  />
                  <path
                    id="Path_24123"
                    data-name="Path 24123"
                    d="M456.107,325.895a3.868,3.868,0,0,1,.9,2.722v5.07h-2.014v-4.773a2.28,2.28,0,0,0-.474-1.553,1.639,1.639,0,0,0-1.294-.538,1.662,1.662,0,0,0-1.3.538,2.257,2.257,0,0,0-.482,1.553v4.773h-2.013v-4.773a2.275,2.275,0,0,0-.475-1.553,1.638,1.638,0,0,0-1.294-.538,1.679,1.679,0,0,0-1.316.538,2.257,2.257,0,0,0-.481,1.553v4.773h-2.014v-8.642h2.014v1.045a2.716,2.716,0,0,1,1-.858,2.914,2.914,0,0,1,1.345-.312,3.242,3.242,0,0,1,1.668.429,2.9,2.9,0,0,1,1.136,1.225,3.1,3.1,0,0,1,2.732-1.654,3.066,3.066,0,0,1,2.366.975"
                  />
                  <path
                    id="Path_24124"
                    data-name="Path 24124"
                    d="M458.882,327.01a3.742,3.742,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.257,3.257,0,0,1,1.072.983v-1.232H466.7v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.838,3.838,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.481-2.348,5.359,5.359,0,0,1,.481-2.325m5.5.991a2.132,2.132,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.123,2.123,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24125"
                    data-name="Path 24125"
                    d="M471.7,325.31a2.648,2.648,0,0,1,1.431-.39v2.293H472.6a1.938,1.938,0,0,0-1.431.484,2.353,2.353,0,0,0-.482,1.685v4.305h-2.013v-8.642h2.013v1.341a2.959,2.959,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24126"
                    data-name="Path 24126"
                    d="M482.1,325.045l-4.933,12.73h-2.142l1.725-4.306-3.192-8.424h2.257l2.057,6.037,2.085-6.037Z"
                  />
                  <path
                    id="Path_24127"
                    data-name="Path 24127"
                    d="M419.738,344.522a3.042,3.042,0,0,1,1.56-.4,3.284,3.284,0,0,1,1.848.546,3.75,3.75,0,0,1,1.309,1.552,5.347,5.347,0,0,1,.481,2.332,5.448,5.448,0,0,1-.481,2.348,3.855,3.855,0,0,1-1.309,1.584,3.221,3.221,0,0,1-1.848.561,3.012,3.012,0,0,1-1.546-.39,3.388,3.388,0,0,1-1.086-.983v5.351h-2.013V344.264h2.013v1.248a3.138,3.138,0,0,1,1.072-.99m2.847,2.683a2.148,2.148,0,0,0-.777-.866,1.956,1.956,0,0,0-1.042-.3,1.888,1.888,0,0,0-1.028.3,2.185,2.185,0,0,0-.777.881,3.271,3.271,0,0,0,0,2.715,2.178,2.178,0,0,0,.777.881,1.893,1.893,0,0,0,2.07-.008,2.251,2.251,0,0,0,.777-.889,2.99,2.99,0,0,0,.3-1.373,2.908,2.908,0,0,0-.3-1.349"
                  />
                  <path
                    id="Path_24128"
                    data-name="Path 24128"
                    d="M429.431,344.529a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.352,2.352,0,0,0-.482,1.684v4.306H426.4v-8.642h2.013v1.341a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24129"
                    data-name="Path 24129"
                    d="M433.68,352.493a3.843,3.843,0,0,1-1.445-1.568,5.018,5.018,0,0,1-.525-2.34,4.9,4.9,0,0,1,.539-2.34,3.915,3.915,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.083,4.083,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.024,2.024,0,0,0,.769-.866,3.115,3.115,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.895,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.785,2.785,0,0,0-.582,1.895,2.83,2.83,0,0,0,.568,1.9,1.806,1.806,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_24130"
                    data-name="Path 24130"
                    d="M441.352,346.229a3.72,3.72,0,0,1,1.316-1.56,3.314,3.314,0,0,1,1.855-.546,3.175,3.175,0,0,1,1.482.367,3.017,3.017,0,0,1,1.121.975v-4.1h2.042v11.544h-2.042v-1.279a2.815,2.815,0,0,1-1.05,1.03,3.088,3.088,0,0,1-1.567.39,3.23,3.23,0,0,1-1.841-.562,3.814,3.814,0,0,1-1.316-1.583,5.451,5.451,0,0,1-.481-2.348,5.359,5.359,0,0,1,.481-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24131"
                    data-name="Path 24131"
                    d="M458.66,344.264v8.643h-2.028v-1.092a2.713,2.713,0,0,1-1.014.881,2.945,2.945,0,0,1-1.359.32,3.162,3.162,0,0,1-1.653-.429,2.92,2.92,0,0,1-1.129-1.264,4.457,4.457,0,0,1-.41-1.989v-5.07h2.013v4.758a2.363,2.363,0,0,0,.475,1.584,1.615,1.615,0,0,0,1.294.553,1.634,1.634,0,0,0,1.309-.553,2.368,2.368,0,0,0,.474-1.584v-4.758Z"
                  />
                  <path
                    id="Path_24132"
                    data-name="Path 24132"
                    d="M460.63,346.238a3.7,3.7,0,0,1,3.437-2.114,3.716,3.716,0,0,1,2.452.8,3.963,3.963,0,0,1,1.3,2.254h-2.172a1.727,1.727,0,0,0-.582-.882,1.737,1.737,0,0,0-2.38.359,3.905,3.905,0,0,0,0,3.838,1.61,1.61,0,0,0,1.366.678,1.538,1.538,0,0,0,1.6-1.185h2.172a4.036,4.036,0,0,1-1.309,2.23,3.652,3.652,0,0,1-2.445.827,3.7,3.7,0,0,1-3.437-2.113,5.732,5.732,0,0,1,0-4.7"
                  />
                  <path
                    id="Path_24133"
                    data-name="Path 24133"
                    d="M476.65,349.24h-5.825a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.948,3.948,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.763,3.763,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.227,5.227,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.395,1.505,4.872,4.872,0,0,1,.5,2.239,5.622,5.622,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.894,1.894,0,0,0-1.337-.508,1.745,1.745,0,0,0-1.259.492,2.23,2.23,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_24134"
                    data-name="Path 24134"
                    d="M481.2,344.529a2.648,2.648,0,0,1,1.431-.39v2.293H482.1a1.934,1.934,0,0,0-1.431.484,2.352,2.352,0,0,0-.482,1.684v4.306h-2.013v-8.642h2.013v1.341a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24135"
                    data-name="Path 24135"
                    d="M485.278,352.665a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.445,1.445,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.152,7.152,0,0,0-1.258-.46,9.977,9.977,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.246,3.246,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.893,5.893,0,0,0,1.251.461,10.105,10.105,0,0,1,1.424.483,2.542,2.542,0,0,1,.97.772,2.239,2.239,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.559,2.559,0,0,1-1.092.928,3.872,3.872,0,0,1-1.661.335,3.918,3.918,0,0,1-1.755-.382"
                  />
                  <path
                    id="Path_24136"
                    data-name="Path 24136"
                    d="M418.436,371.455a15.155,15.155,0,0,1-.769-4.883,15.349,15.349,0,0,1,.8-5.015,9.616,9.616,0,0,1,2.344-3.846h2.028v.2a10.9,10.9,0,0,0-2.409,3.931,13.842,13.842,0,0,0-.827,4.727,13.574,13.574,0,0,0,.784,4.579,11.384,11.384,0,0,0,2.236,3.83v.218H420.6a9.974,9.974,0,0,1-2.164-3.744"
                  />
                  <path
                    id="Path_24137"
                    data-name="Path 24137"
                    d="M424.059,365.449a3.735,3.735,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.647,1.4,3.193,3.193,0,0,1-1.833-.562,3.83,3.83,0,0,1-1.309-1.583,5.452,5.452,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.959,1.959,0,0,0-1.049-.3,1.915,1.915,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.951,1.951,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24138"
                    data-name="Path 24138"
                    d="M440.561,364.333a3.931,3.931,0,0,1,.877,2.723v5.07h-2.013v-4.773a2.363,2.363,0,0,0-.475-1.584,1.616,1.616,0,0,0-1.294-.554,1.655,1.655,0,0,0-1.316.554,2.344,2.344,0,0,0-.482,1.584v4.773h-2.013v-8.642h2.013v1.076a2.84,2.84,0,0,1,1.029-.881,3.17,3.17,0,0,1,3.674.654"
                  />
                  <path
                    id="Path_24139"
                    data-name="Path 24139"
                    d="M443.315,365.449a3.72,3.72,0,0,1,1.316-1.56,3.314,3.314,0,0,1,1.855-.546,3.175,3.175,0,0,1,1.482.367,3.017,3.017,0,0,1,1.121.975v-4.1h2.042v11.544h-2.042v-1.279a2.819,2.819,0,0,1-1.049,1.03,3.1,3.1,0,0,1-1.568.39,3.23,3.23,0,0,1-1.841-.562,3.814,3.814,0,0,1-1.316-1.583,5.451,5.451,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.138,2.138,0,0,0-.776-.874,1.962,1.962,0,0,0-1.05-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.861,1.861,0,0,0,1.029.312,1.954,1.954,0,0,0,1.05-.3,2.129,2.129,0,0,0,.776-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24140"
                    data-name="Path 24140"
                    d="M456.488,365.449a3.72,3.72,0,0,1,1.316-1.56,3.314,3.314,0,0,1,1.855-.546,3.175,3.175,0,0,1,1.482.367,3.017,3.017,0,0,1,1.121.975v-4.1H464.3v11.544h-2.042v-1.279a2.815,2.815,0,0,1-1.05,1.03,3.088,3.088,0,0,1-1.567.39,3.23,3.23,0,0,1-1.841-.562,3.814,3.814,0,0,1-1.316-1.583,5.451,5.451,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.915,1.915,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.949,1.949,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24141"
                    data-name="Path 24141"
                    d="M466.238,365.449a3.742,3.742,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.838,3.838,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.915,1.915,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.949,1.949,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24142"
                    data-name="Path 24142"
                    d="M478.369,365.277v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.654.2h.935v1.84h-1.265q-2.545,0-2.546-2.683v-4.165h-.949v-1.794h.949v-2.137h2.028v2.137h1.783v1.794Z"
                  />
                  <path
                    id="Path_24143"
                    data-name="Path 24143"
                    d="M481.568,365.449a3.742,3.742,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.838,3.838,0,0,1-1.309-1.583,5.452,5.452,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24144"
                    data-name="Path 24144"
                    d="M422.736,391.1a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.444,1.444,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.152,7.152,0,0,0-1.258-.46,9.974,9.974,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.245,3.245,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.892,5.892,0,0,0,1.251.461,10.109,10.109,0,0,1,1.424.483,2.55,2.55,0,0,1,.97.772,2.238,2.238,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.555,2.555,0,0,1-1.093.928,3.866,3.866,0,0,1-1.661.335,3.917,3.917,0,0,1-1.754-.382"
                  />
                  <path
                    id="Path_24145"
                    data-name="Path 24145"
                    d="M436.8,382.7v8.642h-2.028v-1.091a2.7,2.7,0,0,1-1.014.881,2.945,2.945,0,0,1-1.359.32,3.171,3.171,0,0,1-1.653-.428,2.922,2.922,0,0,1-1.129-1.265,4.454,4.454,0,0,1-.41-1.989V382.7h2.013v4.759a2.359,2.359,0,0,0,.475,1.582,1.609,1.609,0,0,0,1.294.554,1.628,1.628,0,0,0,1.309-.554,2.365,2.365,0,0,0,.474-1.582V382.7Z"
                  />
                  <path
                    id="Path_24146"
                    data-name="Path 24146"
                    d="M441.871,382.952a3.088,3.088,0,0,1,1.56-.39,3.284,3.284,0,0,1,1.848.546,3.75,3.75,0,0,1,1.309,1.552,5.347,5.347,0,0,1,.481,2.332,5.448,5.448,0,0,1-.481,2.348,3.846,3.846,0,0,1-1.309,1.583,3.215,3.215,0,0,1-1.848.562,3.062,3.062,0,0,1-2.632-1.373v1.233h-2.013V379.8H440.8v4.165a2.964,2.964,0,0,1,1.072-1.014m2.847,2.691a2.148,2.148,0,0,0-.777-.866,1.956,1.956,0,0,0-1.042-.3,1.888,1.888,0,0,0-1.028.3,2.185,2.185,0,0,0-.777.881,3.271,3.271,0,0,0,0,2.715,2.179,2.179,0,0,0,.777.881,1.893,1.893,0,0,0,2.07-.008,2.251,2.251,0,0,0,.777-.889,2.99,2.99,0,0,0,.3-1.373,2.9,2.9,0,0,0-.3-1.349"
                  />
                  <path
                    id="Path_24147"
                    data-name="Path 24147"
                    d="M450.549,392.764a2.779,2.779,0,0,1-.654,2.067,2.6,2.6,0,0,1-1.877.632h-.892v-1.856h.576a.876.876,0,0,0,.647-.2.893.893,0,0,0,.187-.631V382.7h2.013Zm-1.891-11.458a1.359,1.359,0,0,1,0-1.825,1.19,1.19,0,0,1,.9-.367,1.151,1.151,0,0,1,.877.367,1.379,1.379,0,0,1,0,1.825,1.155,1.155,0,0,1-.877.367,1.194,1.194,0,0,1-.9-.367"
                  />
                  <path
                    id="Path_24148"
                    data-name="Path 24148"
                    d="M459.883,387.679h-5.825a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.948,3.948,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.756,3.756,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.24,5.24,0,0,1,.5-2.355,3.688,3.688,0,0,1,1.41-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.395,1.505,4.872,4.872,0,0,1,.5,2.239,5.622,5.622,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.23,2.23,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_24149"
                    data-name="Path 24149"
                    d="M461.392,384.676a3.7,3.7,0,0,1,3.437-2.114,3.716,3.716,0,0,1,2.452.8,3.963,3.963,0,0,1,1.3,2.254h-2.172a1.727,1.727,0,0,0-.582-.882,1.737,1.737,0,0,0-2.38.359,3.905,3.905,0,0,0,0,3.838,1.61,1.61,0,0,0,1.366.678,1.538,1.538,0,0,0,1.6-1.185h2.172a4.036,4.036,0,0,1-1.309,2.23,3.652,3.652,0,0,1-2.445.827,3.7,3.7,0,0,1-3.437-2.113,5.732,5.732,0,0,1,0-4.7"
                  />
                  <path
                    id="Path_24150"
                    data-name="Path 24150"
                    d="M472.408,384.5v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.654.2h.935v1.84h-1.265q-2.545,0-2.546-2.683V384.5h-.949V382.7h.949v-2.137h2.028V382.7h1.783V384.5Z"
                  />
                  <path
                    id="Path_24151"
                    data-name="Path 24151"
                    d="M476.938,391.1a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.444,1.444,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.152,7.152,0,0,0-1.258-.46,9.974,9.974,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.246,3.246,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.892,5.892,0,0,0,1.251.461,10.109,10.109,0,0,1,1.424.483,2.543,2.543,0,0,1,.97.772,2.239,2.239,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.559,2.559,0,0,1-1.092.928,3.872,3.872,0,0,1-1.661.335,3.918,3.918,0,0,1-1.755-.382"
                  />
                  <path
                    id="Path_24152"
                    data-name="Path 24152"
                    d="M482.963,394.418V394.2a11.384,11.384,0,0,0,2.236-3.83,13.575,13.575,0,0,0,.784-4.579,13.842,13.842,0,0,0-.827-4.727,10.887,10.887,0,0,0-2.409-3.931v-.2h2.028a9.616,9.616,0,0,1,2.344,3.846,15.348,15.348,0,0,1,.805,5.015,15.155,15.155,0,0,1-.769,4.883,9.974,9.974,0,0,1-2.164,3.744Z"
                  />
                  <path
                    id="Path_24153"
                    data-name="Path 24153"
                    d="M687.644,356.029a74.417,74.417,0,1,1-74.418-74.418,74.418,74.418,0,0,1,74.418,74.418"
                    fill="#fff"
                  />
                  <circle
                    id="Ellipse_698"
                    data-name="Ellipse 698"
                    cx="74.418"
                    cy="74.418"
                    r="74.418"
                    transform="translate(538.426 430.063) rotate(-89.705)"
                    fill="none"
                    stroke="#36d77f"
                    strokeMiterlimit="10"
                    strokeWidth="2.415"
                  />
                  <path
                    id="Path_24154"
                    data-name="Path 24154"
                    d="M567.222,352.737a5,5,0,0,1,1.826-1.981,4.885,4.885,0,0,1,7.313,2.816h-2.315a2.549,2.549,0,0,0-.971-1.171,2.683,2.683,0,0,0-1.445-.389,2.8,2.8,0,0,0-1.561.444,2.96,2.96,0,0,0-1.064,1.256,4.923,4.923,0,0,0,0,3.8,2.942,2.942,0,0,0,1.064,1.264,2.8,2.8,0,0,0,1.561.445,2.637,2.637,0,0,0,1.445-.4,2.589,2.589,0,0,0,.971-1.178h2.315a4.967,4.967,0,0,1-7.313,2.816,5.016,5.016,0,0,1-1.826-1.973,6.51,6.51,0,0,1,0-5.749"
                  />
                  <path
                    id="Path_24155"
                    data-name="Path 24155"
                    d="M585.436,357.409h-5.825a2.237,2.237,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.947,3.947,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.762,3.762,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.227,5.227,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.505,4.872,4.872,0,0,1,.5,2.239,5.618,5.618,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.231,2.231,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_24156"
                    data-name="Path 24156"
                    d="M589.987,352.7a2.648,2.648,0,0,1,1.431-.39V354.6h-.532a1.934,1.934,0,0,0-1.431.484,2.351,2.351,0,0,0-.482,1.684v4.306H586.96v-8.642h2.013v1.341a2.959,2.959,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24157"
                    data-name="Path 24157"
                    d="M595.114,354.227v4.181a.873.873,0,0,0,.194.632.9.9,0,0,0,.654.195h.935v1.84h-1.265q-2.546,0-2.546-2.683v-4.165h-.949v-1.794h.949V350.3h2.028v2.137H596.9v1.794Z"
                  />
                  <path
                    id="Path_24158"
                    data-name="Path 24158"
                    d="M598.486,351.036a1.359,1.359,0,0,1,0-1.825,1.252,1.252,0,0,1,1.769,0,1.359,1.359,0,0,1,0,1.825,1.249,1.249,0,0,1-1.769,0m1.877,10.039H598.35v-8.642h2.013Z"
                  />
                  <path
                    id="Path_24159"
                    data-name="Path 24159"
                    d="M606,354.227h-1.4v6.848h-2.042v-6.848h-.906v-1.794h.906V352a2.993,2.993,0,0,1,.834-2.34,3.517,3.517,0,0,1,2.517-.7V350.8a1.061,1.061,0,0,0-1.309,1.279v.359H606Z"
                  />
                  <path
                    id="Path_24160"
                    data-name="Path 24160"
                    d="M607.445,351.036a1.359,1.359,0,0,1,0-1.825,1.252,1.252,0,0,1,1.769,0,1.359,1.359,0,0,1,0,1.825,1.249,1.249,0,0,1-1.769,0m1.877,10.039h-2.013v-8.642h2.013Z"
                  />
                  <path
                    id="Path_24161"
                    data-name="Path 24161"
                    d="M611.292,354.406a3.7,3.7,0,0,1,3.437-2.114,3.716,3.716,0,0,1,2.452.8,3.963,3.963,0,0,1,1.3,2.254h-2.172a1.727,1.727,0,0,0-.582-.882,1.737,1.737,0,0,0-2.38.359,3.905,3.905,0,0,0,0,3.838,1.61,1.61,0,0,0,1.366.678,1.538,1.538,0,0,0,1.6-1.185h2.172a4.036,4.036,0,0,1-1.309,2.23,3.653,3.653,0,0,1-2.445.827,3.7,3.7,0,0,1-3.437-2.113,5.732,5.732,0,0,1,0-4.7"
                  />
                  <path
                    id="Path_24162"
                    data-name="Path 24162"
                    d="M619.928,354.4a3.742,3.742,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.257,3.257,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.838,3.838,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.481-2.348,5.359,5.359,0,0,1,.481-2.325m5.5.991a2.132,2.132,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.123,2.123,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24163"
                    data-name="Path 24163"
                    d="M632.058,354.227v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.655.195h.934v1.84h-1.265q-2.545,0-2.546-2.683v-4.165h-.949v-1.794h.949V350.3h2.028v2.137h1.783v1.794Z"
                  />
                  <path
                    id="Path_24164"
                    data-name="Path 24164"
                    d="M635.43,351.036a1.359,1.359,0,0,1,0-1.825,1.252,1.252,0,0,1,1.769,0,1.359,1.359,0,0,1,0,1.825,1.249,1.249,0,0,1-1.769,0m1.877,10.039h-2.013v-8.642h2.013Z"
                  />
                  <path
                    id="Path_24165"
                    data-name="Path 24165"
                    d="M640.758,360.661a3.834,3.834,0,0,1-1.445-1.567,5.018,5.018,0,0,1-.525-2.34,4.915,4.915,0,0,1,.539-2.34,3.922,3.922,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.807,4.807,0,0,1-.554,2.34,3.99,3.99,0,0,1-1.5,1.567,4.074,4.074,0,0,1-2.107.555,3.931,3.931,0,0,1-2.071-.555m3.1-1.638a2.015,2.015,0,0,0,.769-.865,3.118,3.118,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.895,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.785,2.785,0,0,0-.582,1.895,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.963,1.963,0,0,0,1.028-.29"
                  />
                  <path
                    id="Path_24166"
                    data-name="Path 24166"
                    d="M655.182,353.283a3.926,3.926,0,0,1,.877,2.722v5.07h-2.013V356.3a2.363,2.363,0,0,0-.475-1.584,1.616,1.616,0,0,0-1.294-.554,1.655,1.655,0,0,0-1.316.554,2.344,2.344,0,0,0-.482,1.584v4.773h-2.013v-8.642h2.013v1.076a2.84,2.84,0,0,1,1.029-.881,3.168,3.168,0,0,1,3.674.655"
                  />
                  <path
                    id="Path_24167"
                    data-name="Path 24167"
                    d="M592.612,371.9a3.088,3.088,0,0,1,1.56-.39,3.282,3.282,0,0,1,1.848.546,3.75,3.75,0,0,1,1.309,1.552,5.347,5.347,0,0,1,.481,2.332,5.447,5.447,0,0,1-.481,2.348,3.855,3.855,0,0,1-1.309,1.584,3.219,3.219,0,0,1-1.848.561,3.062,3.062,0,0,1-2.632-1.373v1.233h-2.013V368.75h2.013v4.165a2.964,2.964,0,0,1,1.072-1.014m2.847,2.691a2.14,2.14,0,0,0-.777-.866,1.956,1.956,0,0,0-1.042-.3,1.888,1.888,0,0,0-1.028.3,2.185,2.185,0,0,0-.777.881,3.27,3.27,0,0,0,0,2.715,2.178,2.178,0,0,0,.777.881,1.893,1.893,0,0,0,2.07-.008,2.243,2.243,0,0,0,.777-.889,2.99,2.99,0,0,0,.3-1.373,2.907,2.907,0,0,0-.3-1.349"
                  />
                  <path
                    id="Path_24168"
                    data-name="Path 24168"
                    d="M600.744,379.881a3.836,3.836,0,0,1-1.445-1.568,5.006,5.006,0,0,1-.525-2.34,4.9,4.9,0,0,1,.539-2.34,3.922,3.922,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.083,4.083,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.03,2.03,0,0,0,.769-.866,3.115,3.115,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.895,1.889,1.889,0,0,0-1.46-.663,1.848,1.848,0,0,0-1.445.663,2.785,2.785,0,0,0-.582,1.895,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.972,1.972,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_24169"
                    data-name="Path 24169"
                    d="M608.416,373.617a3.72,3.72,0,0,1,1.316-1.56,3.314,3.314,0,0,1,1.855-.546,3.175,3.175,0,0,1,1.482.367,3.017,3.017,0,0,1,1.121.975v-4.1h2.042v11.544H614.19v-1.279a2.815,2.815,0,0,1-1.05,1.03,3.088,3.088,0,0,1-1.567.39,3.23,3.23,0,0,1-1.841-.562,3.814,3.814,0,0,1-1.316-1.583,5.451,5.451,0,0,1-.481-2.348,5.358,5.358,0,0,1,.481-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24170"
                    data-name="Path 24170"
                    d="M618.339,370.256a1.357,1.357,0,0,1,0-1.826,1.252,1.252,0,0,1,1.769,0,1.36,1.36,0,0,1,0,1.826,1.252,1.252,0,0,1-1.769,0m1.876,10.038H618.2v-8.643h2.013Z"
                  />
                  <path
                    id="Path_24171"
                    data-name="Path 24171"
                    d="M629.549,376.628h-5.825a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.948,3.948,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.763,3.763,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.227,5.227,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.395,1.505,4.872,4.872,0,0,1,.5,2.239,5.626,5.626,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.23,2.23,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_24172"
                    data-name="Path 24172"
                    d="M632.367,380.052a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.444,1.444,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.153,7.153,0,0,0-1.258-.46,9.971,9.971,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.169,2.169,0,0,1-.41-1.388,2.377,2.377,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.246,3.246,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.894,5.894,0,0,0,1.251.461,10.109,10.109,0,0,1,1.424.483,2.542,2.542,0,0,1,.97.772,2.238,2.238,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.559,2.559,0,0,1-1.092.928,3.872,3.872,0,0,1-1.661.335,3.918,3.918,0,0,1-1.755-.382"
                  />
                  <path
                    id="Path_24173"
                    data-name="Path 24173"
                    d="M1422.247,312.018c.3-1.412.57-2.907.815-4.444l.018-.106a91.285,91.285,0,0,0-3.958-46.427h0a47.79,47.79,0,0,1-1.658-5.745,88.414,88.414,0,0,0-54.594-48.762l-.158-.05c-.33-.11-.629-.2-.916-.287a88.93,88.93,0,0,0-9.221-2.161l-.083-.015c-.3-.053-.6-.1-.894-.154-.222-.038-.435-.072-.649-.106l-.309-.05a88.234,88.234,0,0,0-61.01,12.887,91.174,91.174,0,0,0-38.247,50.345v.006l-.061.2c-.446,1.473-.858,2.969-1.226,4.447-.639,2.561-1.177,5.207-1.6,7.866l-.017.106A91.268,91.268,0,0,0,1252.434,326a47.983,47.983,0,0,1,2.279,23.073l-.043.258a48.218,48.218,0,0,1-14.853,26.795A91.041,91.041,0,0,0,1212.7,421.63c-.283,1.135-.547,2.287-.784,3.422-.3,1.412-.571,2.907-.816,4.444l-.017.107a91.26,91.26,0,0,0,3.958,46.426,47.72,47.72,0,0,1,1.658,5.745,88.414,88.414,0,0,0,54.594,48.762l.161.051c.32.107.627.2.915.287a89.277,89.277,0,0,0,9.219,2.161l.1.017c.281.05.579.1.876.152l.652.106.312.05a88.234,88.234,0,0,0,61.005-12.887,91.171,91.171,0,0,0,38.246-50.345v-.006l.061-.2c.446-1.472.859-2.968,1.227-4.446.638-2.562,1.177-5.208,1.6-7.866l.018-.106a91.277,91.277,0,0,0-3.958-46.428,48,48,0,0,1-2.28-23.074l.043-.257a48.214,48.214,0,0,1,14.854-26.8,91.054,91.054,0,0,0,27.114-45.508c.282-1.131.546-2.282.785-3.422"
                    fill="#fff"
                  />
                  <g id="Group_9068" data-name="Group 9068" opacity="0.35">
                    <g id="Group_9067" data-name="Group 9067">
                      <g
                        id="Group_9066"
                        data-name="Group 9066"
                        clipPath="url(#clip-path-9)"
                      >
                        <path
                          id="Path_24174"
                          data-name="Path 24174"
                          d="M1422.247,312.018c.3-1.412.57-2.907.815-4.444l.018-.106a91.285,91.285,0,0,0-3.958-46.427h0a47.79,47.79,0,0,1-1.658-5.745,88.414,88.414,0,0,0-54.594-48.762l-.158-.05c-.33-.11-.629-.2-.916-.287a88.93,88.93,0,0,0-9.221-2.161l-.083-.015c-.3-.053-.6-.1-.894-.154-.222-.038-.435-.072-.649-.106l-.309-.05a88.234,88.234,0,0,0-61.01,12.887,91.174,91.174,0,0,0-38.247,50.345v.006l-.061.2c-.446,1.473-.858,2.969-1.226,4.447-.639,2.561-1.177,5.207-1.6,7.866l-.017.106A91.268,91.268,0,0,0,1252.434,326a47.983,47.983,0,0,1,2.279,23.073l-.043.258a48.218,48.218,0,0,1-14.853,26.795A91.041,91.041,0,0,0,1212.7,421.63c-.283,1.135-.547,2.287-.784,3.422-.3,1.412-.571,2.907-.816,4.444l-.017.107a91.26,91.26,0,0,0,3.958,46.426,47.72,47.72,0,0,1,1.658,5.745,88.414,88.414,0,0,0,54.594,48.762l.161.051c.32.107.627.2.915.287a89.277,89.277,0,0,0,9.219,2.161l.1.017c.281.05.579.1.876.152l.652.106.312.05a88.234,88.234,0,0,0,61.005-12.887,91.171,91.171,0,0,0,38.246-50.345v-.006l.061-.2c.446-1.472.859-2.968,1.227-4.446.638-2.562,1.177-5.208,1.6-7.866l.018-.106a91.277,91.277,0,0,0-3.958-46.428,48,48,0,0,1-2.28-23.074l.043-.257a48.214,48.214,0,0,1,14.854-26.8,91.054,91.054,0,0,0,27.114-45.508c.282-1.131.546-2.282.785-3.422"
                          fill="#ffc919"
                        />
                      </g>
                    </g>
                  </g>
                  <path
                    id="Path_24175"
                    data-name="Path 24175"
                    d="M1372.6,446.016a74.418,74.418,0,1,1-74.419-74.418,74.419,74.419,0,0,1,74.419,74.418"
                    fill="#fff"
                  />
                  <circle
                    id="Ellipse_699"
                    data-name="Ellipse 699"
                    cx="74.418"
                    cy="74.418"
                    r="74.418"
                    transform="translate(1223.375 520.041) rotate(-89.698)"
                    fill="none"
                    stroke="#ffc919"
                    strokeMiterlimit="10"
                    strokeWidth="2.415"
                  />
                  <path
                    id="Path_24176"
                    data-name="Path 24176"
                    d="M1410.276,291.27a74.417,74.417,0,1,1-74.418-74.418,74.418,74.418,0,0,1,74.418,74.418"
                    fill="#fff"
                  />
                  <circle
                    id="Ellipse_700"
                    data-name="Ellipse 700"
                    cx="74.418"
                    cy="74.418"
                    r="74.418"
                    transform="translate(1260.684 364.924) rotate(-89.415)"
                    fill="none"
                    stroke="#ffc919"
                    strokeMiterlimit="10"
                    strokeWidth="2.415"
                  />
                  <path
                    id="Path_24177"
                    data-name="Path 24177"
                    d="M1325.144,287.885v10.889h-2.013v-7.083l-2.69,7.083h-1.524l-2.7-7.083v7.083H1314.2V287.885h2.287l3.192,8.1,3.193-8.1Z"
                  />
                  <path
                    id="Path_24178"
                    data-name="Path 24178"
                    d="M1334.478,295.108h-5.825a2.24,2.24,0,0,0,.6,1.467,1.786,1.786,0,0,0,1.309.53,1.636,1.636,0,0,0,1.6-1.045h2.171a3.948,3.948,0,0,1-1.323,2.051,3.657,3.657,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.763,3.763,0,0,1-1.424-1.568,5.141,5.141,0,0,1-.511-2.34,5.228,5.228,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.608,3.608,0,0,1,1.395,1.505,4.871,4.871,0,0,1,.5,2.239,5.626,5.626,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.741,1.741,0,0,0-1.258.491,2.226,2.226,0,0,0-.626,1.365Z"
                  />
                  <path
                    id="Path_24179"
                    data-name="Path 24179"
                    d="M1335.965,292.1a3.721,3.721,0,0,1,1.316-1.56,3.321,3.321,0,0,1,1.855-.546,3.179,3.179,0,0,1,1.483.367,3.017,3.017,0,0,1,1.121.975v-4.1h2.041v11.544h-2.041v-1.279a2.827,2.827,0,0,1-1.049,1.03,3.1,3.1,0,0,1-1.569.39,3.234,3.234,0,0,1-1.841-.562,3.815,3.815,0,0,1-1.316-1.583,5.466,5.466,0,0,1-.481-2.348,5.374,5.374,0,0,1,.481-2.325m5.5.991a2.138,2.138,0,0,0-.776-.874,1.962,1.962,0,0,0-1.05-.3,1.921,1.921,0,0,0-1.037.3,2.157,2.157,0,0,0-.769.865,2.91,2.91,0,0,0-.294,1.35,3,3,0,0,0,.294,1.365,2.241,2.241,0,0,0,.776.9,1.862,1.862,0,0,0,1.03.312,1.954,1.954,0,0,0,1.05-.3,2.129,2.129,0,0,0,.776-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24180"
                    data-name="Path 24180"
                    d="M1345.889,288.735a1.356,1.356,0,0,1,0-1.825,1.248,1.248,0,0,1,1.768,0,1.356,1.356,0,0,1,0,1.825,1.248,1.248,0,0,1-1.768,0m1.877,10.039h-2.013v-8.642h2.013Z"
                  />
                  <path
                    id="Path_24181"
                    data-name="Path 24181"
                    d="M1349.714,292.1a3.735,3.735,0,0,1,1.309-1.56,3.28,3.28,0,0,1,1.848-.546,3.052,3.052,0,0,1,1.56.39,3.259,3.259,0,0,1,1.072.983v-1.232h2.027v8.642H1355.5v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.2,3.2,0,0,1-1.834-.562,3.83,3.83,0,0,1-1.309-1.583,5.45,5.45,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.123,2.123,0,0,0,.777-.873,3.378,3.378,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24182"
                    data-name="Path 24182"
                    d="M1258.831,439.7l-2.215-4.243h-.949V439.7h-2.013V428.816h3.767a4.115,4.115,0,0,1,1.985.445,2.963,2.963,0,0,1,1.23,1.2,3.5,3.5,0,0,1,.41,1.693,3.429,3.429,0,0,1-.576,1.942,2.944,2.944,0,0,1-1.711,1.193l2.4,4.415Zm-3.164-5.881h1.682a1.6,1.6,0,0,0,1.223-.429,1.678,1.678,0,0,0,.4-1.193,1.6,1.6,0,0,0-.4-1.163,1.64,1.64,0,0,0-1.223-.413h-1.682Z"
                  />
                  <path
                    id="Path_24183"
                    data-name="Path 24183"
                    d="M1270.221,436.038H1264.4a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.947,3.947,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.763,3.763,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.226,5.226,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.505,4.871,4.871,0,0,1,.5,2.239,5.61,5.61,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.741,1.741,0,0,0-1.258.491,2.226,2.226,0,0,0-.626,1.365Z"
                  />
                  <path
                    id="Path_24184"
                    data-name="Path 24184"
                    d="M1273.039,439.463a3.159,3.159,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.22,1.22,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.444,1.444,0,0,0,.9-.249.776.776,0,0,0,.323-.64.677.677,0,0,0-.4-.632,7.146,7.146,0,0,0-1.258-.46,9.941,9.941,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.246,3.246,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.928a1.16,1.16,0,0,0-.395-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.891,5.891,0,0,0,1.251.461,10.035,10.035,0,0,1,1.423.483,2.545,2.545,0,0,1,.971.772,2.239,2.239,0,0,1,.424,1.381,2.431,2.431,0,0,1-.381,1.342,2.556,2.556,0,0,1-1.093.928,3.865,3.865,0,0,1-1.661.335,3.917,3.917,0,0,1-1.754-.382"
                  />
                  <path
                    id="Path_24185"
                    data-name="Path 24185"
                    d="M1286.932,436.038h-5.825a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.947,3.947,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.064-.554,3.767,3.767,0,0,1-1.423-1.568,5.127,5.127,0,0,1-.511-2.34,5.228,5.228,0,0,1,.5-2.355,3.68,3.68,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.505,4.872,4.872,0,0,1,.5,2.239,5.626,5.626,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.743,1.743,0,0,0-1.259.491,2.231,2.231,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_24186"
                    data-name="Path 24186"
                    d="M1288.419,433.028a3.735,3.735,0,0,1,1.309-1.56,3.28,3.28,0,0,1,1.848-.546,3.048,3.048,0,0,1,1.56.39,3.257,3.257,0,0,1,1.072.983v-1.232h2.027V439.7h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.831,3.831,0,0,1-1.309-1.583,5.452,5.452,0,0,1-.482-2.348,5.36,5.36,0,0,1,.482-2.325m5.5.991a2.138,2.138,0,0,0-.776-.874,1.962,1.962,0,0,0-1.05-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.991,2.991,0,0,0,.295,1.365,2.227,2.227,0,0,0,.777.9,1.855,1.855,0,0,0,1.028.312,1.954,1.954,0,0,0,1.05-.3,2.129,2.129,0,0,0,.776-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24187"
                    data-name="Path 24187"
                    d="M1301.233,431.328a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.351,2.351,0,0,0-.482,1.684V439.7h-2.013v-8.642h2.013V432.4a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24188"
                    data-name="Path 24188"
                    d="M1304,433.036a3.7,3.7,0,0,1,3.437-2.114,3.716,3.716,0,0,1,2.452.8,3.963,3.963,0,0,1,1.3,2.254h-2.172a1.727,1.727,0,0,0-.582-.882,1.737,1.737,0,0,0-2.38.359,3.905,3.905,0,0,0,0,3.838,1.611,1.611,0,0,0,1.366.678,1.538,1.538,0,0,0,1.6-1.185h2.172a4.043,4.043,0,0,1-1.309,2.231,3.657,3.657,0,0,1-2.445.826,3.7,3.7,0,0,1-3.437-2.113,5.732,5.732,0,0,1,0-4.7"
                  />
                  <path
                    id="Path_24189"
                    data-name="Path 24189"
                    d="M1318.771,431.367a2.868,2.868,0,0,1,1.1,1.264,4.639,4.639,0,0,1,.4,2v5.07h-2.013v-4.773a2.367,2.367,0,0,0-.474-1.584,1.618,1.618,0,0,0-1.3-.554,1.656,1.656,0,0,0-1.316.554,2.342,2.342,0,0,0-.481,1.584V439.7h-2.014V428.161h2.014v3.978a2.674,2.674,0,0,1,1.035-.881,3.207,3.207,0,0,1,1.438-.32,3.037,3.037,0,0,1,1.611.429"
                  />
                  <path
                    id="Path_24190"
                    data-name="Path 24190"
                    d="M1329.528,436.038H1323.7a2.234,2.234,0,0,0,.6,1.467,1.786,1.786,0,0,0,1.309.53,1.636,1.636,0,0,0,1.6-1.045h2.171a3.947,3.947,0,0,1-1.323,2.051,3.657,3.657,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.763,3.763,0,0,1-1.424-1.568,5.141,5.141,0,0,1-.511-2.34,5.226,5.226,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.505,4.871,4.871,0,0,1,.5,2.239,5.61,5.61,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.741,1.741,0,0,0-1.258.491,2.231,2.231,0,0,0-.626,1.365Z"
                  />
                  <path
                    id="Path_24191"
                    data-name="Path 24191"
                    d="M1334.079,431.328a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.347,2.347,0,0,0-.482,1.684V439.7h-2.013v-8.642h2.013V432.4a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24192"
                    data-name="Path 24192"
                    d="M1338.156,439.463a3.158,3.158,0,0,1-1.23-1.037,2.771,2.771,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.445,1.445,0,0,0,.9-.249.776.776,0,0,0,.323-.64.677.677,0,0,0-.4-.632,7.148,7.148,0,0,0-1.258-.46,9.939,9.939,0,0,1-1.46-.484,2.546,2.546,0,0,1-.978-.764,2.169,2.169,0,0,1-.41-1.388A2.376,2.376,0,0,1,1337,432.2a2.611,2.611,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.245,3.245,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.928a1.16,1.16,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.9,5.9,0,0,0,1.251.461,10.089,10.089,0,0,1,1.423.483,2.544,2.544,0,0,1,.971.772,2.238,2.238,0,0,1,.424,1.381,2.431,2.431,0,0,1-.381,1.342,2.555,2.555,0,0,1-1.093.928,3.866,3.866,0,0,1-1.661.335,3.917,3.917,0,0,1-1.754-.382"
                  />
                  <path
                    id="Path_24193"
                    data-name="Path 24193"
                    d="M1282.926,452.247a3.734,3.734,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.048,3.048,0,0,1,1.56.39,3.256,3.256,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.829,3.829,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.482-2.348,5.358,5.358,0,0,1,.482-2.325m5.5.991a2.138,2.138,0,0,0-.776-.874,1.953,1.953,0,0,0-1.05-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.954,1.954,0,0,0,1.05-.3,2.129,2.129,0,0,0,.776-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24194"
                    data-name="Path 24194"
                    d="M1299.428,451.132a3.927,3.927,0,0,1,.877,2.722v5.07h-2.013v-4.773a2.362,2.362,0,0,0-.475-1.584,1.615,1.615,0,0,0-1.294-.554,1.654,1.654,0,0,0-1.316.554,2.341,2.341,0,0,0-.481,1.584v4.773h-2.014v-8.642h2.014v1.076a2.829,2.829,0,0,1,1.028-.881,3.168,3.168,0,0,1,3.674.655"
                  />
                  <path
                    id="Path_24195"
                    data-name="Path 24195"
                    d="M1302.182,452.247a3.72,3.72,0,0,1,1.316-1.56,3.316,3.316,0,0,1,1.855-.546,3.175,3.175,0,0,1,1.482.367,3.018,3.018,0,0,1,1.121.975v-4.1H1310v11.544h-2.042v-1.279a2.819,2.819,0,0,1-1.049,1.03,3.094,3.094,0,0,1-1.568.39,3.229,3.229,0,0,1-1.841-.562,3.814,3.814,0,0,1-1.316-1.583,5.451,5.451,0,0,1-.482-2.348,5.358,5.358,0,0,1,.482-2.325m5.5.991a2.137,2.137,0,0,0-.776-.874,1.953,1.953,0,0,0-1.05-.3,1.917,1.917,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.233,2.233,0,0,0,.776.9,1.861,1.861,0,0,0,1.029.312,1.954,1.954,0,0,0,1.05-.3,2.128,2.128,0,0,0,.776-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24196"
                    data-name="Path 24196"
                    d="M1257.968,471.466a3.734,3.734,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.049,3.049,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983V469.5h2.027v8.642h-2.027V476.88a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.829,3.829,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.482-2.348,5.358,5.358,0,0,1,.482-2.325m5.5.991a2.138,2.138,0,0,0-.776-.874,1.962,1.962,0,0,0-1.05-.3,1.917,1.917,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.954,1.954,0,0,0,1.05-.3,2.129,2.129,0,0,0,.776-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24197"
                    data-name="Path 24197"
                    d="M1267.74,471.474a3.7,3.7,0,0,1,3.437-2.114,3.716,3.716,0,0,1,2.452.8,3.957,3.957,0,0,1,1.3,2.254h-2.171a1.727,1.727,0,0,0-.582-.882,1.737,1.737,0,0,0-2.38.359,3.905,3.905,0,0,0,0,3.838,1.61,1.61,0,0,0,1.366.678,1.538,1.538,0,0,0,1.6-1.185h2.171a4.035,4.035,0,0,1-1.308,2.231,3.657,3.657,0,0,1-2.445.826,3.7,3.7,0,0,1-3.437-2.113,5.732,5.732,0,0,1,0-4.7"
                  />
                  <path
                    id="Path_24198"
                    data-name="Path 24198"
                    d="M1276.375,471.466a3.735,3.735,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.052,3.052,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983V469.5h2.027v8.642h-2.027V476.88a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.83,3.83,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.482-2.348,5.358,5.358,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.949,1.949,0,0,0,1.049-.3,2.123,2.123,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24199"
                    data-name="Path 24199"
                    d="M1286.125,471.466a3.722,3.722,0,0,1,1.317-1.56,3.316,3.316,0,0,1,1.855-.546,3.178,3.178,0,0,1,1.482.367,3.018,3.018,0,0,1,1.121.975v-4.1h2.042v11.544H1291.9v-1.279a2.819,2.819,0,0,1-1.049,1.03,3.1,3.1,0,0,1-1.569.39,3.229,3.229,0,0,1-1.84-.562,3.816,3.816,0,0,1-1.317-1.583,5.467,5.467,0,0,1-.481-2.348,5.374,5.374,0,0,1,.481-2.325m5.5.991a2.136,2.136,0,0,0-.776-.874,1.961,1.961,0,0,0-1.05-.3,1.918,1.918,0,0,0-1.036.3,2.159,2.159,0,0,0-.77.865,2.909,2.909,0,0,0-.294,1.35,3,3,0,0,0,.294,1.365,2.249,2.249,0,0,0,.776.9,1.865,1.865,0,0,0,1.03.312,1.954,1.954,0,0,0,1.05-.3,2.127,2.127,0,0,0,.776-.873,3.378,3.378,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24200"
                    data-name="Path 24200"
                    d="M1303.261,474.477h-5.825a2.239,2.239,0,0,0,.6,1.467,1.786,1.786,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.947,3.947,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.762,3.762,0,0,1-1.424-1.568,5.139,5.139,0,0,1-.511-2.34,5.228,5.228,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.505,4.872,4.872,0,0,1,.5,2.239,5.626,5.626,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.741,1.741,0,0,0-1.258.491,2.225,2.225,0,0,0-.626,1.365Z"
                  />
                  <path
                    id="Path_24201"
                    data-name="Path 24201"
                    d="M1317.045,470.351a3.868,3.868,0,0,1,.9,2.722v5.07h-2.014V473.37a2.281,2.281,0,0,0-.474-1.553,1.641,1.641,0,0,0-1.294-.538,1.662,1.662,0,0,0-1.3.538,2.257,2.257,0,0,0-.482,1.553v4.773h-2.013V473.37a2.275,2.275,0,0,0-.475-1.553,1.638,1.638,0,0,0-1.294-.538,1.679,1.679,0,0,0-1.316.538,2.256,2.256,0,0,0-.481,1.553v4.773h-2.014V469.5h2.014v1.045a2.717,2.717,0,0,1,1-.858,2.914,2.914,0,0,1,1.345-.312,3.242,3.242,0,0,1,1.668.429,2.892,2.892,0,0,1,1.136,1.225,3.1,3.1,0,0,1,2.732-1.654,3.066,3.066,0,0,1,2.366.975"
                  />
                  <path
                    id="Path_24202"
                    data-name="Path 24202"
                    d="M1319.993,468.105a1.357,1.357,0,0,1,0-1.826,1.252,1.252,0,0,1,1.769,0,1.36,1.36,0,0,1,0,1.826,1.252,1.252,0,0,1-1.769,0m1.877,10.038h-2.013V469.5h2.013Z"
                  />
                  <path
                    id="Path_24203"
                    data-name="Path 24203"
                    d="M1323.84,471.474a3.7,3.7,0,0,1,3.437-2.114,3.716,3.716,0,0,1,2.452.8,3.963,3.963,0,0,1,1.3,2.254h-2.172a1.727,1.727,0,0,0-.582-.882,1.737,1.737,0,0,0-2.38.359,3.905,3.905,0,0,0,0,3.838,1.611,1.611,0,0,0,1.366.678,1.538,1.538,0,0,0,1.6-1.185h2.172a4.042,4.042,0,0,1-1.309,2.231,3.657,3.657,0,0,1-2.445.826,3.7,3.7,0,0,1-3.437-2.113,5.732,5.732,0,0,1,0-4.7"
                  />
                  <path
                    id="Path_24204"
                    data-name="Path 24204"
                    d="M1333.806,477.9a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.494,1.494,0,0,0,.985.327,1.444,1.444,0,0,0,.9-.249.773.773,0,0,0,.323-.64.677.677,0,0,0-.395-.632,7.155,7.155,0,0,0-1.258-.46,9.975,9.975,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.169,2.169,0,0,1-.41-1.388,2.377,2.377,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.245,3.245,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083H1336.7a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.9,5.9,0,0,0,1.251.461,10.108,10.108,0,0,1,1.424.483,2.55,2.55,0,0,1,.97.772,2.238,2.238,0,0,1,.424,1.381,2.438,2.438,0,0,1-.38,1.342,2.563,2.563,0,0,1-1.094.928,3.865,3.865,0,0,1-1.661.335,3.916,3.916,0,0,1-1.754-.382"
                  />
                  <path
                    id="Path_24205"
                    data-name="Path 24205"
                    d="M882.6,523.22a91.53,91.53,0,0,0-27.977-20.169,92.754,92.754,0,0,0-34.758-8.591l-1.151-.057-3.711-.05c-.473-.007-.947-.013-1.421-.013a92.88,92.88,0,0,0-51.336,15.325,48.888,48.888,0,0,1-53.625,0,93.64,93.64,0,0,0-102.67,0,48.565,48.565,0,0,1-26.779,8.02h-.063a48.3,48.3,0,0,1-26.733-7.986,92.834,92.834,0,0,0-51.386-15.36c-.221,0-.439,0-.66,0a92.56,92.56,0,0,0-63.049,25.188,87.244,87.244,0,0,0-27.808,60.235,86.075,86.075,0,0,0,5.89,35.082A88.353,88.353,0,0,0,434.039,643.9a91.5,91.5,0,0,0,29.839,20.682,93.81,93.81,0,0,0,88.446-7.694,48.891,48.891,0,0,1,53.625,0,93.642,93.642,0,0,0,102.67,0,48.572,48.572,0,0,1,26.778-8.02h.063a48.309,48.309,0,0,1,26.733,7.988,92.851,92.851,0,0,0,52.046,15.355c.442,0,.906-.01,1.42-.022l4.2-.094.665-.038a92.656,92.656,0,0,0,59.886-26.565A86.814,86.814,0,0,0,882.6,523.22"
                    fill="#fff"
                  />
                  <g id="Group_9071" data-name="Group 9071" opacity="0.35">
                    <g id="Group_9070" data-name="Group 9070">
                      <g
                        id="Group_9069"
                        data-name="Group 9069"
                        clipPath="url(#clip-path-10)"
                      >
                        <path
                          id="Path_24206"
                          data-name="Path 24206"
                          d="M882.6,523.22a91.53,91.53,0,0,0-27.977-20.169,92.754,92.754,0,0,0-34.758-8.591l-1.151-.057-3.711-.05c-.473-.007-.947-.013-1.421-.013a92.88,92.88,0,0,0-51.336,15.325,48.888,48.888,0,0,1-53.625,0,93.64,93.64,0,0,0-102.67,0,48.565,48.565,0,0,1-26.779,8.02h-.063a48.3,48.3,0,0,1-26.733-7.986,92.834,92.834,0,0,0-51.386-15.36c-.221,0-.439,0-.66,0a92.56,92.56,0,0,0-63.049,25.188,87.244,87.244,0,0,0-27.808,60.235,86.075,86.075,0,0,0,5.89,35.082A88.353,88.353,0,0,0,434.039,643.9a91.5,91.5,0,0,0,29.839,20.682,93.81,93.81,0,0,0,88.446-7.694,48.891,48.891,0,0,1,53.625,0,93.642,93.642,0,0,0,102.67,0,48.572,48.572,0,0,1,26.778-8.02h.063a48.309,48.309,0,0,1,26.733,7.988,92.851,92.851,0,0,0,52.046,15.355c.442,0,.906-.01,1.42-.022l4.2-.094.665-.038a92.656,92.656,0,0,0,59.886-26.565A86.814,86.814,0,0,0,882.6,523.22"
                          fill="#36d77f"
                        />
                      </g>
                    </g>
                  </g>
                  <path
                    id="Path_24207"
                    data-name="Path 24207"
                    d="M573.1,584.129a74.417,74.417,0,1,1-74.418-74.418A74.418,74.418,0,0,1,573.1,584.129"
                    fill="#fff"
                  />
                  <circle
                    id="Ellipse_701"
                    data-name="Ellipse 701"
                    cx="74.418"
                    cy="74.418"
                    r="74.418"
                    transform="translate(424.263 509.712)"
                    fill="none"
                    stroke="#36d77f"
                    strokeMiterlimit="10"
                    strokeWidth="2.415"
                  />
                  <path
                    id="Path_24208"
                    data-name="Path 24208"
                    d="M467.022,574.952v10.889h-2.013v-7.083l-2.69,7.083h-1.524l-2.7-7.083v7.083h-2.013V574.952h2.287l3.192,8.1,3.193-8.1Z"
                  />
                  <path
                    id="Path_24209"
                    data-name="Path 24209"
                    d="M476.528,577.2v8.642H474.5v-1.091a2.714,2.714,0,0,1-1.014.881,2.944,2.944,0,0,1-1.359.32,3.162,3.162,0,0,1-1.653-.429,2.919,2.919,0,0,1-1.129-1.264,4.457,4.457,0,0,1-.41-1.989V577.2h2.013v4.758a2.365,2.365,0,0,0,.475,1.584,1.615,1.615,0,0,0,1.294.553,1.634,1.634,0,0,0,1.309-.553,2.37,2.37,0,0,0,.474-1.584V577.2Z"
                  />
                  <rect
                    id="Rectangle_5663"
                    data-name="Rectangle 5663"
                    width="2.013"
                    height="11.544"
                    transform="translate(478.512 574.297)"
                  />
                  <path
                    id="Path_24210"
                    data-name="Path 24210"
                    d="M484.854,578.993v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.654.195h.935v1.84h-1.265q-2.546,0-2.546-2.683v-4.165h-.949V577.2h.949v-2.137h2.028V577.2h1.783v1.794Z"
                  />
                  <path
                    id="Path_24211"
                    data-name="Path 24211"
                    d="M488.226,575.8a1.359,1.359,0,0,1,0-1.825,1.252,1.252,0,0,1,1.769,0,1.359,1.359,0,0,1,0,1.825,1.249,1.249,0,0,1-1.769,0m1.877,10.039H488.09V577.2H490.1Z"
                  />
                  <rect
                    id="Rectangle_5664"
                    data-name="Rectangle 5664"
                    width="2.013"
                    height="11.544"
                    transform="translate(492.088 574.297)"
                  />
                  <path
                    id="Path_24212"
                    data-name="Path 24212"
                    d="M496.049,579.164a3.742,3.742,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983V577.2h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.837,3.837,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.949,1.949,0,0,0,1.049-.3,2.123,2.123,0,0,0,.777-.873,3.378,3.378,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24213"
                    data-name="Path 24213"
                    d="M508.18,578.993v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.654.195h.935v1.84H508.7q-2.545,0-2.546-2.683v-4.165H505.2V577.2h.949v-2.137h2.028V577.2h1.783v1.794Z"
                  />
                  <path
                    id="Path_24214"
                    data-name="Path 24214"
                    d="M518.764,582.175h-5.825a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.942,3.942,0,0,1-1.323,2.051,3.656,3.656,0,0,1-2.4.8,3.9,3.9,0,0,1-2.064-.554,3.767,3.767,0,0,1-1.423-1.568,5.128,5.128,0,0,1-.512-2.34,5.227,5.227,0,0,1,.5-2.355,3.686,3.686,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.611,3.611,0,0,1,1.4,1.505,4.884,4.884,0,0,1,.495,2.239,5.618,5.618,0,0,1-.057.842m-2.027-1.466a1.8,1.8,0,0,0-.562-1.349,1.892,1.892,0,0,0-1.336-.507,1.745,1.745,0,0,0-1.26.491,2.236,2.236,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_24215"
                    data-name="Path 24215"
                    d="M523.316,577.464a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.352,2.352,0,0,0-.482,1.684v4.306h-2.013V577.2H522.3v1.341a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24216"
                    data-name="Path 24216"
                    d="M526.062,579.164a3.742,3.742,0,0,1,1.309-1.56,3.28,3.28,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983V577.2h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.837,3.837,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.481-2.348,5.359,5.359,0,0,1,.481-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.378,3.378,0,0,0,0-2.73"
                  />
                  <rect
                    id="Rectangle_5665"
                    data-name="Rectangle 5665"
                    width="2.013"
                    height="11.544"
                    transform="translate(535.849 574.297)"
                  />
                  <path
                    id="Path_24217"
                    data-name="Path 24217"
                    d="M450.3,604.647a3.842,3.842,0,0,1-1.445-1.568,5.018,5.018,0,0,1-.525-2.34,4.915,4.915,0,0,1,.539-2.34,3.923,3.923,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.923,3.923,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.083,4.083,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.023,2.023,0,0,0,.769-.866,3.115,3.115,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.9,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.785,2.785,0,0,0-.582,1.9,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_24218"
                    data-name="Path 24218"
                    d="M461.039,596.683a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.353,2.353,0,0,0-.482,1.685v4.3h-2.013v-8.642h2.013v1.341a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24219"
                    data-name="Path 24219"
                    d="M468.51,596.659a2.984,2.984,0,0,1,1.065.991v-1.232H471.6v8.7a4.972,4.972,0,0,1-.445,2.145,3.485,3.485,0,0,1-1.338,1.5,4.012,4.012,0,0,1-2.157.554,4.354,4.354,0,0,1-2.783-.858,3.243,3.243,0,0,1-1.229-2.34h2a1.6,1.6,0,0,0,.683.944,2.236,2.236,0,0,0,1.272.351,1.883,1.883,0,0,0,1.424-.57,2.4,2.4,0,0,0,.547-1.723v-1.342a3.151,3.151,0,0,1-1.072,1.014,3,3,0,0,1-1.56.406,3.23,3.23,0,0,1-1.841-.562,3.814,3.814,0,0,1-1.316-1.583,5.448,5.448,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325,3.742,3.742,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.136,3.136,0,0,1,1.567.382m.777,2.715a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.949,1.949,0,0,0,1.049-.3,2.123,2.123,0,0,0,.777-.873,3.378,3.378,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24220"
                    data-name="Path 24220"
                    d="M473.536,598.383a3.742,3.742,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027V603.8a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.837,3.837,0,0,1-1.309-1.583,5.448,5.448,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.915,1.915,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.949,1.949,0,0,0,1.049-.3,2.123,2.123,0,0,0,.777-.873,3.378,3.378,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24221"
                    data-name="Path 24221"
                    d="M490.038,597.268a3.926,3.926,0,0,1,.877,2.722v5.07H488.9v-4.773a2.363,2.363,0,0,0-.475-1.584,1.616,1.616,0,0,0-1.294-.554,1.655,1.655,0,0,0-1.316.554,2.344,2.344,0,0,0-.482,1.584v4.773h-2.013v-8.642h2.013v1.076a2.84,2.84,0,0,1,1.029-.881,3.168,3.168,0,0,1,3.674.655"
                  />
                  <path
                    id="Path_24222"
                    data-name="Path 24222"
                    d="M492.965,595.021a1.356,1.356,0,0,1,0-1.825,1.252,1.252,0,0,1,1.769,0,1.359,1.359,0,0,1,0,1.825,1.249,1.249,0,0,1-1.769,0m1.876,10.039h-2.013v-8.642h2.013Z"
                  />
                  <path
                    id="Path_24223"
                    data-name="Path 24223"
                    d="M498.12,604.818a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.445,1.445,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.148,7.148,0,0,0-1.258-.46,9.978,9.978,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.834,3.834,0,0,1,1.676-.343,3.245,3.245,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.893,5.893,0,0,0,1.251.461,10.1,10.1,0,0,1,1.424.483,2.542,2.542,0,0,1,.97.772,2.238,2.238,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.559,2.559,0,0,1-1.092.928,3.871,3.871,0,0,1-1.661.335,3.918,3.918,0,0,1-1.755-.382"
                  />
                  <path
                    id="Path_24224"
                    data-name="Path 24224"
                    d="M504.628,598.383a3.733,3.733,0,0,1,1.308-1.56,3.279,3.279,0,0,1,1.848-.546,3.049,3.049,0,0,1,1.56.39,3.271,3.271,0,0,1,1.073.983v-1.232h2.026v8.642h-2.026V603.8a3.094,3.094,0,0,1-2.646,1.4,3.2,3.2,0,0,1-1.835-.562,3.828,3.828,0,0,1-1.308-1.583,5.434,5.434,0,0,1-.482-2.348,5.345,5.345,0,0,1,.482-2.325m5.5.991a2.147,2.147,0,0,0-.777-.874,1.962,1.962,0,0,0-1.05-.3,1.918,1.918,0,0,0-1.036.3,2.164,2.164,0,0,0-.769.865,2.909,2.909,0,0,0-.3,1.35,3,3,0,0,0,.3,1.365,2.232,2.232,0,0,0,.776.9,1.861,1.861,0,0,0,1.029.312,1.954,1.954,0,0,0,1.05-.3,2.137,2.137,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24225"
                    data-name="Path 24225"
                    d="M516.758,598.212v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.655.195h.934v1.84h-1.265q-2.546,0-2.546-2.683v-4.165h-.949v-1.794h.949v-2.137h2.028v2.137h1.783v1.794Z"
                  />
                  <path
                    id="Path_24226"
                    data-name="Path 24226"
                    d="M520.13,595.021a1.359,1.359,0,0,1,0-1.825,1.252,1.252,0,0,1,1.769,0,1.359,1.359,0,0,1,0,1.825,1.249,1.249,0,0,1-1.769,0m1.877,10.039h-2.013v-8.642h2.013Z"
                  />
                  <path
                    id="Path_24227"
                    data-name="Path 24227"
                    d="M525.458,604.647a3.842,3.842,0,0,1-1.445-1.568,5.018,5.018,0,0,1-.525-2.34,4.915,4.915,0,0,1,.539-2.34,3.923,3.923,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.083,4.083,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.023,2.023,0,0,0,.769-.866,3.115,3.115,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.9,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.785,2.785,0,0,0-.582,1.9,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_24228"
                    data-name="Path 24228"
                    d="M539.882,597.268a3.926,3.926,0,0,1,.877,2.722v5.07h-2.013v-4.773a2.363,2.363,0,0,0-.475-1.584,1.616,1.616,0,0,0-1.294-.554,1.654,1.654,0,0,0-1.316.554,2.344,2.344,0,0,0-.482,1.584v4.773h-2.013v-8.642h2.013v1.076a2.84,2.84,0,0,1,1.029-.881,3.168,3.168,0,0,1,3.674.655"
                  />
                  <path
                    id="Path_24229"
                    data-name="Path 24229"
                    d="M543.966,604.818a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.444,1.444,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.151,7.151,0,0,0-1.258-.46,9.975,9.975,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.169,2.169,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.613,2.613,0,0,1,1.093-.936,3.834,3.834,0,0,1,1.676-.343,3.245,3.245,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.894,5.894,0,0,0,1.251.461,10.1,10.1,0,0,1,1.424.483,2.542,2.542,0,0,1,.97.772,2.239,2.239,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.559,2.559,0,0,1-1.092.928,3.871,3.871,0,0,1-1.661.335,3.918,3.918,0,0,1-1.755-.382"
                  />
                  <path
                    id="Path_24230"
                    data-name="Path 24230"
                    d="M731.522,584.129A74.417,74.417,0,1,1,657.1,509.711a74.418,74.418,0,0,1,74.418,74.418"
                    fill="#fff"
                  />
                  <circle
                    id="Ellipse_702"
                    data-name="Ellipse 702"
                    cx="74.418"
                    cy="74.418"
                    r="74.418"
                    transform="translate(582.686 509.712)"
                    fill="none"
                    stroke="#36d77f"
                    strokeMiterlimit="10"
                    strokeWidth="2.415"
                  />
                  <g
                    id="Group_10642"
                    data-name="Group 10642"
                    transform="translate(0 5.057)"
                  >
                    <rect
                      id="Rectangle_5666"
                      data-name="Rectangle 5666"
                      width="2.013"
                      height="10.889"
                      transform="translate(627.637 544.204)"
                    />
                    <path
                      id="Path_24231"
                      data-name="Path 24231"
                      d="M638.351,547.3a3.926,3.926,0,0,1,.877,2.722v5.07h-2.013V550.32a2.363,2.363,0,0,0-.475-1.584,1.616,1.616,0,0,0-1.294-.554,1.654,1.654,0,0,0-1.316.554,2.344,2.344,0,0,0-.482,1.584v4.773h-2.013v-8.642h2.013v1.076a2.84,2.84,0,0,1,1.029-.881,3.168,3.168,0,0,1,3.674.655"
                    />
                    <path
                      id="Path_24232"
                      data-name="Path 24232"
                      d="M641.1,548.416a3.72,3.72,0,0,1,1.316-1.56,3.313,3.313,0,0,1,1.855-.546,3.168,3.168,0,0,1,1.481.367,3.013,3.013,0,0,1,1.122.975v-4.1h2.042v11.544h-2.042v-1.279a2.815,2.815,0,0,1-1.05,1.03,3.087,3.087,0,0,1-1.567.39,3.23,3.23,0,0,1-1.841-.562,3.815,3.815,0,0,1-1.316-1.583,5.448,5.448,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.991,2.991,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                    />
                    <path
                      id="Path_24233"
                      data-name="Path 24233"
                      d="M658.412,546.45v8.642h-2.028V554a2.713,2.713,0,0,1-1.014.881,2.945,2.945,0,0,1-1.359.32,3.162,3.162,0,0,1-1.653-.429,2.925,2.925,0,0,1-1.129-1.264,4.457,4.457,0,0,1-.41-1.989v-5.07h2.013v4.758a2.365,2.365,0,0,0,.475,1.584,1.615,1.615,0,0,0,1.294.553,1.633,1.633,0,0,0,1.309-.553,2.37,2.37,0,0,0,.474-1.584V546.45Z"
                    />
                    <path
                      id="Path_24234"
                      data-name="Path 24234"
                      d="M661.691,554.851a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.444,1.444,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.153,7.153,0,0,0-1.258-.46,9.98,9.98,0,0,1-1.46-.484,2.546,2.546,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.246,3.246,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.893,5.893,0,0,0,1.251.461,10.112,10.112,0,0,1,1.424.483,2.543,2.543,0,0,1,.97.772,2.239,2.239,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.558,2.558,0,0,1-1.092.928,3.872,3.872,0,0,1-1.661.335,3.918,3.918,0,0,1-1.755-.382"
                    />
                    <path
                      id="Path_24235"
                      data-name="Path 24235"
                      d="M670.579,548.244v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.655.2h.934v1.84H671.1q-2.545,0-2.546-2.683v-4.165H667.6V546.45h.949v-2.137h2.028v2.137h1.783v1.794Z"
                    />
                    <path
                      id="Path_24236"
                      data-name="Path 24236"
                      d="M676.841,546.716a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.352,2.352,0,0,0-.482,1.685v4.3h-2.013v-8.642h2.013v1.341a2.96,2.96,0,0,1,1.014-1.076"
                    />
                    <path
                      id="Path_24237"
                      data-name="Path 24237"
                      d="M687.246,546.45l-4.933,12.73h-2.142l1.725-4.306L678.7,546.45h2.258l2.056,6.037,2.085-6.037Z"
                    />
                    <path
                      id="Path_24238"
                      data-name="Path 24238"
                      d="M690.525,552.8l-1.683,4.384h-1.294l.935-4.384Z"
                    />
                    <path
                      id="Path_24239"
                      data-name="Path 24239"
                      d="M638.632,566.52a3.868,3.868,0,0,1,.9,2.722v5.07h-2.014v-4.773a2.28,2.28,0,0,0-.474-1.553,1.639,1.639,0,0,0-1.294-.538,1.662,1.662,0,0,0-1.3.538,2.256,2.256,0,0,0-.482,1.553v4.773h-2.013v-4.773a2.275,2.275,0,0,0-.475-1.553,1.638,1.638,0,0,0-1.294-.538,1.679,1.679,0,0,0-1.316.538,2.257,2.257,0,0,0-.482,1.553v4.773h-2.013V565.67h2.013v1.045a2.726,2.726,0,0,1,1-.858,2.914,2.914,0,0,1,1.345-.312,3.242,3.242,0,0,1,1.668.429,2.9,2.9,0,0,1,1.136,1.225,3.1,3.1,0,0,1,2.732-1.654,3.066,3.066,0,0,1,2.366.975"
                    />
                    <path
                      id="Path_24240"
                      data-name="Path 24240"
                      d="M648.792,570.646h-5.825a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.634,1.634,0,0,0,1.6-1.045h2.172a3.947,3.947,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.762,3.762,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.227,5.227,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.505,4.872,4.872,0,0,1,.5,2.239,5.618,5.618,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.23,2.23,0,0,0-.625,1.365Z"
                    />
                    <path
                      id="Path_24241"
                      data-name="Path 24241"
                      d="M662.576,566.52a3.868,3.868,0,0,1,.9,2.722v5.07h-2.014v-4.773a2.28,2.28,0,0,0-.474-1.553,1.639,1.639,0,0,0-1.294-.538,1.662,1.662,0,0,0-1.3.538,2.257,2.257,0,0,0-.482,1.553v4.773H655.9v-4.773a2.276,2.276,0,0,0-.475-1.553,1.638,1.638,0,0,0-1.294-.538,1.679,1.679,0,0,0-1.316.538,2.257,2.257,0,0,0-.482,1.553v4.773h-2.013V565.67h2.013v1.045a2.727,2.727,0,0,1,1-.858,2.914,2.914,0,0,1,1.345-.312,3.242,3.242,0,0,1,1.668.429,2.9,2.9,0,0,1,1.136,1.225,3.1,3.1,0,0,1,2.732-1.654,3.066,3.066,0,0,1,2.366.975"
                    />
                    <path
                      id="Path_24242"
                      data-name="Path 24242"
                      d="M668.472,565.919a3.088,3.088,0,0,1,1.56-.39,3.284,3.284,0,0,1,1.848.546,3.75,3.75,0,0,1,1.309,1.552,5.347,5.347,0,0,1,.481,2.332,5.448,5.448,0,0,1-.481,2.348,3.846,3.846,0,0,1-1.309,1.583,3.215,3.215,0,0,1-1.848.562,3.062,3.062,0,0,1-2.632-1.373v1.233h-2.013V562.768H667.4v4.165a2.964,2.964,0,0,1,1.072-1.014m2.847,2.691a2.148,2.148,0,0,0-.777-.866,1.955,1.955,0,0,0-1.042-.3,1.888,1.888,0,0,0-1.028.3,2.185,2.185,0,0,0-.777.881,3.271,3.271,0,0,0,0,2.715,2.179,2.179,0,0,0,.777.881,1.893,1.893,0,0,0,2.07-.008,2.251,2.251,0,0,0,.777-.889,2.99,2.99,0,0,0,.3-1.373,2.9,2.9,0,0,0-.3-1.349"
                    />
                    <path
                      id="Path_24243"
                      data-name="Path 24243"
                      d="M682.486,570.646h-5.825a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.947,3.947,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.762,3.762,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.227,5.227,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.505,4.872,4.872,0,0,1,.5,2.239,5.626,5.626,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.23,2.23,0,0,0-.625,1.365Z"
                    />
                    <path
                      id="Path_24244"
                      data-name="Path 24244"
                      d="M687.037,565.935a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.353,2.353,0,0,0-.482,1.685v4.3H684.01V565.67h2.013v1.341a2.96,2.96,0,0,1,1.014-1.076"
                    />
                    <path
                      id="Path_24245"
                      data-name="Path 24245"
                      d="M619.059,586.854a3.734,3.734,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.259,3.259,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.83,3.83,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.959,1.959,0,0,0-1.049-.3,1.915,1.915,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.951,1.951,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                    />
                    <path
                      id="Path_24246"
                      data-name="Path 24246"
                      d="M635.561,585.739a3.926,3.926,0,0,1,.877,2.722v5.07h-2.013v-4.773a2.361,2.361,0,0,0-.475-1.584,1.616,1.616,0,0,0-1.294-.554,1.654,1.654,0,0,0-1.316.554,2.342,2.342,0,0,0-.482,1.584v4.773h-2.013v-8.642h2.013v1.076a2.84,2.84,0,0,1,1.029-.881,3.168,3.168,0,0,1,3.674.655"
                    />
                    <path
                      id="Path_24247"
                      data-name="Path 24247"
                      d="M638.315,586.854a3.72,3.72,0,0,1,1.316-1.56,3.314,3.314,0,0,1,1.855-.546,3.175,3.175,0,0,1,1.482.367,3.017,3.017,0,0,1,1.121.975v-4.1h2.042v11.544h-2.042v-1.279a2.815,2.815,0,0,1-1.05,1.03,3.088,3.088,0,0,1-1.567.39,3.23,3.23,0,0,1-1.841-.562,3.814,3.814,0,0,1-1.316-1.583,5.451,5.451,0,0,1-.481-2.348,5.359,5.359,0,0,1,.481-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.123,2.123,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                    />
                    <path
                      id="Path_24248"
                      data-name="Path 24248"
                      d="M653.868,586.683v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.654.2h.935v1.84h-1.265q-2.545,0-2.546-2.683v-4.165h-.949v-1.794h.949v-2.137h2.028v2.137h1.783v1.794Z"
                    />
                    <path
                      id="Path_24249"
                      data-name="Path 24249"
                      d="M660.131,585.154a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.352,2.352,0,0,0-.482,1.684v4.306H657.1v-8.642h2.013v1.341a2.96,2.96,0,0,1,1.014-1.076"
                    />
                    <path
                      id="Path_24250"
                      data-name="Path 24250"
                      d="M662.877,586.854a3.742,3.742,0,0,1,1.309-1.56,3.28,3.28,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.259,3.259,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.837,3.837,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.481-2.348,5.359,5.359,0,0,1,.481-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                    />
                    <path
                      id="Path_24251"
                      data-name="Path 24251"
                      d="M672.627,586.854a3.72,3.72,0,0,1,1.316-1.56,3.314,3.314,0,0,1,1.855-.546,3.168,3.168,0,0,1,1.481.367,3.013,3.013,0,0,1,1.122.975v-4.1h2.042v11.544H678.4v-1.279a2.815,2.815,0,0,1-1.05,1.03,3.088,3.088,0,0,1-1.567.39,3.23,3.23,0,0,1-1.841-.562,3.814,3.814,0,0,1-1.316-1.583,5.451,5.451,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.958,1.958,0,0,0-1.049-.3,1.915,1.915,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.951,1.951,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                    />
                    <path
                      id="Path_24252"
                      data-name="Path 24252"
                      d="M689.763,589.865h-5.825a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.634,1.634,0,0,0,1.6-1.045h2.172a3.948,3.948,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.762,3.762,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.227,5.227,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.395,1.505,4.871,4.871,0,0,1,.5,2.239,5.618,5.618,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.23,2.23,0,0,0-.625,1.365Z"
                    />
                    <path
                      id="Path_24253"
                      data-name="Path 24253"
                      d="M694.314,585.154a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.352,2.352,0,0,0-.482,1.684v4.306h-2.013v-8.642H693.3v1.341a2.96,2.96,0,0,1,1.014-1.076"
                    />
                    <path
                      id="Path_24254"
                      data-name="Path 24254"
                      d="M613.22,606.073a3.743,3.743,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.838,3.838,0,0,1-1.309-1.583,5.448,5.448,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.123,2.123,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                    />
                    <path
                      id="Path_24255"
                      data-name="Path 24255"
                      d="M624.3,612.509a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451H624.6a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.445,1.445,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.152,7.152,0,0,0-1.258-.46,9.97,9.97,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.246,3.246,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.894,5.894,0,0,0,1.251.461,10.106,10.106,0,0,1,1.424.483,2.542,2.542,0,0,1,.97.772,2.238,2.238,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.559,2.559,0,0,1-1.092.928,3.872,3.872,0,0,1-1.661.335,3.918,3.918,0,0,1-1.755-.382"
                    />
                    <path
                      id="Path_24256"
                      data-name="Path 24256"
                      d="M632.138,612.509a3.157,3.157,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.445,1.445,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.156,7.156,0,0,0-1.258-.46,9.971,9.971,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.613,2.613,0,0,1,1.093-.936,3.834,3.834,0,0,1,1.676-.343,3.245,3.245,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.894,5.894,0,0,0,1.251.461,10.106,10.106,0,0,1,1.424.483,2.55,2.55,0,0,1,.97.772,2.238,2.238,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.556,2.556,0,0,1-1.093.928,3.864,3.864,0,0,1-1.66.335,3.918,3.918,0,0,1-1.755-.382"
                    />
                    <path
                      id="Path_24257"
                      data-name="Path 24257"
                      d="M640.149,612.337a3.836,3.836,0,0,1-1.445-1.568,5.018,5.018,0,0,1-.525-2.34,4.9,4.9,0,0,1,.539-2.34,3.922,3.922,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.083,4.083,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.024,2.024,0,0,0,.769-.866,3.116,3.116,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.9,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.785,2.785,0,0,0-.582,1.9,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                    />
                    <path
                      id="Path_24258"
                      data-name="Path 24258"
                      d="M647.842,606.081a3.7,3.7,0,0,1,3.437-2.114,3.716,3.716,0,0,1,2.452.8,3.963,3.963,0,0,1,1.3,2.254h-2.172a1.728,1.728,0,0,0-.582-.882,1.737,1.737,0,0,0-2.38.359,3.906,3.906,0,0,0,0,3.838,1.61,1.61,0,0,0,1.366.678,1.538,1.538,0,0,0,1.6-1.185h2.172a4.042,4.042,0,0,1-1.309,2.231,3.657,3.657,0,0,1-2.445.826,3.7,3.7,0,0,1-3.437-2.113,5.732,5.732,0,0,1,0-4.7"
                    />
                    <path
                      id="Path_24259"
                      data-name="Path 24259"
                      d="M656.651,602.712a1.357,1.357,0,0,1,0-1.826,1.251,1.251,0,0,1,1.768,0,1.357,1.357,0,0,1,0,1.826,1.251,1.251,0,0,1-1.768,0m1.876,10.038h-2.013v-8.642h2.013Z"
                    />
                    <path
                      id="Path_24260"
                      data-name="Path 24260"
                      d="M660.476,606.073a3.742,3.742,0,0,1,1.309-1.56,3.28,3.28,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.837,3.837,0,0,1-1.309-1.583,5.448,5.448,0,0,1-.481-2.348,5.359,5.359,0,0,1,.481-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.378,3.378,0,0,0,0-2.73"
                    />
                    <path
                      id="Path_24261"
                      data-name="Path 24261"
                      d="M672.606,605.9v4.181a.873.873,0,0,0,.194.632.9.9,0,0,0,.655.195h.934v1.84h-1.265q-2.546,0-2.546-2.683V605.9h-.949v-1.794h.949v-2.137h2.028v2.137h1.783V605.9Z"
                    />
                    <path
                      id="Path_24262"
                      data-name="Path 24262"
                      d="M675.978,602.712a1.36,1.36,0,0,1,0-1.826,1.252,1.252,0,0,1,1.769,0,1.357,1.357,0,0,1,0,1.826,1.252,1.252,0,0,1-1.769,0m1.877,10.038h-2.013v-8.642h2.013Z"
                    />
                    <path
                      id="Path_24263"
                      data-name="Path 24263"
                      d="M681.307,612.337a3.842,3.842,0,0,1-1.445-1.568,5.018,5.018,0,0,1-.525-2.34,4.915,4.915,0,0,1,.539-2.34,3.923,3.923,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.083,4.083,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.023,2.023,0,0,0,.769-.866,3.115,3.115,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.9,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.785,2.785,0,0,0-.582,1.9,2.83,2.83,0,0,0,.568,1.9,1.805,1.805,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                    />
                    <path
                      id="Path_24264"
                      data-name="Path 24264"
                      d="M695.731,604.958a3.926,3.926,0,0,1,.877,2.722v5.07h-2.013v-4.773a2.363,2.363,0,0,0-.475-1.584,1.616,1.616,0,0,0-1.294-.554,1.654,1.654,0,0,0-1.316.554,2.344,2.344,0,0,0-.482,1.584v4.773h-2.013v-8.642h2.013v1.076a2.84,2.84,0,0,1,1.029-.881,3.168,3.168,0,0,1,3.674.655"
                    />
                    <path
                      id="Path_24265"
                      data-name="Path 24265"
                      d="M699.815,612.509a3.157,3.157,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.445,1.445,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.156,7.156,0,0,0-1.258-.46,9.971,9.971,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.613,2.613,0,0,1,1.093-.936,3.834,3.834,0,0,1,1.676-.343,3.245,3.245,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.894,5.894,0,0,0,1.251.461,10.106,10.106,0,0,1,1.424.483,2.542,2.542,0,0,1,.97.772,2.238,2.238,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.559,2.559,0,0,1-1.092.928,3.872,3.872,0,0,1-1.661.335,3.918,3.918,0,0,1-1.755-.382"
                    />
                  </g>
                  <path
                    id="Path_24266"
                    data-name="Path 24266"
                    d="M889.588,584.129a74.418,74.418,0,1,1-74.417-74.418,74.418,74.418,0,0,1,74.417,74.418"
                    fill="#fff"
                  />
                  <circle
                    id="Ellipse_703"
                    data-name="Ellipse 703"
                    cx="74.418"
                    cy="74.418"
                    r="74.418"
                    transform="translate(740.753 509.711)"
                    fill="none"
                    stroke="#36d77f"
                    strokeMiterlimit="10"
                    strokeWidth="2.415"
                  />
                  <path
                    id="Path_24267"
                    data-name="Path 24267"
                    d="M777.924,564.206a4.6,4.6,0,0,1,1.855,1.911,6.085,6.085,0,0,1,.654,2.879,5.985,5.985,0,0,1-.654,2.862,4.608,4.608,0,0,1-1.855,1.9,5.6,5.6,0,0,1-2.783.671h-3.509V563.536h3.509a5.614,5.614,0,0,1,2.783.67m-.41,7.426a3.748,3.748,0,0,0,.863-2.636,3.835,3.835,0,0,0-.863-2.66,3.117,3.117,0,0,0-2.445-.96h-1.424v7.192h1.424a3.159,3.159,0,0,0,2.445-.936"
                  />
                  <path
                    id="Path_24268"
                    data-name="Path 24268"
                    d="M782.08,564.385a1.359,1.359,0,0,1,0-1.825,1.249,1.249,0,0,1,1.769,0,1.359,1.359,0,0,1,0,1.825,1.249,1.249,0,0,1-1.769,0m1.877,10.039h-2.013v-8.642h2.013Z"
                  />
                  <path
                    id="Path_24269"
                    data-name="Path 24269"
                    d="M790.629,566.023a2.984,2.984,0,0,1,1.065.991v-1.232h2.027v8.705a4.972,4.972,0,0,1-.445,2.145,3.485,3.485,0,0,1-1.338,1.5,4.012,4.012,0,0,1-2.157.554,4.354,4.354,0,0,1-2.783-.858,3.243,3.243,0,0,1-1.229-2.34h2a1.6,1.6,0,0,0,.683.944,2.236,2.236,0,0,0,1.272.351,1.883,1.883,0,0,0,1.424-.57,2.4,2.4,0,0,0,.547-1.723v-1.342a3.151,3.151,0,0,1-1.072,1.014,3,3,0,0,1-1.56.406,3.23,3.23,0,0,1-1.841-.562,3.814,3.814,0,0,1-1.316-1.583,5.451,5.451,0,0,1-.482-2.348,5.358,5.358,0,0,1,.482-2.325,3.742,3.742,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.136,3.136,0,0,1,1.567.382m.777,2.715a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.949,1.949,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24270"
                    data-name="Path 24270"
                    d="M795.828,564.385a1.359,1.359,0,0,1,0-1.825,1.249,1.249,0,0,1,1.769,0,1.356,1.356,0,0,1,0,1.825,1.249,1.249,0,0,1-1.769,0m1.877,10.039h-2.013v-8.642h2.013Z"
                  />
                  <path
                    id="Path_24271"
                    data-name="Path 24271"
                    d="M802.034,567.575v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.655.2h.934v1.84h-1.265q-2.546,0-2.546-2.683v-4.165h-.949v-1.794h.949v-2.137h2.028v2.137h1.783v1.794Z"
                  />
                  <path
                    id="Path_24272"
                    data-name="Path 24272"
                    d="M805.233,567.747a3.743,3.743,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.838,3.838,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <rect
                    id="Rectangle_5667"
                    data-name="Rectangle 5667"
                    width="2.013"
                    height="11.544"
                    transform="translate(815.02 562.88)"
                  />
                  <path
                    id="Path_24273"
                    data-name="Path 24273"
                    d="M822.4,567.747a3.72,3.72,0,0,1,1.316-1.56,3.314,3.314,0,0,1,1.855-.546,3.175,3.175,0,0,1,1.482.367,3.017,3.017,0,0,1,1.121.975v-4.1h2.042v11.544h-2.042v-1.279a2.815,2.815,0,0,1-1.05,1.03,3.087,3.087,0,0,1-1.567.39A3.23,3.23,0,0,1,823.72,574a3.814,3.814,0,0,1-1.316-1.583,5.451,5.451,0,0,1-.481-2.348,5.359,5.359,0,0,1,.481-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.991,2.991,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24274"
                    data-name="Path 24274"
                    d="M832.154,567.747a3.735,3.735,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.83,3.83,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.958,1.958,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.991,2.991,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.951,1.951,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24275"
                    data-name="Path 24275"
                    d="M844.285,567.575v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.654.2h.935v1.84H844.8q-2.545,0-2.546-2.683v-4.165h-.949v-1.794h.949v-2.137h2.028v2.137h1.783v1.794Z"
                  />
                  <path
                    id="Path_24276"
                    data-name="Path 24276"
                    d="M847.484,567.747a3.742,3.742,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983v-1.232H855.3v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.837,3.837,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.481-2.348,5.359,5.359,0,0,1,.481-2.325m5.5.991a2.132,2.132,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.123,2.123,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24277"
                    data-name="Path 24277"
                    d="M780.318,586.966a3.742,3.742,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983V585h2.027v8.642h-2.027V592.38a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.837,3.837,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.481-2.348,5.359,5.359,0,0,1,.481-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.991,2.991,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.123,2.123,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24278"
                    data-name="Path 24278"
                    d="M796.821,585.851a3.926,3.926,0,0,1,.877,2.722v5.07h-2.013V588.87a2.362,2.362,0,0,0-.475-1.584,1.616,1.616,0,0,0-1.294-.554,1.655,1.655,0,0,0-1.316.554,2.342,2.342,0,0,0-.482,1.584v4.773H790.1V585h2.013v1.076a2.84,2.84,0,0,1,1.029-.881,3.168,3.168,0,0,1,3.674.655"
                  />
                  <path
                    id="Path_24279"
                    data-name="Path 24279"
                    d="M799.574,586.966a3.72,3.72,0,0,1,1.316-1.56,3.314,3.314,0,0,1,1.855-.546,3.174,3.174,0,0,1,1.482.367,3.018,3.018,0,0,1,1.121.975v-4.1h2.042v11.544h-2.042v-1.279a2.815,2.815,0,0,1-1.05,1.03,3.087,3.087,0,0,1-1.567.39,3.23,3.23,0,0,1-1.841-.562,3.814,3.814,0,0,1-1.316-1.583,5.451,5.451,0,0,1-.481-2.348,5.359,5.359,0,0,1,.481-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.991,2.991,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24280"
                    data-name="Path 24280"
                    d="M815.128,586.795v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.655.2h.934v1.84h-1.265q-2.546,0-2.546-2.683v-4.165h-.949V585h.949v-2.137h2.028V585h1.783v1.794Z"
                  />
                  <path
                    id="Path_24281"
                    data-name="Path 24281"
                    d="M819.83,593.23a3.842,3.842,0,0,1-1.445-1.568,5.018,5.018,0,0,1-.525-2.34,4.915,4.915,0,0,1,.539-2.34,3.922,3.922,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.083,4.083,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.023,2.023,0,0,0,.769-.866,3.115,3.115,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.9,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.785,2.785,0,0,0-.582,1.9,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_24282"
                    data-name="Path 24282"
                    d="M829.005,593.23a3.842,3.842,0,0,1-1.445-1.568,5.018,5.018,0,0,1-.525-2.34,4.915,4.915,0,0,1,.539-2.34,3.923,3.923,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.083,4.083,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.023,2.023,0,0,0,.769-.866,3.115,3.115,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.9,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.785,2.785,0,0,0-.582,1.9,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                  />
                  <rect
                    id="Rectangle_5668"
                    data-name="Rectangle 5668"
                    width="2.013"
                    height="11.544"
                    transform="translate(836.713 582.099)"
                  />
                  <path
                    id="Path_24283"
                    data-name="Path 24283"
                    d="M842.005,593.4a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.444,1.444,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.151,7.151,0,0,0-1.258-.46,9.975,9.975,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.169,2.169,0,0,1-.41-1.388,2.377,2.377,0,0,1,.381-1.311,2.613,2.613,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.245,3.245,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083H844.9a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.894,5.894,0,0,0,1.251.461,10.1,10.1,0,0,1,1.424.483,2.541,2.541,0,0,1,.97.772,2.238,2.238,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.559,2.559,0,0,1-1.092.928,3.871,3.871,0,0,1-1.661.335,3.918,3.918,0,0,1-1.755-.382"
                  />
                  <path
                    id="Path_24284"
                    data-name="Path 24284"
                    d="M784.439,604.477a3.033,3.033,0,0,1,1.56-.4,3.282,3.282,0,0,1,1.848.546,3.75,3.75,0,0,1,1.309,1.552,5.347,5.347,0,0,1,.481,2.332,5.448,5.448,0,0,1-.481,2.348,3.855,3.855,0,0,1-1.309,1.584A3.219,3.219,0,0,1,786,613a3.012,3.012,0,0,1-1.546-.39,3.388,3.388,0,0,1-1.086-.983v5.351h-2.013V604.219h2.013v1.248a3.138,3.138,0,0,1,1.072-.99m2.847,2.683a2.141,2.141,0,0,0-.777-.866,1.955,1.955,0,0,0-1.042-.3,1.888,1.888,0,0,0-1.028.3,2.185,2.185,0,0,0-.777.881,3.271,3.271,0,0,0,0,2.715,2.178,2.178,0,0,0,.777.881,1.893,1.893,0,0,0,2.07-.008,2.244,2.244,0,0,0,.777-.889,2.991,2.991,0,0,0,.295-1.373,2.906,2.906,0,0,0-.295-1.349"
                  />
                  <path
                    id="Path_24285"
                    data-name="Path 24285"
                    d="M794.131,604.485a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.353,2.353,0,0,0-.482,1.685v4.3H791.1V604.22h2.013v1.341a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24286"
                    data-name="Path 24286"
                    d="M798.381,612.449a3.843,3.843,0,0,1-1.445-1.568,5.018,5.018,0,0,1-.525-2.34,4.915,4.915,0,0,1,.539-2.34,3.922,3.922,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.083,4.083,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.023,2.023,0,0,0,.769-.866,3.116,3.116,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.9,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.785,2.785,0,0,0-.582,1.9,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_24287"
                    data-name="Path 24287"
                    d="M809.411,610.85l2.013-6.63h2.143l-2.948,8.642h-2.445l-2.934-8.642H807.4Z"
                  />
                  <path
                    id="Path_24288"
                    data-name="Path 24288"
                    d="M814.84,602.824a1.357,1.357,0,0,1,0-1.826,1.252,1.252,0,0,1,1.769,0,1.36,1.36,0,0,1,0,1.826,1.252,1.252,0,0,1-1.769,0m1.876,10.038H814.7V604.22h2.013Z"
                  />
                  <path
                    id="Path_24289"
                    data-name="Path 24289"
                    d="M818.665,606.185a3.72,3.72,0,0,1,1.316-1.56,3.314,3.314,0,0,1,1.855-.546,3.168,3.168,0,0,1,1.481.367,3.013,3.013,0,0,1,1.122.975v-4.1h2.042v11.544h-2.042v-1.279a2.814,2.814,0,0,1-1.05,1.03,3.087,3.087,0,0,1-1.567.39,3.23,3.23,0,0,1-1.841-.562,3.814,3.814,0,0,1-1.316-1.583,5.448,5.448,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.123,2.123,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24290"
                    data-name="Path 24290"
                    d="M835.8,609.2h-5.825a2.239,2.239,0,0,0,.6,1.467,1.785,1.785,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.947,3.947,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.762,3.762,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.227,5.227,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.505,4.872,4.872,0,0,1,.5,2.239,5.618,5.618,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.23,2.23,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_24291"
                    data-name="Path 24291"
                    d="M840.351,604.485a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.353,2.353,0,0,0-.482,1.685v4.3h-2.013V604.22h2.013v1.341a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24292"
                    data-name="Path 24292"
                    d="M844.428,612.62a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.444,1.444,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.147,7.147,0,0,0-1.258-.46,9.98,9.98,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.245,3.245,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.893,5.893,0,0,0,1.251.461,10.1,10.1,0,0,1,1.424.483,2.542,2.542,0,0,1,.97.772,2.239,2.239,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.559,2.559,0,0,1-1.092.928,3.871,3.871,0,0,1-1.661.335,3.918,3.918,0,0,1-1.755-.382"
                  />
                  <path
                    id="Path_24293"
                    data-name="Path 24293"
                    d="M969.944,74.67a3.551,3.551,0,0,1-1.817-.584,3.239,3.239,0,0,1-1.188-1.469l1.541-.625a2.339,2.339,0,0,0,1.2,1.115A2.411,2.411,0,0,0,971.55,73a2.513,2.513,0,0,0,1.409-1.2,1.939,1.939,0,0,0,.031-1.633,1.759,1.759,0,0,0-.789-.943,2.417,2.417,0,0,0-1.13-.279,14.109,14.109,0,0,0-1.6.106,12.98,12.98,0,0,1-2,.111,2.933,2.933,0,0,1-2.677-2.021,3.344,3.344,0,0,1-.222-1.871,3.281,3.281,0,0,1,.835-1.659,4.7,4.7,0,0,1,1.751-1.175,4.18,4.18,0,0,1,2.88-.216,3.3,3.3,0,0,1,2,1.714l-1.588.643a1.964,1.964,0,0,0-1.143-.9,2.483,2.483,0,0,0-1.763.122,2.357,2.357,0,0,0-1.277,1.091,1.852,1.852,0,0,0-.014,1.607,1.655,1.655,0,0,0,.76.9,2.375,2.375,0,0,0,1.088.268,15.551,15.551,0,0,0,1.6-.1,13.976,13.976,0,0,1,2.017-.089,3.209,3.209,0,0,1,1.528.487,3.1,3.1,0,0,1,1.183,1.55,3.423,3.423,0,0,1,.22,1.774,3.474,3.474,0,0,1-.777,1.732,4.354,4.354,0,0,1-1.8,1.272,4.9,4.9,0,0,1-2.127.386"
                  />
                  <path
                    id="Path_24294"
                    data-name="Path 24294"
                    d="M982.337,59.866l3.241,9.311-1.472.513-.479-1.376a3.1,3.1,0,0,1-.786,1.521,3.686,3.686,0,0,1-1.52.977,4.043,4.043,0,0,1-2.017.2,3.374,3.374,0,0,1-1.773-.9,4.9,4.9,0,0,1-1.241-2.026l-1.9-5.454,1.457-.507,1.828,5.25a3.241,3.241,0,0,0,1.4,1.885,2.444,2.444,0,0,0,2.069.108,2.5,2.5,0,0,0,1.595-1.412,3.441,3.441,0,0,0-.095-2.463l-1.781-5.114Z"
                  />
                  <path
                    id="Path_24295"
                    data-name="Path 24295"
                    d="M988.134,58.52a3.973,3.973,0,0,1,1.893-1.137,4.235,4.235,0,0,1,2.356-.025,4.361,4.361,0,0,1,2.031,1.258A5.777,5.777,0,0,1,995.71,61a5.889,5.889,0,0,1,.179,2.719,4.45,4.45,0,0,1-1.035,2.191,4.145,4.145,0,0,1-2,1.252,3.991,3.991,0,0,1-3.924-.926l1.8,6.24-1.5.432L985.2,58.946l1.5-.433.5,1.746a3.811,3.811,0,0,1,.933-1.739m5.094,1.178a3.047,3.047,0,0,0-1.461-.889,3.079,3.079,0,0,0-1.659.03,3,3,0,0,0-1.4.863,3.162,3.162,0,0,0-.765,1.551,4.536,4.536,0,0,0,1.079,3.733,3.147,3.147,0,0,0,1.474.9,3.1,3.1,0,0,0,3.061-.884,3.108,3.108,0,0,0,.757-1.549,4.285,4.285,0,0,0-.135-2.011,4.172,4.172,0,0,0-.951-1.748"
                  />
                  <path
                    id="Path_24296"
                    data-name="Path 24296"
                    d="M999.669,55.443a3.97,3.97,0,0,1,1.952-1.03,4.238,4.238,0,0,1,2.353.106,4.355,4.355,0,0,1,1.959,1.368,5.774,5.774,0,0,1,1.162,2.456,5.891,5.891,0,0,1,.028,2.726,4.439,4.439,0,0,1-1.155,2.129,4.147,4.147,0,0,1-2.067,1.14,3.991,3.991,0,0,1-3.867-1.142l1.454,6.33-1.519.349-3.255-14.168,1.52-.349.406,1.771a3.809,3.809,0,0,1,1.029-1.686m5.02,1.459a3.046,3.046,0,0,0-1.409-.968,3.086,3.086,0,0,0-1.658-.063,3,3,0,0,0-1.446.785,3.153,3.153,0,0,0-.85,1.506,4.117,4.117,0,0,0,.007,1.983,4.168,4.168,0,0,0,.863,1.8,3.151,3.151,0,0,0,1.422.984,3,3,0,0,0,1.643.075,3.03,3.03,0,0,0,1.463-.788,3.1,3.1,0,0,0,.841-1.5,4.277,4.277,0,0,0-.023-2.016,4.178,4.178,0,0,0-.853-1.8"
                  />
                  <rect
                    id="Rectangle_5669"
                    data-name="Rectangle 5669"
                    width="1.559"
                    height="13.314"
                    transform="matrix(0.982, -0.187, 0.187, 0.982, 1007.633, 49.784)"
                  />
                  <path
                    id="Path_24297"
                    data-name="Path 24297"
                    d="M1020.636,51.1l-3.352,15.2-1.591.248,1.1-4.978-5.244-9.052,1.71-.266,4.143,7.438,1.647-8.342Z"
                  />
                  <path
                    id="Path_24298"
                    data-name="Path 24298"
                    d="M1027.4,52.569a4.311,4.311,0,0,1,1.463-1.9,4.934,4.934,0,0,1,5.229-.191,4.185,4.185,0,0,1,1.684,2.313l-1.673.142a2.542,2.542,0,0,0-1.051-1.338,2.786,2.786,0,0,0-1.76-.374,2.7,2.7,0,0,0-2.07,1.142,4.075,4.075,0,0,0-.589,2.785,4.145,4.145,0,0,0,1.053,2.674,2.688,2.688,0,0,0,2.233.785,2.812,2.812,0,0,0,1.665-.647,2.557,2.557,0,0,0,.817-1.514l1.673-.142a4.228,4.228,0,0,1-4.038,3.684,4.485,4.485,0,0,1-2.418-.427,4.305,4.305,0,0,1-1.764-1.638,5.9,5.9,0,0,1-.808-2.64,5.792,5.792,0,0,1,.354-2.711"
                  />
                  <path
                    id="Path_24299"
                    data-name="Path 24299"
                    d="M1044.511,49.573a3.314,3.314,0,0,1,1.392,1.384,5.052,5.052,0,0,1,.566,2.3l.194,5.808-1.541.052-.186-5.575a3.275,3.275,0,0,0-.778-2.233,2.45,2.45,0,0,0-1.945-.718,2.506,2.506,0,0,0-1.933.875,3.408,3.408,0,0,0-.649,2.38l.182,5.448-1.558.053-.446-13.307,1.559-.052.162,4.855a3.13,3.13,0,0,1,1.237-1.212,3.971,3.971,0,0,1,1.81-.474,3.882,3.882,0,0,1,1.934.412"
                  />
                  <path
                    id="Path_24300"
                    data-name="Path 24300"
                    d="M1049.207,51.43a4.344,4.344,0,0,1,1.637-1.739,4.238,4.238,0,0,1,2.283-.584,4.013,4.013,0,0,1,2.13.6,3.636,3.636,0,0,1,1.325,1.43l.037-1.8,1.576.032-.2,9.857-1.577-.032.038-1.835a3.765,3.765,0,0,1-1.408,1.4,3.974,3.974,0,0,1-2.145.523,4.1,4.1,0,0,1-2.248-.694,4.455,4.455,0,0,1-1.556-1.849,5.9,5.9,0,0,1-.528-2.674,5.766,5.766,0,0,1,.637-2.641m6.923.87A3.115,3.115,0,0,0,1055,51.008a3.051,3.051,0,0,0-4.368,1.162,4.167,4.167,0,0,0-.468,1.934,4.274,4.274,0,0,0,.388,1.978,3.126,3.126,0,0,0,1.122,1.3,3,3,0,0,0,1.584.473,3.035,3.035,0,0,0,1.611-.408,3.1,3.1,0,0,0,1.182-1.254,4.219,4.219,0,0,0,.468-1.943,4.162,4.162,0,0,0-.388-1.951"
                  />
                  <path
                    id="Path_24301"
                    data-name="Path 24301"
                    d="M1062.642,49.646l-.573,9.843-1.556-.09.572-9.843Zm-1.394-2.009a1.17,1.17,0,0,1,.092-1.581,1,1,0,0,1,.771-.279.954.954,0,0,1,.708.366,1.194,1.194,0,0,1-.091,1.58.956.956,0,0,1-.746.281,1,1,0,0,1-.734-.367"
                  />
                  <path
                    id="Path_24302"
                    data-name="Path 24302"
                    d="M1072.774,51.4a4.315,4.315,0,0,1,.763,3.226l-.547,5.785-1.535-.145.524-5.553a3.267,3.267,0,0,0-.487-2.313,2.446,2.446,0,0,0-1.837-.96,2.507,2.507,0,0,0-2.029.622,3.409,3.409,0,0,0-.947,2.278l-.512,5.427-1.553-.147.927-9.815,1.552.146-.131,1.4a3.151,3.151,0,0,1,1.363-1.046,3.766,3.766,0,0,1,1.788-.247,3.709,3.709,0,0,1,2.661,1.345"
                  />
                  <path
                    id="Path_24303"
                    data-name="Path 24303"
                    d="M1081.115,53.8a4.362,4.362,0,0,1,1.878-1.478,4.237,4.237,0,0,1,2.343-.239,4.014,4.014,0,0,1,2.018.909,3.651,3.651,0,0,1,1.1,1.611l.3-1.773,1.554.264-1.656,9.72-1.554-.265.308-1.809a3.769,3.769,0,0,1-1.6,1.178,3.974,3.974,0,0,1-2.2.2,4.112,4.112,0,0,1-2.121-1.019,4.465,4.465,0,0,1-1.266-2.059,5.894,5.894,0,0,1-.127-2.723,5.787,5.787,0,0,1,1.02-2.518m6.719,1.884a3.12,3.12,0,0,0-.927-1.445,3.146,3.146,0,0,0-3.149-.545,3.074,3.074,0,0,0-1.343,1.048,4.183,4.183,0,0,0-.749,1.844,4.279,4.279,0,0,0,.091,2.014,3.119,3.119,0,0,0,.918,1.452,2.973,2.973,0,0,0,1.5.7,3.034,3.034,0,0,0,1.653-.165,3.1,3.1,0,0,0,1.355-1.065,4.231,4.231,0,0,0,.75-1.852,4.172,4.172,0,0,0-.1-1.988"
                  />
                  <path
                    id="Path_24304"
                    data-name="Path 24304"
                    d="M1092.749,55.872a4.318,4.318,0,0,1,1.967-1.376,4.933,4.933,0,0,1,5.045,1.387,4.186,4.186,0,0,1,.912,2.712l-1.638-.367a2.546,2.546,0,0,0-.6-1.591,2.785,2.785,0,0,0-1.567-.885,2.7,2.7,0,0,0-2.317.468,4.075,4.075,0,0,0-1.4,2.48,4.14,4.14,0,0,0,.2,2.866,2.687,2.687,0,0,0,1.9,1.419,2.813,2.813,0,0,0,1.782-.117,2.564,2.564,0,0,0,1.234-1.2l1.638.367a4.228,4.228,0,0,1-4.957,2.3,4.473,4.473,0,0,1-2.178-1.132,4.3,4.3,0,0,1-1.192-2.092,5.913,5.913,0,0,1,.021-2.761,5.8,5.8,0,0,1,1.152-2.48"
                  />
                  <path
                    id="Path_24305"
                    data-name="Path 24305"
                    d="M1105.12,57.9l-1.49,5.617a1.427,1.427,0,0,0,.021,1.057,1.388,1.388,0,0,0,.9.546l1.109.295-.355,1.339-1.358-.361a2.708,2.708,0,0,1-1.727-1.109,2.782,2.782,0,0,1-.1-2.167l1.49-5.617-1.176-.312.346-1.3,1.176.312.636-2.4,1.508.4-.637,2.4,2.368.628-.346,1.3Z"
                  />
                  <path
                    id="Path_24306"
                    data-name="Path 24306"
                    d="M1108.777,67.268a4.378,4.378,0,0,1-1.075-2.206,5.7,5.7,0,0,1,.214-2.75,5.548,5.548,0,0,1,1.387-2.367,4.423,4.423,0,0,1,2.155-1.2,5.008,5.008,0,0,1,4.616,1.429,4.424,4.424,0,0,1,1.1,2.2,5.528,5.528,0,0,1-.195,2.746,5.462,5.462,0,0,1-1.409,2.38,4.564,4.564,0,0,1-2.19,1.2,4.793,4.793,0,0,1-2.511-.118,4.62,4.62,0,0,1-2.1-1.308m4.151,0a3.073,3.073,0,0,0,1.505-.834,4.132,4.132,0,0,0,1.029-1.791,4.2,4.2,0,0,0,.17-2.057,2.993,2.993,0,0,0-.749-1.521,3.222,3.222,0,0,0-2.987-.925,2.914,2.914,0,0,0-1.453.841,4.343,4.343,0,0,0-1.005,1.8,4.475,4.475,0,0,0-.2,2.067,2.876,2.876,0,0,0,.708,1.509,3.033,3.033,0,0,0,1.354.842,3.154,3.154,0,0,0,1.628.071"
                  />
                  <path
                    id="Path_24307"
                    data-name="Path 24307"
                    d="M1123.116,62.4a3.489,3.489,0,0,1,1.909.182l-.567,1.593-.387-.137q-2.471-.879-3.47,1.936l-1.795,5.052-1.47-.522,3.3-9.29,1.469.522-.536,1.509a3.085,3.085,0,0,1,1.546-.845"
                  />
                  <path
                    id="Path_24308"
                    data-name="Path 24308"
                    d="M1124.619,72.937a3.287,3.287,0,0,1-.86-1.5,2.969,2.969,0,0,1,.078-1.682l1.5.594a1.676,1.676,0,0,0,.169,1.364,2.418,2.418,0,0,0,1.268,1.007,2.181,2.181,0,0,0,1.459.134,1.286,1.286,0,0,0,.863-.78,1.039,1.039,0,0,0-.155-1.1,7.432,7.432,0,0,0-1.347-1.2,11.854,11.854,0,0,1-1.369-1.173,3.034,3.034,0,0,1-.726-1.236,2.377,2.377,0,0,1,.13-1.6,2.413,2.413,0,0,1,.909-1.129,2.925,2.925,0,0,1,1.5-.479,4.189,4.189,0,0,1,1.808.321,3.723,3.723,0,0,1,2.036,1.7,3.046,3.046,0,0,1,.119,2.486l-1.45-.576a1.722,1.722,0,0,0-.091-1.372,2.136,2.136,0,0,0-1.173-.969,2.159,2.159,0,0,0-1.382-.142,1.187,1.187,0,0,0-.827.737,1.116,1.116,0,0,0-.017.854,2.192,2.192,0,0,0,.515.747,12.431,12.431,0,0,0,1.015.858,13.238,13.238,0,0,1,1.319,1.133,2.892,2.892,0,0,1,.7,1.18,2.307,2.307,0,0,1-.1,1.528,2.583,2.583,0,0,1-.936,1.2,2.881,2.881,0,0,1-1.5.5,4.13,4.13,0,0,1-1.8-.318,4.671,4.671,0,0,1-1.657-1.074"
                  />
                  <path
                    id="Path_24309"
                    data-name="Path 24309"
                    d="M451.235,810.461H417.3a1.679,1.679,0,0,1-1.679-1.679V798.438a1.679,1.679,0,0,1,1.679-1.679h33.94a1.679,1.679,0,0,1,1.679,1.679v10.344a1.679,1.679,0,0,1-1.679,1.679"
                    transform="translate(8.647 11.371)"
                  />
                  <path
                    id="Path_24310"
                    data-name="Path 24310"
                    d="M453.353,788.856l19.609,14.512a1.492,1.492,0,0,1-.105,2.538l-19.609,12.529c-1.245.795-3.01.03-3.01-1.3V790.089c0-1.389,1.892-2.138,3.115-1.233"
                    transform="translate(8.647 11.371)"
                  />
                  <g
                    id="Group_9095"
                    data-name="Group 9095"
                    transform="translate(58.531 10.582)"
                  >
                    <path
                      id="Path_23981"
                      data-name="Path 23981"
                      d="M621.759,803.682a3.353,3.353,0,0,0-1.365-1.429,4.121,4.121,0,0,0-2.02-.482,4.423,4.423,0,0,0-2.239.564,3.96,3.96,0,0,0-1.538,1.6,5.012,5.012,0,0,0-.555,2.4,5.068,5.068,0,0,0,.555,2.412,3.948,3.948,0,0,0,1.538,1.61,4.423,4.423,0,0,0,2.239.564,3.959,3.959,0,0,0,2.748-.947,4.113,4.113,0,0,0,1.292-2.565h-4.75v-1.656h6.97v1.62a6.248,6.248,0,0,1-6.26,5.422,6.534,6.534,0,0,1-3.257-.828,6.182,6.182,0,0,1-2.339-2.3,6.85,6.85,0,0,1,0-6.66,6.156,6.156,0,0,1,2.347-2.3,6.9,6.9,0,0,1,6.842.164,5.642,5.642,0,0,1,2.283,2.811Z"
                      transform="translate(-27.635)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23982"
                      data-name="Path 23982"
                      d="M633.088,801.759v3.712h4.367v1.692h-4.367v3.876H638v1.692h-6.988V800.067H638v1.692Z"
                      transform="translate(-31.976 -0.043)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23983"
                      data-name="Path 23983"
                      d="M653.743,812.732h-2.075l-6.241-9.444v9.444h-2.075V800.068h2.075l6.241,9.426v-9.426h2.075Z"
                      transform="translate(-34.78 -0.043)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23984"
                      data-name="Path 23984"
                      d="M662.406,801.759v3.712h4.367v1.692h-4.367v3.876h4.913v1.692h-6.988V800.067h6.988v1.692Z"
                      transform="translate(-38.639 -0.043)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23985"
                      data-name="Path 23985"
                      d="M679.241,812.738l-2.912-5.059h-1.583v5.059h-2.075V800.091h4.367a5.435,5.435,0,0,1,2.466.509,3.54,3.54,0,0,1,1.511,1.365,3.717,3.717,0,0,1,.5,1.91,3.784,3.784,0,0,1-.719,2.247,3.642,3.642,0,0,1-2.211,1.374l3.13,5.241Zm-4.495-6.715h2.293a2.4,2.4,0,0,0,1.756-.583,2.1,2.1,0,0,0,.591-1.565,2.024,2.024,0,0,0-.582-1.538,2.479,2.479,0,0,0-1.766-.555h-2.293Z"
                      transform="translate(-41.444 -0.048)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23986"
                      data-name="Path 23986"
                      d="M694.959,810.148h-5.3l-.91,2.584h-2.165l4.531-12.665h2.4l4.531,12.665h-2.184Zm-.583-1.692-2.056-5.877-2.075,5.877Z"
                      transform="translate(-44.607 -0.043)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23987"
                      data-name="Path 23987"
                      d="M711.946,800.091v1.692h-3.367v10.955H706.5V801.783H703.12v-1.692Z"
                      transform="translate(-48.365 -0.048)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23988"
                      data-name="Path 23988"
                      d="M719.324,801.759v3.712h4.367v1.692h-4.367v3.876h4.913v1.692h-6.988V800.067h6.988v1.692Z"
                      transform="translate(-51.576 -0.043)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23989"
                      data-name="Path 23989"
                      d="M743.382,800.864a5.538,5.538,0,0,1,2.347,2.22,6.676,6.676,0,0,1,.828,3.376,6.524,6.524,0,0,1-.828,3.348,5.468,5.468,0,0,1-2.347,2.174,7.854,7.854,0,0,1-3.54.755h-4.13V800.091h4.13a7.707,7.707,0,0,1,3.54.773m-.137,8.981a4.619,4.619,0,0,0,1.183-3.385,4.777,4.777,0,0,0-1.183-3.439,4.49,4.49,0,0,0-3.4-1.237h-2.056v9.262h2.056a4.567,4.567,0,0,0,3.4-1.2"
                      transform="translate(-55.772 -0.048)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23990"
                      data-name="Path 23990"
                      d="M759.813,810.148h-5.3l-.91,2.584h-2.165l4.531-12.665h2.4l4.531,12.665h-2.184Zm-.583-1.692-2.056-5.877-2.075,5.877Z"
                      transform="translate(-59.347 -0.043)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23991"
                      data-name="Path 23991"
                      d="M776.8,800.091v1.692h-3.367v10.955h-2.074V801.783h-3.385v-1.692Z"
                      transform="translate(-63.105 -0.048)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23992"
                      data-name="Path 23992"
                      d="M789.509,810.148h-5.3l-.91,2.584h-2.165l4.531-12.665h2.4l4.531,12.665h-2.184Zm-.583-1.692-2.056-5.877-2.075,5.877Z"
                      transform="translate(-66.097 -0.043)"
                      stroke="#000"
                      strokeWidth="0.3"
                    />
                    <path
                      id="Path_23993"
                      data-name="Path 23993"
                      d="M491.165,841.694a15.083,15.083,0,0,1,.064-10.106,9.84,9.84,0,0,1,2.663-3.982h1.887v.175a10.814,10.814,0,0,0-2.767,4.062,13.259,13.259,0,0,0-.927,4.877,12.951,12.951,0,0,0,.863,4.669,11.521,11.521,0,0,0,2.511,3.95v.175h-1.887a9.825,9.825,0,0,1-2.407-3.822"
                      transform="translate(0 -6.302)"
                    />
                    <path
                      id="Path_23994"
                      data-name="Path 23994"
                      d="M501.529,843.008a5.394,5.394,0,0,1-2.062-2.031,6.033,6.033,0,0,1,0-5.861,5.407,5.407,0,0,1,2.062-2.023,5.993,5.993,0,0,1,5.725,0,5.351,5.351,0,0,1,2.055,2.023,6.092,6.092,0,0,1,0,5.861,5.339,5.339,0,0,1-2.055,2.031,5.993,5.993,0,0,1-5.725,0m4.822-1.359a3.492,3.492,0,0,0,1.351-1.44,5.041,5.041,0,0,0,0-4.326,3.454,3.454,0,0,0-1.351-1.423,4.153,4.153,0,0,0-3.934,0,3.454,3.454,0,0,0-1.351,1.423,5.041,5.041,0,0,0,0,4.326,3.492,3.492,0,0,0,1.351,1.44,4.091,4.091,0,0,0,3.934,0"
                      transform="translate(-1.905 -7.383)"
                    />
                    <path
                      id="Path_23995"
                      data-name="Path 23995"
                      d="M521.491,843.666l-2.559-4.446h-1.391v4.446h-1.823V832.551h3.838a4.778,4.778,0,0,1,2.167.448,3.106,3.106,0,0,1,1.327,1.2,3.26,3.26,0,0,1,.44,1.679,3.329,3.329,0,0,1-.632,1.975,3.2,3.2,0,0,1-1.943,1.207l2.75,4.606Zm-3.95-5.9h2.015a2.117,2.117,0,0,0,1.543-.511,1.844,1.844,0,0,0,.519-1.375,1.78,1.78,0,0,0-.512-1.352,2.178,2.178,0,0,0-1.551-.487h-2.015Z"
                      transform="translate(-5.771 -7.426)"
                    />
                    <path
                      id="Path_23996"
                      data-name="Path 23996"
                      d="M535.745,843.343a3.3,3.3,0,0,1-1.407-1.111,2.819,2.819,0,0,1-.512-1.679h1.95a1.758,1.758,0,0,0,.568,1.183,2.014,2.014,0,0,0,1.416.464,2.178,2.178,0,0,0,1.471-.456,1.482,1.482,0,0,0,.528-1.175,1.283,1.283,0,0,0-.328-.911,2.2,2.2,0,0,0-.815-.544,12.369,12.369,0,0,0-1.351-.416,12.656,12.656,0,0,1-1.767-.583,2.921,2.921,0,0,1-1.159-.92,2.658,2.658,0,0,1-.48-1.664,2.957,2.957,0,0,1,.48-1.679,3.068,3.068,0,0,1,1.343-1.1,4.883,4.883,0,0,1,2-.383,4.164,4.164,0,0,1,2.647.807,2.981,2.981,0,0,1,1.144,2.215h-2.015a1.456,1.456,0,0,0-.576-1.039,2.124,2.124,0,0,0-1.391-.432,1.975,1.975,0,0,0-1.28.4,1.392,1.392,0,0,0-.5,1.151,1.168,1.168,0,0,0,.311.839,2.205,2.205,0,0,0,.792.52,12.254,12.254,0,0,0,1.311.416,13.684,13.684,0,0,1,1.8.607,3,3,0,0,1,1.183.936,2.688,2.688,0,0,1,.488,1.687,3.035,3.035,0,0,1-.455,1.6,3.293,3.293,0,0,1-1.328,1.207,4.38,4.38,0,0,1-2.055.456,4.98,4.98,0,0,1-2.015-.392"
                      transform="translate(-9.887 -7.383)"
                    />
                    <path
                      id="Path_23997"
                      data-name="Path 23997"
                      d="M548.48,832.551v7.084a2.278,2.278,0,0,0,2.511,2.543,2.574,2.574,0,0,0,1.863-.64,2.528,2.528,0,0,0,.664-1.9v-7.084h1.823V839.6a4.248,4.248,0,0,1-.592,2.3,3.669,3.669,0,0,1-1.582,1.407,5.112,5.112,0,0,1-2.191.464,5.053,5.053,0,0,1-2.182-.464,3.578,3.578,0,0,1-1.559-1.407,4.342,4.342,0,0,1-.576-2.3v-7.053Z"
                      transform="translate(-12.803 -7.426)"
                    />
                    <path
                      id="Path_23998"
                      data-name="Path 23998"
                      d="M568.329,837.46a3,3,0,0,1-1.279,1.224,4.75,4.75,0,0,1-2.255.471H562.78v4.51h-1.823V832.551H564.8a4.852,4.852,0,0,1,2.167.44,3.069,3.069,0,0,1,1.328,1.192,3.268,3.268,0,0,1,.44,1.679,3.354,3.354,0,0,1-.4,1.6m-1.983-.264a1.727,1.727,0,0,0,.511-1.335q0-1.823-2.062-1.823H562.78v3.629H564.8a2.224,2.224,0,0,0,1.551-.471"
                      transform="translate(-16.053 -7.426)"
                    />
                    <path
                      id="Path_23999"
                      data-name="Path 23999"
                      d="M580.643,837.46a3,3,0,0,1-1.279,1.224,4.75,4.75,0,0,1-2.255.471h-2.015v4.51h-1.823V832.551h3.838a4.851,4.851,0,0,1,2.167.44,3.062,3.062,0,0,1,1.327,1.192,3.26,3.26,0,0,1,.44,1.679,3.354,3.354,0,0,1-.4,1.6m-1.983-.264a1.727,1.727,0,0,0,.512-1.335q0-1.823-2.062-1.823h-2.015v3.629h2.015a2.224,2.224,0,0,0,1.551-.471"
                      transform="translate(-18.852 -7.426)"
                    />
                    <path
                      id="Path_24000"
                      data-name="Path 24000"
                      d="M587.62,843.008a5.393,5.393,0,0,1-2.062-2.031,6.033,6.033,0,0,1,0-5.861,5.406,5.406,0,0,1,2.062-2.023,5.993,5.993,0,0,1,5.725,0,5.351,5.351,0,0,1,2.055,2.023,6.093,6.093,0,0,1,0,5.861,5.339,5.339,0,0,1-2.055,2.031,5.993,5.993,0,0,1-5.725,0m4.822-1.359a3.492,3.492,0,0,0,1.351-1.44,5.04,5.04,0,0,0,0-4.326,3.455,3.455,0,0,0-1.351-1.423,4.153,4.153,0,0,0-3.934,0,3.454,3.454,0,0,0-1.352,1.423,5.041,5.041,0,0,0,0,4.326,3.492,3.492,0,0,0,1.352,1.44,4.091,4.091,0,0,0,3.934,0"
                      transform="translate(-21.472 -7.383)"
                    />
                    <path
                      id="Path_24001"
                      data-name="Path 24001"
                      d="M607.582,843.666l-2.558-4.446h-1.392v4.446h-1.823V832.551h3.838a4.778,4.778,0,0,1,2.167.448,3.108,3.108,0,0,1,1.327,1.2,3.268,3.268,0,0,1,.44,1.679,3.33,3.33,0,0,1-.632,1.975,3.205,3.205,0,0,1-1.943,1.207l2.75,4.606Zm-3.95-5.9h2.015a2.117,2.117,0,0,0,1.543-.511,1.845,1.845,0,0,0,.519-1.375,1.78,1.78,0,0,0-.512-1.352,2.178,2.178,0,0,0-1.551-.487h-2.015Z"
                      transform="translate(-25.338 -7.426)"
                    />
                    <path
                      id="Path_24002"
                      data-name="Path 24002"
                      d="M621.9,832.551v1.487H618.94v9.627h-1.823v-9.627h-2.974v-1.487Z"
                      transform="translate(-28.142 -7.426)"
                    />
                    <path
                      id="Path_24003"
                      data-name="Path 24003"
                      d="M638.951,832.551v1.487h-2.959v9.627H634.17v-9.627H631.2v-1.487Z"
                      transform="translate(-32.017 -7.426)"
                    />
                    <path
                      id="Path_24004"
                      data-name="Path 24004"
                      d="M652.488,832.551v11.114h-1.823V838.8h-5.23v4.861h-1.823V832.551h1.823v4.765h5.23v-4.765Z"
                      transform="translate(-34.84 -7.426)"
                    />
                    <path
                      id="Path_24005"
                      data-name="Path 24005"
                      d="M660.026,834.018v3.262h3.838v1.487h-3.838v3.407h4.318v1.487H658.2V832.53h6.141v1.487Z"
                      transform="translate(-38.156 -7.421)"
                    />
                    <path
                      id="Path_24006"
                      data-name="Path 24006"
                      d="M681.167,833.231a4.861,4.861,0,0,1,2.063,1.951,5.865,5.865,0,0,1,.728,2.966,5.737,5.737,0,0,1-.728,2.943A4.809,4.809,0,0,1,681.167,843a6.911,6.911,0,0,1-3.11.664h-3.63V832.551h3.63a6.772,6.772,0,0,1,3.11.68m-.12,7.892a4.058,4.058,0,0,0,1.039-2.974,4.2,4.2,0,0,0-1.039-3.023,3.944,3.944,0,0,0-2.99-1.087H676.25v8.14h1.807a4.011,4.011,0,0,0,2.99-1.056"
                      transform="translate(-41.843 -7.426)"
                    />
                    <path
                      id="Path_24007"
                      data-name="Path 24007"
                      d="M690.923,834.018v3.262h3.838v1.487h-3.838v3.407h4.318v1.487H689.1V832.53h6.141v1.487Z"
                      transform="translate(-45.178 -7.421)"
                    />
                    <path
                      id="Path_24008"
                      data-name="Path 24008"
                      d="M709.26,832.551l-4.173,11.114h-2.111l-4.19-11.114h1.95l3.295,9.243,3.31-9.243Z"
                      transform="translate(-47.379 -7.426)"
                    />
                    <path
                      id="Path_24009"
                      data-name="Path 24009"
                      d="M716.129,834.018v3.262h3.838v1.487h-3.838v3.407h4.318v1.487h-6.141V832.53h6.141v1.487Z"
                      transform="translate(-50.907 -7.421)"
                    />
                    <path
                      id="Path_24010"
                      data-name="Path 24010"
                      d="M726.974,842.194h3.758v1.471h-5.581V832.552h1.823Z"
                      transform="translate(-53.372 -7.426)"
                    />
                    <path
                      id="Path_24011"
                      data-name="Path 24011"
                      d="M736.375,843.008a5.393,5.393,0,0,1-2.062-2.031,6.033,6.033,0,0,1,0-5.861,5.406,5.406,0,0,1,2.062-2.023,5.992,5.992,0,0,1,5.725,0,5.351,5.351,0,0,1,2.055,2.023,6.093,6.093,0,0,1,0,5.861,5.339,5.339,0,0,1-2.055,2.031,5.992,5.992,0,0,1-5.725,0m4.822-1.359a3.492,3.492,0,0,0,1.351-1.44,5.041,5.041,0,0,0,0-4.326,3.455,3.455,0,0,0-1.351-1.423,4.153,4.153,0,0,0-3.934,0,3.455,3.455,0,0,0-1.352,1.423,5.041,5.041,0,0,0,0,4.326,3.493,3.493,0,0,0,1.352,1.44,4.091,4.091,0,0,0,3.934,0"
                      transform="translate(-55.281 -7.383)"
                    />
                    <path
                      id="Path_24012"
                      data-name="Path 24012"
                      d="M757.936,837.46a3,3,0,0,1-1.279,1.224,4.75,4.75,0,0,1-2.255.471h-2.015v4.51h-1.823V832.551H754.4a4.852,4.852,0,0,1,2.167.44,3.063,3.063,0,0,1,1.327,1.192,3.26,3.26,0,0,1,.44,1.679,3.354,3.354,0,0,1-.4,1.6m-1.983-.264a1.726,1.726,0,0,0,.512-1.335q0-1.823-2.062-1.823h-2.015v3.629H754.4a2.223,2.223,0,0,0,1.551-.471"
                      transform="translate(-59.148 -7.426)"
                    />
                    <path
                      id="Path_24013"
                      data-name="Path 24013"
                      d="M774.583,832.551v11.114H772.76v-7.612l-3.391,7.612h-1.263l-3.406-7.612v7.612h-1.823V832.551h1.967l3.9,8.715,3.886-8.715Z"
                      transform="translate(-61.946 -7.426)"
                    />
                    <path
                      id="Path_24014"
                      data-name="Path 24014"
                      d="M782.953,834.018v3.262h3.838v1.487h-3.838v3.407h4.318v1.487H781.13V832.53h6.141v1.487Z"
                      transform="translate(-66.095 -7.421)"
                    />
                    <path
                      id="Path_24015"
                      data-name="Path 24015"
                      d="M801.106,843.661h-1.823l-5.486-8.3v8.3h-1.823V832.53H793.8l5.486,8.284V832.53h1.823Z"
                      transform="translate(-68.56 -7.421)"
                    />
                    <path
                      id="Path_24016"
                      data-name="Path 24016"
                      d="M813.906,832.551v1.487h-2.959v9.627h-1.823v-9.627h-2.974v-1.487Z"
                      transform="translate(-71.782 -7.426)"
                    />
                    <path
                      id="Path_24017"
                      data-name="Path 24017"
                      d="M825.984,843.008a5.393,5.393,0,0,1-2.062-2.031,6.033,6.033,0,0,1,0-5.861,5.406,5.406,0,0,1,2.062-2.023,5.993,5.993,0,0,1,5.725,0,5.344,5.344,0,0,1,2.055,2.023,6.088,6.088,0,0,1,0,5.861,5.332,5.332,0,0,1-2.055,2.031,5.993,5.993,0,0,1-5.725,0m4.822-1.359a3.492,3.492,0,0,0,1.352-1.44,5.041,5.041,0,0,0,0-4.326,3.454,3.454,0,0,0-1.352-1.423,4.153,4.153,0,0,0-3.934,0,3.455,3.455,0,0,0-1.352,1.423,5.04,5.04,0,0,0,0,4.326,3.492,3.492,0,0,0,1.352,1.44,4.091,4.091,0,0,0,3.934,0"
                      transform="translate(-75.648 -7.383)"
                    />
                    <path
                      id="Path_24018"
                      data-name="Path 24018"
                      d="M846.714,832.551v1.487H842v3.278h3.678V838.8H842v4.861h-1.823V832.551Z"
                      transform="translate(-79.514 -7.426)"
                    />
                    <path
                      id="Path_24019"
                      data-name="Path 24019"
                      d="M862.952,833.231a4.861,4.861,0,0,1,2.063,1.951,5.865,5.865,0,0,1,.728,2.966,5.737,5.737,0,0,1-.728,2.943A4.809,4.809,0,0,1,862.952,843a6.911,6.911,0,0,1-3.11.664h-3.63V832.551h3.63a6.772,6.772,0,0,1,3.11.68m-.12,7.892a4.059,4.059,0,0,0,1.039-2.974,4.2,4.2,0,0,0-1.039-3.023,3.944,3.944,0,0,0-2.99-1.087h-1.807v8.14h1.807a4.011,4.011,0,0,0,2.99-1.056"
                      transform="translate(-83.16 -7.426)"
                    />
                    <path
                      id="Path_24020"
                      data-name="Path 24020"
                      d="M877.392,841.39h-4.653l-.8,2.27h-1.9l3.983-11.13h2.11l3.982,11.13h-1.919Zm-.512-1.487-1.807-5.166L873.25,839.9Z"
                      transform="translate(-86.302 -7.421)"
                    />
                    <path
                      id="Path_24021"
                      data-name="Path 24021"
                      d="M892.32,832.551v1.487h-2.959v9.627h-1.823v-9.627h-2.974v-1.487Z"
                      transform="translate(-89.604 -7.426)"
                    />
                    <path
                      id="Path_24022"
                      data-name="Path 24022"
                      d="M903.488,841.39h-4.653l-.8,2.27h-1.9l3.983-11.13h2.11l3.982,11.13h-1.919Zm-.512-1.487-1.807-5.166-1.823,5.166Z"
                      transform="translate(-92.233 -7.421)"
                    />
                    <path
                      id="Path_24023"
                      data-name="Path 24023"
                      d="M910.732,845.516v-.176a11.507,11.507,0,0,0,2.511-3.949,12.951,12.951,0,0,0,.864-4.67,13.26,13.26,0,0,0-.928-4.877,10.814,10.814,0,0,0-2.766-4.062V827.6H912.3a9.854,9.854,0,0,1,2.663,3.982,15.1,15.1,0,0,1,.064,10.107,9.843,9.843,0,0,1-2.407,3.822Z"
                      transform="translate(-95.478 -6.302)"
                    />
                  </g>
                  <path
                    id="Path_24313"
                    data-name="Path 24313"
                    d="M1554.883,810.461h-33.94a1.679,1.679,0,0,1-1.679-1.679V798.438a1.679,1.679,0,0,1,1.679-1.679h33.94a1.68,1.68,0,0,1,1.679,1.679v10.344a1.68,1.68,0,0,1-1.679,1.679"
                    transform="translate(9.498 11.371)"
                  />
                  <path
                    id="Path_24314"
                    data-name="Path 24314"
                    d="M1557,788.856l19.609,14.512a1.492,1.492,0,0,1-.1,2.538L1556.9,818.435c-1.245.795-3.01.03-3.01-1.3V790.089c0-1.389,1.892-2.138,3.115-1.233"
                    transform="translate(9.498 11.371)"
                  />
                  <path
                    id="Path_24315"
                    data-name="Path 24315"
                    d="M887.347,192.95a52.376,52.376,0,1,1-8.293,73.606,52.378,52.378,0,0,1,8.293-73.606"
                    fill="#fff"
                  />
                  <path
                    id="Path_24316"
                    data-name="Path 24316"
                    d="M887.347,192.95a52.376,52.376,0,1,1-8.293,73.606A52.378,52.378,0,0,1,887.347,192.95Z"
                    fill="none"
                    stroke="#ffc919"
                    strokeMiterlimit="10"
                    strokeWidth="2.421"
                  />
                  <path
                    id="Path_24317"
                    data-name="Path 24317"
                    d="M888.344,222.87v10.889h-2.013v-7.083l-2.69,7.083h-1.524l-2.7-7.083v7.083H877.4V222.87h2.287l3.192,8.1,3.193-8.1Z"
                  />
                  <path
                    id="Path_24318"
                    data-name="Path 24318"
                    d="M897.85,225.116v8.642h-2.028v-1.091a2.7,2.7,0,0,1-1.014.881,2.944,2.944,0,0,1-1.359.32,3.171,3.171,0,0,1-1.653-.428,2.922,2.922,0,0,1-1.129-1.265,4.454,4.454,0,0,1-.41-1.989v-5.07h2.013v4.759a2.358,2.358,0,0,0,.475,1.582,1.61,1.61,0,0,0,1.294.554,1.628,1.628,0,0,0,1.309-.554,2.363,2.363,0,0,0,.474-1.582v-4.759Z"
                  />
                  <rect
                    id="Rectangle_5670"
                    data-name="Rectangle 5670"
                    width="2.013"
                    height="11.544"
                    transform="translate(899.835 222.215)"
                  />
                  <path
                    id="Path_24319"
                    data-name="Path 24319"
                    d="M906.177,226.91v4.181a.873.873,0,0,0,.193.632.905.905,0,0,0,.654.195h.935v1.84h-1.265q-2.545,0-2.546-2.683V226.91H903.2v-1.794h.949v-2.137h2.029v2.137h1.782v1.794Z"
                  />
                  <path
                    id="Path_24320"
                    data-name="Path 24320"
                    d="M909.549,223.72a1.356,1.356,0,0,1,0-1.825,1.249,1.249,0,0,1,1.769,0,1.359,1.359,0,0,1,0,1.825,1.249,1.249,0,0,1-1.769,0m1.876,10.039h-2.013v-8.642h2.013Z"
                  />
                  <rect
                    id="Rectangle_5671"
                    data-name="Rectangle 5671"
                    width="2.013"
                    height="11.544"
                    transform="translate(913.41 222.215)"
                  />
                  <path
                    id="Path_24321"
                    data-name="Path 24321"
                    d="M917.372,227.082a3.742,3.742,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027V232.5a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.837,3.837,0,0,1-1.309-1.583,5.452,5.452,0,0,1-.482-2.348,5.359,5.359,0,0,1,.482-2.325m5.5.991a2.132,2.132,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.305,2.123,2.123,0,0,0,.777-.873,3.378,3.378,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24322"
                    data-name="Path 24322"
                    d="M929.5,226.91v4.181a.873.873,0,0,0,.194.632.9.9,0,0,0,.655.195h.934v1.84H930.02q-2.546,0-2.546-2.683V226.91h-.949v-1.794h.949v-2.137H929.5v2.137h1.783v1.794Z"
                  />
                  <path
                    id="Path_24323"
                    data-name="Path 24323"
                    d="M940.087,230.092h-5.825a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.948,3.948,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.762,3.762,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.227,5.227,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.505,4.872,4.872,0,0,1,.5,2.239,5.618,5.618,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.231,2.231,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_24324"
                    data-name="Path 24324"
                    d="M944.638,225.382a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.351,2.351,0,0,0-.482,1.684v4.306h-2.013v-8.642h2.013v1.341a2.959,2.959,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24325"
                    data-name="Path 24325"
                    d="M947.384,227.082a3.743,3.743,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.258,3.258,0,0,1,1.072.983v-1.232H955.2v8.642h-2.027V232.5a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.838,3.838,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.481-2.348,5.359,5.359,0,0,1,.481-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.156,2.156,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.305,2.123,2.123,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <rect
                    id="Rectangle_5672"
                    data-name="Rectangle 5672"
                    width="2.013"
                    height="11.544"
                    transform="translate(957.171 222.215)"
                  />
                  <path
                    id="Path_24326"
                    data-name="Path 24326"
                    d="M876.156,245.267a3.71,3.71,0,0,1,1.326-1.56,3.467,3.467,0,0,1,1.94-.554,3.421,3.421,0,0,1,2.331.8,4.009,4.009,0,0,1,1.237,2.254h-2.065a1.736,1.736,0,0,0-.553-.882,1.468,1.468,0,0,0-.963-.319,1.508,1.508,0,0,0-1.3.678,4.083,4.083,0,0,0,0,3.838,1.508,1.508,0,0,0,1.3.678,1.473,1.473,0,0,0,1.516-1.185h2.065a4.081,4.081,0,0,1-1.245,2.231,3.364,3.364,0,0,1-2.323.826,3.459,3.459,0,0,1-1.94-.554,3.707,3.707,0,0,1-1.326-1.559,5.994,5.994,0,0,1,0-4.7"
                  />
                  <path
                    id="Path_24327"
                    data-name="Path 24327"
                    d="M885.791,251.522a3.773,3.773,0,0,1-1.373-1.568,5.231,5.231,0,0,1-.5-2.34,5.128,5.128,0,0,1,.512-2.34,3.847,3.847,0,0,1,1.4-1.568,3.828,3.828,0,0,1,3.964,0,3.841,3.841,0,0,1,1.4,1.568,5.116,5.116,0,0,1,.513,2.34,5.019,5.019,0,0,1-.526,2.34,3.916,3.916,0,0,1-1.422,1.568,3.731,3.731,0,0,1-2,.554,3.606,3.606,0,0,1-1.969-.554m2.946-1.638a2,2,0,0,0,.731-.866,3.26,3.26,0,0,0,.274-1.4,2.834,2.834,0,0,0-.568-1.9,1.758,1.758,0,0,0-1.387-.663,1.72,1.72,0,0,0-1.374.663,2.882,2.882,0,0,0-.553,1.9,2.933,2.933,0,0,0,.54,1.9,1.682,1.682,0,0,0,1.36.663,1.8,1.8,0,0,0,.977-.289"
                  />
                  <path
                    id="Path_24328"
                    data-name="Path 24328"
                    d="M895.995,243.559a2.423,2.423,0,0,1,1.36-.39v2.293h-.506a1.788,1.788,0,0,0-1.36.484,2.438,2.438,0,0,0-.458,1.685v4.305h-1.913v-8.642h1.913v1.341a2.9,2.9,0,0,1,.964-1.076"
                  />
                  <path
                    id="Path_24329"
                    data-name="Path 24329"
                    d="M901.572,243.551a2.78,2.78,0,0,1,1.483-.4,3.006,3.006,0,0,1,1.756.546,3.7,3.7,0,0,1,1.244,1.552,5.587,5.587,0,0,1,.458,2.332,5.693,5.693,0,0,1-.458,2.348,3.813,3.813,0,0,1-1.244,1.584,2.951,2.951,0,0,1-1.756.561,2.755,2.755,0,0,1-1.47-.39,3.292,3.292,0,0,1-1.032-.983v5.351H898.64V243.293h1.913v1.248a3.05,3.05,0,0,1,1.019-.99m2.706,2.683a2.112,2.112,0,0,0-.738-.866,1.8,1.8,0,0,0-.991-.3,1.732,1.732,0,0,0-.977.3,2.15,2.15,0,0,0-.738.881,3.419,3.419,0,0,0,0,2.715,2.144,2.144,0,0,0,.738.881,1.726,1.726,0,0,0,1.968-.008,2.218,2.218,0,0,0,.738-.889,3.111,3.111,0,0,0,.28-1.373,3.022,3.022,0,0,0-.28-1.349"
                  />
                  <path
                    id="Path_24330"
                    data-name="Path 24330"
                    d="M909.3,251.522a3.774,3.774,0,0,1-1.373-1.568,5.231,5.231,0,0,1-.5-2.34,5.128,5.128,0,0,1,.512-2.34,3.848,3.848,0,0,1,1.4-1.568,3.828,3.828,0,0,1,3.964,0,3.84,3.84,0,0,1,1.4,1.568,5.115,5.115,0,0,1,.513,2.34,5.018,5.018,0,0,1-.526,2.34,3.915,3.915,0,0,1-1.422,1.568,3.731,3.731,0,0,1-2,.554,3.606,3.606,0,0,1-1.969-.554m2.946-1.638a2,2,0,0,0,.731-.866,3.261,3.261,0,0,0,.274-1.4,2.834,2.834,0,0,0-.568-1.9,1.758,1.758,0,0,0-1.387-.663,1.721,1.721,0,0,0-1.374.663,2.882,2.882,0,0,0-.553,1.9,2.933,2.933,0,0,0,.54,1.9,1.682,1.682,0,0,0,1.36.663,1.8,1.8,0,0,0,.977-.289"
                  />
                  <path
                    id="Path_24331"
                    data-name="Path 24331"
                    d="M919.505,243.559a2.423,2.423,0,0,1,1.36-.39v2.293h-.506a1.788,1.788,0,0,0-1.36.484,2.438,2.438,0,0,0-.458,1.685v4.305h-1.913v-8.642h1.913v1.341a2.9,2.9,0,0,1,.964-1.076"
                  />
                  <path
                    id="Path_24332"
                    data-name="Path 24332"
                    d="M922.115,245.259a3.7,3.7,0,0,1,1.244-1.56,3.007,3.007,0,0,1,1.756-.546,2.788,2.788,0,0,1,1.483.39,3.152,3.152,0,0,1,1.018.983v-1.232h1.928v8.642h-1.928v-1.263a3,3,0,0,1-1.018,1.006,2.81,2.81,0,0,1-1.5.4,2.93,2.93,0,0,1-1.742-.562,3.8,3.8,0,0,1-1.244-1.583,5.681,5.681,0,0,1-.458-2.348,5.584,5.584,0,0,1,.458-2.325m5.228.991a2.1,2.1,0,0,0-.738-.874,1.786,1.786,0,0,0-1-.3,1.755,1.755,0,0,0-.984.3,2.117,2.117,0,0,0-.731.865,3.026,3.026,0,0,0-.281,1.35,3.124,3.124,0,0,0,.281,1.365,2.194,2.194,0,0,0,.738.9,1.7,1.7,0,0,0,.977.312,1.787,1.787,0,0,0,1-.305,2.086,2.086,0,0,0,.738-.873,3.549,3.549,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24333"
                    data-name="Path 24333"
                    d="M933.644,245.087v4.181a.9.9,0,0,0,.184.632.832.832,0,0,0,.622.2h.889v1.84h-1.2q-2.419,0-2.419-2.683v-4.165h-.9v-1.794h.9v-2.137h1.927v2.137h1.7v1.794Z"
                  />
                  <path
                    id="Path_24334"
                    data-name="Path 24334"
                    d="M936.85,241.9a1.41,1.41,0,0,1,0-1.825,1.146,1.146,0,0,1,1.681,0,1.41,1.41,0,0,1,0,1.825,1.146,1.146,0,0,1-1.681,0m1.783,10.039h-1.914v-8.642h1.914Z"
                  />
                  <path
                    id="Path_24335"
                    data-name="Path 24335"
                    d="M941.913,251.522a3.774,3.774,0,0,1-1.373-1.568,5.231,5.231,0,0,1-.5-2.34,5.128,5.128,0,0,1,.512-2.34,3.848,3.848,0,0,1,1.4-1.568,3.828,3.828,0,0,1,3.964,0,3.833,3.833,0,0,1,1.4,1.568,5.115,5.115,0,0,1,.513,2.34,5.019,5.019,0,0,1-.526,2.34,3.916,3.916,0,0,1-1.422,1.568,3.731,3.731,0,0,1-2,.554,3.609,3.609,0,0,1-1.969-.554m2.946-1.638a2,2,0,0,0,.731-.866,3.246,3.246,0,0,0,.274-1.4,2.834,2.834,0,0,0-.568-1.9,1.758,1.758,0,0,0-1.387-.663,1.721,1.721,0,0,0-1.374.663,2.882,2.882,0,0,0-.553,1.9,2.933,2.933,0,0,0,.54,1.9,1.682,1.682,0,0,0,1.36.663,1.8,1.8,0,0,0,.977-.289"
                  />
                  <path
                    id="Path_24336"
                    data-name="Path 24336"
                    d="M955.623,244.144a4.06,4.06,0,0,1,.834,2.722v5.07h-1.914v-4.773a2.45,2.45,0,0,0-.451-1.584,1.5,1.5,0,0,0-1.23-.554,1.537,1.537,0,0,0-1.251.554,2.428,2.428,0,0,0-.458,1.584v4.773H949.24v-8.642h1.913v1.076a2.849,2.849,0,0,1,4.47-.226"
                  />
                  <path
                    id="Path_24337"
                    data-name="Path 24337"
                    d="M959.505,251.694a3.049,3.049,0,0,1-1.169-1.037,2.863,2.863,0,0,1-.471-1.451h1.927a1.237,1.237,0,0,0,.431.827,1.373,1.373,0,0,0,.936.327,1.322,1.322,0,0,0,.854-.249.789.789,0,0,0,.308-.64.683.683,0,0,0-.376-.632,6.581,6.581,0,0,0-1.2-.46,9.175,9.175,0,0,1-1.388-.484,2.445,2.445,0,0,1-.929-.764,2.245,2.245,0,0,1-.39-1.388,2.463,2.463,0,0,1,.363-1.311,2.515,2.515,0,0,1,1.038-.936,3.493,3.493,0,0,1,1.593-.343,2.989,2.989,0,0,1,2.159.772,3.026,3.026,0,0,1,.889,2.083h-1.832a1.183,1.183,0,0,0-.376-.819,1.516,1.516,0,0,0-1.694-.086.78.78,0,0,0,.1,1.271,5.435,5.435,0,0,0,1.189.461,9.233,9.233,0,0,1,1.353.483,2.444,2.444,0,0,1,.923.772,2.319,2.319,0,0,1,.4,1.381,2.529,2.529,0,0,1-.362,1.342,2.467,2.467,0,0,1-1.039.928,3.519,3.519,0,0,1-1.578.335,3.571,3.571,0,0,1-1.668-.382"
                  />
                  <path
                    id="Path_24338"
                    data-name="Path 24338"
                    d="M1145.807,232.67v2.73h3.379v1.732h-3.379v2.886h3.811V241.8h-5.824V230.891h5.824v1.779Z"
                  />
                  <path
                    id="Path_24339"
                    data-name="Path 24339"
                    d="M1155.845,241.8l-1.64-2.683-1.452,2.683H1150.6l2.6-4.337-2.632-4.3h2.272l1.625,2.667,1.467-2.667h2.157l-2.617,4.3,2.646,4.337Z"
                  />
                  <path
                    id="Path_24340"
                    data-name="Path 24340"
                    d="M1162.3,233.411a3.035,3.035,0,0,1,1.56-.4,3.279,3.279,0,0,1,1.848.546,3.744,3.744,0,0,1,1.31,1.552,5.361,5.361,0,0,1,.481,2.332,5.462,5.462,0,0,1-.481,2.348,3.839,3.839,0,0,1-1.31,1.583,3.21,3.21,0,0,1-1.848.562,3.008,3.008,0,0,1-1.545-.39,3.377,3.377,0,0,1-1.086-.983v5.351h-2.013V233.153h2.013V234.4a3.134,3.134,0,0,1,1.071-.99m2.848,2.683a2.145,2.145,0,0,0-.776-.866,1.962,1.962,0,0,0-1.044-.3,1.89,1.89,0,0,0-1.028.3,2.182,2.182,0,0,0-.776.881,3.27,3.27,0,0,0,0,2.715,2.176,2.176,0,0,0,.776.881,1.9,1.9,0,0,0,2.072-.008,2.248,2.248,0,0,0,.776-.889,2.99,2.99,0,0,0,.3-1.373,2.9,2.9,0,0,0-.3-1.349"
                  />
                  <path
                    id="Path_24341"
                    data-name="Path 24341"
                    d="M1170.427,241.382a3.847,3.847,0,0,1-1.444-1.568,5.018,5.018,0,0,1-.525-2.34,4.9,4.9,0,0,1,.539-2.34,3.916,3.916,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.928,3.928,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,4,4,0,0,1-1.495,1.568,4.083,4.083,0,0,1-2.107.554,3.945,3.945,0,0,1-2.072-.554m3.1-1.638a2.03,2.03,0,0,0,.769-.866,3.115,3.115,0,0,0,.287-1.4,2.74,2.74,0,0,0-.6-1.9,1.888,1.888,0,0,0-1.459-.662,1.847,1.847,0,0,0-1.446.662,2.786,2.786,0,0,0-.582,1.9,2.83,2.83,0,0,0,.568,1.9,1.8,1.8,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_24342"
                    data-name="Path 24342"
                    d="M1181.163,233.419a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.352,2.352,0,0,0-.482,1.684V241.8h-2.013v-8.642h2.013v1.341a2.959,2.959,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24343"
                    data-name="Path 24343"
                    d="M1186.29,234.947v4.181a.868.868,0,0,0,.194.632.9.9,0,0,0,.653.2h.936v1.84h-1.266q-2.546,0-2.546-2.683v-4.165h-.948v-1.794h.948v-2.137h2.029v2.137h1.783v1.794Z"
                  />
                  <path
                    id="Path_24344"
                    data-name="Path 24344"
                    d="M1196.874,238.129h-5.825a2.24,2.24,0,0,0,.6,1.467,1.785,1.785,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.948,3.948,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.763,3.763,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.228,5.228,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.505,4.872,4.872,0,0,1,.5,2.239,5.626,5.626,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.231,2.231,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_24345"
                    data-name="Path 24345"
                    d="M1201.425,233.419a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.935,1.935,0,0,0-1.431.484,2.352,2.352,0,0,0-.482,1.684V241.8H1198.4v-8.642h2.013v1.341a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24346"
                    data-name="Path 24346"
                    d="M1205.5,241.554a3.159,3.159,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.22,1.22,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.445,1.445,0,0,0,.9-.249.776.776,0,0,0,.323-.64.677.677,0,0,0-.4-.632,7.148,7.148,0,0,0-1.258-.46,9.976,9.976,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.613,2.613,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.246,3.246,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.164,1.164,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.891,5.891,0,0,0,1.251.461,10.1,10.1,0,0,1,1.424.483,2.55,2.55,0,0,1,.97.772,2.239,2.239,0,0,1,.424,1.381,2.431,2.431,0,0,1-.381,1.342,2.556,2.556,0,0,1-1.093.928,3.865,3.865,0,0,1-1.661.335,3.917,3.917,0,0,1-1.754-.382"
                  />
                  <path
                    id="Path_24347"
                    data-name="Path 24347"
                    d="M997.028,389.38a52.379,52.379,0,1,1,52.378,52.378,52.378,52.378,0,0,1-52.378-52.378"
                    fill="#fff"
                  />
                  <path
                    id="Path_24348"
                    data-name="Path 24348"
                    d="M997.028,389.38a52.379,52.379,0,1,1,52.378,52.378A52.378,52.378,0,0,1,997.028,389.38Z"
                    fill="none"
                    stroke="#ffc919"
                    strokeMiterlimit="10"
                    strokeWidth="2.421"
                  />
                  <path
                    id="Path_24349"
                    data-name="Path 24349"
                    d="M1027.656,387.54V389.3h-2.675v9.126h-2.013V389.3h-2.675V387.54Z"
                  />
                  <path
                    id="Path_24350"
                    data-name="Path 24350"
                    d="M1032.15,390.052a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.351,2.351,0,0,0-.482,1.684v4.306h-2.013v-8.642h2.013v1.341a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24351"
                    data-name="Path 24351"
                    d="M1034.9,391.752a3.735,3.735,0,0,1,1.309-1.56,3.28,3.28,0,0,1,1.848-.546,3.049,3.049,0,0,1,1.56.39,3.259,3.259,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.83,3.83,0,0,1-1.309-1.583,5.45,5.45,0,0,1-.482-2.348,5.358,5.358,0,0,1,.482-2.325m5.5.991a2.137,2.137,0,0,0-.776-.874,1.962,1.962,0,0,0-1.05-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.954,1.954,0,0,0,1.05-.3,2.128,2.128,0,0,0,.776-.873,3.378,3.378,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24352"
                    data-name="Path 24352"
                    d="M1044.646,391.752a3.72,3.72,0,0,1,1.316-1.56,3.316,3.316,0,0,1,1.855-.546,3.175,3.175,0,0,1,1.482.367,3.018,3.018,0,0,1,1.121.975v-4.1h2.042v11.544h-2.042V397.15a2.819,2.819,0,0,1-1.049,1.03,3.094,3.094,0,0,1-1.568.39,3.229,3.229,0,0,1-1.841-.562,3.815,3.815,0,0,1-1.316-1.583,5.45,5.45,0,0,1-.482-2.348,5.358,5.358,0,0,1,.482-2.325m5.5.991a2.137,2.137,0,0,0-.776-.874,1.962,1.962,0,0,0-1.05-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.227,2.227,0,0,0,.777.9,1.856,1.856,0,0,0,1.028.312,1.954,1.954,0,0,0,1.05-.3,2.128,2.128,0,0,0,.776-.873,3.378,3.378,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24353"
                    data-name="Path 24353"
                    d="M1061.782,394.763h-5.824a2.234,2.234,0,0,0,.6,1.467,1.786,1.786,0,0,0,1.309.53,1.636,1.636,0,0,0,1.6-1.045h2.171a3.947,3.947,0,0,1-1.323,2.051,3.657,3.657,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.762,3.762,0,0,1-1.424-1.568,5.141,5.141,0,0,1-.511-2.34,5.228,5.228,0,0,1,.5-2.355,3.68,3.68,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.505,4.872,4.872,0,0,1,.5,2.239,5.626,5.626,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.741,1.741,0,0,0-1.258.491,2.23,2.23,0,0,0-.626,1.365Z"
                  />
                  <path
                    id="Path_24354"
                    data-name="Path 24354"
                    d="M1066.333,390.052a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.347,2.347,0,0,0-.482,1.684v4.306h-2.013v-8.642h2.013v1.341a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24355"
                    data-name="Path 24355"
                    d="M1070.41,398.187a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.444,1.444,0,0,0,.9-.249.774.774,0,0,0,.323-.64.677.677,0,0,0-.395-.632,7.152,7.152,0,0,0-1.258-.46,9.974,9.974,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.169,2.169,0,0,1-.41-1.388,2.377,2.377,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.245,3.245,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083H1073.3a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.9,5.9,0,0,0,1.251.461,10.1,10.1,0,0,1,1.424.483,2.55,2.55,0,0,1,.97.772,2.238,2.238,0,0,1,.425,1.381,2.439,2.439,0,0,1-.381,1.342,2.564,2.564,0,0,1-1.094.928,3.865,3.865,0,0,1-1.661.335,3.916,3.916,0,0,1-1.754-.382"
                  />
                  <path
                    id="Path_24356"
                    data-name="Path 24356"
                    d="M994.7,321.326a52.366,52.366,0,1,1-69.9-24.459,52.366,52.366,0,0,1,69.9,24.459"
                    fill="#fff"
                  />
                  <path
                    id="Path_24357"
                    data-name="Path 24357"
                    d="M994.7,321.326a52.366,52.366,0,1,1-69.9-24.459A52.366,52.366,0,0,1,994.7,321.326Z"
                    fill="none"
                    stroke="#ffc919"
                    strokeMiterlimit="10"
                    strokeWidth="2.421"
                  />
                  <path
                    id="Path_24358"
                    data-name="Path 24358"
                    d="M929.648,347.666a2.835,2.835,0,0,1,.547,1.716,2.939,2.939,0,0,1-.4,1.537,2.688,2.688,0,0,1-1.143,1.037,3.9,3.9,0,0,1-1.769.375h-4.328V341.442H926.7a4.008,4.008,0,0,1,1.762.359,2.566,2.566,0,0,1,1.122,1,2.782,2.782,0,0,1,.381,1.451,2.628,2.628,0,0,1-.467,1.591,2.5,2.5,0,0,1-1.244.9,2.237,2.237,0,0,1,1.394.92m-5.076-1.731h1.841a1.6,1.6,0,0,0,1.107-.351,1.287,1.287,0,0,0,.388-1.006,1.311,1.311,0,0,0-.388-1.014,1.574,1.574,0,0,0-1.107-.359h-1.841Zm3.171,4.243a1.365,1.365,0,0,0,.41-1.061,1.422,1.422,0,0,0-.432-1.1,1.649,1.649,0,0,0-1.164-.4h-1.985v2.932H926.6a1.63,1.63,0,0,0,1.143-.374"
                  />
                  <path
                    id="Path_24359"
                    data-name="Path 24359"
                    d="M934.833,343.953a2.647,2.647,0,0,1,1.43-.39v2.293h-.531a1.941,1.941,0,0,0-1.432.484,2.353,2.353,0,0,0-.482,1.685v4.3H931.8v-8.642h2.013v1.341a2.962,2.962,0,0,1,1.015-1.076"
                  />
                  <path
                    id="Path_24360"
                    data-name="Path 24360"
                    d="M937.579,345.653a3.742,3.742,0,0,1,1.309-1.56,3.28,3.28,0,0,1,1.848-.546,3.051,3.051,0,0,1,1.56.39,3.257,3.257,0,0,1,1.072.983v-1.232H945.4v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.838,3.838,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.481-2.348,5.359,5.359,0,0,1,.481-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.35,2.99,2.99,0,0,0,.295,1.365,2.233,2.233,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.948,1.948,0,0,0,1.049-.3,2.123,2.123,0,0,0,.777-.873,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24361"
                    data-name="Path 24361"
                    d="M954.081,344.538a3.926,3.926,0,0,1,.877,2.722v5.07h-2.013v-4.773a2.363,2.363,0,0,0-.475-1.584,1.616,1.616,0,0,0-1.294-.554,1.655,1.655,0,0,0-1.316.554,2.344,2.344,0,0,0-.482,1.584v4.773h-2.013v-8.642h2.013v1.076a2.84,2.84,0,0,1,1.029-.881,3.168,3.168,0,0,1,3.674.655"
                  />
                  <path
                    id="Path_24362"
                    data-name="Path 24362"
                    d="M956.835,345.653a3.72,3.72,0,0,1,1.316-1.56,3.314,3.314,0,0,1,1.855-.546,3.168,3.168,0,0,1,1.481.367,3.013,3.013,0,0,1,1.122.975v-4.1h2.042V352.33h-2.042v-1.279a2.815,2.815,0,0,1-1.05,1.03,3.088,3.088,0,0,1-1.567.39,3.23,3.23,0,0,1-1.841-.562,3.814,3.814,0,0,1-1.316-1.583,5.45,5.45,0,0,1-.482-2.348,5.358,5.358,0,0,1,.482-2.325m5.5.991a2.133,2.133,0,0,0-.777-.874,1.956,1.956,0,0,0-1.049-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.232,2.232,0,0,0,.776.9,1.859,1.859,0,0,0,1.029.312,1.949,1.949,0,0,0,1.049-.3,2.124,2.124,0,0,0,.777-.873,3.378,3.378,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24363"
                    data-name="Path 24363"
                    d="M967.916,352.089a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.445,1.445,0,0,0,.9-.249.775.775,0,0,0,.324-.64.678.678,0,0,0-.4-.632,7.149,7.149,0,0,0-1.258-.46,9.973,9.973,0,0,1-1.46-.484,2.546,2.546,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.377,2.377,0,0,1,.381-1.311,2.613,2.613,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.246,3.246,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.894,5.894,0,0,0,1.251.461,10.1,10.1,0,0,1,1.424.483,2.542,2.542,0,0,1,.97.772,2.238,2.238,0,0,1,.425,1.381,2.432,2.432,0,0,1-.382,1.342,2.559,2.559,0,0,1-1.092.928,3.871,3.871,0,0,1-1.661.335,3.918,3.918,0,0,1-1.755-.382"
                  />
                  <path
                    id="Path_24364"
                    data-name="Path 24364"
                    d="M1123.77,349.308l-2.215-4.243h-.949v4.243h-2.013V338.419h3.767a4.114,4.114,0,0,1,1.985.445,2.969,2.969,0,0,1,1.23,1.2,3.5,3.5,0,0,1,.41,1.693,3.43,3.43,0,0,1-.576,1.942,2.945,2.945,0,0,1-1.711,1.193l2.4,4.415Zm-3.164-5.881h1.682a1.6,1.6,0,0,0,1.223-.429,1.677,1.677,0,0,0,.4-1.193,1.6,1.6,0,0,0-.4-1.163,1.64,1.64,0,0,0-1.223-.413h-1.682Z"
                  />
                  <path
                    id="Path_24365"
                    data-name="Path 24365"
                    d="M1135.16,345.641h-5.825a2.24,2.24,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.948,3.948,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.064-.554,3.768,3.768,0,0,1-1.423-1.568,5.128,5.128,0,0,1-.511-2.34,5.228,5.228,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.608,3.608,0,0,1,1.395,1.505,4.871,4.871,0,0,1,.5,2.239,5.626,5.626,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.743,1.743,0,0,0-1.259.491,2.231,2.231,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_24366"
                    data-name="Path 24366"
                    d="M1139.028,342.459v4.181a.872.872,0,0,0,.194.632.9.9,0,0,0,.654.2h.935v1.84h-1.265q-2.546,0-2.546-2.683v-4.165h-.949v-1.794H1137v-2.137h2.028v2.137h1.783v1.794Z"
                  />
                  <path
                    id="Path_24367"
                    data-name="Path 24367"
                    d="M1142.227,342.631a3.734,3.734,0,0,1,1.309-1.56,3.279,3.279,0,0,1,1.848-.546,3.048,3.048,0,0,1,1.56.39,3.257,3.257,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027v-1.263a3.09,3.09,0,0,1-2.646,1.4,3.194,3.194,0,0,1-1.834-.562,3.83,3.83,0,0,1-1.309-1.583,5.45,5.45,0,0,1-.482-2.348,5.358,5.358,0,0,1,.482-2.325m5.5.991a2.138,2.138,0,0,0-.776-.874,1.962,1.962,0,0,0-1.05-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.3,1.35,2.99,2.99,0,0,0,.3,1.365,2.226,2.226,0,0,0,.777.9,1.855,1.855,0,0,0,1.028.312,1.962,1.962,0,0,0,1.05-.3,2.138,2.138,0,0,0,.776-.874,3.379,3.379,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24368"
                    data-name="Path 24368"
                    d="M1152.15,339.269a1.359,1.359,0,0,1,0-1.825,1.249,1.249,0,0,1,1.769,0,1.359,1.359,0,0,1,0,1.825,1.249,1.249,0,0,1-1.769,0m1.877,10.039h-2.013v-8.642h2.013Z"
                  />
                  <rect
                    id="Rectangle_5673"
                    data-name="Rectangle 5673"
                    width="2.013"
                    height="11.544"
                    transform="translate(1156.012 337.764)"
                  />
                  <path
                    id="Path_24369"
                    data-name="Path 24369"
                    d="M1167.359,345.641h-5.826a2.244,2.244,0,0,0,.6,1.467,1.787,1.787,0,0,0,1.31.53,1.632,1.632,0,0,0,1.595-1.045h2.172a3.948,3.948,0,0,1-1.323,2.051,3.656,3.656,0,0,1-2.4.8,3.9,3.9,0,0,1-2.064-.554,3.767,3.767,0,0,1-1.423-1.568,5.115,5.115,0,0,1-.512-2.34,5.241,5.241,0,0,1,.5-2.355,3.688,3.688,0,0,1,1.41-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.505,4.885,4.885,0,0,1,.5,2.239,5.759,5.759,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.9,1.9,0,0,0-1.338-.507,1.745,1.745,0,0,0-1.259.491,2.236,2.236,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_24370"
                    data-name="Path 24370"
                    d="M1171.91,340.931a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484A2.351,2.351,0,0,0,1170.9,345v4.306h-2.013v-8.642h2.013v1.341a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24371"
                    data-name="Path 24371"
                    d="M1175.987,349.066a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.22,1.22,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.444,1.444,0,0,0,.9-.249.776.776,0,0,0,.323-.64.677.677,0,0,0-.4-.632,7.149,7.149,0,0,0-1.258-.46,9.934,9.934,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.246,3.246,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.891,5.891,0,0,0,1.251.461,10.1,10.1,0,0,1,1.424.483,2.551,2.551,0,0,1,.97.772,2.239,2.239,0,0,1,.424,1.381,2.431,2.431,0,0,1-.381,1.342,2.556,2.556,0,0,1-1.093.928,3.865,3.865,0,0,1-1.661.335,3.916,3.916,0,0,1-1.754-.382"
                  />
                  <path
                    id="Path_24372"
                    data-name="Path 24372"
                    d="M1148.642,176.871a52.372,52.372,0,1,1-15.871-72.344,52.372,52.372,0,0,1,15.871,72.344"
                    fill="#fff"
                  />
                  <path
                    id="Path_24373"
                    data-name="Path 24373"
                    d="M1148.642,176.871a52.372,52.372,0,1,1-15.871-72.344A52.372,52.372,0,0,1,1148.642,176.871Z"
                    fill="none"
                    stroke="#ffc919"
                    strokeMiterlimit="10"
                    strokeWidth="2.421"
                  />
                  <rect
                    id="Rectangle_5674"
                    data-name="Rectangle 5674"
                    width="2.013"
                    height="10.889"
                    transform="translate(1069.575 145.781)"
                  />
                  <path
                    id="Path_24374"
                    data-name="Path 24374"
                    d="M1085.833,148.878a3.868,3.868,0,0,1,.9,2.722v5.07h-2.014V151.9a2.28,2.28,0,0,0-.474-1.553,1.641,1.641,0,0,0-1.294-.538,1.662,1.662,0,0,0-1.3.538,2.257,2.257,0,0,0-.482,1.553v4.773h-2.013V151.9a2.275,2.275,0,0,0-.475-1.553,1.637,1.637,0,0,0-1.294-.538,1.679,1.679,0,0,0-1.316.538,2.257,2.257,0,0,0-.482,1.553v4.773h-2.013v-8.642h2.013v1.045a2.726,2.726,0,0,1,1-.858,2.914,2.914,0,0,1,1.345-.312,3.242,3.242,0,0,1,1.668.429,2.9,2.9,0,0,1,1.136,1.225,3.1,3.1,0,0,1,2.732-1.654,3.066,3.066,0,0,1,2.366.975"
                  />
                  <path
                    id="Path_24375"
                    data-name="Path 24375"
                    d="M1091.728,148.285a3.048,3.048,0,0,1,1.561-.4,3.282,3.282,0,0,1,1.848.546,3.75,3.75,0,0,1,1.309,1.552,5.348,5.348,0,0,1,.481,2.332,5.446,5.446,0,0,1-.481,2.348,3.855,3.855,0,0,1-1.309,1.584,3.219,3.219,0,0,1-1.848.561,3.012,3.012,0,0,1-1.546-.39,3.389,3.389,0,0,1-1.086-.983v5.351h-2.013V148.027h2.013v1.248a3.143,3.143,0,0,1,1.071-.99m2.848,2.683a2.141,2.141,0,0,0-.777-.866,1.955,1.955,0,0,0-1.042-.3,1.893,1.893,0,0,0-1.029.3,2.189,2.189,0,0,0-.776.881,3.27,3.27,0,0,0,0,2.715,2.183,2.183,0,0,0,.776.881,1.894,1.894,0,0,0,1.029.3,1.871,1.871,0,0,0,1.042-.312,2.237,2.237,0,0,0,.777-.889,2.989,2.989,0,0,0,.295-1.373,2.906,2.906,0,0,0-.295-1.349"
                  />
                  <path
                    id="Path_24376"
                    data-name="Path 24376"
                    d="M1099.861,156.257a3.842,3.842,0,0,1-1.445-1.568,5.005,5.005,0,0,1-.525-2.34,4.915,4.915,0,0,1,.539-2.34,3.922,3.922,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.807,4.807,0,0,1-.554,2.34,4,4,0,0,1-1.5,1.568,4.083,4.083,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.024,2.024,0,0,0,.769-.866,3.118,3.118,0,0,0,.288-1.4,2.738,2.738,0,0,0-.6-1.9,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.784,2.784,0,0,0-.582,1.9,2.83,2.83,0,0,0,.568,1.9,1.806,1.806,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_24377"
                    data-name="Path 24377"
                    d="M1110.6,148.293a2.648,2.648,0,0,1,1.431-.39V150.2h-.532a1.939,1.939,0,0,0-1.431.484,2.353,2.353,0,0,0-.482,1.685v4.3h-2.013v-8.642h2.013v1.341a2.959,2.959,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24378"
                    data-name="Path 24378"
                    d="M1115.723,149.822V154a.872.872,0,0,0,.194.632.9.9,0,0,0,.654.2h.935v1.84h-1.265q-2.546,0-2.546-2.683v-4.165h-.949v-1.794h.949v-2.137h2.028v2.137h1.783v1.794Z"
                  />
                  <path
                    id="Path_24379"
                    data-name="Path 24379"
                    d="M1126.307,153h-5.825a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.948,3.948,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.064-.554,3.767,3.767,0,0,1-1.423-1.568,5.127,5.127,0,0,1-.511-2.34,5.228,5.228,0,0,1,.5-2.355,3.68,3.68,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.6,3.6,0,0,1,1.4,1.505,4.869,4.869,0,0,1,.5,2.239,5.626,5.626,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.231,2.231,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_24380"
                    data-name="Path 24380"
                    d="M1130.859,148.293a2.648,2.648,0,0,1,1.431-.39V150.2h-.532a1.938,1.938,0,0,0-1.431.484,2.353,2.353,0,0,0-.482,1.685v4.3h-2.013v-8.642h2.013v1.341a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24381"
                    data-name="Path 24381"
                    d="M1134.936,156.428a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.494,1.494,0,0,0,.985.327,1.444,1.444,0,0,0,.9-.249.776.776,0,0,0,.323-.64.677.677,0,0,0-.395-.632,7.073,7.073,0,0,0-1.258-.46,9.972,9.972,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.169,2.169,0,0,1-.41-1.388,2.377,2.377,0,0,1,.381-1.311,2.613,2.613,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.245,3.245,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.9,5.9,0,0,0,1.251.461,10.106,10.106,0,0,1,1.424.483,2.55,2.55,0,0,1,.97.772,2.238,2.238,0,0,1,.424,1.381,2.431,2.431,0,0,1-.381,1.342,2.555,2.555,0,0,1-1.093.928,3.865,3.865,0,0,1-1.661.335,3.916,3.916,0,0,1-1.754-.382"
                  />
                  <path
                    id="Path_24382"
                    data-name="Path 24382"
                    d="M1015.667,265.556a5.149,5.149,0,0,1-1.869-1.989,6.308,6.308,0,0,1,0-5.741,5.163,5.163,0,0,1,1.869-1.989,5.044,5.044,0,0,1,5.184,0,5.132,5.132,0,0,1,1.856,1.989,6.373,6.373,0,0,1,0,5.741,5.105,5.105,0,0,1-1.863,1.989,5.031,5.031,0,0,1-5.177,0m4.185-1.677a2.972,2.972,0,0,0,1.079-1.272,4.477,4.477,0,0,0,.388-1.918,4.429,4.429,0,0,0-.388-1.911,2.829,2.829,0,0,0-2.675-1.693,2.961,2.961,0,0,0-1.6.437,2.907,2.907,0,0,0-1.086,1.256,4.429,4.429,0,0,0-.388,1.911,4.477,4.477,0,0,0,.388,1.918,2.85,2.85,0,0,0,2.69,1.716,2.884,2.884,0,0,0,1.6-.444"
                  />
                  <path
                    id="Path_24383"
                    data-name="Path 24383"
                    d="M1027.971,257.78a3.033,3.033,0,0,1,1.56-.4,3.279,3.279,0,0,1,1.848.546,3.75,3.75,0,0,1,1.309,1.552,5.346,5.346,0,0,1,.481,2.332,5.447,5.447,0,0,1-.481,2.348,3.845,3.845,0,0,1-1.309,1.583,3.21,3.21,0,0,1-1.848.562,3.013,3.013,0,0,1-1.546-.39,3.387,3.387,0,0,1-1.086-.983v5.351h-2.013V257.522h2.013v1.248a3.137,3.137,0,0,1,1.072-.99m2.847,2.683a2.146,2.146,0,0,0-.776-.866,1.962,1.962,0,0,0-1.043-.3,1.888,1.888,0,0,0-1.028.3,2.193,2.193,0,0,0-.777.881,3.272,3.272,0,0,0,0,2.715,2.187,2.187,0,0,0,.777.881,1.895,1.895,0,0,0,2.071-.008,2.249,2.249,0,0,0,.776-.889,2.99,2.99,0,0,0,.3-1.373,2.9,2.9,0,0,0-.3-1.349"
                  />
                  <path
                    id="Path_24384"
                    data-name="Path 24384"
                    d="M1041.985,262.5h-5.825a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.947,3.947,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.762,3.762,0,0,1-1.424-1.568,5.127,5.127,0,0,1-.511-2.34,5.228,5.228,0,0,1,.5-2.355,3.68,3.68,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.505,4.872,4.872,0,0,1,.5,2.239,5.626,5.626,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.744,1.744,0,0,0-1.259.491,2.229,2.229,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_24385"
                    data-name="Path 24385"
                    d="M1046.536,257.787a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.347,2.347,0,0,0-.482,1.684v4.306h-2.013v-8.642h2.013v1.341a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24386"
                    data-name="Path 24386"
                    d="M1049.282,259.487a3.75,3.75,0,0,1,1.309-1.56,3.28,3.28,0,0,1,1.848-.546,3.059,3.059,0,0,1,1.56.39,3.259,3.259,0,0,1,1.072.983v-1.232h2.027v8.642h-2.027V264.9a3.09,3.09,0,0,1-2.646,1.4,3.2,3.2,0,0,1-1.834-.562,3.84,3.84,0,0,1-1.309-1.583,5.451,5.451,0,0,1-.481-2.347,5.365,5.365,0,0,1,.481-2.326m5.5.991a2.144,2.144,0,0,0-.776-.874,1.961,1.961,0,0,0-1.05-.3,1.918,1.918,0,0,0-1.036.3,2.157,2.157,0,0,0-.769.865,2.9,2.9,0,0,0-.295,1.351,2.988,2.988,0,0,0,.295,1.364,2.222,2.222,0,0,0,.777.9,1.856,1.856,0,0,0,1.028.312,1.961,1.961,0,0,0,1.05-.3,2.131,2.131,0,0,0,.776-.874,3.378,3.378,0,0,0,0-2.73"
                  />
                  <path
                    id="Path_24387"
                    data-name="Path 24387"
                    d="M1061.413,259.316V263.5a.872.872,0,0,0,.194.632.9.9,0,0,0,.654.2h.935v1.84h-1.265q-2.546,0-2.546-2.683v-4.165h-.949v-1.794h.949v-2.137h2.028v2.137h1.783v1.794Z"
                  />
                  <path
                    id="Path_24388"
                    data-name="Path 24388"
                    d="M1066.115,265.751a3.842,3.842,0,0,1-1.445-1.568,5.017,5.017,0,0,1-.525-2.34,4.9,4.9,0,0,1,.539-2.34,3.916,3.916,0,0,1,1.474-1.568,4.209,4.209,0,0,1,4.171,0,3.922,3.922,0,0,1,1.474,1.568,4.915,4.915,0,0,1,.539,2.34,4.806,4.806,0,0,1-.554,2.34,3.992,3.992,0,0,1-1.495,1.568,4.083,4.083,0,0,1-2.107.554,3.939,3.939,0,0,1-2.071-.554m3.1-1.638a2.032,2.032,0,0,0,.77-.866,3.128,3.128,0,0,0,.287-1.4,2.738,2.738,0,0,0-.6-1.895,1.889,1.889,0,0,0-1.459-.663,1.848,1.848,0,0,0-1.446.663,2.784,2.784,0,0,0-.582,1.895,2.83,2.83,0,0,0,.568,1.9,1.806,1.806,0,0,0,1.431.663,1.971,1.971,0,0,0,1.028-.289"
                  />
                  <path
                    id="Path_24389"
                    data-name="Path 24389"
                    d="M1076.851,257.787a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.347,2.347,0,0,0-.482,1.684v4.306h-2.013v-8.642h2.013v1.341a2.959,2.959,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24390"
                    data-name="Path 24390"
                    d="M1080.928,265.923a3.159,3.159,0,0,1-1.23-1.037,2.771,2.771,0,0,1-.5-1.451h2.027a1.226,1.226,0,0,0,.453.827,1.5,1.5,0,0,0,.986.327,1.445,1.445,0,0,0,.9-.249.774.774,0,0,0,.323-.64.677.677,0,0,0-.4-.632,7.152,7.152,0,0,0-1.258-.46,9.976,9.976,0,0,1-1.46-.484,2.545,2.545,0,0,1-.978-.764,2.169,2.169,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.246,3.246,0,0,1,2.272.772,2.961,2.961,0,0,1,.935,2.083h-1.927a1.165,1.165,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.87,5.87,0,0,0,1.251.461,10.111,10.111,0,0,1,1.424.483,2.549,2.549,0,0,1,.97.772,2.244,2.244,0,0,1,.424,1.381,2.439,2.439,0,0,1-.38,1.342,2.564,2.564,0,0,1-1.094.928,3.866,3.866,0,0,1-1.661.335,3.917,3.917,0,0,1-1.754-.382"
                  />
                  <path
                    id="Path_24391"
                    data-name="Path 24391"
                    d="M1044.972,147.9a52.379,52.379,0,1,1-52.378-52.378,52.378,52.378,0,0,1,52.378,52.378"
                    fill="#fff"
                  />
                  <path
                    id="Path_24392"
                    data-name="Path 24392"
                    d="M1044.972,147.9a52.379,52.379,0,1,1-52.378-52.378A52.378,52.378,0,0,1,1044.972,147.9Z"
                    fill="none"
                    stroke="#ffc919"
                    strokeMiterlimit="10"
                    strokeWidth="2.358"
                  />
                  <path
                    id="Path_24393"
                    data-name="Path 24393"
                    d="M961.02,154.066a3.066,3.066,0,0,1-1.834-2.855h2.158a1.565,1.565,0,0,0,.438,1.061,1.481,1.481,0,0,0,1.086.39,1.579,1.579,0,0,0,1.107-.367,1.234,1.234,0,0,0,.4-.959,1.166,1.166,0,0,0-.273-.8,1.916,1.916,0,0,0-.683-.491,11.019,11.019,0,0,0-1.129-.4,11.439,11.439,0,0,1-1.589-.616,2.84,2.84,0,0,1-1.05-.92,2.781,2.781,0,0,1-.439-1.646,3.128,3.128,0,0,1,.446-1.685,2.9,2.9,0,0,1,1.251-1.1,4.258,4.258,0,0,1,1.841-.382,3.781,3.781,0,0,1,2.524.819,3.126,3.126,0,0,1,1.071,2.285h-2.214a1.291,1.291,0,0,0-.439-.928,1.569,1.569,0,0,0-1.086-.366,1.33,1.33,0,0,0-.942.327,1.237,1.237,0,0,0-.352.952,1.025,1.025,0,0,0,.266.725,2.005,2.005,0,0,0,.661.468,11.181,11.181,0,0,0,1.115.414,11.24,11.24,0,0,1,1.6.623,2.938,2.938,0,0,1,1.064.937,2.759,2.759,0,0,1,.446,1.638,3.28,3.28,0,0,1-.417,1.622,3.04,3.04,0,0,1-1.222,1.193,3.894,3.894,0,0,1-1.913.445,4.444,4.444,0,0,1-1.891-.39"
                  />
                  <path
                    id="Path_24394"
                    data-name="Path 24394"
                    d="M975.725,145.7v8.642H973.7v-1.091a2.714,2.714,0,0,1-1.014.881,2.944,2.944,0,0,1-1.359.32,3.162,3.162,0,0,1-1.653-.429,2.925,2.925,0,0,1-1.129-1.264,4.457,4.457,0,0,1-.41-1.989V145.7h2.013v4.758a2.365,2.365,0,0,0,.475,1.584,1.615,1.615,0,0,0,1.294.553,1.634,1.634,0,0,0,1.309-.553,2.371,2.371,0,0,0,.474-1.584V145.7Z"
                  />
                  <path
                    id="Path_24395"
                    data-name="Path 24395"
                    d="M980.794,145.962a3.033,3.033,0,0,1,1.56-.4,3.284,3.284,0,0,1,1.848.546,3.75,3.75,0,0,1,1.309,1.552,5.347,5.347,0,0,1,.481,2.332,5.448,5.448,0,0,1-.481,2.348,3.845,3.845,0,0,1-1.309,1.583,3.215,3.215,0,0,1-1.848.562,3.013,3.013,0,0,1-1.546-.39,3.388,3.388,0,0,1-1.086-.983v5.351h-2.013V145.7h2.013v1.248a3.138,3.138,0,0,1,1.072-.99m2.847,2.683a2.148,2.148,0,0,0-.777-.866,1.956,1.956,0,0,0-1.042-.3,1.888,1.888,0,0,0-1.028.3,2.185,2.185,0,0,0-.777.881,3.27,3.27,0,0,0,0,2.715,2.178,2.178,0,0,0,.777.881,1.893,1.893,0,0,0,2.07-.008,2.252,2.252,0,0,0,.777-.889,2.991,2.991,0,0,0,.295-1.373,2.905,2.905,0,0,0-.295-1.349"
                  />
                  <path
                    id="Path_24396"
                    data-name="Path 24396"
                    d="M990.545,145.962a3.033,3.033,0,0,1,1.56-.4,3.282,3.282,0,0,1,1.848.546,3.75,3.75,0,0,1,1.309,1.552,5.347,5.347,0,0,1,.481,2.332,5.448,5.448,0,0,1-.481,2.348,3.845,3.845,0,0,1-1.309,1.583,3.212,3.212,0,0,1-1.848.562,3.012,3.012,0,0,1-1.546-.39,3.387,3.387,0,0,1-1.086-.983v5.351H987.46V145.7h2.013v1.248a3.137,3.137,0,0,1,1.072-.99m2.847,2.683a2.141,2.141,0,0,0-.777-.866,1.955,1.955,0,0,0-1.042-.3,1.888,1.888,0,0,0-1.028.3,2.185,2.185,0,0,0-.777.881,3.271,3.271,0,0,0,0,2.715,2.179,2.179,0,0,0,.777.881,1.893,1.893,0,0,0,2.07-.008,2.244,2.244,0,0,0,.777-.889,2.991,2.991,0,0,0,.295-1.373,2.905,2.905,0,0,0-.295-1.349"
                  />
                  <rect
                    id="Rectangle_5675"
                    data-name="Rectangle 5675"
                    width="2.013"
                    height="11.544"
                    transform="translate(997.21 142.803)"
                  />
                  <path
                    id="Path_24397"
                    data-name="Path 24397"
                    d="M1001.344,144.308a1.359,1.359,0,0,1,0-1.825,1.249,1.249,0,0,1,1.769,0,1.356,1.356,0,0,1,0,1.825,1.249,1.249,0,0,1-1.769,0m1.877,10.039h-2.013v-8.642h2.013Z"
                  />
                  <path
                    id="Path_24398"
                    data-name="Path 24398"
                    d="M1012.555,150.681h-5.825a2.239,2.239,0,0,0,.6,1.467,1.784,1.784,0,0,0,1.309.53,1.633,1.633,0,0,0,1.6-1.045h2.172a3.948,3.948,0,0,1-1.323,2.051,3.659,3.659,0,0,1-2.4.8,3.9,3.9,0,0,1-2.063-.554,3.763,3.763,0,0,1-1.424-1.568,5.128,5.128,0,0,1-.511-2.34,5.227,5.227,0,0,1,.5-2.355,3.679,3.679,0,0,1,1.409-1.56,4.213,4.213,0,0,1,4.12-.016,3.609,3.609,0,0,1,1.4,1.505,4.872,4.872,0,0,1,.5,2.239,5.618,5.618,0,0,1-.057.842m-2.028-1.466a1.8,1.8,0,0,0-.561-1.349,1.893,1.893,0,0,0-1.337-.507,1.745,1.745,0,0,0-1.259.491,2.23,2.23,0,0,0-.625,1.365Z"
                  />
                  <path
                    id="Path_24399"
                    data-name="Path 24399"
                    d="M1017.106,145.97a2.648,2.648,0,0,1,1.431-.39v2.293h-.532a1.934,1.934,0,0,0-1.431.484,2.352,2.352,0,0,0-.482,1.684v4.306h-2.013v-8.642h2.013v1.341a2.96,2.96,0,0,1,1.014-1.076"
                  />
                  <path
                    id="Path_24400"
                    data-name="Path 24400"
                    d="M1021.183,154.1a3.158,3.158,0,0,1-1.23-1.037,2.772,2.772,0,0,1-.5-1.451h2.028a1.219,1.219,0,0,0,.453.827,1.5,1.5,0,0,0,.985.327,1.445,1.445,0,0,0,.9-.249.774.774,0,0,0,.323-.64.677.677,0,0,0-.4-.632,7.149,7.149,0,0,0-1.258-.46,9.974,9.974,0,0,1-1.46-.484,2.546,2.546,0,0,1-.978-.764,2.168,2.168,0,0,1-.41-1.388,2.376,2.376,0,0,1,.381-1.311,2.612,2.612,0,0,1,1.093-.936,3.833,3.833,0,0,1,1.676-.343,3.246,3.246,0,0,1,2.272.772,2.957,2.957,0,0,1,.935,2.083h-1.927a1.164,1.164,0,0,0-.4-.819,1.665,1.665,0,0,0-1.783-.086.759.759,0,0,0,.108,1.271,5.893,5.893,0,0,0,1.251.461,10.107,10.107,0,0,1,1.424.483,2.549,2.549,0,0,1,.97.772,2.238,2.238,0,0,1,.425,1.381,2.433,2.433,0,0,1-.382,1.342,2.556,2.556,0,0,1-1.093.928,3.864,3.864,0,0,1-1.66.335,3.918,3.918,0,0,1-1.755-.382"
                  />
                  <g
                    id="Group_9096"
                    data-name="Group 9096"
                    transform="translate(4 11.371)"
                  >
                    <path
                      id="Path_24312"
                      data-name="Path 24312"
                      d="M966.254,788.856l19.609,14.512a1.492,1.492,0,0,1-.1,2.538l-19.609,12.529c-1.245.795-3.01.03-3.01-1.3V790.089c0-1.389,1.892-2.138,3.115-1.233"
                      transform="translate(4)"
                    />
                    <path
                      id="Path_24408"
                      data-name="Path 24408"
                      d="M964.136,810.461H930.2a1.679,1.679,0,0,1-1.679-1.679V798.438a1.679,1.679,0,0,1,1.679-1.679h33.94a1.679,1.679,0,0,1,1.679,1.679v10.344a1.679,1.679,0,0,1-1.679,1.679"
                      transform="translate(4)"
                    />
                  </g>
                  <path
                    id="Path_30597"
                    data-name="Path 30597"
                    d="M7.453,15.716a4.9,4.9,0,0,1-1.944-.37,3.191,3.191,0,0,1-1.367-1.064,2.8,2.8,0,0,1-.517-1.641H5.841a1.434,1.434,0,0,0,.451,1.005,1.6,1.6,0,0,0,1.116.37,1.717,1.717,0,0,0,1.138-.347,1.13,1.13,0,0,0,.414-.909,1.05,1.05,0,0,0-.281-.754,1.968,1.968,0,0,0-.7-.466,11.619,11.619,0,0,0-1.16-.377,12.427,12.427,0,0,1-1.633-.584A2.861,2.861,0,0,1,4.1,9.707a2.485,2.485,0,0,1-.451-1.559,2.788,2.788,0,0,1,.458-1.6A2.914,2.914,0,0,1,5.4,5.51,4.679,4.679,0,0,1,7.29,5.147a4.1,4.1,0,0,1,2.594.776,2.877,2.877,0,0,1,1.1,2.165H8.709a1.182,1.182,0,0,0-.451-.879,1.7,1.7,0,0,0-1.116-.347,1.437,1.437,0,0,0-.968.31,1.122,1.122,0,0,0-.362.9.932.932,0,0,0,.273.687,2.085,2.085,0,0,0,.68.443q.406.17,1.146.392a12.035,12.035,0,0,1,1.641.591,2.947,2.947,0,0,1,1.094.887,2.464,2.464,0,0,1,.458,1.552,2.919,2.919,0,0,1-.429,1.537,3.026,3.026,0,0,1-1.256,1.131A4.285,4.285,0,0,1,7.453,15.716ZM20.715,7.424v8.189H18.631V14.578a2.732,2.732,0,0,1-1.042.835,3.235,3.235,0,0,1-1.4.3,3.47,3.47,0,0,1-1.7-.406,2.865,2.865,0,0,1-1.16-1.2,3.956,3.956,0,0,1-.421-1.885v-4.8H14.98v4.508a2.123,2.123,0,0,0,.488,1.5,1.728,1.728,0,0,0,1.33.525,1.746,1.746,0,0,0,1.345-.525,2.123,2.123,0,0,0,.488-1.5V7.424Zm5.266,8.322a4.318,4.318,0,0,1-1.8-.362,3.186,3.186,0,0,1-1.264-.983,2.491,2.491,0,0,1-.51-1.375h2.084a1.135,1.135,0,0,0,.466.783,1.62,1.62,0,0,0,1.013.31,1.572,1.572,0,0,0,.924-.237.716.716,0,0,0,.333-.606.639.639,0,0,0-.406-.6,7.649,7.649,0,0,0-1.293-.436,10.96,10.96,0,0,1-1.5-.458,2.6,2.6,0,0,1-1.005-.724A1.944,1.944,0,0,1,22.6,9.744,2.123,2.123,0,0,1,22.988,8.5a2.63,2.63,0,0,1,1.123-.887,4.211,4.211,0,0,1,1.722-.325,3.516,3.516,0,0,1,2.335.732A2.711,2.711,0,0,1,29.129,10H27.149a1.072,1.072,0,0,0-.406-.776,1.833,1.833,0,0,0-1.833-.081.66.66,0,0,0-.3.576.677.677,0,0,0,.414.628,6.427,6.427,0,0,0,1.286.436,10.916,10.916,0,0,1,1.463.458,2.585,2.585,0,0,1,1,.732,2.009,2.009,0,0,1,.436,1.308,2.169,2.169,0,0,1-.392,1.271,2.58,2.58,0,0,1-1.123.879A4.256,4.256,0,0,1,25.981,15.746ZM33.4,9.124v3.961a.783.783,0,0,0,.2.6.98.98,0,0,0,.673.185h.961v1.744h-1.3q-2.616,0-2.616-2.542V9.124h-.976v-1.7h.976V5.4H33.4V7.424h1.833v1.7Zm2.886,2.365a4.739,4.739,0,0,1,.5-2.2,3.629,3.629,0,0,1,1.345-1.478,3.581,3.581,0,0,1,1.9-.517,3.336,3.336,0,0,1,1.6.37,3.254,3.254,0,0,1,1.1.931V7.424H44.82v8.189H42.735v-1.2a3.078,3.078,0,0,1-1.1.953,3.369,3.369,0,0,1-1.619.377,3.48,3.48,0,0,1-1.885-.532,3.724,3.724,0,0,1-1.345-1.5A4.818,4.818,0,0,1,36.291,11.489Zm6.445.03a2.654,2.654,0,0,0-.3-1.293,2.084,2.084,0,0,0-.8-.828,2.133,2.133,0,0,0-1.079-.288,2.078,2.078,0,0,0-1.855,1.1,2.57,2.57,0,0,0-.3,1.279,2.654,2.654,0,0,0,.3,1.293,2.182,2.182,0,0,0,.8.85,2.028,2.028,0,0,0,1.057.3,2.133,2.133,0,0,0,1.079-.288,2.084,2.084,0,0,0,.8-.828A2.654,2.654,0,0,0,42.735,11.518Zm5.251-5.07a1.261,1.261,0,0,1-.909-.347,1.149,1.149,0,0,1-.362-.865,1.149,1.149,0,0,1,.362-.865,1.363,1.363,0,0,1,1.818,0,1.149,1.149,0,0,1,.362.865A1.149,1.149,0,0,1,48.9,6.1,1.261,1.261,0,0,1,47.986,6.448Zm1.02.976v8.189H46.937V7.424Zm6.67-.118a3.156,3.156,0,0,1,2.365.924,3.537,3.537,0,0,1,.9,2.579v4.8H56.874V11.089a2.123,2.123,0,0,0-.488-1.5,1.728,1.728,0,0,0-1.33-.525,1.77,1.77,0,0,0-1.352.525,2.1,2.1,0,0,0-.5,1.5v4.523H51.139V7.424h2.069v1.02a2.859,2.859,0,0,1,1.057-.835A3.269,3.269,0,0,1,55.676,7.305Zm4.793,4.183a4.739,4.739,0,0,1,.5-2.2,3.629,3.629,0,0,1,1.345-1.478,3.581,3.581,0,0,1,1.9-.517,3.336,3.336,0,0,1,1.6.37,3.254,3.254,0,0,1,1.1.931V7.424H69v8.189H66.914v-1.2a3.078,3.078,0,0,1-1.1.953,3.369,3.369,0,0,1-1.619.377,3.48,3.48,0,0,1-1.885-.532,3.724,3.724,0,0,1-1.345-1.5A4.818,4.818,0,0,1,60.469,11.489Zm6.445.03a2.654,2.654,0,0,0-.3-1.293,2.084,2.084,0,0,0-.8-.828,2.133,2.133,0,0,0-1.079-.288,2.078,2.078,0,0,0-1.855,1.1,2.57,2.57,0,0,0-.3,1.279,2.654,2.654,0,0,0,.3,1.293,2.182,2.182,0,0,0,.8.85,2.028,2.028,0,0,0,1.057.3,2.133,2.133,0,0,0,1.079-.288,2.084,2.084,0,0,0,.8-.828A2.654,2.654,0,0,0,66.914,11.518Zm6.271-2.9a2.959,2.959,0,0,1,1.1-.961,3.392,3.392,0,0,1,1.6-.37,3.581,3.581,0,0,1,1.9.517,3.64,3.64,0,0,1,1.345,1.471,4.728,4.728,0,0,1,.5,2.21,4.818,4.818,0,0,1-.5,2.225,3.724,3.724,0,0,1-1.345,1.5,3.506,3.506,0,0,1-1.9.532,3.392,3.392,0,0,1-1.6-.362,3.115,3.115,0,0,1-1.1-.939v1.168H71.115V4.674h2.069Zm4.331,2.868a2.57,2.57,0,0,0-.3-1.279,2.1,2.1,0,0,0-.8-.82,2.136,2.136,0,0,0-1.072-.281,2.067,2.067,0,0,0-1.057.288,2.139,2.139,0,0,0-.8.835,2.612,2.612,0,0,0-.3,1.286,2.612,2.612,0,0,0,.3,1.286,2.139,2.139,0,0,0,.8.835,2.086,2.086,0,0,0,2.129-.007,2.194,2.194,0,0,0,.8-.843A2.644,2.644,0,0,0,77.516,11.489Zm4.763-5.04A1.261,1.261,0,0,1,81.37,6.1a1.149,1.149,0,0,1-.362-.865,1.149,1.149,0,0,1,.362-.865,1.363,1.363,0,0,1,1.818,0,1.149,1.149,0,0,1,.362.865,1.149,1.149,0,0,1-.362.865A1.261,1.261,0,0,1,82.279,6.448Zm1.02.976v8.189H81.229V7.424Zm4.2-2.749V15.612H85.431V4.674Zm3.182,1.774a1.261,1.261,0,0,1-.909-.347,1.149,1.149,0,0,1-.362-.865,1.149,1.149,0,0,1,.362-.865,1.363,1.363,0,0,1,1.818,0,1.149,1.149,0,0,1,.362.865,1.149,1.149,0,0,1-.362.865A1.261,1.261,0,0,1,90.682,6.448Zm1.02.976v8.189H89.633V7.424Zm4.542,1.7v3.961a.783.783,0,0,0,.2.6.98.98,0,0,0,.673.185h.961v1.744h-1.3q-2.616,0-2.616-2.542V9.124h-.976v-1.7h.976V5.4h2.084V7.424h1.833v1.7Zm11.252-1.7-5.07,12.061h-2.2L102,15.406,98.716,7.424h2.321l2.114,5.72,2.143-5.72Zm-80.12,26.27a4.318,4.318,0,0,1-1.8-.362,3.186,3.186,0,0,1-1.264-.983,2.491,2.491,0,0,1-.51-1.375h2.084a1.135,1.135,0,0,0,.466.783,1.62,1.62,0,0,0,1.013.31,1.572,1.572,0,0,0,.924-.236.716.716,0,0,0,.333-.606.639.639,0,0,0-.406-.6,7.649,7.649,0,0,0-1.293-.436,10.961,10.961,0,0,1-1.5-.458,2.6,2.6,0,0,1-1.005-.724,1.944,1.944,0,0,1-.421-1.316,2.123,2.123,0,0,1,.392-1.242,2.63,2.63,0,0,1,1.123-.887,4.211,4.211,0,0,1,1.722-.325,3.516,3.516,0,0,1,2.335.732,2.711,2.711,0,0,1,.961,1.973H28.544a1.072,1.072,0,0,0-.406-.776,1.833,1.833,0,0,0-1.833-.081.66.66,0,0,0-.3.576.677.677,0,0,0,.414.628,6.427,6.427,0,0,0,1.286.436,10.916,10.916,0,0,1,1.463.458,2.585,2.585,0,0,1,1,.732,2.009,2.009,0,0,1,.436,1.308,2.169,2.169,0,0,1-.392,1.271,2.58,2.58,0,0,1-1.123.879A4.256,4.256,0,0,1,27.376,33.694Zm12.849-8.322-5.07,12.061h-2.2l1.774-4.08-3.281-7.982h2.321l2.114,5.72,2.143-5.72Zm4.335,8.322a4.318,4.318,0,0,1-1.8-.362,3.186,3.186,0,0,1-1.264-.983,2.491,2.491,0,0,1-.51-1.375h2.084a1.135,1.135,0,0,0,.466.783,1.62,1.62,0,0,0,1.013.31,1.572,1.572,0,0,0,.924-.236.716.716,0,0,0,.333-.606.639.639,0,0,0-.406-.6,7.648,7.648,0,0,0-1.293-.436,10.961,10.961,0,0,1-1.5-.458,2.6,2.6,0,0,1-1.005-.724,1.944,1.944,0,0,1-.421-1.316,2.123,2.123,0,0,1,.392-1.242,2.63,2.63,0,0,1,1.123-.887,4.211,4.211,0,0,1,1.722-.325,3.516,3.516,0,0,1,2.335.732,2.711,2.711,0,0,1,.961,1.973H45.727a1.072,1.072,0,0,0-.406-.776,1.833,1.833,0,0,0-1.833-.081.66.66,0,0,0-.3.576.677.677,0,0,0,.414.628,6.427,6.427,0,0,0,1.286.436,10.916,10.916,0,0,1,1.463.458,2.585,2.585,0,0,1,1,.732,2.009,2.009,0,0,1,.436,1.308A2.169,2.169,0,0,1,47.39,32.5a2.58,2.58,0,0,1-1.123.879A4.256,4.256,0,0,1,44.559,33.694Zm7.424-6.622v3.961a.783.783,0,0,0,.2.6.98.98,0,0,0,.673.185h.961v1.744h-1.3q-2.616,0-2.616-2.542V27.072h-.976v-1.7H49.9V23.347h2.084v2.025h1.833v1.7Zm11.03,2.217a4.884,4.884,0,0,1-.059.8H56.968a2.036,2.036,0,0,0,.621,1.389,1.914,1.914,0,0,0,1.345.5,1.69,1.69,0,0,0,1.641-.99h2.232a3.73,3.73,0,0,1-1.36,1.944,3.97,3.97,0,0,1-2.468.761,4.272,4.272,0,0,1-2.121-.525,3.693,3.693,0,0,1-1.463-1.486,4.552,4.552,0,0,1-.525-2.217,4.637,4.637,0,0,1,.517-2.232,3.61,3.61,0,0,1,1.449-1.478,4.651,4.651,0,0,1,4.235-.015A3.537,3.537,0,0,1,62.5,27.168,4.317,4.317,0,0,1,63.013,29.289ZM60.87,28.7a1.641,1.641,0,0,0-.576-1.279,2.042,2.042,0,0,0-1.375-.48,1.878,1.878,0,0,0-1.293.466,2.047,2.047,0,0,0-.643,1.293Zm13.913-3.444a3.287,3.287,0,0,1,2.432.924,3.487,3.487,0,0,1,.924,2.579v4.8H76.069V29.038a2.046,2.046,0,0,0-.488-1.471,1.754,1.754,0,0,0-1.33-.51,1.778,1.778,0,0,0-1.338.51,2.027,2.027,0,0,0-.5,1.471v4.523H70.349V29.038a2.046,2.046,0,0,0-.488-1.471,1.754,1.754,0,0,0-1.33-.51,1.8,1.8,0,0,0-1.352.51,2.027,2.027,0,0,0-.5,1.471v4.523H64.614V25.372h2.069v.99a2.754,2.754,0,0,1,1.027-.813,3.2,3.2,0,0,1,1.382-.3,3.555,3.555,0,0,1,1.715.406,2.849,2.849,0,0,1,1.168,1.16,2.965,2.965,0,0,1,1.16-1.138A3.3,3.3,0,0,1,74.783,25.254Zm8.547,8.44a4.318,4.318,0,0,1-1.8-.362,3.186,3.186,0,0,1-1.264-.983,2.491,2.491,0,0,1-.51-1.375h2.084a1.135,1.135,0,0,0,.466.783,1.62,1.62,0,0,0,1.013.31,1.572,1.572,0,0,0,.924-.236.716.716,0,0,0,.333-.606.639.639,0,0,0-.406-.6,7.649,7.649,0,0,0-1.293-.436,10.961,10.961,0,0,1-1.5-.458,2.6,2.6,0,0,1-1.005-.724,1.944,1.944,0,0,1-.421-1.316,2.123,2.123,0,0,1,.392-1.242,2.63,2.63,0,0,1,1.123-.887,4.211,4.211,0,0,1,1.722-.325,3.516,3.516,0,0,1,2.335.732,2.711,2.711,0,0,1,.961,1.973H84.5a1.072,1.072,0,0,0-.406-.776,1.833,1.833,0,0,0-1.833-.081.66.66,0,0,0-.3.576.677.677,0,0,0,.414.628,6.427,6.427,0,0,0,1.286.436,10.916,10.916,0,0,1,1.463.458,2.585,2.585,0,0,1,1,.732,2.009,2.009,0,0,1,.436,1.308,2.169,2.169,0,0,1-.392,1.271,2.58,2.58,0,0,1-1.123.879A4.256,4.256,0,0,1,83.33,33.694Z"
                    transform="translate(121.702 291.87)"
                  />
                </g>
              </g>
            </g>
          </g>
          <g
            id="Group_9087"
            data-name="Group 9087"
            transform="translate(40.088 -414)"
          >
            <g
              id="Path_23137"
              data-name="Path 23137"
              transform="translate(116.5 596.313)"
              fill="#f2ebff"
            >
              <path
                d="M 22 43 C 19.16457939147949 43 16.41449928283691 42.44490051269531 13.8261604309082 41.35012817382812 C 11.3256196975708 40.29248809814453 9.079689979553223 38.77817153930664 7.150760173797607 36.84923934936523 C 5.221829891204834 34.92031860351562 3.707520008087158 32.67438888549805 2.649869918823242 30.1738395690918 C 1.555099964141846 27.58550071716309 1 24.83542060852051 1 22 C 1 19.16457939147949 1.555099964141846 16.41449928283691 2.649869918823242 13.8261604309082 C 3.707520008087158 11.3256196975708 5.221829891204834 9.079689979553223 7.150760173797607 7.150760173797607 C 9.079689979553223 5.221829891204834 11.3256196975708 3.707520008087158 13.8261604309082 2.649869918823242 C 16.41449928283691 1.555099964141846 19.16457939147949 1 22 1 C 24.83542060852051 1 27.58550071716309 1.555099964141846 30.1738395690918 2.649869918823242 C 32.67438888549805 3.707520008087158 34.92031860351562 5.221829891204834 36.84923934936523 7.150760173797607 C 38.77817153930664 9.079689979553223 40.29248809814453 11.3256196975708 41.35012817382812 13.8261604309082 C 42.44490051269531 16.41449928283691 43 19.16457939147949 43 22 C 43 24.83542060852051 42.44490051269531 27.58550071716309 41.35012817382812 30.1738395690918 C 40.29248809814453 32.67438888549805 38.77817153930664 34.92031860351562 36.84923934936523 36.84923934936523 C 34.92031860351562 38.77817153930664 32.67438888549805 40.29248809814453 30.1738395690918 41.35012817382812 C 27.58550071716309 42.44490051269531 24.83542060852051 43 22 43 Z"
                stroke="none"
              />
              <path
                d="M 22 2 C 19.29912948608398 2 16.68012046813965 2.528518676757812 14.2157096862793 3.570880889892578 C 11.83435821533203 4.578098297119141 9.695270538330078 6.020450592041016 7.857860565185547 7.857860565185547 C 6.020450592041016 9.695270538330078 4.578098297119141 11.83435821533203 3.570880889892578 14.2157096862793 C 2.528518676757812 16.68012046813965 2 19.29912948608398 2 22 C 2 24.70085906982422 2.528518676757812 27.31987953186035 3.570880889892578 29.7842903137207 C 4.578098297119141 32.16563034057617 6.020450592041016 34.30471801757812 7.857860565185547 36.14212799072266 C 9.695270538330078 37.97954940795898 11.83435821533203 39.42189788818359 14.2157096862793 40.42911911010742 C 16.68012046813965 41.47148132324219 19.29912948608398 42 22 42 C 24.70085906982422 42 27.31986999511719 41.47148132324219 29.7842903137207 40.42911911010742 C 32.16563034057617 39.42189788818359 34.30471801757812 37.97954940795898 36.14212799072266 36.14212799072266 C 37.97954940795898 34.30471801757812 39.42189788818359 32.16563034057617 40.42911911010742 29.7842903137207 C 41.47148132324219 27.31986999511719 42 24.70085906982422 42 22 C 42 19.29912948608398 41.47148132324219 16.68012046813965 40.42911911010742 14.2157096862793 C 39.42189788818359 11.83435821533203 37.97954940795898 9.695270538330078 36.14212799072266 7.857860565185547 C 34.30471801757812 6.020450592041016 32.16563034057617 4.578098297119141 29.7842903137207 3.570880889892578 C 27.31987953186035 2.528518676757812 24.70085906982422 2 22 2 M 22 0 C 34.15026092529297 0 44 9.8497314453125 44 22 C 44 34.15026092529297 34.15026092529297 44 22 44 C 9.8497314453125 44 0 34.15026092529297 0 22 C 0 9.8497314453125 9.8497314453125 0 22 0 Z"
                stroke="none"
                fill="#8751ef"
              />
            </g>
            <text
              id="_20"
              data-name="20"
              transform="translate(138.346 626)"
              fontSize="22"
              fontFamily="Arial-BoldMT, Arial"
              fontWeight="700"
              letterSpacing="0.007em"
            >
              <tspan textAnchor="middle">
                {standardBodies || 0}
              </tspan>
            </text>
          </g>
          <g
            id="Group_9088"
            data-name="Group 9088"
            transform="translate(40.088 -242)"
          >
            <g
              id="Path_23137-2"
              data-name="Path 23137"
              transform="translate(116.5 596.313)"
              fill="#f2ebff"
            >
              <path
                d="M 22 43 C 19.16457939147949 43 16.41449928283691 42.44490051269531 13.8261604309082 41.35012817382812 C 11.3256196975708 40.29248809814453 9.079689979553223 38.77817153930664 7.150760173797607 36.84923934936523 C 5.221829891204834 34.92031860351562 3.707520008087158 32.67438888549805 2.649869918823242 30.1738395690918 C 1.555099964141846 27.58550071716309 1 24.83542060852051 1 22 C 1 19.16457939147949 1.555099964141846 16.41449928283691 2.649869918823242 13.8261604309082 C 3.707520008087158 11.3256196975708 5.221829891204834 9.079689979553223 7.150760173797607 7.150760173797607 C 9.079689979553223 5.221829891204834 11.3256196975708 3.707520008087158 13.8261604309082 2.649869918823242 C 16.41449928283691 1.555099964141846 19.16457939147949 1 22 1 C 24.83542060852051 1 27.58550071716309 1.555099964141846 30.1738395690918 2.649869918823242 C 32.67438888549805 3.707520008087158 34.92031860351562 5.221829891204834 36.84923934936523 7.150760173797607 C 38.77817153930664 9.079689979553223 40.29248809814453 11.3256196975708 41.35012817382812 13.8261604309082 C 42.44490051269531 16.41449928283691 43 19.16457939147949 43 22 C 43 24.83542060852051 42.44490051269531 27.58550071716309 41.35012817382812 30.1738395690918 C 40.29248809814453 32.67438888549805 38.77817153930664 34.92031860351562 36.84923934936523 36.84923934936523 C 34.92031860351562 38.77817153930664 32.67438888549805 40.29248809814453 30.1738395690918 41.35012817382812 C 27.58550071716309 42.44490051269531 24.83542060852051 43 22 43 Z"
                stroke="none"
              />
              <path
                d="M 22 2 C 19.29912948608398 2 16.68012046813965 2.528518676757812 14.2157096862793 3.570880889892578 C 11.83435821533203 4.578098297119141 9.695270538330078 6.020450592041016 7.857860565185547 7.857860565185547 C 6.020450592041016 9.695270538330078 4.578098297119141 11.83435821533203 3.570880889892578 14.2157096862793 C 2.528518676757812 16.68012046813965 2 19.29912948608398 2 22 C 2 24.70085906982422 2.528518676757812 27.31987953186035 3.570880889892578 29.7842903137207 C 4.578098297119141 32.16563034057617 6.020450592041016 34.30471801757812 7.857860565185547 36.14212799072266 C 9.695270538330078 37.97954940795898 11.83435821533203 39.42189788818359 14.2157096862793 40.42911911010742 C 16.68012046813965 41.47148132324219 19.29912948608398 42 22 42 C 24.70085906982422 42 27.31986999511719 41.47148132324219 29.7842903137207 40.42911911010742 C 32.16563034057617 39.42189788818359 34.30471801757812 37.97954940795898 36.14212799072266 36.14212799072266 C 37.97954940795898 34.30471801757812 39.42189788818359 32.16563034057617 40.42911911010742 29.7842903137207 C 41.47148132324219 27.31986999511719 42 24.70085906982422 42 22 C 42 19.29912948608398 41.47148132324219 16.68012046813965 40.42911911010742 14.2157096862793 C 39.42189788818359 11.83435821533203 37.97954940795898 9.695270538330078 36.14212799072266 7.857860565185547 C 34.30471801757812 6.020450592041016 32.16563034057617 4.578098297119141 29.7842903137207 3.570880889892578 C 27.31987953186035 2.528518676757812 24.70085906982422 2 22 2 M 22 0 C 34.15026092529297 0 44 9.8497314453125 44 22 C 44 34.15026092529297 34.15026092529297 44 22 44 C 9.8497314453125 44 0 34.15026092529297 0 22 C 0 9.8497314453125 9.8497314453125 0 22 0 Z"
                stroke="none"
                fill="#8751ef"
              />
            </g>
            <text
              id="_23"
              data-name="23"
              transform="translate(138.346 626)"
              fontSize="22"
              fontFamily="Arial-BoldMT, Arial"
              fontWeight="700"
              letterSpacing="0.007em"
            >
              <tspan textAnchor="middle">
                {sustainabilitySystems || 0}
              </tspan>
            </text>
          </g>
          <g
            id="Group_9091"
            data-name="Group 9091"
            transform="translate(680.5 31.032)"
          >
            <g
              id="Path_23137-3"
              data-name="Path 23137"
              transform="translate(116.5 596.313)"
              fill="#fff"
            >
              <path
                d="M 22 43 C 19.16457939147949 43 16.41449928283691 42.44490051269531 13.8261604309082 41.35012817382812 C 11.3256196975708 40.29248809814453 9.079689979553223 38.77817153930664 7.150760173797607 36.84923934936523 C 5.221829891204834 34.92031860351562 3.707520008087158 32.67438888549805 2.649869918823242 30.1738395690918 C 1.555099964141846 27.58550071716309 1 24.83542060852051 1 22 C 1 19.16457939147949 1.555099964141846 16.41449928283691 2.649869918823242 13.8261604309082 C 3.707520008087158 11.3256196975708 5.221829891204834 9.079689979553223 7.150760173797607 7.150760173797607 C 9.079689979553223 5.221829891204834 11.3256196975708 3.707520008087158 13.8261604309082 2.649869918823242 C 16.41449928283691 1.555099964141846 19.16457939147949 1 22 1 C 24.83542060852051 1 27.58550071716309 1.555099964141846 30.1738395690918 2.649869918823242 C 32.67438888549805 3.707520008087158 34.92031860351562 5.221829891204834 36.84923934936523 7.150760173797607 C 38.77817153930664 9.079689979553223 40.29248809814453 11.3256196975708 41.35012817382812 13.8261604309082 C 42.44490051269531 16.41449928283691 43 19.16457939147949 43 22 C 43 24.83542060852051 42.44490051269531 27.58550071716309 41.35012817382812 30.1738395690918 C 40.29248809814453 32.67438888549805 38.77817153930664 34.92031860351562 36.84923934936523 36.84923934936523 C 34.92031860351562 38.77817153930664 32.67438888549805 40.29248809814453 30.1738395690918 41.35012817382812 C 27.58550071716309 42.44490051269531 24.83542060852051 43 22 43 Z"
                stroke="none"
              />
              <path
                d="M 22 2 C 19.29912948608398 2 16.68012046813965 2.528518676757812 14.2157096862793 3.570880889892578 C 11.83435821533203 4.578098297119141 9.695270538330078 6.020450592041016 7.857860565185547 7.857860565185547 C 6.020450592041016 9.695270538330078 4.578098297119141 11.83435821533203 3.570880889892578 14.2157096862793 C 2.528518676757812 16.68012046813965 2 19.29912948608398 2 22 C 2 24.70085906982422 2.528518676757812 27.31987953186035 3.570880889892578 29.7842903137207 C 4.578098297119141 32.16563034057617 6.020450592041016 34.30471801757812 7.857860565185547 36.14212799072266 C 9.695270538330078 37.97954940795898 11.83435821533203 39.42189788818359 14.2157096862793 40.42911911010742 C 16.68012046813965 41.47148132324219 19.29912948608398 42 22 42 C 24.70085906982422 42 27.31986999511719 41.47148132324219 29.7842903137207 40.42911911010742 C 32.16563034057617 39.42189788818359 34.30471801757812 37.97954940795898 36.14212799072266 36.14212799072266 C 37.97954940795898 34.30471801757812 39.42189788818359 32.16563034057617 40.42911911010742 29.7842903137207 C 41.47148132324219 27.31986999511719 42 24.70085906982422 42 22 C 42 19.29912948608398 41.47148132324219 16.68012046813965 40.42911911010742 14.2157096862793 C 39.42189788818359 11.83435821533203 37.97954940795898 9.695270538330078 36.14212799072266 7.857860565185547 C 34.30471801757812 6.020450592041016 32.16563034057617 4.578098297119141 29.7842903137207 3.570880889892578 C 27.31987953186035 2.528518676757812 24.70085906982422 2 22 2 M 22 0 C 34.15026092529297 0 44 9.8497314453125 44 22 C 44 34.15026092529297 34.15026092529297 44 22 44 C 9.8497314453125 44 0 34.15026092529297 0 22 C 0 9.8497314453125 9.8497314453125 0 22 0 Z"
                stroke="none"
                fill="#36d77f"
              />
            </g>
            <text
              id="_23-2"
              data-name="23"
              transform="translate(138.346 626)"
              fontSize="22"
              fontFamily="Arial-BoldMT, Arial"
              fontWeight="700"
              letterSpacing="0.007em"
              
            >
              <tspan textAnchor="middle" >
                {digitalData ||  0}
              </tspan>
            </text>
          </g>
          <g
            id="Group_10643"
            data-name="Group 10643"
            transform="translate(364.5 31.032)"
          >
            <g
              id="Path_23137-4"
              data-name="Path 23137"
              transform="translate(116.5 596.313)"
              fill="#fff"
            >
              <path
                d="M 22 43 C 19.16457939147949 43 16.41449928283691 42.44490051269531 13.8261604309082 41.35012817382812 C 11.3256196975708 40.29248809814453 9.079689979553223 38.77817153930664 7.150760173797607 36.84923934936523 C 5.221829891204834 34.92031860351562 3.707520008087158 32.67438888549805 2.649869918823242 30.1738395690918 C 1.555099964141846 27.58550071716309 1 24.83542060852051 1 22 C 1 19.16457939147949 1.555099964141846 16.41449928283691 2.649869918823242 13.8261604309082 C 3.707520008087158 11.3256196975708 5.221829891204834 9.079689979553223 7.150760173797607 7.150760173797607 C 9.079689979553223 5.221829891204834 11.3256196975708 3.707520008087158 13.8261604309082 2.649869918823242 C 16.41449928283691 1.555099964141846 19.16457939147949 1 22 1 C 24.83542060852051 1 27.58550071716309 1.555099964141846 30.1738395690918 2.649869918823242 C 32.67438888549805 3.707520008087158 34.92031860351562 5.221829891204834 36.84923934936523 7.150760173797607 C 38.77817153930664 9.079689979553223 40.29248809814453 11.3256196975708 41.35012817382812 13.8261604309082 C 42.44490051269531 16.41449928283691 43 19.16457939147949 43 22 C 43 24.83542060852051 42.44490051269531 27.58550071716309 41.35012817382812 30.1738395690918 C 40.29248809814453 32.67438888549805 38.77817153930664 34.92031860351562 36.84923934936523 36.84923934936523 C 34.92031860351562 38.77817153930664 32.67438888549805 40.29248809814453 30.1738395690918 41.35012817382812 C 27.58550071716309 42.44490051269531 24.83542060852051 43 22 43 Z"
                stroke="none"
              />
              <path
                d="M 22 2 C 19.29912948608398 2 16.68012046813965 2.528518676757812 14.2157096862793 3.570880889892578 C 11.83435821533203 4.578098297119141 9.695270538330078 6.020450592041016 7.857860565185547 7.857860565185547 C 6.020450592041016 9.695270538330078 4.578098297119141 11.83435821533203 3.570880889892578 14.2157096862793 C 2.528518676757812 16.68012046813965 2 19.29912948608398 2 22 C 2 24.70085906982422 2.528518676757812 27.31987953186035 3.570880889892578 29.7842903137207 C 4.578098297119141 32.16563034057617 6.020450592041016 34.30471801757812 7.857860565185547 36.14212799072266 C 9.695270538330078 37.97954940795898 11.83435821533203 39.42189788818359 14.2157096862793 40.42911911010742 C 16.68012046813965 41.47148132324219 19.29912948608398 42 22 42 C 24.70085906982422 42 27.31986999511719 41.47148132324219 29.7842903137207 40.42911911010742 C 32.16563034057617 39.42189788818359 34.30471801757812 37.97954940795898 36.14212799072266 36.14212799072266 C 37.97954940795898 34.30471801757812 39.42189788818359 32.16563034057617 40.42911911010742 29.7842903137207 C 41.47148132324219 27.31986999511719 42 24.70085906982422 42 22 C 42 19.29912948608398 41.47148132324219 16.68012046813965 40.42911911010742 14.2157096862793 C 39.42189788818359 11.83435821533203 37.97954940795898 9.695270538330078 36.14212799072266 7.857860565185547 C 34.30471801757812 6.020450592041016 32.16563034057617 4.578098297119141 29.7842903137207 3.570880889892578 C 27.31987953186035 2.528518676757812 24.70085906982422 2 22 2 M 22 0 C 34.15026092529297 0 44 9.8497314453125 44 22 C 44 34.15026092529297 34.15026092529297 44 22 44 C 9.8497314453125 44 0 34.15026092529297 0 22 C 0 9.8497314453125 9.8497314453125 0 22 0 Z"
                stroke="none"
                fill="#36d77f"
              />
            </g>
            <text
              id="_23-3"
              data-name="23"
              transform="translate(138.346 626)"
              fontSize="22"
              fontFamily="Arial-BoldMT, Arial"
              fontWeight="700"
              letterSpacing="0.007em"
            >
              <tspan textAnchor="middle">
                {multilateralOrgs || 0}
              </tspan>
            </text>
          </g>
        </svg>
      </div>
    </section>
  );
}
