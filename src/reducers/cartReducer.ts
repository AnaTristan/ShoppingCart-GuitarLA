import { db } from "../data/db";
import { CartItem, Guitar } from "../types";

// Acciones para el Use reducer compuestas por
// type: tipo de accion a realizar
// payload: datos enviados que se necesitan para realizar dicha accion (logica de codigo)

export type CartActions =
  | { type: "add-to-cart"; payload: { item: Guitar } }
  | { type: "remove-from-cart"; payload: { id: Guitar["id"] } }
  | { type: "decrease-quantity"; payload: { id: Guitar["id"] } }
  | { type: "increase-quantity"; payload: { id: Guitar["id"] } }
  | { type: "clear-cart" };

// definicion de estado inicial
// Se define el type del estado inicial, que esn este caso es la data y el carrito

export type CartState = {
  data: Guitar[];
  cart: CartItem[];
};

// se define el estado del carrito inicial

export const initialState: CartState = {
  data: db,
  cart: [],
};

// reducer
// toma dos parametros, el estado y las acciones
// en el estado, le decimos que sera igual a el type e igualamos esto a initial stata pera definir une stado inicial del estado. Ademas esto ayuda con el autocompletado

export const cartReducer = (
  state: CartState = initialState,
  action: CartActions
) => {
  if (action.type === "add-to-cart") {
    return {
      ...state,
    };
  }

  if (action.type === "remove-from-cart") {
    return {
      ...state,
    };
  }

  if (action.type === "decrease-quantity") {
    return {
      ...state,
    };
  }

  if (action.type === "increase-quantity") {
    return {
      ...state,
    };
  }

  if (action.type === "clear-cart") {
    return {
      ...state,
    };
  }

  return state;
};
