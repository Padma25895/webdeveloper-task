import React from "react";

const OrderSection = () => {
  return (
    <div>
      <div className="row rates">
        <div className="col-xl-8 col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Recent Orders</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th> Customer</th>
                      <th> Order No </th>
                      <th> Amount </th>
                      <th> Status </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src="assets/images/faces/face1.jpg" alt="image" />
                        <span className="pl-2">Henry Klein</span>
                      </td>
                      <td> 02312 </td>
                      <td> $14,500 </td>
                      <td>
                        <div className="badge badge-outline-success">
                          Delivered
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="assets/images/faces/face2.jpg" alt="image" />
                        <span className="pl-2">Estella Bryan</span>
                      </td>
                      <td> 02312 </td>
                      <td> $14,500 </td>
                      <td>
                        <div className="badge badge-outline-danger">
                          Cancelled
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="assets/images/faces/face5.jpg" alt="image" />
                        <span className="pl-2">Lucy Abbott</span>
                      </td>
                      <td> 02312 </td>
                      <td> $14,500 </td>
                      <td>
                        <div className="badge badge-outline-danger">
                          Pending
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="assets/images/faces/face3.jpg" alt="image" />
                        <span className="pl-2">Peter Gill</span>
                      </td>
                      <td> 02312 </td>
                      <td> $14,500 </td>
                      <td>
                        <div className="badge badge-outline-success">
                          Delivered
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="assets/images/faces/face4.jpg" alt="image" />
                        <span className="pl-2">Sallie Reyes</span>
                      </td>
                      <td> 02312 </td>
                      <td> $14,500 </td>
                      <td>
                        <div className="badge badge-outline-success">
                          Delivered
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xl-4 grid-margin stretch-card">
          <div className="card">
            <div className="card-body scrollht">
              <div className="d-flex flex-row justify-content-between">
                <h4 className="card-title">Customer's Feedback</h4>
              </div>
              <div className="preview-list">
                <div className="preview-item1 border-bottom">
                  <div className="preview-thumbnail d-flex align-items-center">
                    <img
                      src="assets/images/faces/face6.jpg"
                      alt="image"
                      className="rounded-circle"
                    />
                    <h6 className="preview-subject">Leonard</h6>
                  </div>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    veritatis quia corrupti vel culpa dicta libero voluptatum
                    voluptatibus commodi qui at laboriosam illum soluta, quis
                    pariatur reprehenderit nemo repudiandae tenetur
                  </p>
                </div>
                <div className="preview-item1 border-bottom">
                  <div className="preview-thumbnail d-flex align-items-center">
                    <img
                      src="assets/images/faces/face8.jpg"
                      alt="image"
                      className="rounded-circle"
                    />
                    <h6 className="preview-subject">Leonard</h6>
                  </div>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    veritatis quia corrupti vel culpa dicta libero
                  </p>
                </div>
                <div className="preview-item1 border-bottom">
                  <div className="preview-thumbnail d-flex align-items-center">
                    <img
                      src="assets/images/faces/face6.jpg"
                      alt="image"
                      className="rounded-circle"
                    />
                    <h6 className="preview-subject">Leonard</h6>
                  </div>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    veritatis quia corrupti vel culpa dicta libero voluptatum
                    voluptatibus commodi qui at
                  </p>
                </div>
                <div className="preview-item1 border-bottom">
                  <div className="preview-thumbnail d-flex align-items-center">
                    <img
                      src="assets/images/faces/face6.jpg"
                      alt="image"
                      className="rounded-circle"
                    />
                    <h6 className="preview-subject">Leonard</h6>
                  </div>
                  <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    veritatis quia corrupti vel culpa dicta libero voluptatum
                    voluptatibus commodi qui at laboriosam illum soluta,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
