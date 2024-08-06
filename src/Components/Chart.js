import React from "react";

const Chart = () => {
  return (
    <div>
      <div className="row charttop">
        <div className="col-md-8 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <figure id="bar-chart">
                <div class="row bars">
                  <div class="y-axis">
                    <div class="segment">
                      <span class="label">15k</span>
                    </div>
                    <div class="segment">
                      <span class="label">10k</span>
                    </div>
                    <div class="segment">
                      <span class="label">5k</span>
                    </div>
                    <div class="segment">
                      <span class="label">0</span>
                    </div>
                  </div>
                  <div class="x-axis">
                    <div class="year wrap">
                      <div class="col">
                        <span class="bar"></span>
                        <span class="bar"></span>
                      </div>
                      <span class="label">5</span>
                    </div>
                    <div class="year wrap">
                      <div class="col">
                        <span class="bar"></span>
                        <span class="bar"></span>
                      </div>
                      <span class="label">9</span>
                    </div>
                    <div class="year wrap">
                      <div class="col">
                        <span class="bar"></span>
                        <span class="bar"></span>
                      </div>
                      <span class="label">11</span>
                    </div>
                    <div class="year wrap">
                      <div class="col">
                        <span class="bar"></span>
                        <span class="bar"></span>
                      </div>
                      <span class="label">13</span>
                    </div>
                    <div class="year wrap">
                      <div class="col">
                        <span class="bar"></span>
                        <span class="bar"></span>
                      </div>
                      <span class="label">15</span>
                    </div>
                    <div class="year wrap">
                      <div class="col">
                        <span class="bar"></span>
                        <span class="bar"></span>
                      </div>
                      <span class="label">17</span>
                    </div>
                    <div class="year wrap">
                      <div class="col">
                        <span class="bar"></span>
                        <span class="bar"></span>
                      </div>
                      <span class="label">19</span>
                    </div>
                    <div class="year wrap">
                      <div class="col">
                        <span class="bar"></span>
                        <span class="bar"></span>
                      </div>
                      <span class="label">21</span>
                    </div>
                    <div class="year wrap">
                      <div class="col">
                        <span class="bar"></span>
                        <span class="bar"></span>
                      </div>
                      <span class="label">23</span>
                    </div>
                    <div class="year wrap">
                      <div class="col">
                        <span class="bar"></span>
                        <span class="bar"></span>
                      </div>
                      <span class="label">25</span>
                    </div>
                    <div class="year wrap">
                      <div class="col">
                        <span class="bar"></span>
                        <span class="bar"></span>
                      </div>
                      <span class="label">27</span>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
        <div className="col-md-4 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="preview-list">
                    <div className="preview-item  align-items-center">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-primary1">
                          <i className="fa fa-crosshairs "></i>
                        </div>
                      </div>
                      <div className="preview-item-content d-sm-flex flex-grow">
                        <div className="flex-grow">
                          <h6 className="preview-subject">Goals</h6>
                        </div>
                      </div>
                      <div className="arrowright">
                        <i className="mdi mdi-chevron-right-circle-outline">
                          {" "}
                        </i>
                      </div>
                    </div>
                    <div className="preview-item  align-items-center">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-primary2">
                          <i className="mdi mdi-hamburger"></i>
                        </div>
                      </div>
                      <div className="preview-item-content d-sm-flex flex-grow">
                        <div className="flex-grow">
                          <h6 className="preview-subject">Popular Dishes</h6>
                        </div>
                      </div>
                      <div className="arrowright">
                        <i className="mdi mdi-chevron-right-circle-outline">
                          {" "}
                        </i>
                      </div>
                    </div>
                    <div className="preview-item  align-items-center">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-primary3">
                          <i className="mdi mdi-room-service-outline"></i>
                        </div>
                      </div>
                      <div className="preview-item-content d-sm-flex flex-grow">
                        <div className="flex-grow">
                          <h6 className="preview-subject">Menus</h6>
                        </div>
                      </div>
                      <div className="arrowright">
                        <i className="mdi mdi-chevron-right-circle-outline">
                          {" "}
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
