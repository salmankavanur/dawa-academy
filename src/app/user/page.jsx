"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function UserPage() {
    const { user, role, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (loading) return;
        if (!user || role !== "user") {
            router.push("/login");
        }
    }, [user, role, loading]);

    if (loading || !user || role !== "user") {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return <div>Welcome User</div>;
}
