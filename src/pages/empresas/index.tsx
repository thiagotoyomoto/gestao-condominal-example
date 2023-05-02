import { GetServerSidePropsContext } from "next";

import Company from "@/shared/models/Company";
import { useEffect } from "react";
import { useRouter } from "next/router";

type Props = {
    companies: Company[]
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const companies: Company[] = await (await fetch('/api/empresas')).json()
    return {
        props: {
            companies
        }
    };
}

export default function Empresas({ companies }: Props) {
    const router = useRouter();
    
    useEffect(() => {
        router.push(`empresas/${companies[0].id}`)
    });
}

