import { useEffect, useContext, createContext } from "react";
import { useSpring, animated, useTransition } from "@react-spring/web";
import "./Modal.css";
import { MdOutlineCancel } from "react-icons/md";

const ModalContext = createContext();

const Modal = ({ children, isOpen, onClose, Style }) => {
  const handleEScape = (e) => {
    if (e.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEScape);
    return () => {
      document.removeEventListener("keydown", handleEScape);
    };
  }, []);

  const modalTransition = useTransition(isOpen, {
    from: { opacity: 1 },
    config: {
      duration: 300,
    },
  });

  const springs = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0%)" : "translateY(-10%)",
    config: {
      duration: 300,
    },
  });

  return modalTransition(
    (styles, isOpen) =>
      isOpen && (
        <animated.div
          style={styles}
          className="react-modal-overlay"
          onClick={onclose}
        >
          <animated.div
            style={springs}
            className={`react-modal-wrapper ${Style}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="react-modal-content">
              <ModalContext.Provider value={{ onClose }}>
                {children}
              </ModalContext.Provider>
            </div>
          </animated.div>
        </animated.div>
      )
  );
};

const DismissButton = ({ children, className }) => {
  const { onClose } = useContext(ModalContext);
  return (
    <button type="button" onClick={onClose} className={className}>
      {children}
    </button>
  );
};

const ModalHeader = ({ children, className }) => {
  return (
    <div className={`react-modal-header ${className}`}>
      <div className="react-modal-title">{children}</div>
      <DismissButton className="btn-close"></DismissButton>
    </div>
  );
};

const ModalBody = ({ children, className }) => {
  return <div className={`react-modal-body ${className}`}>{children}</div>;
};

const ModalFooter = ({ children }) => {
  return <div className="react-modal-footer">{children}</div>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.DismissButton = DismissButton;

export default Modal;
