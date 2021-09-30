import axios from 'axios';

const Bets = (props) => {
    const bets = props.bets
    return (
        <div>
            <h1>Bets</h1>
            {bets.map(bet => (
                <div key={bet.id}>
                    {bet.name}
                </div>
            ))}
        </div>
    )
}

export async function getServerSideProps(context) {
    // Get external data from the file system, API, DB, etc.
    // const token = context.req.cookies.token
    // if (!token)
    //     return {
    //       redirect: {
    //         destination: '/',
    //         permanent: false,
    //     },
    // }
    // else {
        // const response = await axios.get(`${process.env.API_URL}/api/bets`, { headers: {'Authorization': token}})
        const response = await axios.get(`${process.env.API_URL}/api/bets`)
        const data = response.data

        return {
            props: { bets: data }
        }
    // }
  
}


export default Bets