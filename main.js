document.addEventListener('DOMContentLoaded', function() {
    fetchData();
    $('#data-table').DataTable();

    function fetchData() {
        const apiUrl = 'https://anicaapi.hyperspace.technology/Public/GetCavalloRegistrazioni';
        const requestData = {
            userToken: {
                userID: 0,
                userToken: 'string'
            },
            hsidCavallo: 25226
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('API Response:', data); 
            const documenti = data.documenti || []; 
            const tableBody = document.querySelector('#data-table tbody');
            tableBody.innerHTML = ''; // Clear table before adding rows
            documenti.forEach(item => {
                const specifiche = item.specifiche || {};
                const modello2A = specifiche.modello_2A || {};
                const modello2D = specifiche.modello_2D || {};
                const modello2C = specifiche.modello_2C || {};
                const modello2B = specifiche.modello_2B || {};
                const modelloCIF = specifiche.modello_CIF || {};
                const modelloCoupon = specifiche.modello_Coupon || {};
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.hsid || 'N/A'}</td>
                    <td>${item.hsidRegistrazione || 'N/A'}</td>
                    <td>${item.hsidTipoRegistrazione|| 'N/A'}</td>
                    <td>${item.hsidTipoDocumento || 'N/A'}</td>
                    <td>${modello2A.aslNascita || 'N/A'}</td>
                    <td>${modello2A.dataComunicazione || 'N/A'}</td>
                    <td>${modello2A.dataPagamento || 'N/A'}</td>
                    <td>${modello2A.dataComunicazione || 'N/A'}</td>
                    <td>${modello2A.dataPagamento || 'N/A'}</td>
                    <td>${modello2A.aslNascita || 'N/A'}</td>
                    <td>${modello2A.altro || 'N/A'}</td>
                    <td>${modello2A.altroNota || 'N/A'}</td>
                    <td>${modello2A.aslIdentificazione || 'N/A'}</td>
                    <td>${modello2A.bustaNonSigillata || 'N/A'}</td>
                    <td>${modello2A.campioneCrine || 'N/A'}</td>
                    <td>${modello2A.dataInvio || 'N/A'}</td>
                    <td>${modello2A.moduloIncompleto || 'N/A'}</td>
                    <td>${modello2D.dataComunicazione || 'N/A'}</td>
                    <td>${modello2D.dataPagamento || 'N/A'}</td>
                    <td>${modello2C.modello_2C_dataComunicazione || 'N/A'}</td>
                    <td>${modello2C.modello_2C_dataPagamento || 'N/A'}</td>
                    <td>${modello2B.altro ? 'true' : 'false'}</td>
                    <td>${modello2B.altroNota || 'N/A'}</td>
                    <td>${modello2B.aslIdentificazione || 'N/A'}</td>
                    <td>${modello2B.bustaNonSigillata ? 'true' : 'false'}</td>
                    <td>${modello2B.campioneCrine ? 'true' : 'false'}</td>
                    <td>${modello2B.dataComunicazione || 'N/A'}</td>
                    <td>${modello2B.dataInvio || 'N/A'}</td>
                    <td>${modello2B.dataPagamento || 'N/A'}</td>
                    <td>${modello2B.moduloIncompleto ? 'true' : 'false'}</td>
                    <td>${modelloCIF.numero || 'N/A'}</td>
                    <td>${modelloCIF.originale ? 'true' : 'false'}</td>
                    <td>${modelloCIF.fotocopia ? 'true' : 'false'}</td>
                    <td>${modelloCIF.dupplicatoAutenticato ? 'true' : 'false'}</td>
                    <td>${modelloCoupon.numero || 'N/A'}</td>
                    <td>${modelloCoupon.originale ? 'true' : 'false'}</td>
                    <td>${modelloCoupon.fotocopia ? 'true' : 'false'}</td>
                    <td>${modelloCoupon.dupplicatoAutenticato ? 'true' : 'false'}</td>
                    <td>${specifiche.modello_AccertamentoParentela_NatoItalia || 'N/A'}</td>
                    <td>${specifiche.modello_Foto || 'N/A'}</td>
                    <td>${specifiche.modello_EmbryoTransfer || 'N/A'}</td>
                    <td>${specifiche.modello_30 || 'N/A'}</td>
                    <td>${specifiche.modello_30F || 'N/A'}</td>
                    <td>${specifiche.modello_DirittiAllevatoriali || 'N/A'}</td>
                    <td>${specifiche.modello_ExportCertificate || 'N/A'}</td>
                    <td>${specifiche.modello_9B || 'N/A'}</td>
                    <td>${specifiche.modello_DNA || 'N/A'}</td>
                    <td>${specifiche.modello_AccertamentoParentela_Importato || 'N/A'}</td>
                    <td>${specifiche.modello_PassaportoEstero || 'N/A'}</td>
                    <td>${specifiche.modello_Provenienza || 'N/A'}</td>
                    <td>${specifiche.modello_Pedigree || 'N/A'}</td>
                    <td>${specifiche.modello_Morte || 'N/A'}</td>
                    <td>${specifiche.modello_CIE || 'N/A'}</td>
                    <td>${specifiche.modello_CIEF || 'N/A'}</td>
                    <td>${specifiche.modello_BreedingCard || 'N/A'}</td>
                    <td>
                        <button class="update-btn" onclick="openSlidingDiv(
                            '${item.hsid || ''}',
                            '${item.hsidRegistrazione || ''}',
                            '${item.hsidTipoRegistrazione || ''}',
                            '${item.hsidTipoDocumento || ''}',
                            '${modello2A.aslNascita || ''}',
                            '${modello2A.dataComunicazione || ''}',
                            '${modello2A.dataPagamento || ''}',
                            '${modello2A.altro || ''}',
                            '${modello2A.altroNota || ''}',
                            '${modello2A.aslIdentificazione || ''}',
                            '${modello2A.bustaNonSigillata || ''}',
                            '${modello2A.campioneCrine || ''}',
                            '${modello2A.dataInvio || ''}',
                            '${modello2A.moduloIncompleto || ''}',
                            '${modello2D.dataComunicazione || ''}',
                            '${modello2D.dataPagamento || ''}',
                            '${modello2C.modello_2C_dataComunicazione || ''}',
                            '${modello2C.modello_2C_dataPagamento || ''}',
                            '${modello2B.altro || ''}',
                            '${modello2B.altroNota || ''}',
                            '${modello2B.aslIdentificazione || ''}',
                            '${modello2B.bustaNonSigillata || ''}',
                            '${modello2B.campioneCrine || ''}',
                            '${modello2B.dataComunicazione || ''}',
                            '${modello2B.dataInvio || ''}',
                            '${modello2B.dataPagamento || ''}',
                            '${modello2B.moduloIncompleto || ''}',
                            '${modelloCIF.numero || ''}',
                            '${modelloCIF.originale || ''}',
                            '${modelloCIF.fotocopia || ''}',
                            '${modelloCIF.dupplicatoAutenticato || ''}',
                            '${modelloCoupon.numero || ''}',
                            '${modelloCoupon.originale || ''}',
                            '${modelloCoupon.fotocopia || ''}',
                            '${modelloCoupon.dupplicatoAutenticato || ''}',
                            '${specifiche.modello_AccertamentoParentela_NatoItalia || ''}',
                            '${specifiche.modello_Foto || ''}',
                            '${specifiche.modello_EmbryoTransfer || ''}',
                            '${specifiche.modello_30 || ''}',
                            '${specifiche.modello_30F || ''}',
                            '${specifiche.modello_DirittiAllevatoriali || ''}',
                            '${specifiche.modello_ExportCertificate || ''}',
                            '${specifiche.modello_9B || ''}',
                            '${specifiche.modello_DNA || ''}',
                            '${specifiche.modello_AccertamentoParentela_Importato || ''}',
                            '${specifiche.modello_PassaportoEstero || ''}',
                            '${specifiche.modello_Provenienza || ''}',
                            '${specifiche.modello_Pedigree || ''}',
                            '${specifiche.modello_Morte || ''}',
                            '${specifiche.modello_CIE || ''}',
                            '${specifiche.modello_CIEF || ''}',
                            '${specifiche.modello_BreedingCard || ''}'
                        )">Update</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    window.openSlidingDiv = function(
        hsid, hsidRegistrazione, hsidTipoRegistrazione,hsidTipoDocumento, aslNascita, dataComunicazione, dataPagamento,
        altro, altroNota, aslIdentificazione, bustaNonSigillata, campioneCrine, dataInvio, moduloIncompleto,
        dataComunicazioneD2, dataPagamentoD2, dataComunicazioneC2, dataPagamentoC2,
        altroB2, altroNotaB2, aslIdentificazioneB2, bustaNonSigillataB2, campioneCrineB2, 
        dataComunicazioneB2, dataInvioB2, dataPagamentoB2, moduloIncompletoB2,
        numeroCIF, originaleCIF, fotocopiaCIF, dupplicatoAutenticatoCIF,
        numeroCoupon, originaleCoupon, fotocopiaCoupon, dupplicatoAutenticatoCoupon,
        modello_AccertamentoParentela_NatoItalia, modello_Foto, modello_EmbryoTransfer,
        modello_30, modello_30F, modello_DirittiAllevatoriali, modello_ExportCertificate,
        modello_9B, modello_DNA, modello_AccertamentoParentela_Importato, modello_PassaportoEstero,
        modello_Provenienza, modello_Pedigree, modello_Morte, modello_CIE, modello_CIEF, modello_BreedingCard
    ) {
    
        openSlider(); // Assuming openSlider() is defined elsewhere
    
        const idsToValues = {
            documentHSID: hsid,
            hsidRegistrazione: hsidRegistrazione,
            hsidTipoRegistrazione:hsidTipoRegistrazione,
            hsidTipoDocumento: hsidTipoDocumento,
            modello_2A_dataComunicazione: dataComunicazione,
            modello_2A_dataPagamento: dataPagamento,
            modello_2A_aslNascita: aslNascita,
            modello_2A_altro: altro,
            modello_2A_altroNota: altroNota,
            modello_2A_aslIdentificazione: aslIdentificazione,
            modello_2A_bustaNonSigillata: bustaNonSigillata,
            modello_2A_campioneCrine: campioneCrine,
            modello_2A_dataInvio: dataInvio,
            modello_2A_moduloIncompleto: moduloIncompleto,            
            modello_2D_dataComunicazione: dataComunicazioneD2,
            modello_2D_dataPagamento: dataPagamentoD2,
            modello_2C_dataComunicazione: dataComunicazioneC2,
            modello_2C_dataPagamento: dataPagamentoC2,
            modello_2B_altro: altroB2,
            modello_2B_altroNota: altroNotaB2,
            modello_2B_aslIdentificazione: aslIdentificazioneB2,
            modello_2B_bustaNonSigillata: bustaNonSigillataB2,
            modello_2B_campioneCrine: campioneCrineB2,
            modello_2B_dataComunicazione: dataComunicazioneB2,
            modello_2B_dataInvio: dataInvioB2,
            modello_2B_dataPagamento: dataPagamentoB2,
            modello_2B_moduloIncompleto: moduloIncompletoB2,
            modello_CIF_dupplicatoAutenticato: dupplicatoAutenticatoCIF,
            modello_CIF_fotocopia: fotocopiaCIF,
            modello_CIF_numero: numeroCIF,
            modello_CIF_originale: originaleCIF,
            modello_Coupon_numero: numeroCoupon,
            modello_Coupon_originale: originaleCoupon,
            modello_Coupon_fotocopia: fotocopiaCoupon,
            modello_Coupon_dupplicatoAutenticato: dupplicatoAutenticatoCoupon,
            modello_AccertamentoParentela_NatoItalia: modello_AccertamentoParentela_NatoItalia,
            modello_Foto: modello_Foto,
            modello_EmbryoTransfer: modello_EmbryoTransfer,
            modello_30: modello_30,
            modello_30F: modello_30F,
            modello_DirittiAllevatoriali: modello_DirittiAllevatoriali,
            modello_ExportCertificate: modello_ExportCertificate,
            modello_9B: modello_9B,
            modello_DNA: modello_DNA,
            modello_AccertamentoParentela_Importato: modello_AccertamentoParentela_Importato,
            modello_PassaportoEstero: modello_PassaportoEstero,
            modello_Provenienza: modello_Provenienza,
            modello_Pedigree: modello_Pedigree,
            modello_Morte: modello_Morte,
            modello_CIE: modello_CIE,
            modello_CIEF: modello_CIEF,
            modello_BreedingCard: modello_BreedingCard
        };
    
        for (const id in idsToValues) {
            const element = document.getElementById(id);
            if (element) {
                element.value = idsToValues[id];
            } else {
                //console.error(`Element with ID "${id}" not found.`);
            }
        }
    }
});
