import client from "./index";

export const getUserList = (payload: object) => {
    const { data }: any = client.get(`/user`, payload);
    return data;
}