import { useState } from "react";
import { BlockList } from "./components/BlockList";
import { Header } from "./components/Header";
import * as S from "./styles";

type ToggleViewProps = "list" | "map";

export default function Home() {
  const [toggleView, setToggleView] = useState<ToggleViewProps>("list");

  return (
    <div>
      <Header />

      <S.Content>
        <S.Top>
          <h2>Blocos recomendados</h2>
          <S.ToggleView View={toggleView}>
            <S.ToggleButton onClick={() => setToggleView("list")}>
              LISTA
            </S.ToggleButton>
            <S.ToggleButton onClick={() => setToggleView("map")}>
              MAPA
            </S.ToggleButton>
          </S.ToggleView>
        </S.Top>

        <BlockList />
      </S.Content>
    </div>
  );
}
