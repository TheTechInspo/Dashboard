import React from "react";
import { Link } from "react-router-dom";
import {
  Twitter,
  Github,
  Linkedin,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center space-x- group">
              <img
                src="/Logo.png"
                alt="Logo"
                className="h-16 w-56 object-contain"
              />
            </Link>

            <p className="text-gray-400 mb-6 max-w-md">
              Build stunning websites with AI prompts, not code. Perfect for
              startups, creators, and freelancers ready to launch fast.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/ThetechinspoPvt"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.quora.com/profile/TheTechInspo-PVT-Ltd"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@TheTechInspoPVTLtd"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/thetechinspo-pvt-ltd/"
                className="text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@thetechinspo.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+94 76 542 9831</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5" />
                <span>No. 102 Gregory’s Road, Colombo 00700, Sri Lanka</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/demo"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025{" "}
            <a
              href="https://thetechinspo.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ac20cf" }}
            >
              TheTechInspo
            </a>
            . All rights reserved. Built with AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
