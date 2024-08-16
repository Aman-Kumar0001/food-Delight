import React from 'react'

const Search = () => {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col d-flex justify-content-center gap-2 text-center">
            <input type="search" placeholder='Search' style={{width:"300px"}}/>
            <div className="btn btn-outline-success">Search</div>

          </div>
        </div>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 mt-3 text-center d-flex gap-0 justify-content-center mb-4">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" alt="Pizzas" className="img-fluid rounded-circle mb-2" width="100px" height="100px" />
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png" alt="North Indian" className="img-fluid rounded-circle mb-2" width="100px" height="100px" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav%20Bhaji.png" alt="Pav Bhaji" className="img-fluid rounded-circle mb-2" width="100px" height="100px" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png" alt="Biryani" className="img-fluid rounded-circle mb-2" width="100px" height="100px" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png" alt="Burgers" className="img-fluid rounded-circle mb-2" width="100px" height="100px" />

          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png" alt="Dosa" className="img-fluid rounded-circle mb-2" width="100px" height="100px" />

        </div>

      </div>
    </>
  )
}

export default Search