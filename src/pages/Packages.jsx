import packages from '../data/packages'

export default function Packages(){
  return(
    <section className="section">
      <h1 className="title">Tour Packages</h1>

      <div className="grid">
        {packages.map(item=>(
          <div className="card" key={item.id}>
            <img src={item.image} />
            <div className="card-body">
              <h3>{item.title}</h3>
              <p>{item.duration}</p>
              <span>{item.price}</span>

              <ul>
                <li>Hotel Included</li>
                <li>Free Breakfast</li>
                <li>Tour Guide</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="booking-box">
        <h2>Reservation Form</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="date" />

        <select>
          <option>Select Package</option>
          <option>Palawan Tour</option>
          <option>Baguio Tour</option>
          <option>Japan Tour</option>
        </select>

        <input type="file" />
        <textarea placeholder="Special Request"></textarea>

        <button>Submit Reservation</button>
      </div>
    </section>
  )
}