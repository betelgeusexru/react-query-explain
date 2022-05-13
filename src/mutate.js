import { useMutation } from "react-query";

const query = (id) => fetch(`https://some-server.com/api/people/id=${id}`);

export const useReactQueryMutation = () => {
  return useMutation(query);
};
