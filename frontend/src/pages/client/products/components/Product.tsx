import { useNavigate } from "react-router-dom";

export interface ProductType {
  id: number;
  name: string;
  price: number;
  imagePath: string;
}

export default function Product({ id, name, price, imagePath }: ProductType) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/item/${id}`);
  };

  return (
    <article
      className="bg-surfaceLight dark:bg-surfaceDark p-3 rounded-xl border-2 border-solid border-transparent hover:border-primary focus-within:border-primary duration-300 cursor-pointer"
      onClick={handleNavigate}
    >
      <div className="w-full">
        <img
          src={imagePath}
          alt={name}
          className="w-full aspect-[7/8] object-cover"
        />
      </div>
      <div className="text-textLight1 dark:text-textDark1 mt-1">
        <h2 className="font-bold capitalize text-xl">{name}</h2>
        <p>${price}</p>
      </div>
    </article>
  );
}
