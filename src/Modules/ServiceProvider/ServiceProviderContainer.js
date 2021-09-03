import React from 'react'
import Filters from './Filters'
import ServiceProviderList from './ServiceProviderList'

const ServiceProviderContainer=()=>{
    return  <div class="products">
    <div class="row">
    <div class="col-md-3 order-md-1 mb-4">

      <Filters />

    </div>
    <div class="col-md-9 order-md-2">
        <ServiceProviderList providerList={[{}]} />
    </div>
  </div>
</div>
}

export default ServiceProviderContainer