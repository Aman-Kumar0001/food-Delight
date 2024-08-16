import React from 'react'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <div className="container mt-5 pt-5">
                <h2 className="text-center mb-4">What's on your mind?</h2>
                <div className="row row-cols-lg-7 ">
                    <div className="text-center d-flex gap-0 gap-lg-3 flex-wrap justify-content-center mb-4">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" alt="Pizzas" className="img-fluid rounded-circle mb-2" width="100px" height="100px" />
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png" alt="North Indian" className="img-fluid rounded-circle mb-2" width="100px" height="100px" />

                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav%20Bhaji.png" alt="Pav Bhaji" className="img-fluid rounded-circle mb-2" width="100px" height="100px" />

                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png" alt="Biryani" className="img-fluid rounded-circle mb-2" width="100px" height="100px" />

                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png" alt="Burgers" className="img-fluid rounded-circle mb-2" width="100px" height="100px" />

                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png" alt="Dosa" className="img-fluid rounded-circle mb-2" width="100px" height="100px" />

                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png" alt="Shake" className="img-fluid rounded-circle mb-2" width="100px" height="100px" />
                    </div>
                </div>
            </div>



            <div class="container mt-5">
                <h2>Top restaurant chains in Dehradun</h2>
                <div id="restaurantCarousel" class="carousel slide mt-3" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row  row-cols-md-2 row-cols-lg-4">
                                <div class="col">
                                    <div class="card">
                                        <img src="https://breathedreamgo.com/wp-content/uploads/2020/03/SS-dosa.jpg" class="card-img" alt="La Pino'z Pizza" style={{ width: "300px", height: "220px" }} />
                                        <div class="card-img-overlay">
                                            <h5 class="card-title text-danger">60% OFF UPTO ₹120</h5>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">La Pino'z Pizza</h5>
                                            <p class="card-text">⭐ 4.2 • 30-35 mins</p>
                                            <p class="card-text">Pizzas, Pastas, Italian, Desserts</p>
                                            <div className="btn btn-outline-success">ADD</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <img src="https://www.chefspencil.com/wp-content/uploads/Dahi-Puri.jpg" class="card-img" alt="The Belgian Waffle Co." style={{ width: "300px", height: "220px" }} />
                                        <div class="card-img-overlay">
                                            <h5 class="card-title text-danger">20% OFF UPTO ₹50</h5>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">The Belgian Waffle Co.</h5>
                                            <p class="card-text">⭐ 4.6 • 25-30 mins</p>
                                            <p class="card-text">Waffle, Desserts, Ice Cream</p>
                                            <button className="btn btn-outline-success">ADD</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chole_Bhature_At_Local_Street.jpg/1200px-Chole_Bhature_At_Local_Street.jpg" class="card-img" alt="UBQ by Barbeque Nation" style={{ width: "300px", height: "220px" }} />
                                        <div class="card-img-overlay">
                                            <h5 class="card-title text-danger">ITEMS AT ₹199</h5>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">UBQ by Barbeque Nation</h5>
                                            <p class="card-text">⭐ 4.1 • 25-30 mins</p>
                                            <p class="card-text">North Indian, Barbecue, Biryani</p>
                                            <button className="btn btn-outline-success">ADD</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <img src="https://www.thespruceeats.com/thmb/hqqNrNhIpqPqV2u0T0K-IUzUsEo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-cuisine-of-north-india-1957883-d32a933f506d43f59ac38a8eb956884a.jpg" class="card-img" alt="Uss Da Dhaba" style={{ width: "300px", height: "220px" }} />
                                        <div class="card-img-overlay">
                                            <h5 class="card-title text-danger">₹125 OFF ABOVE ₹249</h5>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Uss Da Dhaba</h5>
                                            <p class="card-text">⭐ 4.1 • 20-25 mins</p>
                                            <p class="card-text">North Indian, Chinese, Continental</p>
                                            <button className="btn btn-outline-success">ADD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#restaurantCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#restaurantCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            <div class="container mt-5">
                <h2>Restaurant with online delivery in Dehradun</h2>
                <div class="filters d-flex flex-wrap gap-1 gap-lg-2 justify-content-center ">
                    <button class="btn btn-outline-secondary">Filter</button>
                    <button class="btn btn-outline-secondary">Sort By</button>
                    <button class="btn btn-outline-secondary">Fast Delivery</button>
                    <button class="btn btn-outline-secondary">New on Swiggy</button>
                    <button class="btn btn-outline-secondary">Ratings 4.0+</button>
                    <button class="btn btn-outline-secondary">Pure Veg</button>
                    <button class="btn btn-outline-secondary">Offers</button>
                    <button class="btn btn-outline-secondary">Rs. 300-Rs. 600</button>
                    <button class="btn btn-outline-secondary">Less than Rs. 300</button>
                </div>

                <div class="row row-cols-1  row-cols-md-2 row-cols-lg-4 mt-3">
                    <div class="col">
                        <div class="card">
                            <img src="https://www.blissofcooking.com/wp-content/uploads/2022/02/Gajar-Ka-Halwa-Feature.jpg?v=1644818147" class="card-img" alt="The Belgian Waffle Co." style={{ width: "300px", height: "220px" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title text-danger">20% OFF UPTO ₹50</h5>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">The Belgian Waffle Co.</h5>
                                <p class="card-text">⭐ 4.6 • 25-30 mins</p>
                                <p class="card-text">Waffle, Desserts, Ice Cream, Chukkuwala</p>
                                <div className="btn btn-outline-success">ADD</div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://content.jdmagicbox.com/comp/dehradun/a8/9999px135.x135.220923085527.g9a8/catalogue/kireeth-hospatality-services-dehradun-city-dehradun-tiffin-services-rp0acvn94r-250.jpg" class="card-img" alt="La Pino'z Pizza" style={{ width: "300px", height: "220px" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title text-danger">60% OFF UPTO ₹120</h5>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">La Pino'z Pizza</h5>
                                <p class="card-text">20-25 mins</p>
                                <p class="card-text">Pizzas, Pastas, Italian, Desserts, Clock Tower</p>
                                <div className="btn btn-outline-success">ADD</div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://www.holidify.com/images/cmsuploads/compressed/IndianStreetFood_20190103005627.jpg" class="card-img" alt="UBQ by Barbeque Nation" style={{ width: "300px", height: "220px" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title text-danger">ITEMS AT ₹199</h5>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">UBQ by Barbeque Nation</h5>
                                <p class="card-text">⭐ 4.1 • 25-30 mins</p>
                                <p class="card-text">North Indian, Barbecue, Biryani, GMS Road</p>
                                <div className="btn btn-outline-success">ADD</div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://sandinmysuitcase.com/wp-content/uploads/2021/01/Gulab-Jamun-Indian-Dessert.jpg.webp" class="card-img" alt="Uss Da Dhaba" style={{ width: "300px", height: "220px" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title text-danger">₹125 OFF ABOVE ₹249</h5>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Uss Da Dhaba</h5>
                                <p class="card-text">⭐ 4.1 • 20-25 mins</p>
                                <p class="card-text">North Indian, Chinese, Continental, Race Course</p>
                                <div className="btn btn-outline-success">ADD</div>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-1  row-cols-md-2 row-cols-lg-4 mt-3">
                    <div class="col">
                        <div class="card">
                            <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Halwa.jpg" class="card-img" alt="The Belgian Waffle Co." style={{ width: "300px", height: "220px" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title text-danger">20% OFF UPTO ₹50</h5>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Halwa</h5>
                                <p class="card-text">⭐ 4.6 • 25-30 mins</p>
                                <p class="card-text">Waffle, Desserts, Ice Cream, Chukkuwala</p>
                                <div className="btn btn-outline-success">ADD</div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Idli-Sambhar.jpg" class="card-img" alt="La Pino'z Pizza" style={{ width: "300px", height: "220px" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title text-danger">60% OFF UPTO ₹120</h5>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Idlli sambhar</h5>
                                <p class="card-text">20-25 mins</p>
                                <p class="card-text">Pizzas, Pastas, Italian, Desserts, Clock Tower</p>
                                <div className="btn btn-outline-success">ADD</div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Kachori.jpg" class="card-img" alt="UBQ by Barbeque Nation" style={{ width: "300px", height: "220px" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title text-danger">ITEMS AT ₹199</h5>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Jalebi</h5>
                                <p class="card-text">⭐ 4.1 • 25-30 mins</p>
                                <p class="card-text">North Indian, Barbecue, Biryani, GMS Road</p>
                                <div className="btn btn-outline-success">ADD</div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Lachha-Tokri.jpg" class="card-img" alt="Uss Da Dhaba" style={{ width: "300px", height: "220px" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title text-danger">₹125 OFF ABOVE ₹249</h5>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Lachha Tokri</h5>
                                <p class="card-text">⭐ 4.1 • 20-25 mins</p>
                                <p class="card-text">North Indian, Chinese, Continental, Race Course</p>
                                <div className="btn btn-outline-success">ADD</div>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-1  row-cols-md-2 row-cols-lg-4 mt-3">
                    <div class="col">
                        <div class="card">
                            <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Mushroom-Matar.jpg" class="card-img" alt="The Belgian Waffle Co." style={{ width: "300px", height: "220px" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title text-danger">20% OFF UPTO ₹50</h5>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Mashroom Matar</h5>
                                <p class="card-text">⭐ 4.6 • 25-30 mins</p>
                                <p class="card-text">Waffle, Desserts, Ice Cream, Chukkuwala</p>
                                <div className="btn btn-outline-success">ADD</div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Navratan-Korma.jpg" class="card-img" alt="La Pino'z Pizza" style={{ width: "300px", height: "220px" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title text-danger">60% OFF UPTO ₹120</h5>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Navratan corma</h5>
                                <p class="card-text">20-25 mins</p>
                                <p class="card-text">Pizzas, Pastas, Italian, Desserts, Clock Tower</p>
                                <div className="btn btn-outline-success">ADD</div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Obbattu.jpg" class="card-img" alt="UBQ by Barbeque Nation" style={{ width: "300px", height: "220px" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title text-danger">ITEMS AT ₹199</h5>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Obbattu</h5>
                                <p class="card-text">⭐ 4.1 • 25-30 mins</p>
                                <p class="card-text">North Indian, Barbecue, Biryani, GMS Road</p>
                                <div className="btn btn-outline-success">ADD</div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Quinoa-Pulao.jpg" class="card-img" alt="Uss Da Dhaba" style={{ width: "300px", height: "220px" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title text-danger">₹125 OFF ABOVE ₹249</h5>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">paneer</h5>
                                <p class="card-text">⭐ 4.1 • 20-25 mins</p>
                                <p class="card-text">North Indian, Chinese, Continental, Race Course</p>
                                <div className="btn btn-outline-success">ADD</div>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="row row-cols-1  row-cols-md-2 row-cols-lg-4 mt-3">
                    <div class="col">
                        <div class="card">
                            <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Rajma.jpg" class="card-img" alt="The Belgian Waffle Co." style={{ width: "300px", height: "220px" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title text-danger">20% OFF UPTO ₹50</h5>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Rajma</h5>
                                <p class="card-text">⭐ 4.6 • 25-30 mins</p>
                                <p class="card-text">Waffle, Desserts, Ice Cream, Chukkuwala</p>
                                <div className="btn btn-outline-success">ADD</div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Samosa-1.jpg" class="card-img" alt="La Pino'z Pizza" style={{ width: "300px", height: "220px" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title text-danger">60% OFF UPTO ₹120</h5>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Samosa</h5>
                                <p class="card-text">20-25 mins</p>
                                <p class="card-text">Pizzas, Pastas, Italian, Desserts, Clock Tower</p>
                                <div className="btn btn-outline-success">ADD</div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Vada-Pav.jpg" class="card-img" alt="UBQ by Barbeque Nation" style={{ width: "300px", height: "220px" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title text-danger">ITEMS AT ₹199</h5>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Vada pav</h5>
                                <p class="card-text">⭐ 4.1 • 25-30 mins</p>
                                <p class="card-text">South Indian, Barbecue, Biryani, GMS Road</p>
                                <div className="btn btn-outline-success">ADD</div>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Zarda.jpg" class="card-img" alt="Uss Da Dhaba" style={{ width: "300px", height: "220px" }} />
                            <div class="card-img-overlay">
                                <h5 class="card-title text-danger">₹125 OFF ABOVE ₹249</h5>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Zarda</h5>
                                <p class="card-text">⭐ 4.0 • 20-25 mins</p>
                                <p class="card-text">North Indian, Chinese, Continental, Race Course</p>
                                <button className="btn btn-outline-success">ADD</button>
                                </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home