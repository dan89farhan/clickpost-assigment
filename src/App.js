import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main">
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          <div className="col-12">
            <div class="card shadow mb-4">
              <div class="card-body text-center">
                <img src="assets/img/logo.png">
                </img>
              </div>
            </div>
            <div class="card shadow mb-4">
              <div class="card-body">
                <p className="text-secondary">Your Order is in transit</p>
                <p className="text-notes">Arriving on July</p>
                <p className="text-links">
                  <i class="fas fa-share mr-2"></i>
                Share the link
                </p>
                <div className="dates">
                  <h4>Monday</h4>
                  <h3>05</h3>
                </div>
                <p className="text-locations">Shipped from mumbai</p>

                <p className="text-status">
                  <i class="fas fa-info mr-2"></i>
                  Status of the package
                  <i class="fas fa-chevron-down mr-2"></i>
                </p>

              </div>
              <div >
                <div class="main-btn d-flex justify-content-between">
                  <button type="button" class="btn btn-default flex-1 view">View Shipment details</button>
                  <button type="button" class="btn btn-primary flex-1 action">Take Action</button>
                </div>
              </div>

            </div>
            <div class="card shadow mb-4">
              <div class="card-body">
                <p className="text-shipping"> <img src="/assets/img/utilities/clock.svg" className="mr-2"></img> Reschedule the delivery</p>
              </div>
            </div>
            <div class="card shadow mb-4">
              <div class="card-body">
                <p className="text-shipping"> <img src="/assets/img/utilities/shipping.svg" className="mr-2"></img> Pick up from the last hub/Courier</p>
              </div>
            </div>
            <div class="card shadow mb-4">
              <div class="card-body">
                <p className="text-shipping"> <img src="/assets/img/utilities/notaification.svg" className="mr-2"></img> Get delivery updates</p>
              </div>
            </div>
            <div class="card shadow mb-4">
              <div class="card-body product">
                <div className="title d-flex justify-content-between">
                  <p>Order Details</p>
                  <p className="link"><i class="fas fa-share mr-2"></i> Share the product</p>
                </div>
                <div className="d-flex justify-content-start">
                  <div className="img">
                    <img src="/assets/img/product/thumb1.png"></img>
                  </div>
                  <div className="content">
                    <p className="title">Pepe jeans</p>
                    <p className="desc">Man Blue Skinny Fid-Rise Clean...</p>
                    <p className="size">Size: 30| QTY: 1</p>
                    <p className="price">Rs 5,845</p>
                  </div>

                </div>
              </div>
            </div>
            <div class="card shadow mb-4">
              <div class="card-body product">
                <div className="title d-flex justify-content-between">
                  <p>You may also like</p>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="img">
                      <img src="/assets/img/product/thumb2.png"></img>
                    </div>
                    <div className="content px-0 py-3">
                      <p className="title">Pepe jeans</p>
                      <p className="desc">Solid Slim Fit Polo T-shirt</p>
                      <p className="price">Rs 5,845</p>
                    </div>
                  </div>
                  <div>
                    <div className="img">
                      <img src="/assets/img/product/thumb3.png"></img>
                    </div>
                    <div className="content px-0 py-3 ">
                      <p className="title">Pepe jeans</p>
                      <p className="desc">Solid Slim Fit Polo T-shirt</p>
                      <p className="price">Rs 5,845</p>
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
}

export default App;
