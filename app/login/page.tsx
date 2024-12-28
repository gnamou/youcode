import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function LoginPage() {
    const session = await getServerSession(authOptions)

    return(
        <div>
            'r'
        </div>
    )
}