import * as testService from '~/services/testService';
function Following() {
    const handleResult = () => {
        const fetchApi = async () => {
            const result = await testService.getData();
            console.log(result);
        };
        fetchApi();
    };
    return (
        <div>
            <h2>Following Page</h2>
            <button onClick={handleResult} style={{ backgroundColor: 'antiquewhite', width: 100, height: 30 }}>
                Click me
            </button>
        </div>
    );
}

export default Following;
