import "../../styles/home.css";

export default function Testimonials() {
  const testimonials = [
    {
      text: "AB Fintech provides the best digital banking experience I’ve used.",
      name: "Rahul Sharma",
      role: "Business Owner",
    },
    {
      text: "Opening an account was quick and smooth. Great customer support!",
      name: "Priya Mehta",
      role: "Working Professional",
    },
    {
      text: "Safe, reliable, and easy-to-use mobile banking services.",
      name: "Amit Verma",
      role: "Entrepreneur",
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="testimonial-title">What Our Customers Say</h2>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="customer-name">{item.name}</div>
              <div className="customer-role">{item.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
