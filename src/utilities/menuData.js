export const menuNavigatorItems = [
 
    {
      text: 'Home',
      icon: '/home-icon.svg',
      isDownloadable: false,
      url: '/admin-panel',
      id: 'adminpanel-link',
    },
    {
      text: 'Guide',
      icon: '/user-guide-icon.svg',
      isDownloadable: false,
      url: '/docs',
      id: 'userguide-link',
    },
    // {
    //   text: 'Data dictionary',
    //   icon: '/data-dictionary-icon.svg',
    //   isDownloadable: false,
    //   url: '/data-dictionary',
    //   id: 3,
    // },
    // {
    //   text: 'Survey',
    //   icon: '/survey-icon.svg',
    //   isDownloadable: false,
    //   url: '/user-survey',
    //   id: 'usersurvey-link',
    // },
    // {
    //   text: 'Trends Report',
    //   icon: '/trends-report-icon.svg',
    //   isDownloadable: true,
    //   url: {
    //     pdfUrl: `${process.env.NEXT_PUBLIC_DEV_BACKEND_API_URL}/trends-reports/latest`,
    //     filename: `Q1 2024 OBOF Quarterly Trends Report.pdf`,
    //   },
    //   id: 'trendsreport-link',
    // },
    {
      text: 'Support',
      icon: '/help-icon.svg',
      isDownloadable: false,
      url: '/support-request',
      id: 'support-link',
    },
  ]