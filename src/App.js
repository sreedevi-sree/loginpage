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
          <section className="pricing py-5">

            <div className="container">

              <div className="row">
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
    </div>
    </section>
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
    <div className="col-lg-4 height:100%" >
            <div className="card ">
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
                      <i className="fa fa-check"></i>
                    </span>
                    {users}
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa fa-check"></i>
                    </span>
                    {data}
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa fa-check"></i>
                    </span>
                    {publicproject}
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa fa-check"></i>
                    </span>
                    {access}
                  </li>
                  {name==="FREE"?
                  <li className="text-muted">
                    <span className="fa-li">
                      <i className="fa fa-close"></i>
                    </span>
                    {privateproject}
                  </li>:<li>
                    <span className="fa-li">
                      <i className="fa fa-check"></i>
                    </span>
                    {privateproject}
                  </li>}
                  {name==="FREE"?
                  <li className="text-muted">
                    <span className="fa-li">
                      <i className="fa fa-close"></i>
                    </span>
                    {phone}
                  </li>: <li >
                    <span className="fa-li">
                      <i className="fa fa-check"></i>
                    </span>
                    {phone}
                  </li>}
                  {name==="FREE"?
                  <li className="text-muted">
                    <span className="fa-li">
                      <i className="fa fa-close"></i>
                    </span>
                    {subdomain}
                  </li>:<li >
                    <span className="fa-li">
                      <i className="fa fa-check"></i>
                    </span>
                    {subdomain}
                  </li>}
                  {name==="PRO"?
                  <li >
                    <span className="fa-li">
                      <i className="fa fa-check"></i>
                    </span>
                    {report}
                  </li>:<li className="text-muted">
                    <span className="fa-li">
                      <i className="fa fa-close"></i>
                    </span>
                    {report}
                  </li>}
                  
                </ul>
                <div className="d-grid">
                  <button className="btn btn-primary text-uppercase">
                    {submit}
                  </button>
                </div>
              </div>
            </div>
            </div>
    
    
  );}
