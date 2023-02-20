import Image from "next/image";
import { MapPin } from "phosphor-react";
import * as S from "./styles";

export function BlockCard() {
  return (
    <S.CardContainer>
      <Image
        src={"/blocks/block1.png"}
        alt={"imagem"}
        width={384}
        height={160}
      />
      <S.CardContent>
        <h3>Todo mundo null</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <span>
          <MapPin size={24} color="#E45858" />
          Florianopolis - SC
        </span>
      </S.CardContent>
    </S.CardContainer>
  );
}
