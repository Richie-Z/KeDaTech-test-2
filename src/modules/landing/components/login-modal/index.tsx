import { useState } from "react";
import Ilustration from "@/assets/images/ilustration-login.svg";
import "./login-modal.scss";
import Button from "@/components/button";

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="btn-login" onClick={() => setIsOpen(true)}>
        Login
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setIsOpen(false)}>
              ✖
            </button>

            <div className="modal-body">
              <div className="modal-image">
                <img
                  src={Ilustration}
                  alt="Login Illustration"
                />
              </div>

              <form className="modal-form">
                <h2>Welcome</h2>
                <p>Please login to continue</p>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Enter your email" />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>

                <Button name="Login" />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
