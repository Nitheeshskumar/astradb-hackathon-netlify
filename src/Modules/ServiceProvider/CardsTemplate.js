import React from 'react'


const CardsTemplate=({item})=>{


    return   <div class="cardTemplate">
    <div class="card mb-4 shadow-sm">
      <img
        class="card-img-top mt-2"
        src={item.productImage}

        alt="Card cap"
        // style="max-height: 200px; max-width: 200px;margin: auto"
      />
      <div class="card-body">
        <h6 class="card-text" > <strong> {item.productName}</strong></h6>
        <p class="card-desc" >{item.productDescription}</p>
        <div class="d-flex justify-content-between align-items-center">
          <span
                    class="text-muted"
                    // style="color:crimson !important"

                  >₹ {item.productPrice}</span>
          <div class="btn-group">
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default CardsTemplate