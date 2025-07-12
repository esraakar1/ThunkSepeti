import api from "../../api";
import ActionTypes from "../actionTypes";


// asenkron thunk aksiyonu

// sepetteki ürünleri api dan alıp reducer a haber veriyor
export const getBasket = () => {
    return async (dispatch) => {
     dispatch({ type: ActionTypes.CART_LOADING });

     api
     .get("/cart")
     .then((res) => dispatch({ type:ActionTypes.CART_SUCCESS, payload: res.data }))
     .catch((err) => dispatch({ type: ActionTypes.CART_ERROR, payload: err.message }))
    };
};

// api a yeni ürün ekledikten sonra reducer a haber ver


export const createItem = (product) => async (dispatch) => {
    // 1 sepete eklenecek ürünün bilgilerini belirle
    const newItem = {
        id: product.id,
        category: product.category,
        title: product.title,
        price: product.price,
        photo: product.photo,
        amount: 1,
    };

    // 2- api a spete eklemek için istek at
     api.post("/cart", newItem)

    // 3- istek basarılı olursa reducer a haber ver

    .then(() => dispatch({type: ActionTypes.CREATE_ITEM, payload: newItem}))
    .catch((err) => alert("üzgünüz bir sorun oluştu"));
 };


//  epi daki ürünün miktarını güncelle ve reducer a haber ver 
export const updateItem = (id, newAmount) => async (dispatch) => {
    // api a güncelleme isteği at
    api.patch(`/cart/${id}`, {amount: newAmount})
    // istek başarılı olursa reducer a haber ver
    .then((res) => dispatch({
        type: ActionTypes.UPDATE_ITEM, payload: res.data
    }))
    .catch((err) => alert("Üzgünüz bir sorun oluştu"));
}

// api daki ürünü sildikten sonra reducer a haber gönder
 
export const deleteItem = (id) => async (dispatch) => {
    api
    .delete(`/cart/${id}`)
    .then((res) => dispatch({type: ActionTypes.DELETE_ITEM, payload: id}))
    .catch((err) => alert("Üzgünüz bir sorun oluştu"));
}
