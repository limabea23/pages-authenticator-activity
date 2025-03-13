"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/teste");
    }, [router]);

    return (
        <p>Redirecting...</p>
    );
}