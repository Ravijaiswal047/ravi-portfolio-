import emailjs from '@emailjs/browser'

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    try {
      // Initialize EmailJS with environment variables
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form
      );
      
      console.log('Email sent successfully:', result.text);
      alert('Message sent successfully! I will get back to you soon.');
      form.reset();
      
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again or contact me directly at jravi047@gmail.com');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>jravi047@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <span>linkedin.com/in/ravi-jaiswal004</span>
              </div>
              <div className="contact-item">
                <i className="fab fa-github"></i>
                <span>github.com/ravijaiswal047</span>
              </div>
            </div>
          </div>
          <div className='form'>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="5" 
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
