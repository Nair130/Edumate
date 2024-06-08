document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
});

let documents = JSON.parse(localStorage.getItem('documents')) || [];

function uploadDocument() {
    const documentType = document.getElementById('documentType').value;
    const subject = document.getElementById('subject').value;
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const document = {
                name: file.name,
                type: documentType,
                subject: subject,
                content: e.target.result
            };
            documents.push(document);
            localStorage.setItem('documents', JSON.stringify(documents));
            displayDocuments(documents);
        };
        reader.readAsText(file);
    } else {
        alert('Please select a file to upload.');
    }
}

function displayDocuments(docs) {
    const documentList = document.getElementById('documentList');
    documentList.innerHTML = '';
    docs.forEach(doc => {
        const documentItem = document.createElement('div');
        documentItem.classList.add('bg-gray-200', 'p-4', 'mt-2', 'rounded-md');
        documentItem.innerHTML = `
            <h2 class="text-xl font-bold">${doc.name}</h2>
            <p>Type: ${doc.type}</p>
            <p>Subject: ${doc.subject}</p>
            <p>Content: ${doc.content}</p>
        `;
        documentList.appendChild(documentItem);
    });
}

function filterDocuments() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredDocuments = documents.filter(doc => 
        doc.name.toLowerCase().includes(searchInput) || 
        doc.type.toLowerCase().includes(searchInput) || 
        doc.subject.toLowerCase().includes(searchInput) || 
        doc.content.toLowerCase().includes(searchInput)
    );
    displayDocuments(filteredDocuments);
}

window.onload = function() {
    displayDocuments(documents);
}
