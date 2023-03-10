import * as httpRequest from '~/utils/pizzaRequest';
export const getData = async () => {
    try {
        const res = await httpRequest.get('pizzas');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
