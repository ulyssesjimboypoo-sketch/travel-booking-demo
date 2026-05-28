export default function Dashboard(){
  return(
    <section className="section">
      <h1 className="title">Admin Dashboard</h1>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Bookings</h3>
          <span>120</span>
        </div>

        <div className="dashboard-card">
          <h3>Total Customers</h3>
          <span>89</span>
        </div>

        <div className="dashboard-card">
          <h3>Total Sales</h3>
          <span>₱250,000</span>
        </div>
      </div>
    </section>
  )
}