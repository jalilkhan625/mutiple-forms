// Initialize currentHSID with the starting value
let currentHSID = 118977;

// Function to generate a unique HSID starting from 118976
const generateUUID = (function () {
    // Start from 118976
    return function () {
        return currentHSID++; // Increment with each call
    };
})();

// Function to gather form data
function getFormData() {
    // Check if there is an existing HSID
    let hsid = document.getElementById('documentHSID').value;
    
    // If HSID is empty, generate a new one
    if (!hsid) {
        hsid = generateUUID();
    }

    // Gather values from the first form (Basic Document Information)
    const hsidRegistrazione = document.getElementById('hsidRegistrazione').value;
    const hsidTipoRegistrazione = document.getElementById('hsidTipoRegistrazione').value;
    const hsidTipoDocumento = document.getElementById('hsidTipoDocumento').value;

    // Gather values from the Modello 2A form
    const modello_2A_dataComunicazione = document.getElementById('modello_2A_dataComunicazione').value;
    const modello_2A_dataPagamento = document.getElementById('modello_2A_dataPagamento').value;
    const modello_2A_aslNascita = document.getElementById('modello_2A_aslNascita').value;
    const modello_2A_altro = document.getElementById('modello_2A_altro').checked;
    const modello_2A_altroNota = document.getElementById('modello_2A_altroNota').value;
    const modello_2A_aslIdentificazione = document.getElementById('modello_2A_aslIdentificazione').value;
    const modello_2A_bustaNonSigillata = document.getElementById('modello_2A_bustaNonSigillata').checked;
    const modello_2A_campioneCrine = document.getElementById('modello_2A_campioneCrine').checked;
    const modello_2A_dataInvio = document.getElementById('modello_2A_dataInvio').value;
    const modello_2A_moduloIncompleto = document.getElementById('modello_2A_moduloIncompleto').checked;

    // Gather values from the Modello 2D form
    const modello_2D_dataComunicazione = document.getElementById('modello_2D_dataComunicazione').value;
    const modello_2D_dataPagamento = document.getElementById('modello_2D_dataPagamento').value;

    // Gather values from the Modello 2C form
    const modello_2C_dataComunicazione = document.getElementById('modello_2C_dataComunicazione').value;
    const modello_2C_dataPagamento = document.getElementById('modello_2C_dataPagamento').value;

    // Gather values from the Modello 2B form
    const altro_2B = document.getElementById('altro_2B').checked;
    const altroNota_2B = document.getElementById('altroNota_2B').value;
    const aslIdentificazione_2B = document.getElementById('aslIdentificazione_2B').value;
    const bustaNonSigillata_2B = document.getElementById('bustaNonSigillata_2B').checked;
    const campioneCrine_2B = document.getElementById('campioneCrine_2B').checked;
    const dataComunicazione_2B = document.getElementById('dataComunicazione_2B').value;
    const dataInvio_2B = document.getElementById('dataInvio_2B').value;
    const dataPagamento_2B = document.getElementById('dataPagamento_2B').value;
    const moduloIncompleto_2B = document.getElementById('moduloIncompleto_2B').checked;

    // Gather values from the Modello CIF form
    const dupplicatoAutenticato_CIF = document.getElementById('dupplicatoAutenticato_CIF').checked;
    const fotocopia_CIF = document.getElementById('fotocopia_CIF').checked;
    const numero_CIF = document.getElementById('numero_CIF').value;
    const originale_CIF = document.getElementById('originale_CIF').checked;

    // Gather values from the Modello Coupon form
    const numero_Coupon = document.getElementById('numero_Coupon').value;
    const originale_coupon = document.getElementById('originale_coupon').checked;
    const fotocopia_coupon = document.getElementById('fotocopia_coupon').checked;
    const dupplicatoAutenticato_coupon = document.getElementById('dupplicatoAutenticato_coupon').checked;

    // Gather values from the Modello Accertamento Parentela Nato Italia form
    const modello_AccertamentoParentela_NatoItalia = document.getElementById('modello_AccertamentoParentela_NatoItalia').value;

    // Gather values from the Modello Foto form
    const modello_Foto = document.getElementById('modello_Foto').value;

    // Gather values from the Modello Embryo Transfer form
    const modello_EmbryoTransfer = document.getElementById('modello_EmbryoTransfer').value;

    // Gather values from the Modello 30 form
    const modello_30 = document.getElementById('modello_30').value;

    // Gather values from the Modello 30F form
    const modello_30F = document.getElementById('modello_30F').value;

    // Gather values from the Modello Diritti Allevatoriali form
    const modello_DirittiAllevatoriali = document.getElementById('modello_DirittiAllevatoriali').value;

    // Gather values from the Modello Export Certificate form
    const modello_ExportCertificate = document.getElementById('modello_ExportCertificate').value;

    // Gather values from the Modello 9B form
    const modello_9B = document.getElementById('modello_9B').value;

    // Gather values from the Modello DNA form
    const modello_DNA = document.getElementById('modello_DNA').value;

    // Gather values from the Modello Accertamento Parentela Importato form
    const modello_AccertamentoParentela_Importato = document.getElementById('modello_AccertamentoParentela_Importato').value;

    // Gather values from the Modello Passaporto Estero form
    const modello_PassaportoEstero = document.getElementById('modello_PassaportoEstero').value;

    // Gather values from the Modello Provenienza form
    const modello_Provenienza = document.getElementById('modello_Provenienza').value;

    // Gather values from the Modello Pedigree form
    const modello_Pedigree = document.getElementById('modello_Pedigree').value;

    // Gather values from the Modello Morte form
    const modello_Morte = document.getElementById('modello_Morte').value;

    // Gather values from the Modello CIE form
    const modello_CIE = document.getElementById('modello_CIE').value;

    // Gather values from the Modello CIEF form
    const modello_CIEF = document.getElementById('modello_CIEF').value;

    // Gather values from the Modello BreedingCard form
    const modello_BreedingCard = document.getElementById('modello_BreedingCard').value;

    // Construct the JSON object for the request
    const requestData = {
        "userToken": {
            "userID": 1,  // Adjust accordingly
            "userToken":"string" // Replace with a valid token
        },
        "registrazione": {
            "hsidCavallo": 25226,  // Adjust accordingly
            "registrazione":null, // Ensure this field is populated if needed
            "documenti": [
                {
                    "hsid": hsid,  // Ensure this is an integer
                    "hsidRegistration": hsidRegistrazione,
                    "hsidTipoRegistrazione": hsidTipoRegistrazione,
                    "hsidTipoDocumento": hsidTipoDocumento,
                    "specifiche": {
                        "modello_2A": {
                            "dataComunicazione": modello_2A_dataComunicazione,
                            "dataPagamento": modello_2A_dataPagamento,
                            "aslNascita": modello_2A_aslNascita,
                            "altro": modello_2A_altro,
                            "altroNota": modello_2A_altroNota,
                            "aslIdentificazione": modello_2A_aslIdentificazione,
                            "bustaNonSigillata": modello_2A_bustaNonSigillata,
                            "campioneCrine": modello_2A_campioneCrine,
                            "dataInvio": modello_2A_dataInvio,
                            "moduloIncompleto": modello_2A_moduloIncompleto
                        },
                        "2D_modello": {
                            "dataComunicazione": modello_2D_dataComunicazione,
                            "dataPagamento": modello_2D_dataPagamento
                        },
                        "modello_2C": {
                            "dataComunicazione": modello_2C_dataComunicazione,
                            "dataPagamento": modello_2C_dataPagamento
                        },
                        "modello_2B": {
                            "altro": altro_2B,
                            "altroNota": altroNota_2B,
                            "aslIdentificazione": aslIdentificazione_2B,
                            "bustaNonSigillata": bustaNonSigillata_2B,
                            "campioneCrine": campioneCrine_2B,
                            "dataComunicazione": dataComunicazione_2B,
                            "dataInvio": dataInvio_2B,
                            "dataPagamento": dataPagamento_2B,
                            "moduloIncompleto": moduloIncompleto_2B
                        },
                        "modello_CIF": {
                            "numero": numero_CIF,
                            "originale": originale_CIF,
                            "fotocopia": fotocopia_CIF,  
                            "dupplicatoAutenticato": dupplicatoAutenticato_CIF   
                        },
                        "modello_Coupon": {
                            "numero": numero_Coupon,
                            "originale": originale_coupon,
                            "fotocopia": fotocopia_coupon,
                            "dupplicatoAutenticato": dupplicatoAutenticato_coupon
                        },
                        "modello_Parenting_Certification_NatoItaly": modello_AccertamentoParentela_NatoItalia,
                        "modello_Photo": modello_Foto,
                        "modello_EmbryoTransfer": modello_EmbryoTransfer,
                        "modello_30": modello_30,
                        "modello_30F": modello_30F,
                        "modello_BreedingRights": modello_DirittiAllevatoriali,
                        "modello_ExportCertificate": modello_ExportCertificate,
                        "modello_9B": modello_9B,
                        "modello_DNA": modello_DNA,
                        "modello_Imported_Parenting_Certification": modello_AccertamentoParentela_Importato,
                        "modello_PassaportoEstero": modello_PassaportoEstero,
                        "modello_origin": modello_Provenienza,
                        "modello_Pedigree": modello_Pedigree,
                        "modello_death": modello_Morte,
                        "modello_CIE": modello_CIE,
                        "modello_CIEF": modello_CIEF,
                        "modello_BreedingCard": modello_BreedingCard
                    }
                }
            ]
        }
    };

    console.log("Form Data:", requestData);
    return requestData;
}

