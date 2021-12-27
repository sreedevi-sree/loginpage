import "./index.css";
export default function App() {
  const pricingtable = [
    {
      name: "FREE",
      amount: "$0/month",
      users: "Single Users",
      data: "5GB Storage",
      publicproject: "Unlimited Public Projects",
      access: "Community Access",
      privateproject: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      subdomain: " Free Subdomains",
      report: "Monthly Status Reports",
      submit: "Button"
    },
    {
      name: "PLUS",
      amount: "$9/month",
      users: "5 Users",
      data: "50GB Storage",
      publicproject: "Unlimited Public Projects",
      access: "Community Access",
      privateproject: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      subdomain: " Free Subdomains",
      report: "Monthly Status Reports",
      submit: "Button"
    },
    {
      name: "PRO",
      amount: "$49/month",
      users: "Unlimited Users",
      data: "150GB Storage",
      publicproject: "Unlimited Public Projects",
      access: "Community Access",
      privateproject: "Unlimited Private Projects",
      phone: "Dedicated Phone Support",
      subdomain: "Unlimited Free Subdomains",
      report: "Monthly Status Reports",
      submit: "Button"
    }
  ];
  return (
    <div className="App">
      {pricingtable.map((pricingtable) => (
        <Welcome
          name={pricingtable.name}
          amount={pricingtable.amount}
          users={pricingtable.users}
          data={pricingtable.data}
          publicproject={pricingtable.publicproject}
          access={pricingtable.access}
          privateproject={pricingtable.privateproject}
          phone={pricingtable.phone}
          subdomain={pricingtable.subdomain}
          report={pricingtable.report}
          submit={pricingtable.submit}
        />
      ))}
    </div>
  );
}
function Welcome({
  name,
  amount,
  users,
  data,
  publicproject,
  access,
  privateproject,
  phone,
  subdomain,
  report,
  submit
}) {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h1 className="card-title text-muted text-uppercase text-center">
                  {name}
                </h1>
                <h2 className="card-price text-center">
                  <span className="period">{amount}</span>
                </h2>
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {users}
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {data}
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {publicproject}
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {access}
                  </li>
                  <li className="text-muted">
                    <span className="fa-li">
                      <i className="fas fa-times"></i>
                    </span>
                    {privateproject}
                  </li>
                  <li className="text-muted">
                    <span className="fa-li">
                      <i className="fas fa-times"></i>
                    </span>
                    {phone}
                  </li>
                  <li className="text-muted">
                    <span className="fa-li">
                      <i className="fas fa-times"></i>
                    </span>
                    {subdomain}
                  </li>
                  <li className="text-muted">
                    <span className="fa-li">
                      <i className="fas fa-times"></i>
                    </span>
                    {report}
                  </li>
                </ul>
                <div className="d-grid">
                  <button className="btn btn-primary text-uppercase">
                    {submit}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );}
