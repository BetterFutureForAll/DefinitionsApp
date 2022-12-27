import React from "react";
import data from '../assets/definitions.json';
const keyFixer = (key) => key.replace(/[ \t]+$/, '').replace(/ /g, "_");;

// export const nestedData = (data) => {
//   let keys = ['dimension', 'component', 'indicator_name']
//   let result = data.reduce((r, o) => {
//     let key;
//     keys.reduce((t, k) => {
//       ({ [k]: key, ...o } = o);
//       if (!t[key]) {
//         key = keyFixer(key);
//         console.log('t:', t, 'key:', key);
//         t[key] = { _: [] };
//         t._.push({ [k]: key, children: t[key]._ });
//         console.log('t._:', t._);
//       }
//       return t[key];
//     }, r)
//       ._
//       .push(o);
//   }, { _: [] })
//     ._;
//   return result;
// };

