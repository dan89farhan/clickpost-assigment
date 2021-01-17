import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    // <div className="App">
    <div className="container-fluid px-0">
      <div className="row no-gutters">
        <div className="col-12">
          <div class="card shadow mb-4">
            <div class="card-body">Basic card</div>
          </div>
          <div class="card shadow mb-4">
            <div class="card-body">
              <h4>Your Order is in transit</h4>
              <h4>Arriving in July</h4>
              <p>Share the link</p>
              <h4>Monday</h4>
              <h4>05</h4>
              <h4>Shipped from mumbai</h4>
              <h4>Status of the package</h4>
              <div class="btn-group">
                <button type="button" class="btn btn-primary">View Shipment details</button>
                <button type="button" class="btn btn-primary">Take Action</button>
              </div>
            </div>
          </div>
          <div class="card shadow mb-4">
            <div class="card-body">
              <h4>Reschedule the delivery</h4>
            </div>
          </div>
          <div class="card shadow mb-4">
            <div class="card-body">
              <h4>Pick up from the last hub/Courier</h4>
            </div>
          </div>
          <div class="card shadow mb-4">
            <div class="card-body">
              <h4>Get delivery updates</h4>
            </div>
          </div>
          <div class="card shadow mb-4">
            <div class="card-body">
              <div className="d-flex justify-content-between">
                <h4>Order Details</h4>
                <h4>Share the product</h4>
              </div>
              <div className="d-flex justify-content-start">
                <h4>IMAGE</h4>
                <div>
                  <h4>Pepe jeans</h4>
                  <h4>Man Blue Skinny Fid-Rise Clean...</h4>
                  <h4>Size: 30| QTY: 1</h4>
                  <h4>Rs 5,845</h4>
                </div>

              </div>
            </div>
          </div>
          <div class="card shadow mb-4">
            <div class="card-body">
              <div className="d-flex justify-content-between">
                <h4>You may also like</h4>
              </div>
              <div className="d-flex justify-content-start">
                <div>
                  IMAGE
                  <h4>Pepe jeans</h4>
                  <h4>Man Blue Skinny Fid-Rise Clean...</h4>
                  <h4>Size: 30| QTY: 1</h4>
                  <h4>Rs 5,845</h4>
                </div>
                <div>
                  IMAGE
                  <h4>Pepe jeans</h4>
                  <h4>Man Blue Skinny Fid-Rise Clean...</h4>
                  <h4>Size: 30| QTY: 1</h4>
                  <h4>Rs 5,845</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default App;
