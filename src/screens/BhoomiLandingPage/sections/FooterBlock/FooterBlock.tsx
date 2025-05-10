import { Linkedin, Twitter, Instagram } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const FooterBlock = () => {
  const socialIcons = [
    { Icon: Linkedin, label: "LinkedIn",href:"https://www.linkedin.com/company/meetkats/" },
    { Icon: Instagram, label: "Instagram",href:"https://www.instagram.com/meetkats?igsh=MmlvdXh0Zmp0cGJ6" },
    { Icon: Twitter, label: "Twitter",href:"#" }
  ];

  const contactInfo = [
    { label: "Email", value: "official@meetkats.com" },
    { label: "Phone", value: "555-567-8901" },
    { label: "Address", value: "1234 Main St, Baker City, Xyz State 12345" },
  ];

  const links = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "FAQ", href: "/faq" }
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24">
      <Card className="w-full border-none bg-softgreen rounded-t-3xl shadow-none">
        <CardContent className="p-6 md:p-10 lg:p-12">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {/* Social Media */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-dark-green bg-base-green w-fit px-2 py-1 rounded">
                Connect with us
              </h3>
              <div className="flex items-center space-x-4">
                {socialIcons.map(({ Icon, label,href }) => (
                  <div 
                    key={label}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label={label}
                  >
                    <a href={href} className="flex items-center justify-center" target="_blank" rel="noopener noreferrer">
                    <Icon className="w-4 h-4 text-dark-green" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-dark-green bg-base-green w-fit px-2 py-1 rounded">
                Contact us
              </h3>
              <div className="space-y-3">
                {contactInfo.map(({ label, value }) => (
                  <div key={label} className="text-dark-green">
                    <span className="font-medium">{label}: </span>
                    {value}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-dark-green bg-base-green w-fit px-2 py-1 rounded">
                Quick Links
              </h3>
              <div className="flex flex-col space-y-2">
                {links.map(({ label, href }) => (
                  <a 
                    key={label}
                    href={href}
                    className="text-dark-green hover:underline transition-all"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <Separator className="w-full h-px bg-dark-green/20 mb-6" />
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-dark-green text-sm md:text-base">
              © {new Date().getFullYear()} Meetkats. All Rights Reserved.
            </div>
            
            <div className="flex space-x-4 text-sm md:text-base">
              {links.slice(0, 2).map(({ label, href }) => (
                <a 
                  key={label}
                  href={href}
                  className="text-dark-green hover:underline transition-all"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};