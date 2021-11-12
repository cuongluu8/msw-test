import {createUser, createUserMock} from "./user-service";
import {handler, mockHandler} from "./server-handlers";
import { server } from "./server";
import { graphql } from "msw";


test("testing msw", async () => {
    const res = await createUser();

    expect(res).toEqual({id: "123"});
});

test("testing msw with upfront mock handler", async () => {
    const res = await createUserMock();

    expect(res).toEqual({id: "123"});
    expect(mockHandler).toHaveBeenCalled();
});

test("testing msw with inline mock handler", async () => {
    const mockHandler = jest.fn(handler);
    server.use(graphql.mutation("CreateUserMock", mockHandler));

    const res = await createUserMock();

    expect(res).toEqual({id: "123"});
    expect(mockHandler).toHaveBeenCalled();
});
