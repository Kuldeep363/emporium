import ReactDOM from 'react-dom';

const Modal = ({children}) => {
    const modal = document.getElementById('modal');
  return ReactDOM.createPortal(children,modal)
}

export default Modal
