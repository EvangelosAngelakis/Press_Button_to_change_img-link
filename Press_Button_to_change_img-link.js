document.getElementById('dButton').addEventListener('click', function(){
document.getElementById('dText').textContent = 'SeaSide Holidays';
document.getElementById('dLink').href = 'https://www.hoseasons.co.uk/collections/beach-holidays';
document.getElementById('dImage').src = 'https://cdn.pixabay.com/photo/2016/11/29/03/46/beach-1867137_1280.jpg';
});

function resetPage() {
    location.reload();
}