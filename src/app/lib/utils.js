//import html2canvas from 'html2canvas';
//import axios from 'axios';

export const capitalizeFirstLetter = (str) => {
  if (str.length === 0) {
    return str;
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

export const calculateTooltipPositionRight = (event) => {
  // Obtener la altura y el ancho actual de la ventana del navegador
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Obtener la posición actual del mouse
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  // Calcular las nuevas coordenadas y (vertical) del offset
  var offsetY = mouseY ; // Ajuste inicial para que el tooltip no esté justo sobre el cursor

  // Si el tooltip se sale de la parte inferior de la pantalla, lo colocamos encima del cursor
  if (mouseY + 20 + 100 > windowHeight) {
      offsetY = mouseY - 120; // Ajuste para colocar el tooltip encima del cursor
  }

  // Calcular las nuevas coordenadas x (horizontal) del offset
  var offsetX = mouseX + 20; // Ajuste inicial para que el tooltip no esté justo sobre el cursor

  // Si el tooltip se sale del lado derecho de la pantalla, lo colocamos al lado izquierdo del cursor
  if (mouseX + 20 + 100 > windowWidth) {
      offsetX = mouseX - 120; // Ajuste para colocar el tooltip al lado izquierdo del cursor
  }

  // Devolver las coordenadas x e y del offset
  return { x: offsetX, y: offsetY };
};

export const calculateTooltipPositionBelow = (event) => {
   // Obtener la altura y el ancho actual de la ventana del navegador
   var windowHeight = window.innerHeight;
   var windowWidth = window.innerWidth;

   // Obtener la posición actual del mouse
   var mouseX = event.clientX;
   var mouseY = event.clientY;

   // Calcular las coordenadas x e y del offset
   var offsetX = mouseX - 50; // Centrar horizontalmente el tooltip (suponiendo que el ancho del tooltip es 100px)
   var offsetY = mouseY + 25; // Desplazar el tooltip 20px debajo del puntero del ratón

   // Ajustar el tooltip si se sale del borde derecho de la ventana del navegador
   if (offsetX + 100 > windowWidth) {
       offsetX = windowWidth - 120; // Mover el tooltip a la izquierda del cursor
   } else if (offsetX < 0) {
       offsetX = 0; // Asegurarse de que el tooltip no esté fuera del límite izquierdo de la pantalla
   }

   // Ajustar el tooltip si se sale del borde inferior de la ventana del navegador
   if (offsetY + 100 > windowHeight) {
       offsetY = windowHeight - 120; // Mover el tooltip hacia arriba del cursor
   }


  // Devolver las coordenadas x e y del offset
  return { x: offsetX, y: offsetY };
};

export const handleCaptureImage = async (id) => {
    const item = document.getElementById(id);
    const canvas = await html2canvas(item, { allowTaint: true, useCORS: true });

    const data = canvas.toDataURL("image/png", 1);
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "Regulation_map.png";
      link.click();
    } else {
      window.open(data);
    }
  };

export const handleDownloadPDF = async ({pdfUrl, filename}) => {
  try {
    const response = await axios.get(pdfUrl, {
      responseType: 'blob',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_DEV_BACKEND_API_TOKEN}`
      }
    });

    // Crear un objeto Blob y generar un enlace de descarga
    const blob = new Blob([response.data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);

    // Crear un enlace invisible y simular un clic para iniciar la descarga
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (error) {
    console.error('Error al descargar el PDF', error);
  }
};

export const createParamsString = 
        (name, value) => {
          const params = new URLSearchParams(searchParams);
          
          if (params.has(name, value)) {
            params.delete(name, value);
          } else {
            params.set(name, value);
          }
    
          return params.toString();
        }

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
  {
    text: 'Survey',
    icon: '/survey-icon.svg',
    isDownloadable: false,
    url: '/user-survey',
    id: 'usersurvey-link',
  },
  {
    text: 'Trends Report',
    icon: '/trends-report-icon.svg',
    isDownloadable: true,
    url: {
      pdfUrl: `${process.env.NEXT_PUBLIC_DEV_BACKEND_API_URL}/trends-reports/latest`,
      filename: `Q1 2024 OBOF Quarterly Trends Report.pdf`,
    },
    id: 'trendsreport-link',
  },
  {
    text: 'Support',
    icon: '/help-icon.svg',
    isDownloadable: false,
    url: '/support-request',
    id: 'support-link',
  },
]

export const formatNumber =  (number)=> {
  const suffixes = ["", "K", "M", "B","T"];
  let index = 0; 
  if(isNaN(number)) {
    return '-';
  }

  while (number >= 1000 && index < suffixes.length - 1) {
    number /= 1000;
    index++;
  }
  const formattedNumber = `${Number(number).toFixed(1)}${suffixes[index]}`;
  return formattedNumber;
}

export const compareDates =  (expirationDate) => {
  const todaysdate = new Date().getTime();

  if (todaysdate > new Date(expirationDate).getTime()) {
    return true
  } else {
    return false
  }

};
