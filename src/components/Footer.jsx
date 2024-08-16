import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer class="footer mt-5 py-3">
                <div class="container text-center text-md-start">
                    <div class="row">
                        <div class="col-md-3 logo-section">
                            <img src="https://i.ytimg.com/vi/E5pPNBkSCIo/sddefault.jpg" alt="" width="200px" height="170px"/>
                            <p>&copy; 2024 Bundl Technologies Pvt. Ltd</p>
                        </div>
                        <div class="col-md-3">
                            <h5>Company</h5>
                            <ul>
                                <li><Link to="#">About</Link></li>
                                <li><Link to="#">Careers</Link></li>
                                <li><Link to="#">Team</Link></li>
                                <li><Link to="#">Food Delight One</Link></li>
                                <li><Link to="#">Food Delight Instamart</Link></li>
                                <li><Link to="#">Food Delight Genie</Link></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <h5>Contact us</h5>
                            <ul>
                                <li><Link to="/help">Help & Support</Link></li>
                                <li><Link to="#">Partner with us</Link></li>
                                <li><Link to="#">Ride with us</Link></li>
                            </ul>
                            <h5 class="mt-4">Legal</h5>
                            <ul>
                                <li><Link to="#">Terms & Conditions</Link></li>
                                <li><Link to="#">Cookie Policy</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                                <li><Link to="#">Investor Relations</Link></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <h5>We deliver to:</h5>
                            <ul>
                                <li><Link to="#">Bangalore</Link></li>
                                <li><Link to="#">Gurgaon</Link></li>
                                <li><Link to="#">Hyderabad</Link></li>
                                <li><Link to="#">Delhi</Link></li>
                                <li><Link to="#">Mumbai</Link></li>
                                <li><Link to="#">Pune</Link></li>
                            </ul>

                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col text-center">
                            <p>&copy; 2024 Food Delight All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default Footer