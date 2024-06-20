// Fetch data from API endpoint
fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
  .then(response => response.json())
  .then(data => {
    // Sort data in ascending order based on NRR value
    data.sort((a, b) => a.NRR - b.NRR);

    // Create table element
    const table = document.createElement('table');
    table.border = '1';

    // Create table header
    const headerRow = table.insertRow();
    const headers = ['Team', 'Matches', 'Won', 'Lost', 'Tied', 'NRR', 'Points'];
    headers.forEach((header, index) => {
      const th = document.createElement('th');
      th.innerHTML = header;
      headerRow.appendChild(th);
    });

    // Create table body
    data.forEach((team, index) => {
      const row = table.insertRow();
      row.innerHTML = `
        <td>${team.Team}</td>
        <td>${team.Matches}</td>
        <td>${team.Won}</td>
        <td>${team.Lost}</td>
        <td>${team.Tied}</td>
        <td>${team.NRR.toFixed(3)}</td>
        <td>${team.Points}</td>
      `;
    });

    // Append table to body
    document.body.appendChild(table);
  })
  .catch(error => console.error('Error fetching data:', error));
