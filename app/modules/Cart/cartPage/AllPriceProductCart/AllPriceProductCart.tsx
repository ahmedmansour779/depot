export type AllPriceProductCartProps = {
  price: number;
  count: number | undefined;
};
export default function AllPriceProductCart(props: AllPriceProductCartProps) {
  const { count, price } = props;

  return (
    <div className="text-hover uppercase text-xs">
      {
        count ?
          <>
            {count * price} $
          </> :
          <>
            {price}$
          </>
      }
    </div>
  );
}
