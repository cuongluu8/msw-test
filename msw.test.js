import {createUser, createUserMock} from "./user-service";
import {mockHandler} from "./server-handlers";

test("testing msw", async () => {
    const res = await createUser();

    expect(res).toEqual({id: "123"});
});

test("testing msw with upfront mock handler", async () => {
    const res = await createUserMock();

    expect(res).toEqual({id: "123"});
    expect(mockHandler).toHaveBeenCalled();
});
