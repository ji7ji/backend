
// Auto-generated Admin API
const API_BASE = "https://statuesque-cupcake-e8da00.netlify.app:3000";

async function fetchAndRenderData() {
    try {
        const res = await fetch(API_BASE);
        const data = await res.json();
        
        let container = document.getElementById('data-container') || document.body;
        if(data.length === 0) { container.innerHTML += '<p>No data yet.</p>'; return; }
        
        // Remove existing auto-table if refreshing
        const existingTable = document.getElementById('api-data-table');
        if(existingTable) existingTable.remove();
        
        let table = document.createElement('table');
        table.id = 'api-data-table';
        table.style.width = '100%'; table.style.borderCollapse = 'collapse'; table.style.marginTop = '20px';
        container.appendChild(table);
        
        const keys = Object.keys(data[0]);
        const thead = '<tr>' + keys.map(k => '<th style="border:1px solid #ccc; padding:8px; background:#eee;">'+k+'</th>').join('') + '</tr>';
        const tbody = data.map(row => '<tr>' + keys.map(k => '<td style="border:1px solid #ccc; padding:8px;">'+row[k]+'</td>').join('') + '</tr>').join('');
        
        table.innerHTML = '<thead>' + thead + '</thead><tbody>' + tbody + '</tbody>';
    } catch (err) { console.error('API Error:', err); }
}

document.addEventListener('DOMContentLoaded', fetchAndRenderData);
// setInterval(fetchAndRenderData, 5000); // Uncomment for auto-refresh
