import { readFileSync, writeFileSync } from "fs"
import { xml2json } from "xml-js"
import jsonata from "jsonata"

const xmlOdd: string = readFileSync("./assets/mei/mei-all_compiled.odd", "utf-8")
const jsonOdd: string = xml2json(xmlOdd, { compact: false, spaces: 2,  })
writeFileSync('./dist/mei-all_compiled.odd.json', jsonOdd)
//
//  TO DO:
//  – separate queries that can be done independently:
//    1) text node processing with "$text"
//
//
const odd = JSON.parse(jsonOdd)
const query = readFileSync("./queries/query.jsonata", "utf-8")
console.log(query.slice(2370, 2390))
const result = await jsonata(query).evaluate(odd)
writeFileSync('./dist/mei-all_compiled.schema.json', JSON.stringify(result, null, 1))
