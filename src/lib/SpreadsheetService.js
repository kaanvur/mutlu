export async function fetchData(page) {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxzzqCwkF_uUWH94O8_YoXI4y8eKp7XWNoVicx9LWpkDQ6Fpf4HJQ7fqxIJQjDwidONww/exec?sheetName=' + encodeURIComponent(page));
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Hata oluştu:', error);
  }
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