import { TYPES } from "../../actions/ShoppingAction";
export const initialState = {
  // 'https://62be3a6bbe8ba3a10d4fb1c5.mockapi.io/api/v1/products'
  /*  products: [
    {
      name: "Leche",
      price: 75000,
      amount: 2,
      img: "https://static.turbosquid.com/Preview/2017/03/01__09_47_53/MilkCarton01.png7330FC04-B8BE-4D21-92F8-B5E1EBCA761FLarge.jpg",
      id: 1,
    },
    {
      name: "Cereal",
      price: 85300,
      amount: 3,
      img: "https://www.customcardboardboxesco.com/media/catalog/category/Cereal_Boxes_2.png",
      id: 2,
    },
    {
      name: "Huevos",
      price: 75000,
      amount: 12,
      img: "https://avicultura.com/wp-content/uploads/2015/10/huevos-12-razones-para-comer-huevos-1.jpg",
      id: 3,
    },
    {
      name: "Carne",
      price: 85300,
      amount: 21,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlpnEWJEmup2xQ2qkIoKUprqOtDqtPbDN087DLcr3pvzeFAvv4JdkGZNWAnkpiXu5cMA&usqp=CAU",
      id: 4,
    },
    {
      name: "Queso",
      price: 75000,
      amount: 8,
      img: "https://media.istockphoto.com/photos/sliced-fresh-white-cheese-picture-id499397632?k=20&m=499397632&s=612x612&w=0&h=djFr560rCvvPKgnPHa_qG-zt6vCV4D5ze1s8iihoTsY=",
      id: 5,
    },
    {
      name: "Arroz",
      price: 85300,
      amount: 9,
      img: "https://thumbs.dreamstime.com/b/bolsa-de-papel-con-arroz-crudo-en-el-fondo-blanco-122194174.jpg",
      id: 6,
    },
    {
      name: "Frijoles",
      price: 85300,
      amount: 32,
      img: "https://img.freepik.com/foto-gratis/frijoles-rojos-bolsa-sobre-fondo-blanco_269410-502.jpg",
      id: 7,
    },
    {
      name: "Lentejas",
      price: 175000,
      amount: 42,
      img: "https://mundo-agricola.com/wp-content/uploads/2021/01/lentejas-bolsa-200-gramos.jpg",
      id: 8,
    },
    {
      name: "Avena",
      price: 85300,
      amount: 56,
      img: "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/10992066_XL1.jpg",
      id: 9,
    },
    {
      name: "Pollo",
      price: 375000,
      amount: 23,
      img: "https://918230.smushcdn.com/2283449/wp-content/uploads/2020/09/maduracion-de-carne-de-pollo.jpg?lossy=1&strip=1&webp=1",
      id: 10,
    },
  ], */
  products: [],
  cart: [],
};
const productsReducer = (state, action) => {
  switch (action.type) {
    case TYPES.READ_ALL_DATA: {
      return {
        ...state,
        products: action.payload.map((data) => data),
      };
    }

    case TYPES.ADD_TO_CART: {
      let newProduct = state.products.find(
        (product) => product.id === action.payload
      );
      const product = () =>
        state.products.map((item) =>
          item.id === newProduct.id && item.amount > 0
            ? { ...item, amount: item.amount - 1 }
            : item
        );

      let itemInCart = state.cart.find((item) => item.id === newProduct.id);

      return itemInCart
        ? {
            ...state,
            products: product(),
            cart: state.cart.map((item) =>
              item.id !== newProduct.id
                ? item
                : item.quantity < item.amount
                ? { ...item, quantity: item.quantity + 1 }
                : { ...item }
            ),
          }
        : {
            ...state,
            products: product(),
            cart: [...state.cart, { ...newProduct, quantity: 1 }],
          };
    }

    case TYPES.REMOVE_TO_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      const product = () =>
        state.products.map((item) =>
          item.id === itemToDelete.id
            ? { ...item, amount: itemToDelete.amount }
            : item
        );
      return {
        ...state,
        products: product(),
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case TYPES.CLEAR_CART: {
      return { ...state, cart: [] };
    }
    case TYPES.DECREASE_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      const product = () =>
        state.products.map((item) =>
          item.id === itemToDelete.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      return itemToDelete.quantity > 1
        ? {
            ...state,
            products: product(),
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            products: product(),
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    default:
      return state;
  }
};
export default productsReducer;
