import React from 'react'

const ServiceProviderDetail=({details})=>{

    return   <div class="product-details">
    <div class="container">
      <div class="row mb-3">
        <div class="col-sm-4">
          <div class="product-image">
            <div class="view hm-zoom z-depth-2" style={{cursor: 'pointer'}}>
              <img
                src={details.productImage}
                alt={details.productName}
                className="img-fluid rounded"
                style={{"max-height":"200px", "max-width": "200px",margin: "auto"}}
              />
            </div>
            <div class style={{"margin-top":"15px"}}>
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Product Price</h6>
                  </div>
                  <span
                    class="text-muted"
                    // style={{color:"crimson" !important}}
                  >₹ {details.productPrice}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Product Seller</h6>
                  </div>
                  <span
                    class="text-muted"
                    // style="color:crimson !important"
                  >{details.productSeller}</span>
                </li>
              </ul>
              <button class="btn btn-primary" >Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="product-detail">
            <h5 class="product-head">Product Details</h5>
            <table class="table" cellspacing="0" style={{"max-height": "28px"}}>
              <tbody>
                <tr>
                  <th scope="row">Product Name</th>
                  <td>{details.productName}</td>
                </tr>
                <tr>
                  <th scope="row">Product Description</th>
                  <td>{details.productDescription}</td>
                </tr>
                <tr>
                  <th scope="row">Product Category</th>
                  <td>{details.productCategory}</td>
                </tr>
                <tr>
                  <th scope="row">Product Rating</th>
                  <td>
                    <div class="stars-outer">
                      <div class="stars-inner"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>
  </div>
}

export default ServiceProviderDetail