import ReactDom from 'react-dom/client';

const hiMessage = <div>Hi I am Azadeh</div>

const root = ReactDom.createRoot(document.getElementById(`root`));

root.render(hiMessage);