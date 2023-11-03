const RenderCond = ({x, y}) => {

  return <div>
    {x > 5 && <p>X é maior que 5</p>}
      {x > 5 ? <p>X é um numero maior </p>  : <p>X é um numero menor</p>}
        <p>O valor de Y é {y}</p>
  </div>;
};

export default RenderCond;
