import SubscribeForm from "@/components/SubscribeForm";
import Ubicacion from "@/components/Ubicacion";
import Horarios from "@/components/Horarios";
import Nosotros from "@/components/Nosotros";
import Intro from "@/components/Intro";
import Clases from "@/components/Clases";
import Planes from "@/components/Planes";

export default function Home() {
  return (
    <div>
      <main>
        <Intro />
        <Nosotros />
        <Clases />
        <Horarios />
        <Planes />
        <Ubicacion />
        <SubscribeForm />
      </main>
    </div>
  );
}
