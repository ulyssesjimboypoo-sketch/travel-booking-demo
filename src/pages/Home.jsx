import packages from '../data/packages'

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">

          <div className="hero-content">
            <span className="hero-badge">
              Luxury Travel Experience
            </span>

            <h1>
              Discover The World <br />
              In Luxury Style
            </h1>

            <p>
              Experience unforgettable destinations with premium
              travel packages, exclusive tours, and world-class
              booking services.
            </p>

            {/* BOOKING SEARCH */}
            <div className="booking-search">

              <div className="search-box">
                <label>Destination</label>
                <input
                  type="text"
                  placeholder="Where to?"
                />
              </div>

              <div className="search-box">
                <label>Check In</label>
                <input type="date" />
              </div>

              <div className="search-box">
                <label>Travelers</label>
                <select>
                  <option>1 Traveler</option>
                  <option>2 Travelers</option>
                  <option>3 Travelers</option>
                  <option>4+ Travelers</option>
                </select>
              </div>

              <button className="search-btn">
                Search Tours
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="section luxury-section">
        <div className="section-header">
          <span className="section-tag">
            Popular Destinations
          </span>

          <h2 className="title">
            Explore Our Premium Tours
          </h2>

          <p className="section-text">
            Handpicked travel experiences designed for comfort,
            adventure, and unforgettable memories.
          </p>
        </div>

        <div className="luxury-grid">
          {packages.map((item) => (
            <div
              className="luxury-card"
              key={item.id}
            >
              <div className="card-image">
                <img src={item.image} />

                <div className="price-badge">
                  {item.price}
                </div>
              </div>

              <div className="luxury-card-body">

                <div className="card-top">
                  <span className="rating">
                    ⭐ 4.9 Rating
                  </span>

                  <span className="duration">
                    {item.duration}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p>
                  Enjoy breathtaking views, luxury hotels,
                  guided tours, and unforgettable experiences.
                </p>

                <div className="card-footer">
                  <button className="primary-btn">
                    Book Now
                  </button>

                  <button className="secondary-btn">
                    Details
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">

        <div className="why-header">
          <span className="section-tag">
            Why Choose Us
          </span>

          <h2>
            Your Trusted Luxury <br />
            Travel Partner
          </h2>
        </div>

        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">
              ✈️
            </div>

            <h3>Premium Tours</h3>

            <p>
              Carefully crafted local and international
              travel experiences.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              🏨
            </div>

            <h3>Luxury Accommodation</h3>

            <p>
              Stay in high-quality hotels and resorts
              with premium amenities.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              💳
            </div>

            <h3>Easy Booking</h3>

            <p>
              Fast reservation system with payment
              upload and inquiry support.
            </p>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonial-section">

        <div className="section-header">
          <span className="section-tag">
            Testimonials
          </span>

          <h2 className="title">
            What Our Travelers Say
          </h2>
        </div>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <p>
              “The best travel experience we ever had.
              Everything was smooth and luxurious.”
            </p>

            <h4>— Maria Santos</h4>
          </div>

          <div className="testimonial-card">
            <p>
              “Highly recommended for family vacations
              and international tours.”
            </p>

            <h4>— John Cruz</h4>
          </div>

          <div className="testimonial-card">
            <p>
              “Professional service and beautiful travel
              packages. Worth every peso.”
            </p>

            <h4>— Angela Reyes</h4>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section">

        <div className="cta-content">
          <h2>
            Start Your Dream Vacation Today
          </h2>

          <p>
            Book your next luxury adventure with us
            and create unforgettable memories.
          </p>

          <button className="primary-btn large-btn">
            Book Your Trip
          </button>
        </div>

      </section>
    </>
  )
}