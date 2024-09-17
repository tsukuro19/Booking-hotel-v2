import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 w-full">
            <div className="container mx-auto px-6 md:px-12">
                {/* Grid layout for footer columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: Logo and Description */}
                    <div className="flex flex-col items-center md:items-start">
                        <img src="https://flowbite.com/docs/images/logo.svg" alt="Company Logo" className="h-10 mb-4" />
                        <p className="text-gray-400 text-sm">
                            Discover the best places to stay with our curated hotel list. Your perfect stay awaits.
                        </p>
                    </div>

                    {/* Column 2: Company Links */}
                    <div className="flex flex-col space-y-4">
                        <h5 className="text-lg font-semibold mb-2">Company</h5>
                        <ul className="space-y-2 text-sm">
                            {['About Us', 'Legal Information', 'Contact Us', 'Blogs'].map((link, index) => (
                                <li key={index}><a href="#" className="hover:text-blue-400">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Help Center */}
                    <div className="flex flex-col space-y-4">
                        <h5 className="text-lg font-semibold mb-2">Help Center</h5>
                        <ul className="space-y-2 text-sm">
                            {['Find a Property', 'Why Us', 'FAQs', 'Rental Guides'].map((link, index) => (
                                <li key={index}><a href="#" className="hover:text-blue-400">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="flex flex-col space-y-4">
                        <h5 className="text-lg font-semibold mb-2">Contact Info</h5>
                        <p className="text-gray-400 text-sm mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
                        <p className="text-gray-400 text-sm mb-2"><strong>Email:</strong> info@mywebsite.com</p>
                        <p className="text-gray-400 text-sm mb-4"><strong>Location:</strong> 1234 Street Name, City, State 12345</p>
                        <div className="flex space-x-4">
                            {['globe', 'play-circle', 'tv'].map((icon, index) => (
                                <a href="#" key={index} className="text-gray-400 hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        {/* SVG path for each icon */}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <hr className="border-t border-gray-700 my-4" />
                <div className="text-center text-gray-400 text-sm py-4">
                    &copy; 2024 My Website. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
