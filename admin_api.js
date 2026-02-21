
// Auto-generated Admin API
const API_BASE = "https://ji7ji-1304029630.cos.ap-hongkong.myqcloud.com/anim/";

async function fetchAndRenderData() {
    try {
        const res = await fetch(API_BASE + '/data');
        const data = await res.json();
        
        let container = document.getElementById('data-container') || document.body;
        if(data.length === 0) { container.innerHTML += '<p>No data yet.</p>'; return; }
        
        let table = document.getElementById('api-data-table');
        if(!table) {
            table = document.createElement('table');
            table.id = 'api-data-table';
            table.style.width = '100%'; table.style.borderCollapse = 'collapse'; table.style.marginTop = '20px';
            container.appendChild(table);
        }
        
        const keys = Object.keys(data[0]);
        const thead = '<tr>' + keys.map(k => '<th style="border:1px solid #ccc; padding:8px; background:#eee;">'+k+'</th>').join('') + '</tr>';
        const tbody = data.map(row => '<tr>' + keys.map(k => '<td style="border:1px solid #ccc; padding:8px;">'+row[k]+'</td>').join('') + '</tr>').join('');
        
        table.innerHTML = '<thead>' + thead + '</thead><tbody>' + tbody + '</tbody>';
    } catch (err) { console.error('API Error:', err); }
}

document.addEventListener('DOMContentLoaded', fetchAndRenderData);
// Optional: Refresh every 5 seconds
// setInterval(fetchAndRenderData, 5000);
