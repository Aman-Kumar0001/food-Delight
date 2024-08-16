import React from 'react';

const Payment = () => {

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.75443564195!2d77.93473316692298!3d30.325402625661248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1722256164997!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col">
          <h2 class="text-center mt-5">Sign In</h2>
          <form>
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="Enter email" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Payment;
