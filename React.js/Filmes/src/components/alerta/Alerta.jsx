import "./Alerta.css";
import Swal from "sweetalert2";
export const Alerta = ({ 
                    title,
                    text,
                    icon,
                    showCancelButton = null,
                    confirmButtonColor = null,
                    cancelButtonColor = null,
                    confirmButtonText ="#3085d6" ,
                    cancelButtonText = "#d33",

 }) => {
    return (
         Swal.fire({
                    title: title,
                    text: text,
                    icon: icon,
                    showCancelButton: showCancelButton,
                    confirmButtonColor: confirmButtonColor,
                    cancelButtonColor: cancelButtonColor,
                    confirmButtonText: confirmButtonText,
                    cancelButtonText: cancelButtonText,
                })    
    )
}
    