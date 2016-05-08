// declare module 'd3' {
//   export = d3;
// }

declare namespace d3 {
  export function transition(args:any): Transition<any>;
}

declare module 'd3-extras' {
  export = d3;
}
