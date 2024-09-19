import React from "react";

function Footer() {

    return (
        <footer className="bg-gray-900 text-white py-8 w-full">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1: Logo and Description */}
                    <div className="flex flex-col items-center md:items-start">
                        <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" className="h-10 mb-4" />
                        <h5 className="text-xl font-semibold mb-2">Booking Hotel</h5>
                        <p className="text-gray-400 text-sm">
                            Discover the best places to stay with our curated hotel list. Your perfect stay awaits.
                        </p>
                    </div>

                    {/* Column 2: Company Links */}
                    <div className="flex flex-col space-y-4">
                        <h5 className="text-lg font-semibold mb-2">Company</h5>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-400">Legal</a></li>
                            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="flex flex-col space-y-4">
                        <h5 className="text-lg font-semibold mb-2">Contact Info</h5>
                        <p className="text-gray-400 text-sm mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
                        <p className="text-gray-400 text-sm mb-2"><strong>Email:</strong> info@mywebsite.com</p>
                        <p className="text-gray-400 text-sm mb-4"><strong>Location:</strong> 1234 Street Name, City, State 12345</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12.072c0-5.196-4.201-9.397-9.397-9.397-4.213 0-7.927 2.554-9.246 6.119-0.344 0.759-0.174 1.683 0.448 2.108 0.628 0.404 1.43 0.273 1.818-0.317 0.689-1.328 2.118-2.247 3.977-2.247 2.207 0 4.001 1.793 4.001 4.001 0 2.207-1.794 4.001-4.001 4.001-1.442 0-2.689-0.679-3.45-1.732-0.545-0.572-1.449-0.72-2.141-0.379-0.788 0.34-1.04 1.158-0.73 1.865 1.327 2.469 4.074 4.262 7.244 4.262 5.196 0 9.397-4.201 9.397-9.397z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.07 17.576l-2.86-1.573c-0.095-0.053-0.203-0.085-0.314-0.085s-0.219 0.032-0.314 0.085l-2.86 1.573v-6.829l2.86-1.573c0.095-0.053 0.203-0.085 0.314-0.085s0.219 0.032 0.314 0.085l2.86 1.573v6.829z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 3h-16c-1.104 0-2 0.896-2 2v14c0 1.104 0.896 2 2 2h16c1.104 0 2-0.896 2-2v-14c0-1.104-0.896-2-2-2zm-2 16h-12v-6h12v6zm0-8h-12v-6h12v6z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="border-t border-gray-700" />
                <div className="bg-gray-900 text-center text-gray-400 text-sm py-4">
                    &copy; 2024 My Website. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
