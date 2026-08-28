import CardSlider from "../../ui/CardSlider/CardSlider";
import { team } from "../../../data/team";

const Team = () => {
  return (
    <main
      id="nosotros"
      className="bg-red-800 text-neutral-900 dark:text-neutral-100 px-4 sm:px-6 py-16 sm:py-20 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center py-10">
          Nuestro Equipo
        </h2>
        <CardSlider items={team} />
      </div>
    </main>
  );
};

export default Team;
