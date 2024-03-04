import Home from "../page/Home"
import LayoutDefault from "../layout/layoutDefault";
import Cart from "../page/Cart";

export const router=[
     {
       path:"/",
       element:<LayoutDefault/>,
       children:[
          {
               path:"/",
               element:<Home/>
          },
          {
              path:"/cart",
              element:<Cart/>
         }
       ]
     }
   
]

