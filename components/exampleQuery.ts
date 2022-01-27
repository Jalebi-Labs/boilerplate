import { gql } from "graphql-request";
import { useExampleQueryQuery } from "../schemas/frontend-graphql";

const query = gql`
  query exampleQuery {
    viewer
  }
`

// export function useExampleQuery(){
//   const x = useExampleQueryQuery()
//   x.status === 'success' && x.data.viewer.
// }
