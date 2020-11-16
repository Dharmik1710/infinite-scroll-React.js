import React from 'react';
import styled from 'styled-components';

const Loading = styled.div`
@keyframes ldio-z7urmgiausj {
   0% { transform: translate(6px,40px) scale(0); }
  25% { transform: translate(6px,40px) scale(0); }
  50% { transform: translate(6px,40px) scale(1); }
  75% { transform: translate(40px,40px) scale(1); }
 100% { transform: translate(74px,40px) scale(1); }
}
@keyframes ldio-z7urmgiausj-r {
   0% { transform: translate(74px,40px) scale(1): }
 100% { transform: translate(74px,40px) scale(0); }
}
@keyframes ldio-z7urmgiausj-c {
   0% { background: #ffb61e }
  25% { background: #000000 }
  50% { background: #ffb61e }
  75% { background: #000000 }
 100% { background: #ffb61e }
}
.ldio-z7urmgiausj div {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translate(40px,40px) scale(1);
  background: #ffb61e;
  animation: ldio-z7urmgiausj 2s infinite cubic-bezier(0,0.5,0.5,1);
}
.ldio-z7urmgiausj div:nth-child(1) {
  background: #000000;
  transform: translate(74px,40px) scale(1);
  animation: ldio-z7urmgiausj-r 0.5s infinite cubic-bezier(0,0.5,0.5,1), ldio-z7urmgiausj-c 2s infinite step-start;
}.ldio-z7urmgiausj div:nth-child(2) {
  animation-delay: -0.5s;
  background: #ffb61e;
}.ldio-z7urmgiausj div:nth-child(3) {
  animation-delay: -1s;
  background: #000000;
}.ldio-z7urmgiausj div:nth-child(4) {
  animation-delay: -1.5s;
  background: #ffb61e;
}.ldio-z7urmgiausj div:nth-child(5) {
  animation-delay: -2s;
  background: #000000;
}
.loadingio-spinner-ellipsis-5oeb9sam83e {
  width: 75px;
  height: 75px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
}
.ldio-z7urmgiausj {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.75);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-z7urmgiausj div { box-sizing: content-box; }
`;

export const Loader = () => {
    return (
        <Loading>
            <div class="loadingio-spinner-ellipsis-5oeb9sam83e"><div class="ldio-z7urmgiausj">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div></div>
        </Loading>
    )
}