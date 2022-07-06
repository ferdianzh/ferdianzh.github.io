async function fetchCertificates() {
  try {
      const response = await fetch(`../../assets/json/certificates.json`, {
          method: 'GET',
          credentials: 'same-origin'
      });
      const certificates = await response.json();
      return certificates;
  } catch (error) {
      console.error(error);
  }
}