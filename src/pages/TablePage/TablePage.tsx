import * as React from "react";

import { useAppSelector } from "../../hooks/hooks";
import GS from "../../styles/styles";
import TableInner from "./TableInner";

export const BasicTable = () => {
  const { income, expenses }: any = useAppSelector((state) => state.profile);

  return (
    <GS.Background
      aItems={"center"}
      fDirection={"column"}
      jContent={"flex-start"}
      gap={"30px"}
    >
      <TableInner items={income} type={"income"} />
      <TableInner items={expenses} type={"expenses"} />
    </GS.Background>
  );
};
