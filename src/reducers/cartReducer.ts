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
  const MIN_ITEMS = 1;
  const MAX_ITEMS = 5;

  if (action.type === "add-to-cart") {
    const itemExists = state.cart.find(
      (guitar) => guitar.id === action.payload.item.id
    );
    let updatedCart: CartItem[] = [];

    if (itemExists) {
      // existe en el carrito

      updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.item.id) {
          if (item.quantity < MAX_ITEMS) {
            return { ...item, quantity: item.quantity++ };
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
    } else {
      const newItem: CartItem = { ...action.payload.item, quantity: 1 };
      updatedCart = [...state.cart, newItem];
    }

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "remove-from-cart") {
    // setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));

    let updatedCart = state.cart.filter(
      (guitar) => guitar.id !== action.payload.id
    );

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "decrease-quantity") {
    const updatedCart = state.cart.map((item) => {
      if (item.id === action.payload.id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "increase-quantity") {
    const updatedCart = state.cart.map((item) => {
      if (item.id === action.payload.id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "clear-cart") {
    return {
      ...state,
      cart: [],
    };
  }

  return state;
};
