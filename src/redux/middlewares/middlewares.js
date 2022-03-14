// Para realizar validaciones del payload
// sigue esta estructura:
// primera funcion puede recibir como parametro el store
// y retorna otra funcion -> para ver el store usar: store.getState()
// la segunda funcion recibe el parametro next que se utiliza para la encadenacion de middlewares
// y devulve otra funcion que recibe como parametro la info del dispatch, es decir,
// un objeto con el action y el payload {action: '', payload: ''}
export const logAction = (store) => (next) => (info) => {
  if (typeof info.payload === 'boolean') {
    console.log('store', store.getState());
    console.log('dispatch', info);
  } else {
    console.log('no es boolean');
  }
  next(info);
};
