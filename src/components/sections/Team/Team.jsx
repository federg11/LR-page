import CardSlider from "../../ui/CardSlider/CardSlider";
import { team } from "../../../data/team";

const Team = () => {
  return (
    <main
      id="nosotros"
      className="min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-dvh bg-red-800 text-neutral-900 dark:text-neutral-100 p-4 sm:p-6 scroll-mt-20"
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
