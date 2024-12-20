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