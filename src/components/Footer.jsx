const Footer = () => {
  return (
    <div className="bg-base-200 text-base-content p-10">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-semibold">Gadget Heaven</h1>
        <p >Leading the way in cutting-edge technology and innovation</p>
      </div>
      <div className="divider"></div>
      <footer className="footer p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Career</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};
export default Footer;
