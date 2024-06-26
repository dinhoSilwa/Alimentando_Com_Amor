"use client";
import clsx from "clsx";
import Paragraph from "@/components/home.collection/paragraph/paragraph";
import ParagraphSection from "@/components/sectionParagraph/sectionParagraph";
import { ZillaFont } from "@/assets/fonts";

export function AboutUsOurHistory() {
  const sectionAboutUs = clsx(
    `flex flex-col gap-6 mt-24 px-5`,
    `max-[200px]:mt-14 md:w-1/2`
  );

 

  return (
    <section className={sectionAboutUs}>
      
      <ParagraphSection title="Quem Somos" border={true}>
      Alimentando com amor é uma associação sem fins lucrativos com mais de 5
        anos de funcionamento. No começo, usávamos um carrinho de mão para
        distribuir marmitas à pessoas em situação de rua, sem nenhum tipo de
        apoio.
      </ParagraphSection>

      <Paragraph>
        Conforme o projeto cresceu, passamos a fornecer um lugar para as pessoas
        tomarem banho e atenderem suas necessidades fisiológicas. Para isto,
        alugamos uma casa que contasse com banheiro externo, e adequamos os
        quartos para virarem dormitórios.
      </Paragraph>

      <Paragraph boldText={true}>
        Hoje, contamos com mais de 25 pessoas atendidas no local, entre
        mulheres, crianças e homens, que contam com alimentação.
      </Paragraph>

      <Paragraph>
        Grande parte dessas pessoas são dependentes químicos que por diversas
        razões se encontram sem apoio familiar ou estão longe de suas famílias.
        Mas também ajudamos pessoas vulneráveis por problemas conjugais ou
        separações.
      </Paragraph>

      <Paragraph>
        Atualmente buscamos uma assessoria de assistência social permanente, bem
        como profissionais de saúde mental e do setor jurídico, para fornecermos
        um apoio social, jurídico e psicológico que seja constante e de
        qualidade.
      </Paragraph>
    </section>
  );
}
