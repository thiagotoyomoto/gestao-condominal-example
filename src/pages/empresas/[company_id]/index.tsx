import { useRouter } from "next/router"
import { useEffect } from "react";

export default function CompanyPage() {
    const router = useRouter();

    useEffect(() => {
        router.push('/empresas/1/painel/principal')
    }, [])
}