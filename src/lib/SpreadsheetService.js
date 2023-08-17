
import { API_KEY, SPREADSHEET_ID,GOOGLE_SERVICE_ACCOUNT_EMAIL,GOOGLE_PRIVATE_KEY } from '$env/static/private';

    export async function fetchData(page, rowNumber=0, howMayRow=0) {
    try {
      if(rowNumber) {
        rowNumber = Number(rowNumber) + 1;
        page = `${page}!A${rowNumber}:Z${rowNumber + howMayRow}`
      }
      const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${page}?key=${API_KEY}`);
      const data = await response.json();
      return manipulateData(data.values);
    } catch (error) {
      console.error('Hata oluştu:', error);
    }
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


/* mport { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library'

const serviceAccountAuth = new JWT({
  email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: GOOGLE_PRIVATE_KEY,
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});


export async function sendData(formValues) {
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);
  const info = await doc.loadInfo();
  
  const sheet = doc.sheetsByTitle['form'];
  await sheet.addRow(formValues);
  const rows = await sheet.getRows();
  const headerValues = sheet.headerValues

  const manipulatedData = rows.map(row => {
      const rowData = {};
      headerValues.forEach((header, index) => {
        if (typeof row._rawData[index] === 'undefined') {
            row._rawData[index] = '';
        }  
        rowData[header] = row._rawData[index];
      });
      return rowData;
    });
  } */


/* import { google } from 'googleapis';

export async function sendData(formValues) {
  try {
    const clientEmail = GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
    const jwtClient = new google.auth.JWT({
      email: clientEmail,
      key: GOOGLE_PRIVATE_KEY,
      scopes: SCOPES,
    });
    await jwtClient.authorize();

    const sheets = google.sheets('v4');
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'form', // Hedef sayfa ve hücre
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[formValues.email, formValues.title, formValues.message]],
      },
      auth: jwtClient,
    });

    console.log('Veri eklendi:', response.data);
  } catch (error) {
    console.error('Hata:', error);
  }
} */


export async function sendData(formValues) {
  try {
    const accessToken = 'ya29.a0AfB_byDhN5Fd9T0qtmBpZ-F5_TYyVAP_FAIDzuJtBe5XDWjN9UN75F7VwWFUaak2mbcMpeB1ksdQJSXSsQYnFg1NW63laA33rXVZQ9QGXJGQhumkva7W-uZF85JfygdRVOoTm962rMFMCRFdz1lBabM8AnONWYXxaCgYKAVgSARASFQHsvYlsNaC7A3LDtuOHxm6fxSzLqQ0167';
    
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/form:append?valueInputOption=USER_ENTERED`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          values: [[formValues.email, formValues.title, formValues.message]]
        }),
        params: {
          valueInputOption: 'USER_ENTERED'
        }
      }
    );

    const responseData = await response.json();
    console.log('Veri eklendi:', responseData);
  } catch (error) {
    console.error('Hata:', error);
  }

}