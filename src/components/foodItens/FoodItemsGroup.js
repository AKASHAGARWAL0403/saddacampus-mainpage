import React , {Fragment} from "react";
import FoodItems from "./footitemsList"
import data from "./../links.json"

var FoodItemsMenu = [];
export default class FoodItem extends React.Component{
    constructor(props)
    {
        super(props);
    }

    componentWillMount(){
        FoodItemsMenu = data.categories.map((res)=>{
            return  <FoodItems ImageLinks={res} />
        })
    }
    render(){
        return(
          <Fragment>  
          {FoodItemsMenu}
          </Fragment>
        )
    }
}