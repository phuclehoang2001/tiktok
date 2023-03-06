import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

// export const getData = async () => {
//     try {
//         const res = await httpRequest.get('pizzas');
//         return res.data;
//     } catch (error) {
//         console.log(error);
//     }
// };
