import { ToastContainer, toast } from 'react-toastify';
export function gerarNotificacao(tipo: string, msg: string) {
  if (tipo == 'success') {
    toast.success(msg, {
      position: 'top-center',
      autoClose: 2000,
    });
  }
  if (tipo == 'error') {
    toast.error(msg, {
      position: 'top-center',
      autoClose: 2000,
    });
  }
}
