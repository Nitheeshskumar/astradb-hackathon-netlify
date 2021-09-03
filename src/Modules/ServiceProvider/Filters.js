import React from 'react'
const SelectField=({label,options})=>{
return  <div class="form-group text-start">
<label htmlFor="filterPrdCty ">{label}</label>
<select
  class=" form-select"
  id="filterPrdCty" >
      {options.map(el=> <option value={el} key={el}
  >{el}</option>)}

</select>
</div>

}

const Filters=()=>{

    return <div class="productFilter">
    <div id="prdfilter">
      <h4 class="d-flex mb-3">
        <span class="text-muted">Filters:</span>
      </h4>
<SelectField options={['All','Medical','Non-Medical']} label="Category:"/>


    </div>
  </div>
}

export default Filters