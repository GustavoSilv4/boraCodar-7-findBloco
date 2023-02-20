import Image from "next/image";
import * as S from "./styles";

import ilustra1 from "@/assets/ilustra01.png";
import ilustra2 from "@/assets/ilustra02.png";
import { MagnifyingGlass, MapPin } from "phosphor-react";

export function Header() {
  return (
    <S.Container>
      <S.HeaderImageLeft>
        <Image
          src={ilustra1}
          alt={"ilustração de fundo da esquerda"}
          width={407}
          height={345}
        />
      </S.HeaderImageLeft>
      <S.Content>
        <span>FIND YOUR BLOCK</span>
        <h1>
          Encontre os <span>melhores blocos</span> de carnaval de 2023
        </h1>

        <S.Form>
          <label>
            <MagnifyingGlass size={24} color="#E45858" />
            <input type="text" placeholder="Pesquise por nome" />
          </label>
          <label>
            <MapPin size={24} color="#E45858" />
            <select name="cityName" id="cityName" required>
              <option disabled selected value="">
                Selecione uma cidade
              </option>
              <option value="rj">Rio de Janeiro</option>
              <option value="sp">São Paulo</option>
              <option value="ba">Bahia</option>
              <option value="sc">Santa Catarina</option>
              <option value="pr">Paraná</option>
              <option value="rs">Rio Grande do Sul</option>
            </select>
          </label>
          <button type="submit">BUSCAR AGORA</button>
        </S.Form>
      </S.Content>
      <S.HeaderImageRight>
        <Image
          src={ilustra2}
          alt={"ilustração de fundo da direita"}
          width={414}
          height={330}
        />
      </S.HeaderImageRight>
    </S.Container>
  );
}
