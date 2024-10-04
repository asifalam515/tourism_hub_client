import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <a className="link link-hover">
            <FaFacebookF />
          </a>
          <a className="link link-hover">
            <FaTwitter />
          </a>
          <a className="link link-hover">
            <CiInstagram />
          </a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-full md:w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="flex flex-col md:flex-row">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered mb-2 md:mb-0 md:mr-2 flex-grow"
              />
              <button className="btn btn-primary w-full md:w-auto">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
