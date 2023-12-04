import Image from "next/image";

const getDrink = async (id: any) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch a drink");
  }
  const data = await response.json();
  return data.drinks;
};

export default async function SingleDrink({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const drink = await getDrink(id);

  const { strDrink, strDrinkThumb, strInstructions } = drink?.[0];

  return (
    <article className="flex flex-col items-center gap-8 sm:flex-row">
      <Image
        src={strDrinkThumb}
        alt={strDrink}
        width={strDrinkThumb ? 350 : 0}
        height={strDrinkThumb ? 350 : 0}
        priority={true}
        className="w-[80vw] rounded-md border-[1px] border-gray-400 bg-bottom object-cover p-2 sm:w-auto"
      />
      <div>
        <h3 className="text-xl font-bold">{strDrink}</h3>
        <p className="max-w-[350px] py-4 text-sm">
          {(strInstructions && strInstructions) || "No instructions provided"}
        </p>
      </div>
    </article>
  );
}
