import React, { useState } from "react";
import { ArrowRight, User, Lock, Mail, EyeOff, Eye } from "lucide-react";
import "../../style/User/Login.scss";
import { postLogin, postRegister } from "../../service/authService";
import { ToastContainer, toast } from "react-toastify";
import validation from "../../utils/validation";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { validateEmail, validateUsername, validatePassword } = validation;
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    }
    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setPassword(value);
    }
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    if (isLogin) {
      let data = await postLogin(email, password);
      if (data && data.EC === 0) {
        toast.success(data.EM);
        toast.success("Bạn được điều hướng đến trang home");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(data.EM);
      }
    }
    if (!isLogin) {
      if (!validateUsername(username)) {
        toast.error("Tên đăng nhập phải có hơn 5 ký tự!");
        return;
      }
      if (!validatePassword(password)) {
        toast.error("Mật khẩu phải hơn 5 ký tự!");
        return;
      }
      if (!validateEmail(email)) {
        toast.error("Invalid email!");
        return;
      }
      if (password !== confirmPassword) {
        toast.error("Mật khẩu không khớp!");
        return;
      }
      let data = await postRegister(email, username, password);
      if (data && data.EC === 0) {
        toast.success(data.EM);
        setIsLogin(!isLogin);
      } else {
        toast.error(data.EM);
      }
    }
  };
  return (
    <>
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-wrapper">
            <div className="auth-header">
              <div className="auth-header-content">
                <h1 className="auth-title">
                  {isLogin ? "Chào mừng" : "Tạo tài khoản"}
                </h1>
                <button onClick={toggleForm} className="auth-toggle-btn">
                  {isLogin ? "Đăng ký" : "Đăng nhập"}
                  <ArrowRight size={14} className="auth-icon-small" />
                </button>
              </div>
            </div>
            <div className="auth-body">
              {
                <div className="auth-form">
                  {!isLogin && (
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">
                        Username
                      </label>
                      <div className="input-wrapper">
                        <div className="input-icon">
                          <User size={18} />
                        </div>
                        <input
                          id="username"
                          name="username"
                          type="text"
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Nguyễn Văn A"
                        />
                      </div>
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <div className="input-wrapper">
                      <div className="input-icon">
                        <Mail size={18} />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        className="form-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="password">
                      Mật khẩu
                    </label>
                    <div className="input-wrapper">
                      <div className="input-icon">
                        <Lock size={18} />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="••••••••"
                      />
                      <div
                        className="toggle-eye-icon input-icon-eye"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <Eye size={18} />
                        ) : (
                          <EyeOff size={18} />
                        )}
                      </div>
                    </div>
                  </div>

                  {!isLogin && (
                    <div className="form-group">
                      <label className="form-label" htmlFor="confirmPassword">
                        Xác nhận mật khẩu
                      </label>
                      <div className="input-wrapper">
                        <div className="input-icon">
                          <Lock size={18} />
                        </div>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="••••••••"
                        />
                        <div
                          className="toggle-eye-icon input-icon-eye"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <Eye size={18} />
                          ) : (
                            <EyeOff size={18} />
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {isLogin && (
                    <div className="form-options">
                      <div className="remember-option">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="checkbox-input"
                        />
                        <label htmlFor="remember-me" className="checkbox-label">
                          Ghi nhớ
                        </label>
                      </div>
                      <div className="forgot-password">Quên mật khẩu?</div>
                    </div>
                  )}

                  <button onClick={handleSubmit} className="submit-button">
                    {isLogin ? "Đăng nhập" : "Đăng ký"}
                    <ArrowRight size={18} className="auth-icon" />
                  </button>
                </div>
              }
              <div className="auth-footer">
                {isLogin ? (
                  <p className="switch-text">
                    Bạn chưa có tài khoản?{" "}
                    <button onClick={toggleForm} className="switch-link">
                      Đăng ký
                    </button>
                  </p>
                ) : (
                  <p className="switch-text">
                    Bạn đã có tài khoản?{" "}
                    <button onClick={toggleForm} className="switch-link">
                      Đăng nhập
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Login;
