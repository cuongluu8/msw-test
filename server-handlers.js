import { graphql } from "msw";

export const handler = (req, res, ctx) => {
  const { var1 } = req.variables;

  return res(
      ctx.data({
        id: "123"
      })
  );
};

export const mockHandler = jest.fn(handler);

export const handlers = [
  graphql.mutation("CreateUser", handler),

  graphql.mutation("CreateUserMock", mockHandler),
];
