export const AddProducts=(id,item)=>{
    return({
        type:"ADD",
        id:id,
        item:item
    })
}

export const UpdateProducts=(id)=>{
    return({
        type:"UPDATE",
        id:id,
    })
}

export const DownProducts=(id)=>{
    return({
        type:"Down",
        id:id,
    })
}

export const UpProducts=(id)=>{
    return({
        type:"Up",
        id:id,
    })
}

export const del=(id)=>{
    return({
        type:"DELETE",
        id:id,
    })
}

export const delALL=()=>{
    return({
        type:"DELETE_ALL"
    })
}
