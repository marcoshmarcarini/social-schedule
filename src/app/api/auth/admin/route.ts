import {auth} from '../../../../../lib/auth'

export default async function Dashboard(){
    const session = await auth()
    if (!session){
        redirect('/login')
    }

    return <pre>{JSON.stringify(session, null, 2)}</pre>
}