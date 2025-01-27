import React from "react";
const disclaimerFutureFeatures = [
  {
    icon: "/interactive_dashboard_icon.svg",
    status: "Active",
    title: "Interactive dashboard of open ecosystems",
  },   
  {
    icon: "/regulation_timeline_icon.svg",
    status: "Coming soon",
    title: "Country profiles",
  },
  {
    icon: "/country_profile_icon.svg",
    status: "Active",
    title: "Entities that may impact on open ecosystems",
  },
  {
    icon: "/end_user_needs_icon.svg",
    status: "Coming soon",
    title: "Data dictionary",
  },
];
export default function Disclaimer() {
  return (
    <div className="bg-white rounded-md shadow-md max-w-screen-xl mx-5 md:mx-auto  p-5">
      <section className="bg-gradient-to-r from-white to-[#F3F1FF] rounded-md">
        <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="md:w-3/6">
            <div className="mb-4"><strong>Traceability</strong> Dashboard</div>
            <p className="text-[var(--highlight-pink)] font-bold text-2xl leading-normal">
            The Traceability Dashboard helps you analyze key aspects of the traceability context in more than 120 countries
            </p>
          </div>
          <div id="hero-home-imgX" className="w-full md:w-2/6 ">
            <img src="/map_home_illustration.png" alt="world image" className="aspect-video"/>
          </div>
        </div>
      </section>
      <section className="p-6 pb-12">
        <p className="mb-10 text-xl">
          For now the dashboard includes an overview of open ecosystems 
          but <strong>future features</strong> may include:
        </p>
        <div className="grid md:grid-cols-2 gap-5 md:gap-10">
          {disclaimerFutureFeatures.map((item) => (
            <>
              <div className="flex items-start gap-3">
                <img src={item?.icon} alt="icon" width={50} className=" aspect-auto"/>
                <div>
                  <h6
                    className={`${
                      item?.status === "Active"
                        ? "text-[#03A040]"
                        : "text-[#F0142F]"
                    } text-xs font-bold`}
                  >
                    {item?.status}
                  </h6>
                  <h5 className="font-bold text-lg md:pr-8">{item?.title}</h5>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
      {/* <section className="p-6 pb-10 bg-[#FEF7F7]">
        <div className="flex items-end gap-3 mb-10">
          <img src="/disclaimer-icon.svg" alt="icon" width={28}/>
          <h3 className="font-bold text-lg">Disclaimer</h3>
        </div>
        <article className="grid gap-7">
          <div className="">
            <h6 className="text-[#F4671B] font-bold text-xs mb-1">
              High level overview
            </h6>
            <p className="">
              The legal/regulatory element of this research is intended to
              provide a high level overview of the applicable open banking
              regulatory framework in a particular jurisdiction.
            </p>
          </div>
          <div className="">
            <h6 className="text-[#F4671B] font-bold text-xs mb-1">
              Relevant legal and regulatory teams
            </h6>
            <p className="">
              The legal/regulatory element of this research does not provide
              guidance on what regulatory compliance obligations Mastercard may
              be required to comply with in case open banking products and
              services are launched in a particular jurisdiction. Before the
              business decides to launch open banking products and services, the
              relevant legal and regulatory teams must be engage to assess
              implications.
            </p>
          </div>
          <div className="">
            <h6 className="text-[#F4671B] font-bold text-xs mb-1">
              Open banking regulatory frameworks
            </h6>
            <p className="">
              The analysis is limited to open banking regulatory frameworks.
              There may be other regulatory requirements that may add further
              regulatory complexity. Those have not be analyzed as part of this
              research.
            </p>
          </div>
          <div className="">
            <h6 className="text-[#F4671B] font-bold text-xs mb-1">
              Continuously evolving
            </h6>
            <p className="">
              Open banking regulatory frameworks are continuously evolving. Even
              though we are updating the research regularly, there may have been
              changes to the regulatory frameworks that have not (yet) been
              reflected.
            </p>
          </div>
        </article>
      </section> */}
    </div>
  );
}
