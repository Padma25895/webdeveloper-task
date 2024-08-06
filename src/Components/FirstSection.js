import React from "react";

const FirstSection = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-8">
          <div className="row">
            <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="icon icon-box-success ">
                        <span className="fa fa-shopping-basket icon-item"></span>
                      </div>
                      <h6 className="text-muted mt15 font-weight-normal">
                        Total Orders
                      </h6>
                      <div className="iconrt">
                        <h3 className="mb-0">45</h3>
                        <p className="text-success ml-2 mb-0 font-weight-medium">
                          <span className="fa fa-caret-up"></span> 3.5%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="icon icon-box-success ">
                        <span className="fa fa-shopping-bag icon-item"></span>
                      </div>
                      <h6 className="text-muted mt15 font-weight-normal">
                        Total Delivered
                      </h6>
                      <div className="iconrt">
                        <h3 className="mb-0">45</h3>
                        <p className="text-success ml-2 mb-0 font-weight-medium">
                          <span className="fa fa-caret-up"></span> 3.5%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="icon icon-box-danger">
                        <span className="mdi mdi-cart-remove icon-item"></span>
                      </div>
                      <h6 className="text-muted mt15 font-weight-normal">
                        Total Cancelled
                      </h6>
                      <div className="d-flex align-items-center align-self-start">
                        <h3 className="mb-0">55</h3>
                        <p className="text-danger ml-2 mb-0 font-weight-medium">
                          <span className="fa fa-caret-down"></span> 2.4%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="icon icon-box-success ">
                        <span className="mdi mdi-currency-usd icon-item"></span>
                      </div>
                      <h6 className="text-muted mt15 font-weight-normal">
                        Total Revenue
                      </h6>
                      <div className="iconrt">
                        <h3 className="mb-0">45</h3>
                        <p className="text-success ml-2 mb-0 font-weight-medium">
                          <span className="fa fa-caret-up"></span> 3.5%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body headbt">
              <h6>Net Profit</h6>
              <div className="row">
                <div className="col-6 col-sm-6 col-xl-6 ">
                  <div className="d-flex d-sm-block netpro d-md-flex align-items-center">
                    <h2 className="mb-0">$321</h2>
                  </div>
                  <p className="text-success mt10 ml-2 mb-0  font-weight-medium">
                    <span className="fa fa-sort-desc"></span> 3.5%
                  </p>
                </div>
                <div className="col-6 col-sm-6 col-xl-6 text-center provalue">
                  <img
                    src="assets/images/progress.png"
                    className="img-fluid mb-10"
                    alt=""
                  />
                  <p>The value here has been rounded off</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
