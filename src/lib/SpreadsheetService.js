
import { API_KEY, SPREADSHEET_ID } from '$env/static/private';

export async function fetchData(page, rowNumber = 0, howMayRow = 0) {
  try {
    if (rowNumber) {
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

export async function sendData(formValues) {
  try {
  const response = await fetch("https://script.google.com/macros/s/AKfycbycAd85XGkXrhemUZVNqr-orjEW5evczB6UUMDJXpLWylMfhwmjVQT6MjBCgEZSHr1drg/exec", {
    method: "POST",
    body: formValues,
  });
  const data = await response.json();
  return data;
} catch (e) {
  return e;
}
}
// import { GoogleSpreadsheet } from 'google-spreadsheet';
/* import { JWT } from 'google-auth-library'

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

/* import jwt from 'jsonwebtoken';

export async function sendData() {
    const payload = {
      iss: 'sheet-634@versatile-hash-393216.iam.gserviceaccount.com',
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://www.googleapis.com/oauth2/v4/token',
      exp: Math.floor(Date.now() / 1000) + 3600,
      iat: Math.floor(Date.now() / 1000),
    };

    const token = jwt.sign(payload, GOOGLE_PRIVATE_KEY, { algorithm: 'RS256' });
    const spreadsheetId = SPREADSHEET_ID;
    const range = 'form'; // Hedef tablo adı
    const values = [
      ['John', 'Doe'],
      ['Jane', 'Smith']
    ];

    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?valueInputOption=RAW`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ values }),
    });

    if (response.ok) {
      console.log('Veri başarıyla gönderildi.');
    } else {
      console.error('Veri gönderirken hata oluştu.');
    }
  }
 */

/* mport { GoogleSheets } from 'googleapis';

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


/* export async function sendData(formValues) {
  try {
    const accessToken = 'ya29.a0AfB_byClBWivDE6ACA5INP5x7dzvCC69z-9lp7qNDxlPVpERD3VH_fZokanGdx_H053qOSLSIdjRPHwxRXmxr5VwC_jokIdpXiSi88bdul5QGhaBmtK72UdkbKs5HN8QUPnUq2F9cL--sb9BPzaR2_1k252Net_pJjFgyrEc-0saCgYKARESARASFQHsvYlsJcZ0CPSiSJo03QolA8RiPg0178';

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
        })
      }
    );

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Hata:', error);
  }

} */

/* export async function sendData(formData) {
  const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}`;

  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      rowData: ['Name', 'Email'],
    }),
  };

  try {
    fetch(url, request)
    .then(data => console.log('data', data))
    .then((data) => {
      console.log('data', data);
    });
  } catch (e) { console.log('error', e) };
} */

// import Sheets from 'sheets';

// const range = 'A1';

// const values = ['Name', 'Email'];

// export async function sendData() {
//   const sheets = new Sheets({
//     version: 'v4',
//     projectId: 'versatile-hash-393216',
//     serviceAccountEmail: GOOGLE_SERVICE_ACCOUNT_EMAIL,
//     keyFile: GOOGLE_PRIVATE_KEY,
//   });

//   try {
//     await sheets.spreadsheets.values.append({
//       spreadsheetId: spreadsheetId,
//       range: range,
//       values: values,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }