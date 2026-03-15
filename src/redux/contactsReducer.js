const ADD_CONTACT = "contacts/add";
const REMOVE_CONTACT = "contacts/remove";

export const addContact = ({ name, number }) => ({
  type: ADD_CONTACT,
  payload: {
    id: `${Math.random().toString(16)}`,
    name,
    number,
  },
});

export const removeContact = (id) => ({
  type: REMOVE_CONTACT,
  payload: id,
});

const initialState = [];

export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return [action.payload, ...state];
    case REMOVE_CONTACT:
      return state.filter((c) => c.id !== action.payload);
    default:
      return state;
  }
}
