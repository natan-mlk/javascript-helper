import React from 'react';

const AlertBox = () => (
<div className="alert" id="alert">
    <div className="box">
        <p>Musisz wybrać tablicę, a czasem też i funkcję!</p>
        <button onClick={() => document.getElementById('alert').style.display = 'none'}
                className="close-alert">Spoko, zagapiłem się
        </button>
        <button onClick={() => document.getElementById('alert').style.display = 'none'}
                className="close-alert">Ja tylko sprawdzam co się stanie
        </button>
    </div>
</div>
);

export default AlertBox