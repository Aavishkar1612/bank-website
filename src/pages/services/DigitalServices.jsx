import PageBanner from "../../components/common/PageBanner";
import Breadcrumb from "../../components/common/Breadcrumb";
import "./services.css";

export default function DigitalServices() {
  return (
    <div>
      <PageBanner title="Digital Banking" />

      <div className="container">
        <Breadcrumb page="Digital Banking" />
      </div>

      <section className="service-detail container">
        <h2>Smart Digital Banking</h2>

        <p>
          Experience the future of banking with AB Fintech’s digital services.
          Manage accounts, transfer funds, pay bills, and access services
          anytime, anywhere.
        </p>

        <h3>Services Included</h3>
        <ul>
          <li>Internet Banking</li>
          <li>Mobile Banking App</li>
          <li>UPI Transfers</li>
          <li>Bill Payments & Recharge</li>
          <li>Secure online transactions</li>
        </ul>

        <h3>Why Digital?</h3>
        <p>
          Save time and enjoy secure, instant banking without visiting a branch.
        </p>

        <button className="apply-btn">Activate Now</button>
      </section>
    </div>
  );
}
