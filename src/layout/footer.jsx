import React from "react";
import logoImage from "../assets/header-logo.png";

const Footer = () => {
  const footerSections = [
    {
      title: "About",
      links: ["About us", "Features", "FAQ's"],
    },
    {
      title: "Policies",
      links: [
        "Privacy Policy",
        "Terms and conditions",
        // "Softfix Store support",
      ],
    },
    {
      title: "Contact Us",
      links: [
        <span>
          <strong>Phone</strong>: +91-8189010042
        </span>,
        <span>
          <strong>Email</strong>: info@softfix.in
        </span>,
        <span>
          <strong>Address</strong>: 4/489 Vibhav khand Gomti nagar, Lucknow UP
          India - 226010
        </span>,
      ],
    },
    // {
    //   title: "Business",
    //   links: [
    //     "Softfix Cloud",
    //     "Softfix Security",
    //     "Dynamics 365",
    //     "Softfix 365",
    //     "Softfix Power Platform",
    //     "Softfix Teams",
    //     "Softfix 365 Copilot",
    //     "Small Business",
    //   ],
    // },
    // {
    //   title: "Developer & IT",
    //   links: [
    //     "Azure",
    //     "Developer Center",
    //     "Documentation",
    //     "Softfix Learn",
    //     "Softfix Tech Community",
    //     "Azure Marketplace",
    //     "AppSource",
    //     "Visual Studio",
    //   ],
    // },
    // {
    //   title: "Company",
    //   links: [
    //     "Careers",
    //     "About Softfix",
    //     "Company news",
    //     "Privacy at Softfix",
    //     "Investors",
    //     "Diversity and inclusion",
    //     "Accessibility",
    //     "Sustainability",
    //   ],
    // },
  ];

  return (
    <footer className="bg-gray-200/70 py-10 ">
      {/* Footer Content */}
      <div className="container mx-auto px-4 view-port">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-1">
          <div className="col-span-2 md:col-span-3">
            <div className="image-container w-52 h-12">
              <img src={logoImage} alt="softfix-logo" />
            </div>
            <div className="desc-text">
              <p className="ext-md">SOFTFIX | Connecting Teams</p>
            </div>
          </div>
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center">
        {/* <div className="flex justify-center items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">🌐</span>
            <select className="bg-gray-100 text-gray-600 border border-gray-300 rounded px-2 py-1 focus:outline-none">
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
          </div>
          <span className="text-blue-600">Your Privacy Choices</span>
        </div> */}

        <p className="text-sm text-gray-500 mt-4">
          Contact us | Privacy | Terms of use | About us | © Softfix 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
