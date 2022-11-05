import * as React from "react";

import { useAppSelector } from "../../hooks/hooks";
import GS from "../../styles/styles";
import TableInner from "./TableInner";

export const BasicTable = () => {
  const { income, expenses }: any = useAppSelector((state) => state.profile);

  return (
    <GS.Background className="d-flex flex-column justify-content-center align-items-center gap-5">
      <TableInner items={income} type={"income"} />
      <TableInner items={expenses} type={"expenses"} />
    </GS.Background>
  );
};
