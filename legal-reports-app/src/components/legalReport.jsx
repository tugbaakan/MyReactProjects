import React, { Component } from 'react';

class LegalReport extends Component {
    state = {  }


    render() { 
        return (  
            <React.Fragment>
                <h1>Yasal Raporlar Görüntüleme</h1>
                <div>
                    <h2>Başlık Görünsün mü?</h2>
                    <h2>Periodu</h2>
                    <h2>Grup</h2>
                    <h2>Form Adı</h2>
                </div> 

                <div className="btn-group-vertical">
                    <button type="button" className="btn btn-dark">Seçim</button>
                    <button type="button" className="btn btn-dark">İptal</button>
                    <button type="button" className="btn btn-dark">Rapor</button>
                    <button type="button" className="btn btn-dark">Yardım</button>
                    <button type="button" className="btn btn-dark">Kapat</button>
                </div>

            </React.Fragment>
        );
    }
}
 
export default LegalReport;

