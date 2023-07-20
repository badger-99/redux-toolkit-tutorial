import { ChevronDown, ChevronUp } from '../icons';
import { removeItem, toggleAmount, calculateTotals } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className='amount-btn'
          onClick={(e) => {
            const operation = e.target.id
            dispatch(toggleAmount({ id, operation }));
          }}
        >
          <ChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button
          className='amount-btn'
          onClick={(e) => {
            if (amount === 1) {
              dispatch(removeItem(id))
              return;
            }
            const operation = e.target.id;
            dispatch(toggleAmount({ id, operation }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
