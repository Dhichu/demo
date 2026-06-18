fetch('rates.json')
.then(r=>r.json())
.then(data=>{
document.getElementById('gold22').innerText='₹ '+data.gold22+'/g';
document.getElementById('gold24').innerText='₹ '+data.gold24+'/g';
document.getElementById('silver').innerText='₹ '+data.silver+'/g';
document.getElementById('updated').innerText='Updated: '+data.updated;
});