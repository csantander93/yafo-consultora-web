import React, { useState, useEffect } from 'react';
import './ContactForm.css';
import logoYafo from '../../assets/Logo Yafo JPG_grises 300 dpi.jpg'; // Verify this path is correct

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Add loaded class after component mounts to trigger fade-in animation
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id='contacto' className={`contact-section ${isLoaded ? 'loaded' : ''}`}>
      <div className="contact-background">
        <div className="contact-background-curves">
          <div className="curve curve-1"></div>
          <div className="curve curve-2"></div>
        </div>
      </div>
      
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">CONTACTO</h2>
          <p className="contact-subtitle">Completa el formulario y nos pondremos en contacto contigo</p>
        </div>

        <div className="contact-row">
          <div className="form-container">
            {submitSuccess ? (
              <div className="success-message">
                <svg className="success-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M22 4 12 14.01l-3-3" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h4>¡Mensaje enviado!</h4>
                <p>Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="floating-input">
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      required 
                    />
                    <label htmlFor="name">Nombre y Apellido</label>
                  </div>
                  
                  <div className="floating-input">
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      required 
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                
                <div className="floating-input">
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder=" "
                    required 
                  />
                  <label htmlFor="subject">Asunto</label>
                </div>
                
                <div className="floating-input textarea-input">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="3" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    required
                  ></textarea>
                  <label htmlFor="message">Mensaje</label>
                </div>
                
                <button 
                  type="submit" 
                  className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="spinner"></span>
                  ) : (
                    <>
                      Enviar Mensaje
                      <svg className="submit-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          <div className="info-container">
            <img 
              src={logoYafo} 
              alt="Aleph Manager Logo" 
              className="info-logo"
            />
            <p className="info-text">
              Estamos a disposición para responder cualquier duda o consulta que pueda surgirle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;