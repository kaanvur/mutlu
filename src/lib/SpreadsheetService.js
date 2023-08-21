
// import { API_KEY, SPREADSHEET_ID } from '$env/static/private';

export async function fetchData(page) {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxzzqCwkF_uUWH94O8_YoXI4y8eKp7XWNoVicx9LWpkDQ6Fpf4HJQ7fqxIJQjDwidONww/exec?sheetName=' + encodeURIComponent(page));
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Hata oluştu:', error);
  }
  /* const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${page}?key=${API_KEY}`);
  const data = await response.json();
  return manipulateData(data.values);
} catch (error) {
  console.error('Hata oluştu:', error);
} */
}

function manipulateData(originalData) {
  const headers = originalData[0];
  const dataRows = originalData.slice(1);

  const manipulatedData = dataRows.map(row => {
    const rowData = {};
    headers.forEach((header, index) => {
      if (typeof row[index] === 'undefined') {
        row[index] = '';
      }
      rowData[header] = row[index];
    });
    return rowData;
  });

  return manipulatedData;
}

export async function sendData(formValues) {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxzzqCwkF_uUWH94O8_YoXI4y8eKp7XWNoVicx9LWpkDQ6Fpf4HJQ7fqxIJQjDwidONww/exec", {
      method: "POST",
      body: formValues,
    });
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
}