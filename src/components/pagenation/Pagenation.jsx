import { useState } from "react";

import { PagenationWrapper } from "./PagenationWrapper";

const Pagenation = ({ number, setcount }) => {
  const num = [];
  for (let index = 1; index <= number; index++) {
    num.push(index);
  }
  const [state, setstate] = useState(1);
  let num2;
  if (num.length < 6) {
    num2 = num.slice(0, num.length);
  } else if (state >= 1 && state <= 3) {
    num2 = num.slice(0, 5);
  } else if (state >= num.length - 3) {
    num2 = num.slice(num.length - 5, num.length);
  } else {
    num2 = num.slice(state - 3, state + 2);
  }
  if (number > 1) {
    return (
      <>
        <PagenationWrapper>
          <h6
            onClick={() => {
              setstate(state === 1 ? state : state - 1);
              setcount(state === 1 ? state : state - 1);
            }}
          >
            {"<<"}
          </h6>
          {num2?.map((e) => (
            <p
              onClick={() => {
                setstate(e);
                setcount(e);
              }}
              key={e}
              className={state === e ? "yes" : ""}
            >
              {e}
            </p>
          ))}
          <h6
            onClick={() => {
              setstate(state === num.length ? state : state + 1);
              setcount(state === num.length ? state : state + 1);
            }}
          >
            {">>"}
          </h6>
        </PagenationWrapper>
      </>
    );
  } else return "";
};

export default Pagenation;
