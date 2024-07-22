import ReactDOM from 'react-dom/client';
// import First from './first';
// import Sum from './second';
// import Details from './third';
// import App from './App';
// import Four from './four';
import Reviews from './reviews';


const rootElement  = document.getElementById('root');
const rootRef = ReactDOM.createRoot(rootElement);
rootRef.render(<Reviews/>);