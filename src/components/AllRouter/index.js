import { useRoutes } from "react-router-dom";
import { router } from "../../Router";


function AllRouter(){
    const routes=useRoutes(router);
    return(
        <>
           {routes}
        </>
    )
}
export default AllRouter;