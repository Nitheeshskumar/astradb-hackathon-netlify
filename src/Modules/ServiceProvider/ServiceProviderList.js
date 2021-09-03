import React from 'react'
import CardsTemplate from './CardsTemplate'

const ServiceProviderList=({providerList})=>{
    return     <div class="products">
    <div class="row">
        {providerList.map((item,index)=>
 <div class="col-md-4"
 key={index}>
    <CardsTemplate item={item} />
 </div>

        )}

    </div>
</div>
}
export default ServiceProviderList