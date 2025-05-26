const SlugTitle = (props) => {
  return (
    <div>
      {props.category?.map((item) => (
        <div key={item?.id}>
          {item?.slug === props.text.catSlug && (
            <h1 className="pb-5 text-2xl text-gray-500">{item?.name}</h1>
          )}
        </div>
      ))}
    </div>
  );
};

export default SlugTitle;