// Function to send form data
function sendFormData() {
    const requestData = getFormData();

    // Wrap the requestData in a "request" object as expected by the API
    const apiPayload = {
        request: requestData
    };

    console.log("Sending request to API with data:", apiPayload);

    fetch('https://anicaapi.hyperspace.technology/Public/SetCavalloRegistrazione', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiPayload),
    })
    .then(response => {
        console.log("Response status:", response.status); // Log status code
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text); }); // Get error text
        }
        return response.json();
    })
    .then(data => {
        console.log("Response data:", data);

        // Handle the response
        if (data.errors) {
            console.error('Validation Errors:', data.errors);
        } else {
            console.log('Success:', data);
            appendToDatatable(data);
        }
    })
    .catch((error) => console.error('Error:', error));
}

// Function to append the new record to the datatable
function appendToDatatable(data) {
    // Assuming you have a table with the id 'dataTable'
    const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    
    // Extract the document data
    const doc = data.request.registrazione.documenti[0];

    // Insert a new row
    const newRow = table.insertRow();

    // Add cells for each piece of data
    newRow.insertCell(0).textContent = doc.hsid;
    newRow.insertCell(1).textContent = doc.hsidRegistration;
    newRow.insertCell(2).textContent = doc.hsidTipoRegistrazione;
    newRow.insertCell(3).textContent = doc.hsidDocumentType;
    
    // Modello 2A fields
    newRow.insertCell(4).textContent = doc.specifications.modello_2A.dataComunicazione;
    newRow.insertCell(5).textContent = doc.specifications.modello_2A.dataPagamento;
    newRow.insertCell(6).textContent = doc.specifications.modello_2A.aslNascita;
    newRow.insertCell(7).textContent = doc.specifications.modello_2A.altro ? 'Yes' : 'No';
    newRow.insertCell(8).textContent = doc.specifications.modello_2A.altroNota;
    newRow.insertCell(9).textContent = doc.specifications.modello_2A.aslIdentificazione;
    newRow.insertCell(10).textContent = doc.specifications.modello_2A.bustaNonSigillata ? 'Yes' : 'No';
    newRow.insertCell(11).textContent = doc.specifications.modello_2A.campioneCrine ? 'Yes' : 'No';
    newRow.insertCell(12).textContent = doc.specifications.modello_2A.dataInvio;
    newRow.insertCell(13).textContent = doc.specifications.modello_2A.moduloIncompleto ? 'Yes' : 'No';

    // Modello 2D fields
    newRow.insertCell(14).textContent = doc.specifications["2D_modello"].dataComunicazione;
    newRow.insertCell(15).textContent = doc.specifications["2D_modello"].dataPagamento;

    // Modello 2C fields
    newRow.insertCell(16).textContent = doc.specifications.modello_2C.dataComunicazione;
    newRow.insertCell(17).textContent = doc.specifications.modello_2C.dataPagamento;

    // Modello 2B fields
    newRow.insertCell(18).textContent = doc.specifications.modello_2B.altro ? 'Yes' : 'No';
    newRow.insertCell(19).textContent = doc.specifications.modello_2B.altroNota;
    newRow.insertCell(20).textContent = doc.specifications.modello_2B.aslIdentificazione;
    newRow.insertCell(21).textContent = doc.specifications.modello_2B.bustaNonSigillata ? 'Yes' : 'No';
    newRow.insertCell(22).textContent = doc.specifications.modello_2B.campioneCrine ? 'Yes' : 'No';
    newRow.insertCell(23).textContent = doc.specifications.modello_2B.dataComunicazione;
    newRow.insertCell(24).textContent = doc.specifications.modello_2B.dataInvio;
    newRow.insertCell(25).textContent = doc.specifications.modello_2B.dataPagamento;
    newRow.insertCell(26).textContent = doc.specifications.modello_2B.moduloIncompleto ? 'Yes' : 'No';

    // Modello CIF fields
    newRow.insertCell(27).textContent = doc.specifications.modello_CIF.numero;
    newRow.insertCell(28).textContent = doc.specifications.modello_CIF.originale ? 'Yes' : 'No';
    newRow.insertCell(29).textContent = doc.specifications.modello_CIF.fotocopia ? 'Yes' : 'No';
    newRow.insertCell(30).textContent = doc.specifications.modello_CIF.dupplicatoAutenticato ? 'Yes' : 'No';

    // Modello Coupon fields
    newRow.insertCell(31).textContent = doc.specifications.modello_Coupon.numero;
    newRow.insertCell(32).textContent = doc.specifications.modello_Coupon.originale ? 'Yes' : 'No';
    newRow.insertCell(33).textContent = doc.specifications.modello_Coupon.fotocopia ? 'Yes' : 'No';
    newRow.insertCell(34).textContent = doc.specifications.modello_Coupon.dupplicatoAutenticato ? 'Yes' : 'No';

    // Modello Accertamento Parentela Nato Italia field
    newRow.insertCell(35).textContent = doc.specifications.modello_Parenting_Certification_NatoItaly;

    // Modello Foto field
    newRow.insertCell(36).textContent = doc.specifications.modello_Photo;

    // Modello Embryo Transfer field
    newRow.insertCell(37).textContent = doc.specifications.modello_EmbryoTransfer;

    // Modello 30 fields
    newRow.insertCell(38).textContent = doc.specifications.modello_30;

    // Modello 30F fields
    newRow.insertCell(39).textContent = doc.specifications.modello_30F;

    // Modello Diritti Allevatoriali fields
    newRow.insertCell(40).textContent = doc.specifications.modello_BreedingRights;

    // Modello Export Certificate fields
    newRow.insertCell(41).textContent = doc.specifications.modello_ExportCertificate;

    // Modello 9B fields
    newRow.insertCell(42).textContent = doc.specifications.modello_9B;

    // Modello DNA fields
    newRow.insertCell(43).textContent = doc.specifications.modello_DNA;

    // Modello Accertamento Parentela Importato fields
    newRow.insertCell(44).textContent = doc.specifications.modello_Imported_Parenting_Certification;

    // Modello Passaporto Estero fields
    newRow.insertCell(45).textContent = doc.specifications.modello_PassaportoEstero;

    // Modello Provenienza fields
    newRow.insertCell(46).textContent = doc.specifications.modello_origin;

    // Modello Pedigree fields
    newRow.insertCell(47).textContent = doc.specifications.modello_Pedigree;

    // Modello Morte fields
    newRow.insertCell(48).textContent = doc.specifications.modello_death;

    // Modello CIE fields
    newRow.insertCell(49).textContent = doc.specifications.modello_CIE;

    // Modello CIEF fields
    newRow.insertCell(50).textContent = doc.specifications.modello_CIEF;

    // Modello BreedingCard fields
    newRow.insertCell(51).textContent = doc.specifications.modello_BreedingCard;
}



// Attach event listener to the save button
document.getElementById('saveButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    sendFormData();
});
