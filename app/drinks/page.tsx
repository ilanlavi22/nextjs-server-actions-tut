import DrinkList from "@/components/DrinkList";

const url =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";

const getDrinks = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch drinks");
  }
  const data = await response.json();
  return data.drinks;
};

export default async function DrinksPage() {
  const drinks = await getDrinks();

  return (
    <section className="relative">
      <DrinkList drinks={drinks} />
    </section>
  );
}
