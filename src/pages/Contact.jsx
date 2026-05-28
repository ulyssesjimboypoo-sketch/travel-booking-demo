export default function Contact(){
  return(
    <section className="section">
      <h1 className="title">Contact Us</h1>

      <div className="contact-box">
        <input type="text" placeholder="Your Name"/>
        <input type="email" placeholder="Your Email"/>
        <textarea placeholder="Message"></textarea>
        <button>Send Inquiry</button>
      </div>
    </section>
  )
}