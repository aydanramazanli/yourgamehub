import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";


function SubscribeNewsletter() {
  const [inputEmail, setInputEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const { t } = useTranslation();
  const handleEmailInput = (event) => {
    setInputEmail(event.target.value);
  };

  const handleBookAppointmentClick = () => {
    if (!isButtonDisabled) {
      emailRegex.test(inputEmail)
        ? toast.success("Sended successfully!", {
    
            onOpen: () => {
              setIsButtonDisabled(true);
              setInputEmail("");
            },
            onClose: () => setIsButtonDisabled(false),
          })
        : toast.error("Invalid Email Address !", {
        
            onOpen: () => setIsButtonDisabled(true),
            onClose: () => setIsButtonDisabled(false),
          });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleBookAppointmentClick();
    }
  }


  return (
    <div className="ft-info-p2">
     
      <input
        type="text"
        inputMode="email"
        className="ft-input"
        placeholder={t("footer.address")}
        name="email"
        value={inputEmail}
        onChange={handleEmailInput}
        autoComplete="true"
        onKeyPress={handleKeyPress}
      />
     

      <ToastContainer autoClose={4000} limit={1} closeButton={false} />
    </div>
  );
}

export default SubscribeNewsletter;
