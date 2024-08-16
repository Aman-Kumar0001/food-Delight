import React from 'react'

const Offer = () => {
    return (
        <>

            <div className="container mt-5 pt-5">
                <h2>Restaurants With Great Offers Near Me</h2>

                <div className="d-flex flex-wrap gap-2 mb-4">
                    <button className="btn btn-outline-secondary">
                        <span className="badge bg-danger">1</span> Filter
                    </button>
                    <button className="btn btn-outline-secondary">Sort By</button>
                    <button className="btn btn-secondary">Offers</button>
                    <button className="btn btn-outline-secondary">Fast Delivery</button>
                    <button className="btn btn-outline-secondary">New on Swiggy</button>
                    <button className="btn btn-outline-secondary">Ratings 4.0+</button>
                    <button className="btn btn-outline-secondary">Pure Veg</button>
                    <button className="btn btn-outline-secondary">Rs. 300-Rs. 600</button>
                    <button className="btn btn-outline-secondary">Less than Rs. 300</button>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    <div className="col">
                        <div className="card h-100 restaurant-card">
                            <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Zarda.jpg" className="card-img-top" alt="The Belgian Waffle Co." />
                            <div className="offer-badge">20% OFF UPTO ₹50</div>
                            <div className="card-body">
                                <h5 className="card-title">The Belgian Waffle Co.</h5>
                                <p className="card-text">
                                    <span className="badge bg-success">4.6</span> 25-30 mins<br />
                                    Waffle, Desserts, Ice Cream<br />
                                    Chukkuwala
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="position-relative">
                                <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Vada-Pav.jpg" className="card-img-top" alt="Restaurant food" />
                                <div className="position-absolute top-0 start-0 m-3 p-2 bg-dark text-white rounded">
                                    50% OFF UPTO ₹100
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Gaylord Express</h5>
                                <p className="card-text">
                                    <span className="badge bg-success">3.8</span>
                                    <span className="ms-2">20-25 mins</span>
                                </p>
                                <p className="card-text text-muted">Bakery, Chinese, North Indian,...</p>
                                <p className="card-text text-muted">Paltan Bazaar</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 restaurant-card">
                            <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Rajma.jpg" className="card-img-top" alt="The Belgian Waffle Co." />
                            <div className="offer-badge">20% OFF UPTO ₹50</div>
                            <div className="card-body">
                                <h5 className="card-title">Rajma</h5>
                                <p className="card-text">
                                    <span className="badge bg-success">4.4</span> 25-30 mins<br />
                                   Breakfast , lunch , Dinner ...<br />
                                    Chukkuwala
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="position-relative">
                                <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Samosa-1.jpg" className="card-img-top" alt="Restaurant food" />
                                <div className="position-absolute top-0 start-0 m-3 p-2 bg-dark text-white rounded">
                                    50% OFF UPTO ₹100
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Samosa</h5>
                                <p className="card-text">
                                    <span className="badge bg-success">4.8</span>
                                    <span className="ms-2">20-25 mins</span>
                                </p>
                                <p className="card-text text-muted">North Indian,...</p>
                                <p className="card-text text-muted">Paltan Bazaar</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    <div className="col">
                        <div className="card h-100 restaurant-card">
                            <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Obbattu.jpg" className="card-img-top" alt="The Belgian Waffle Co." />
                            <div className="offer-badge">20% OFF UPTO ₹50</div>
                            <div className="card-body">
                                <h5 className="card-title">Obbattu</h5>
                                <p className="card-text">
                                    <span className="badge bg-success">4.6</span> 25-30 mins<br />
                                    Waffle, Desserts, Ice Cream<br />
                                    Chukkuwala
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="position-relative">
                                <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Paneer-Do-Pyaza.jpg" className="card-img-top" alt="Restaurant food" />
                                <div className="position-absolute top-0 start-0 m-3 p-2 bg-dark text-white rounded">
                                    50% OFF UPTO ₹100
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">paneer</h5>
                                <p className="card-text">
                                    <span className="badge bg-success">3.8</span>
                                    <span className="ms-2">20-25 mins</span>
                                </p>
                                <p className="card-text text-muted">Bakery, Chinese, North Indian,...</p>
                                <p className="card-text text-muted">Paltan Bazaar</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 restaurant-card">
                            <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Rajma.jpg" className="card-img-top" alt="The Belgian Waffle Co." />
                            <div className="offer-badge">20% OFF UPTO ₹50</div>
                            <div className="card-body">
                                <h5 className="card-title">Rajma</h5>
                                <p className="card-text">
                                    <span className="badge bg-success">4.4</span> 25-30 mins<br />
                                   Breakfast , lunch , Dinner ...<br />
                                    Chukkuwala
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="position-relative">
                                <img src="https://www.bitesbee.com/wp-content/uploads/2021/09/Samosa-1.jpg" className="card-img-top" alt="Restaurant food" />
                                <div className="position-absolute top-0 start-0 m-3 p-2 bg-dark text-white rounded">
                                    50% OFF UPTO ₹100
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Samosa</h5>
                                <p className="card-text">
                                    <span className="badge bg-success">4.8</span>
                                    <span className="ms-2">20-25 mins</span>
                                </p>
                                <p className="card-text text-muted">North Indian,...</p>
                                <p className="card-text text-muted">Paltan Bazaar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Offer