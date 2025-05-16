import SubscribeForm from "@/components/SubscribeForm";
import Ubicacion from "@/components/Ubicacion";
import Horarios from "@/components/Horarios";
import Nosotros from "@/components/Nosotros";
import Intro from "@/components/Intro";
import Clases from "@/components/Clases";

export default function Home() {
  return (
    <div>
      <main>
        <Intro />
        <Nosotros />
        <Clases />
        <Horarios />
        <Ubicacion />
        <SubscribeForm />
      </main>
    </div>
  );
}
