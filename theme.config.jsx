export default {
  logo: <img src="/traceability-logo.svg"  width={110}/>,
  toc: {
    extraContent: <img src="#" alt="" />,
    float: true,
  },
  project: {
    link: 'https://github.com/shuding/nextra',
    // icon: <img src="/platformable-logo-black.svg" alt="" />,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nextra" />
      <meta property="og:description" content="The next site builder" />
    </>
  ),
  docsRepositoryBase: 'https://github.com/platformable/traceabilitywebsite/tree/main/',
  primaryHue: 271,
  primarySaturation: 92,
 
  footer: {
    component: (
      <footer className="" style={{ backgroundColor: '#eaeffb', padding: '2rem 1.5rem' }}>
        <div className="nx-mx-auto nx-flex nx-max-w-[90rem]">
        <span style={{ fontWeight: 'bold'}}>Platformable</span>
        </div>
      </footer>
    )
  },
  
  // ... other theme options
}