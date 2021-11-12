import { gql, GraphQLClient } from "graphql-request";

const graphqlRequest = (query, variables) => {
    const graphQLClient = new GraphQLClient("https://localhost:9091/api/graphql/", {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return graphQLClient.request(query, variables);
};

export const CreateUser = gql`
    mutation CreateUser(
        $name: String
    ) {
        createUser(
            name: $name
        ) {
            id
        }
    }
`;

export const CreateUserMock = gql`
    mutation CreateUserMock(
        $name: String
    ) {
        createUser(
            name: $name
        ) {
            id
        }
    }
`;

export const createUser = () => {
    return graphqlRequest(CreateUser, { var1: "value" });
}

export const createUserMock = () => {
    return graphqlRequest(CreateUserMock, { var1: "value2" });
}
