const ListItems = ({ products }) => {
  const listItems = products.map((p) => (
    <li className={`${p.isFruit ? "text-sky-500" : "text-white"}`} key={p.id}>
      {p.title}
    </li>
  ));

  return (
    <>
      <h4 className="text-white">List of items:</h4>
      <ul className="mt-2 mb-10">{listItems}</ul>
    </>
  );
};

export default ListItems;
